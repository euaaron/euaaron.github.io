interface LiveStreamDTO {
  isLive: boolean;
  liveStreamUrl?: string;
}

interface LiveAPIDTO {
  status: boolean;
  url: string;
  error?: {
    status: number;
    message: string;
  };
}

export class YoutubeLiveService {
  private static instance: YoutubeLiveService;
  private liveStream: Promise<LiveStreamDTO>;

  private constructor() {
    this.liveStream = this.loadLiveStream();
  }

  private loadLiveStream(): Promise<LiveStreamDTO> {
    return fetch(`http://localhost:3000/youtube?type=user&id=relbeits`, {
      method: "GET",
    }).then(
      (response) => {
        return response.json().then((data: LiveAPIDTO) => {
          const result: LiveStreamDTO = {
            isLive: data.status,
            liveStreamUrl: data.url,
          }

          if(data.url.includes('watch')) {
            const videoID = data.url.split("=")[1];
            result.liveStreamUrl = `https://www.youtube.com/embed/${videoID}?autoplay=1`;
          }
          return result;
        });
      }
    );
  }

  public static getInstance(): YoutubeLiveService {
    if (!YoutubeLiveService.instance) {
      YoutubeLiveService.instance = new YoutubeLiveService();
    }
    return YoutubeLiveService.instance;
  }

  public getLiveStreams(): Promise<LiveStreamDTO> {
    return this.liveStream;
  }
}
