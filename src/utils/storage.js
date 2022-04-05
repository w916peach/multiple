export const set = (key, value) => {
  if (!value) {
    value = '{}';
  }
  if (typeof value === 'object') {
    value = JSON.stringify(value);
  }
  localStorage.setItem(key, value);
};

export const get = (key) => {
  const content = localStorage.getItem(key);
  if (!content) {
    return {};
  }
  return JSON.parse(content);
};

export const getLoginInfo = () => get('loginInfo');
export const setLoginInfo = (value) => set('loginInfo', value);
