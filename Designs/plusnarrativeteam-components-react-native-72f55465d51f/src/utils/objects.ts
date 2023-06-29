export const safelyParse = (jsonString: string) => {
  try {
    return JSON.parse(jsonString);
  } catch {
    return null;
  }
};
export default {
  safelyParse,
};
