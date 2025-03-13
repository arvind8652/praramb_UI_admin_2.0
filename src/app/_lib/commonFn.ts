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

export function formatDate(date: Date): string {
  const day: string = String(date.getDate()).padStart(2, "0"); // Ensure 2-digit day
  const month: string = String(date.getMonth() + 1).padStart(2, "0"); // Month is zero-based
  const year: number = date.getFullYear();

  return `${day}-${month}-${year}`;
}

export function parseDate(dateString: string): Date | null {
  const parts = dateString.split("-");
  if (parts.length !== 3) return null; // Validate format

  const day = parseInt(parts[0], 10);
  const month = parseInt(parts[1], 10) - 1; // Month is zero-based in JS
  const year = parseInt(parts[2], 10);

  const date = new Date(year, month, day);

  // Validate that the constructed date is correct
  if (
    date.getFullYear() === year &&
    date.getMonth() === month &&
    date.getDate() === day
  ) {
    return date;
  }

  return null; // Invalid date (e.g., 32-01-2024)
}
