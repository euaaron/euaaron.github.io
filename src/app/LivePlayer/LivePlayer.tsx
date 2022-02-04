import React, { useEffect } from "react";
import { YoutubeLiveService } from "./services/YoutubeLiveService/YoutubeLiveService";

type LivePlayerState = {
  hasLive: boolean;
  liveStreamUrl: string;
};

export function LivePlayer() {
  const [liveState, setLiveState] = React.useState(false);
  const [liveStreamUrl, setLiveStreamUrl] = React.useState("");

  useEffect(() => {
    YoutubeLiveService.getInstance()
      .getLiveStreams()
      .then(({ isLive, liveStreamUrl }) => {
        setLiveState(isLive);

        if (liveStreamUrl) {
          setLiveStreamUrl(liveStreamUrl);
        }
      });
  }, [liveState]);

  return (
    <>
      {liveState &&
        `
          <h1>Estou em Live</h1>
          <a href="${liveStreamUrl}" target="_blank"><strong>Assista agora!</strong></a>
        `}
      <p>Stream Component</p>
    </>
  );
}
