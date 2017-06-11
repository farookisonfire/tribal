export const capitalize = (name) => {
  return name.charAt(0).toUpperCase() + name.slice(1);
};

export const trimDate = (date) => {
  return date.split(" ")[0];
};

export const sortBy = (list, value) => {
  return list.sort(function(a,b) {
    return a[value].localeCompare(b[value]);
  });
};
