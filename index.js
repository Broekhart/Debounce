let timeout;

const debounce = (callback, delay = 1000) => {
  clearTimeout(timeout);
  timeout = setTimeout(() => {
    callback();
  }, delay);
};

export default debounce;
