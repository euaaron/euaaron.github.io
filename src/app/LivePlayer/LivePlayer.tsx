import React from "react";
import { XCircle, Youtube } from "react-feather";
import { Rnd } from "react-rnd";
import { LiveButton, LiveContainer } from "./LivePlayer.style";
import { YoutubeLiveService } from "./services/YoutubeLiveService/YoutubeLiveService";

type LivePlayerState = {
  isClosed: boolean;
  isVisible: boolean;
  liveUrl: string;
};

export class LivePlayer extends React.Component<{}, LivePlayerState> {
  constructor(props: any) {
    super(props);
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
    YoutubeLiveService.getInstance()
      .getLiveStreams()
      .then(({ isLive, liveStreamUrl }) => {
        if (liveStreamUrl) {
          this.setState({
            isVisible: isLive,
          });
          this.setState({
            liveUrl: liveStreamUrl,
          });
        }
      });
  }

  render(): React.ReactNode {
    const { isVisible, liveUrl, isClosed } = this.state;
    return isVisible && !isClosed && liveUrl.includes("embed") ? (
      <Rnd
        default={{
          x: 40,
          y: window.innerHeight / 2 - 200,
          width: 360,
          height: 200,
        }}
        lockAspectRatio={true}
        dragHandleClassName="player-handle"
        bounds="parent"
      >
        <LiveContainer id="live-player" isVisible={isVisible || !isClosed}>
          <div className="player-handle">
            {/* <button className="player-handle" type="button" title="Mover">
                  <Move />
                </button> */}
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
      </Rnd>
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
