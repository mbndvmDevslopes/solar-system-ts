export const minBy = <MinParams>(
  array: MinParams[],
  cb: (element: MinParams) => number | string
): MinParams | undefined => {
  let min: MinParams | undefined = array[0];
  for (let element of array) {
    if (
      min === undefined ||
      (cb(element) !== undefined && cb(element) < cb(min))
    ) {
      min = element;
    }
  }

  return min;
};

export function maxBy<T>(
  array: T[],
  cb: (element: T) => number | string
): T | undefined {
  if (array.length === 0) {
    return undefined;
  }
  let max: T | undefined = array[0];
  for (let element of array) {
    if (max === undefined || cb(element) > cb(max)) {
      max = element;
    }
  }
  return max;
}
