import { LIVE_API } from "../../../../shared/configs/environment";
import { StorageService } from "../../../../shared/configs/services/StorageService";
import { IService } from "../../../../shared/http/services/IService";

export interface LiveStreamDTO {
  isLive: boolean;
  liveStreamUrl: string;
}

interface LiveAPIDTO {
  status: boolean;
  url: string;
  error?: {
    status: number;
    message: string;
  };
}

export class YoutubeLiveService implements IService<LiveStreamDTO> {
  private static instance: YoutubeLiveService;
  private storage: StorageService;
  private liveStream: Promise<LiveStreamDTO>;
  private storageKey = "ytLive";
  private storageType = "session";
  private apiUrl = `${LIVE_API}/youtube?type=user&id=relbeits`;
  private isLive: Boolean = false;

  private constructor() {
    this.storage = StorageService.getInstance();
    this.liveStream = this.loadLiveStream();
  }

  private hasChecked(): boolean {
    return this.storage.hasStored(this.storageKey, this.storageType);
  }

  private lastCheck(): number {
    return this.storage.lastStore(this.storageKey, this.storageType);
  }

  private saveCheck(): void {
    this.storage.setItem(this.storageKey, this.isLive, this.storageType);
  }

  private loadLiveStream(): Promise<LiveStreamDTO> {
    return this.hasChecked() && this.lastCheck() < 10 && this.liveStream
      ? this.liveStream
      : this.getUpdates();
  }

  public async getUpdates(): Promise<LiveStreamDTO> {
    return await fetch(this.apiUrl)
      .then(async (response) => {
        return response.status >= 400
          ? {
              status: false,
              url: this.apiUrl,
              error: {
                status: response.status,
                message: response.statusText,
              },
            }
          : response.json();
      })
      .then((data: LiveAPIDTO) => {
        this.saveCheck();
        const result: LiveStreamDTO = {
          isLive: data.status,
          liveStreamUrl: data.url,
        };
        if (data.url.includes("watch")) {
          const videoID = data.url.split("=")[1];
          result.liveStreamUrl = `https://www.youtube.com/embed/${videoID}?autoplay=1`;
        }
        return result;
      })
      .catch((err) => {
        console.log(err);
        return {
          isLive: false,
          liveStreamUrl: "",
        };
      });
  }

  public getInstance(): IService<LiveStreamDTO> {
    throw new Error("Use the static getInstance() method instead.");
  }

  public static getInstance(): YoutubeLiveService {
    if (!YoutubeLiveService.instance) {
      YoutubeLiveService.instance = new YoutubeLiveService();
    }
    return YoutubeLiveService.instance;
  }

  public getAll(): Promise<LiveStreamDTO> {
    return this.liveStream;
  }
}
