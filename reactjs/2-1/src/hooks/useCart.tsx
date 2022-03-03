import { createContext, ReactNode, useContext, useState } from 'react';
import { toast } from 'react-toastify';

import { api } from '../services/api';
import { Product, Stock } from '../types';

const CART_LOCAL_STORAGE_KEY = '@RocketShoes:cart';

interface CartProviderProps {
  children: ReactNode;
}

interface UpdateProductAmount {
  productId: number;
  amount: number;
}

interface CartContextData {
  cart: Product[];
  addProduct: (productId: number) => Promise<void>;
  removeProduct: (productId: number) => void;
  updateProductAmount: ({ productId, amount }: UpdateProductAmount) => void;
}

const CartContext = createContext<CartContextData>({} as CartContextData);

export function CartProvider({ children }: CartProviderProps): JSX.Element {
  const [cart, setCart] = useState<Product[]>(() => {
    const storagedCart = localStorage.getItem(CART_LOCAL_STORAGE_KEY);

    if (storagedCart) {
      return JSON.parse(storagedCart);
    }

    return [];
  });

  const addProduct = async (productId: number) => {
    try {
      const isProductInCart = cart.some((product) => {
        return product.id === productId;
      });

      let product: Product;

      if (isProductInCart) {
        product = cart.find((product) => {
          return product.id === productId;
        }) as Product;
      } else {
        const productResponse = await api.get(`/products/${productId}`);
        product = { ...productResponse.data, amount: 0 };
      }

      const stockResponse = await api.get(`/stock/${productId}`);
      const stock: Stock = stockResponse.data;
      const newAmount = product.amount + 1;

      if (newAmount > stock.amount) {
        toast.error('Quantidade solicitada fora de estoque');

        return;
      }

      setCart((prevCart) => {
        let newCart: Product[];

        if (isProductInCart) {
          newCart = prevCart.map((product) => {
            if (product.id === productId) {
              return {
                ...product,
                amount: newAmount,
              };
            }

            return product;
          });
        }

        newCart = [...prevCart, { ...product, amount: newAmount }];

        localStorage.setItem(CART_LOCAL_STORAGE_KEY, JSON.stringify(newCart));

        return newCart;
      });
    } catch {
      toast.error('Erro na adição do produto');
    }
  };

  const removeProduct = (productId: number) => {
    try {
      const isProductInCart = cart.some((product) => {
        return product.id === productId;
      });

      if (!isProductInCart) {
        throw Error;
      }

      setCart((prevCart) => {
        const newCart = prevCart.filter((product) => {
          return product.id !== productId;
        });

        localStorage.setItem(CART_LOCAL_STORAGE_KEY, JSON.stringify(newCart));

        return newCart;
      });
    } catch {
      toast.error('Erro na remoção do produto');
    }
  };

  const updateProductAmount = async ({
    productId,
    amount,
  }: UpdateProductAmount) => {
    try {
      if (amount <= 0) {
        return;
      }

      const stockResponse = await api.get(`/stock/${productId}`);
      const stock: Stock = stockResponse.data;

      if (amount > stock.amount) {
        toast.error('Quantidade solicitada fora de estoque');

        return;
      }

      setCart((prevCart) => {
        const newCart = prevCart.map((product) => {
          if (product.id === productId) {
            return {
              ...product,
              amount,
            };
          }

          return product;
        });

        localStorage.setItem(CART_LOCAL_STORAGE_KEY, JSON.stringify(newCart));

        return newCart;
      });
    } catch {
      toast.error('Erro na alteração de quantidade do produto');
    }
  };

  return (
    <CartContext.Provider
      value={{ cart, addProduct, removeProduct, updateProductAmount }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart(): CartContextData {
  const context = useContext(CartContext);

  return context;
}
