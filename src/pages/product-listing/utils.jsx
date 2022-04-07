const sortedData = (data, sort) => {
  if (sort === 'HIGH_TO_LOW') {
    return data.sort((a, b) => a.discountedPrice - b.discountedPrice);
  }
  if (sort === 'LOW_TO_HIGH') {
    return data.sort((a, b) => b.discountedPrice - a.discountedPrice);
  }
  return data;
};

const filteredData = (data, state) => {
  return data
    .filter((product) => product.rating >= state.rating)
    .filter((product) =>
      state.filterPrice ? product.discountedPrice <= state.filterPrice : true
    )
    .filter((product) =>
      state.categories.length
        ? state.categories.includes(product.categoryName)
        : true
    );
};

export {sortedData,filteredData}
