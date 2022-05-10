// extends 的本质就是一个个对比过去，如果相同就返回true，否则false
type MyExclude<T, U> = T extends U ? never : T;

// js
function myExclude(T: object | any[], U: object | any[]) {
  const res = [];
  for (const t of T) {
    let flag = false;
    for (const u of U) {
      if (t === u) flag = true;
    }
    if (!flag) res.push(t);
  }
  return res;
}
