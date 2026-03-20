type Product = {
  name: string;
  description: string;
  images: Image[];
  price: number;
  discount: number;
  brandId: string;
  categoryId: string;
  countInStock: number;
  rating: number;
  isFeatured: boolean;
};

type Image = {
    url: string,
    public_id: string,
}

export { Product, Image }