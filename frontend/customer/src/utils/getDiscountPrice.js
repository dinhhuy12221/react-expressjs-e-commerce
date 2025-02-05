export const getDiscountPrice = (price, discount) => {
    return (price * (100 - discount) / 100).toFixed(2);
}