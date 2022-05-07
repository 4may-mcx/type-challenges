type TupleToObject<T extends readonly (string | symbol | number)[]> = {
  // 类型世界中的 forof
  [P in T[number]]: P;

  // forin是这么写
  // [P in keyof T]: P;
};

// js
function tupleToObject(tuple) {
  const obj = {};

  tuple.forEach((value) => {
    obj[value] = value;
  });

  return obj;
}
