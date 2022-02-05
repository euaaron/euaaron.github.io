export class StorageService {
  private static instance: StorageService;
  private constructor() {}

  public static getInstance(): StorageService {
    if (!StorageService.instance) {
      StorageService.instance = new StorageService();
    }
    return StorageService.instance;
  }

  public getItem(key: string, storageType = "local"): string {
    switch (storageType.toLowerCase()) {
      case "session":
        return sessionStorage.getItem(key) || "";
      default:
        return localStorage.getItem(key) || "";
    }
  }

  public hasStored(key: string, storageType = "local"): boolean {
    const hasData = StorageService.getInstance().getItem(key, storageType);
    return hasData !== "";
  }

  public lastStore(key: string, storageType = "local"): number {
    let lastChecked = 0;
    if (this.hasStored(`${key}_Last`, storageType)) {
      const lastCheck = StorageService.getInstance().getItem(
        `${key}_Last`,
        storageType
      );
      const now = Number(new Date().getUTCHours() + "" + new Date().getUTCMinutes());
      const lastCheckTime = Number(lastCheck);
      lastChecked = now - lastCheckTime;
    }
    return lastChecked;
  }

  public setItem(key: string, value: any, storageType = "local"): void {
    const now = new Date().getUTCHours() + "" + new Date().getUTCMinutes();
    switch (storageType.toLowerCase()) {
      case "session":
        sessionStorage.setItem(key, JSON.stringify(value));
        sessionStorage.setItem(`${key}_Last`, now);
        break;
      default:
        localStorage.setItem(key, JSON.stringify(value));
        localStorage.setItem(`${key}_Last`, now);
    }
  }

  public removeItem(key: string, storageType = "local"): void {
    switch (storageType.toLowerCase()) {
      case "session":
        sessionStorage.removeItem(key);
        sessionStorage.removeItem(`${key}_Last`);
        break;
      default:
        localStorage.removeItem(key);
        localStorage.removeItem(`${key}_Last`);
    }
  }

  public clear(storageType = "local"): void {
    switch (storageType.toLowerCase()) {
      case "session":
        sessionStorage.clear();
        break;
      default:
        localStorage.clear();
    }
  }
}
