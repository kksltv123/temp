import useMoveScroll from "./useMoveScroll";

function useListTabs() {
  const listTabs = {
    0: useMoveScroll("Menu1"),
    1: useMoveScroll("Menu2"),
    2: useMoveScroll("Menu3"),
    3: useMoveScroll("Menu4"),
    length: 4,
  };
  return { listTabs };
}

export default useListTabs;
