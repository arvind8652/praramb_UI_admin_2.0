export function debounce<T extends (...args: any[]) => void>(
  func: T,
  delay: number
): (...args: Parameters<T>) => void {
  let timeoutId: NodeJS.Timeout | null = null;

  return (...args: Parameters<T>): void => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
}

export function getUnmatchedObjects({ arr1, arr2, arr1Key, arr2Key }) {
  return arr1.filter(
    (obj1) => !arr2.some((obj2) => obj1[arr1Key] === obj2[arr2Key])
  );
}
