"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Package } from "lucide-react";
import { orders } from "../data/orders";
import { useAuth } from "../contexts/AuthContext";

export default function OrderHistory() {
  const { user } = useAuth();

  const userOrders = orders.filter((order) => order.userId === user?.id);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(price);
  };

  if (userOrders.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center py-12">
          <Package className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-2">No orders yet</h2>
          <p className="text-gray-600">
            Your order history will appear here once you make a purchase.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Order History</h1>

      <div className="space-y-6">
        {userOrders.map((order) => (
          <Card key={order.id} className="overflow-hidden">
            <CardHeader className="bg-orange-50 border-b">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <CardTitle className="text-lg">
                    Order #{order.transactionId}
                  </CardTitle>
                  <p className="text-sm text-gray-600">
                    Placed on {order.date}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-orange-500">
                    {formatPrice(order.total)}
                  </p>
                  <Badge variant="secondary">Delivered</Badge>
                </div>
              </div>
            </CardHeader>

            <CardContent className="p-6">
              <div className="mb-6">
                <h3 className="font-semibold mb-2">Shipping Address</h3>
                <div className="text-sm text-gray-600">
                  <p className="font-medium">{order.shippingAddress.name}</p>
                  <p>{order.shippingAddress.address}</p>
                  <p>{order.shippingAddress.city}</p>
                  <p>{order.shippingAddress.province}</p>
                </div>
              </div>

              {/* Order Items */}
              <div>
                <h3 className="font-semibold mb-4">Items Ordered</h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-2 px-4 bg-orange-100 rounded-tl-lg">
                          Items
                        </th>
                        <th className="text-center py-2 px-4 bg-orange-100">
                          Unit Price
                        </th>
                        <th className="text-center py-2 px-4 bg-orange-100">
                          Qty
                        </th>
                        <th className="text-right py-2 px-4 bg-orange-100 rounded-tr-lg">
                          Subtotal
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {order.items.map((item) => (
                        <tr key={item.id} className="border-b">
                          <td className="py-3 px-4">
                            <div>
                              <p className="font-medium">{item.id}</p>
                              <p className="text-sm text-gray-600">
                                {item.name}
                              </p>
                            </div>
                          </td>
                          <td className="text-center py-3 px-4">
                            {formatPrice(item.price)}
                          </td>
                          <td className="text-center py-3 px-4">
                            {item.quantity}
                          </td>
                          <td className="text-right py-3 px-4 font-medium">
                            {formatPrice(item.price * item.quantity)}
                          </td>
                        </tr>
                      ))}
                      {/* Subtotal and Shipping rows */}
                      <tr className="border-b">
                        <td
                          colSpan={3}
                          className="py-3 px-4 text-right font-medium"
                        >
                          Subtotal:
                        </td>
                        <td className="text-right py-3 px-4 font-medium">
                          {formatPrice(order.subtotal)}
                        </td>
                      </tr>
                      <tr className="border-b">
                        <td
                          colSpan={3}
                          className="py-3 px-4 text-right font-medium"
                        >
                          Shipping ({order.shippingType}):
                        </td>
                        <td className="text-right py-3 px-4 font-medium">
                          {order.shippingFee === 0
                            ? "Free"
                            : formatPrice(order.shippingFee)}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="mt-4 text-right">
                  <div className="inline-block bg-orange-500 text-white px-6 py-2 rounded-lg">
                    <span className="font-bold">
                      GRAND TOTAL: {formatPrice(order.total)}
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
