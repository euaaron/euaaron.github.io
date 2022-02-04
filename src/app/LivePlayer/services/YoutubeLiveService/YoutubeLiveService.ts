import axios from "axios";
import cheerio from "cheerio";

interface LiveStreamDTO {
  isLive: boolean;
  liveStreamUrl?: string;
}

export class YoutubeLiveService {
  private static instance: YoutubeLiveService;
  private liveStream: Promise<LiveStreamDTO>;

  private constructor() {
    this.liveStream = this.loadLiveStream();
  }

  private loadLiveStream(): Promise<LiveStreamDTO> {
    const headers = new Headers();
    headers.append("Content-Type", "text/html");

    return axios
      .request({
        method: "GET",
        url: "https://youtube.com/user/relbeits/live",
        headers: {},
      })
      .then((response: any) => {
        const html = JSON.stringify(response.data);
        console.log(html);
        const page = cheerio.load(html);
        const liveStreamUrl = page('link[rel="canonical"]').attr("href");
        const isLive = String(liveStreamUrl).includes("watch");
        return {
          isLive,
          liveStreamUrl,
        };
      });
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
