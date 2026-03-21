type Product = {
  name: string;
  description: string;
  images: Image[];
  price: number;
  discount: number;
  brandId: number;
  categoryId: number;
  countInStock: number;
  rating: number;
  isFeatured: boolean;
};

type Image = {
    url: string,
    public_id: string,
    deleted?: boolean
}

export { Product, Image }