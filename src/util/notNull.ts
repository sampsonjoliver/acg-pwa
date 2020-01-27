export const notNull = <T>(obj: T | null): obj is T => {
  return obj !== null;
};
