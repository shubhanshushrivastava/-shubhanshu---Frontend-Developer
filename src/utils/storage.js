export const saveState = (data) => {
  localStorage.setItem("page-structure", JSON.stringify(data));
};

export const loadState = () => {
  const raw = localStorage.getItem("page-structure");
  return raw ? JSON.parse(raw) : null;
};
