export const capitalize = (name) => {
  return name.charAt(0).toUpperCase() + name.slice(1);
};

export const trimDate = (date) => {
  return date.split(" ")[0];
};
