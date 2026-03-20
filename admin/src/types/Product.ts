type Product = {
  name: string;
  description: string;
  images: {
    url: string;
    public_id: string;
  }[];
  price: number;
  discount: number;
  brandId: string;
  categoryId: string;
  countInStock: number;
  rating: number;
  isFeatured: boolean;
};

export default Product