export const notUndefined = <T>(obj: T | undefined): obj is T => {
  return obj !== undefined;
};
