export const formatPrice = (number) => {
  return new Intl.NumberFormat("kg-KG", {
    style: "currency",
    currency: "KGS",
  }).format(number);
};

export const getUniqueValues = (data, type) => {
  let unique = data.map((item) => item[type]);
  // console.log(unique);
  // colors is array, so unique is two dimensional array, so need to flat to one dimensional
  if (type === "colors") unique = unique.flat();
  return ["Все", ...new Set(unique)];
};
