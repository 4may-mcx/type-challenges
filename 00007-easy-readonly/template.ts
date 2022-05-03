type MyReadonly<T> = {
  readonly [P in keyof T]: T[P];
};

// js 思路
function readonly(obj) {
  const result = {};

  for (const key in obj) {
    result["readonly " + key] = obj[key];
  }

  return result;
}
