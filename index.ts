type Timeout = ReturnType<typeof setTimeout>;

let timeout: Timeout;

const debounce = (callback: () => void, delay = 1000) => {
  clearTimeout(timeout);
  timeout = setTimeout(() => {
    callback();
  }, delay);
};

export default debounce;
