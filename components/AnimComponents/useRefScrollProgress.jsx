import React, { useLayoutEffect, useState } from "react";

/*
  Takes an optional component ref (or returns a new one)
  and returns the ref, the scroll `start` and `end` percentages
  that are relative to the total document progress.
*/
function useRefScrollProgress(inputRef) {
  const ref = inputRef;
  const [start, setStart] = useState(null);
  const [end, setEnd] = useState(null);
  useLayoutEffect(() => {
    if (!ref.current) {
      return;
    }
    const rect = ref.current.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const offsetTop = rect.top + scrollTop;
    setStart(offsetTop / document.body.clientHeight);
    setEnd((offsetTop + rect.height) / document.body.clientHeight);
  }, [setStart, ref]);
  return { ref, start, end };
}
export default useRefScrollProgress;
