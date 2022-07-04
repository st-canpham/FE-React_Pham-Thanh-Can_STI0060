export const getStorage = (key: string) => {
  const value = localStorage.getItem(key);
  if(value) {
    return JSON.parse(value);
  }
  return null;
};

export const setStorage = (key: string, value: any) => {
  localStorage.setItem(key, JSON.stringify(value));
};
