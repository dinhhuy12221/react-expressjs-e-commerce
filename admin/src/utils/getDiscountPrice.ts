const getDiscountPrice = (price: number, discount: number) => {
    return (price * (100 - discount) / 100);
}
export default getDiscountPrice;
