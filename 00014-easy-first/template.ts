// 1. extends 类型条件判断
// type First<T extends any[]> = T extends [] ? never : T[0];
// 2. 获取 tuple 的 length 属性
// type First<T extends any[]> = T['length'] extends 0 ? never : T[0];
// 3. infer 的使用
type First<T extends any[]> = T extends [infer First, ...infer Reset]
  ? First
  : never;

// js
// 1.
// const first = (arr) => arr[0];

// 3.
const first = (arr) => {
  const [first, ...reset] = arr;
  return first || "never";
};
