function useDebounce() {
  let timeout;
  const debounce = (callbackFunction, delay = 1000) => {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(callbackFunction, delay);
  };

  return [debounce];
}

export default useDebounce;

// abc
