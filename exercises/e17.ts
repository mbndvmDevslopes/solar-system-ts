export const minBy = <MinParams>(
  array: MinParams[],
  cb: (element: MinParams) => number
): MinParams | undefined => {
  if (array.length === 0) {
    return undefined;
  }
  let min: MinParams = array[0];
  for (let element of array) {
    if (cb(element) < cb(min)) {
      min = element;
    }
  }
  return min;
};

export function maxBy(array, cb) {
  let max = array[0];
  for (let element of array) {
    if (cb(element) > cb(max)) {
      max = element;
    }
  }
  return max;
}
