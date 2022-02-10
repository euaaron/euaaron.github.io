import React from "react";
import { XCircle, Youtube } from "react-feather";
import { IService } from "../../shared/http/services/IService";
import { ServiceLoader } from "../../shared/http/services/ServiceLoader";
import { LiveButton, LiveContainer } from "./LivePlayer.style";
import { LiveStreamDTO } from "./services/YoutubeLiveService/YoutubeLiveService";

type LivePlayerState = {
  isClosed: boolean;
  isVisible: boolean;
  liveUrl: string;
};

export class LivePlayer extends React.Component<{}, LivePlayerState> {
  private youtube: IService<LiveStreamDTO>;

  constructor(props: any) {
    super(props);
    this.youtube = ServiceLoader.getInstance().getService("youtube");
    this.state = {
      isClosed: false,
      isVisible: false,
      liveUrl: "",
    };
  }

  componentDidMount() {
    this.checkLiveState();
  }

  closePlayer() {
    this.setState({
      isVisible: false,
    });
  }

  checkLiveState() {
    this.youtube
      .getAll()
      .then(({ isLive, liveStreamUrl }) => {
        if (isLive) {
          this.setState({
            isVisible: isLive,
          });
          this.setState({
            liveUrl: liveStreamUrl,
          });
        }
      })
      .catch((err) => {
        this.setState({
          isClosed: true,
        });
      });
  }

  render(): React.ReactNode {
    const { isVisible, liveUrl, isClosed } = this.state;
    return isVisible && !isClosed && liveUrl.includes("embed") ? (
      <LiveContainer
        id="live-player"
        isVisible={isVisible || !isClosed}
        default={{
          x: 40,
          y: 40,
          width: 340,
          height: 190,
        }}
        lockAspectRatio={true}
        dragHandleClassName="player-handle"
        bounds="parent"
      >
        <div className="player-handle">
          <button onClick={() => this.setState({ isClosed: !isClosed })}>
            <XCircle />
          </button>
        </div>
        {isVisible && (
          <iframe
            src={liveUrl + "&controls=0"}
            title="Aaron está online no YouTube"
            frameBorder="0"
          />
        )}
      </LiveContainer>
    ) : isClosed ? (
      <LiveButton onClick={() => this.setState({ isClosed: !isClosed })}>
        <Youtube />
        Ao-vivo
      </LiveButton>
    ) : (
      <></>
    );
  }
}
