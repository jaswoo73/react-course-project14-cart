export const getTotal = (cart) => {
  let totalQuantity = 0;
  let totalCost = 0;

  for (let { amount, price } of cart.values()) {
    // const { amount, price } = item;
    totalQuantity += amount;
    totalCost += amount * price;
  }
  return { totalQuantity, totalCost };
};
