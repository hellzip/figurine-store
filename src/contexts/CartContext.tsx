/* eslint-disable react-refresh/only-export-components */
"use client";

import type React from "react";
import { createContext, useContext, useState, useEffect } from "react";
import { useAuth } from "./AuthContext";

// Import local images
import image1 from "@/assets/images/image-1.png";
import image2 from "@/assets/images/image-2.png";
import image3 from "@/assets/images/image-3.png";
import image4 from "@/assets/images/image-4.png";
import image5 from "@/assets/images/image-5.png";
import image6 from "@/assets/images/image-6.png";
import image7 from "@/assets/images/image-7.png";

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (product: Omit<CartItem, "quantity">) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  total: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

// Pre-populated cart data for each user
const initialCartData: Record<string, CartItem[]> = {
  "1": [
    // Alyssa Caren
    {
      id: "FG201",
      name: "Plastic Model Jill Frost",
      price: 690000,
      quantity: 1,
      image: image3,
    },
    {
      id: "FG509",
      name: "Dark Outfit Kagamine Hen",
      price: 850000,
      quantity: 2,
      image: image6,
    },
  ],
  "2": [
    // Yofi Dairani
    {
      id: "FG970",
      name: "White Dress Nishikagi Chisato",
      price: 2140000,
      quantity: 1,
      image: image1,
    },
    {
      id: "FG392",
      name: "Armed Inoue Takina",
      price: 2149000,
      quantity: 1,
      image: image2,
    },
  ],
  "3": [
    // Paula Laura
    {
      id: "FG421",
      name: "Doll Snow Miku",
      price: 1250000,
      quantity: 1,
      image: image4,
    },
    {
      id: "FG302",
      name: "Fukario Costume Party Style",
      price: 720000,
      quantity: 1,
      image: image7,
    },
  ],
  "4": [
    // Kenji Tanaka
    {
      id: "FG393",
      name: "Armed Nishikigi Chisato",
      price: 1240000,
      quantity: 1,
      image: image5,
    },
    {
      id: "FG201",
      name: "Plastic Model Jill Frost",
      price: 690000,
      quantity: 2,
      image: image3,
    },
  ],
  "5": [
    // Sarah Mitchell
    {
      id: "FG421",
      name: "Doll Snow Miku",
      price: 1250000,
      quantity: 1,
      image: image4,
    },
    {
      id: "FG509",
      name: "Dark Outfit Kagamine Hen",
      price: 850000,
      quantity: 1,
      image: image6,
    },
    {
      id: "FG302",
      name: "Fukario Costume Party Style",
      price: 720000,
      quantity: 1,
      image: image7,
    },
  ],
};

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const { user } = useAuth();

  useEffect(() => {
    if (user?.id) {
      const userCartData = initialCartData[user.id] || [];
      setItems(userCartData);
    } else {
      setItems([]);
    }
  }, [user?.id]);

  const addToCart = (product: Omit<CartItem, "quantity">) => {
    setItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [
        ...prev,
        {
          id: product.id,
          name: product.name,
          price: product.price,
          quantity: 1,
          image: product.image,
        },
      ];
    });
  };

  const removeFromCart = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id);
      return;
    }
    setItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
