export const parse = str => {
  return JSON.parse(str.replace(/\n/g, "").replace(/\r/g, ""));
};
