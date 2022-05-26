export const set = (key, value) => {
  if (!value || !(value instanceof Object)) {
    throw new Error(`value不能为undefined`);
  }
  localStorage.setItem(key, JSON.stringify(value));
};

export const get = (key) => {
  const content = localStorage.getItem(key);
  if (!content) {
    return {};
  }
  return JSON.parse(content);
};

export const getLoginInfo = () => get("loginInfo");
export const setLoginInfo = (value) => set("loginInfo", value);
