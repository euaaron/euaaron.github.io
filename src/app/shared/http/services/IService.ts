export interface IService<T> {
  getInstance(): IService<T>;
  getAll(): Promise<T>;
}
