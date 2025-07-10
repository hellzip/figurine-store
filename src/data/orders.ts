export interface Order {
  id: string;
  userId: string;
  transactionId: string;
  date: string;
  items: OrderItem[];
  subtotal: number;
  shippingFee: number;
  shippingType: string;
  total: number;
  shippingAddress: {
    name: string;
    address: string;
    city: string;
    province: string;
  };
}

export interface OrderItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

export const orders: Order[] = [
  {
    id: "1",
    userId: "1",
    transactionId: "TR010",
    date: "2025/07/16",
    items: [
      {
        id: "FG201",
        name: "Plastic Model Jill Frost",
        price: 690000,
        quantity: 2,
      },
      {
        id: "FG302",
        name: "Fukario Costume Party Style",
        price: 720000,
        quantity: 1,
      },
    ],
    subtotal: 2100000,
    shippingFee: 25000,
    shippingType: "Standard Shipping (3-5 days)",
    total: 2125000,
    shippingAddress: {
      name: "Alyssa Caren",
      address: "Mediterrania Condominium, Jln. Kebon Jeruk No. 22",
      city: "Kota Jakarta Barat",
      province: "DKI Jakarta",
    },
  },
  {
    id: "2",
    userId: "2",
    transactionId: "TR056",
    date: "2025/07/19",
    items: [
      {
        id: "FG393",
        name: "Armed Nishikigi Chisato",
        price: 1240000,
        quantity: 1,
      },
      { id: "FG392", name: "Armed Inoue Takina", price: 2149000, quantity: 1 },
    ],
    subtotal: 3389000,
    shippingFee: 0,
    shippingType: "Free Shipping (5-7 days)",
    total: 3389000,
    shippingAddress: {
      name: "Yofi Dairani",
      address: "Mandala Living, Jln. Mandala Utara No.12A",
      city: "Kota Jakarta Barat",
      province: "DKI Jakarta",
    },
  },
  {
    id: "3",
    userId: "3",
    transactionId: "TR034",
    date: "2025/07/18",
    items: [
      { id: "FG421", name: "Doll Snow Miku", price: 1250000, quantity: 1 },
      {
        id: "FG509",
        name: "Dark Outfit Kagamine Hen",
        price: 850000,
        quantity: 2,
      },
      {
        id: "FG970",
        name: "White Dress Nishikagi Chisato",
        price: 2140000,
        quantity: 1,
      },
    ],
    subtotal: 5090000,
    shippingFee: 50000,
    shippingType: "Express Shipping (1-2 days)",
    total: 5140000,
    shippingAddress: {
      name: "Paula Laura",
      address: "Driftwood Residence, Jln. Alam Sutera No. 42",
      city: "Kota Tangerang",
      province: "Banten",
    },
  },
];
