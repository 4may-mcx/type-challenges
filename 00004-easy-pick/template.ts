// extends 类型约束，当 K 为 extends 属于右边类型的子集，则通过
// keyof 获取接口 T 中的属性名称

type MyPick<T, K extends keyof T> = {
  // 执行遍历
  [P in K]: T[P];
};
