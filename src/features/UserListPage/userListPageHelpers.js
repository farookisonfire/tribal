export const capitalize = (name) => {
  return name.charAt(0).toUpperCase() + name.slice(1);
};

export const trimDate = (date) => {
  return date.split(" ")[0];
};

export const filterList = (list, searchString) => {
  return list.filter(user => {
    return user.firstName.includes(searchString) || user.lastName.includes(searchString);
  });
};

export const sortList = (list, sortBy) => {
  return list.sort((a,b) => a[sortBy+"Name"].localeCompare(b[sortBy+"Name"]));
};

export const sortAndFilter = (list, sortBy, searchString) => {
  if(list.length) {
    if(searchString) {
      const filteredList = filterList(list, searchString);
      return sortList(filteredList, sortBy);
    }
    return sortList(list, sortBy);
  }
  return [];
};
