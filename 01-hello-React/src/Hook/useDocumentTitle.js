import React, { useEffect } from "react";

function useDocumentTitle(count) {
  useEffect(() => {
    document.title = `🍰 ${count}`;

    return () => {};
  }, [count]);
  return <div></div>;
}

export default useDocumentTitle;
