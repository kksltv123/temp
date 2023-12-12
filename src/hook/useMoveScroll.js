import { useRef } from "react";

function useMoveScroll(listName) {
  const element = useRef(null);
  const onMoveToElement = () => {
    element.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const name = listName;  
  return { element, onMoveToElement, name };
}

export default useMoveScroll;
