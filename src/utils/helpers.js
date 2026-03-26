export const calculateTotal = (cart) => {
  return cart.reduce((sum, item) => {
    return sum + item.price * item.quantity;
  }, 0);
};

export const formatPrice = (price) => {
  return `$${price.toFixed(2)}`;
};