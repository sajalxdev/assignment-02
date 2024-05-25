export interface TProduct {
  name: string;
  description: string;
  price: number;
  category: string;
  tags: string[];
  variants: {
    [key: string]: string;
  };
  inventory: {
    quantity: number;
    inStock: boolean;
  };
}
