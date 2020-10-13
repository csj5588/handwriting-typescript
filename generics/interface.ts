// 泛型接口
interface GenericIdentityFn<T> {
  (arg: T): T;
}

// common
interface Generic {
  (arg: string) : void;
}