export interface IService<T> {
  getInstance(): IService<T>;
  getAll(): Promise<T>;
  getUpdates(): Promise<T>;
}
