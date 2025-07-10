"use client";

import { useParams, Navigate } from "react-router-dom";
import { Star, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { products } from "../data/products";

export default function ProductDetail() {
  const { id } = useParams();

  const product = products.find((p) => p.id === id);

  if (!product) {
    return <Navigate to="/products" replace />;
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(price);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* Product Image */}
        <div className="aspect-square overflow-hidden rounded-lg bg-gray-100">
          <img
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Product Details */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
            <p className="text-gray-600">
              By {product.manufacturer} - {product.id}
            </p>
          </div>

          <div className="text-4xl font-bold text-orange-500">
            {formatPrice(product.price)}
          </div>

          {/* Product Info */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="font-medium">Character:</span>
              <Badge variant="secondary">{product.character}</Badge>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-medium">Series:</span>
              <Badge variant="secondary">{product.series}</Badge>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-medium">Category:</span>
              <Badge variant="secondary">{product.category}</Badge>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-medium">Manufacturer:</span>
              <Badge variant="secondary">{product.manufacturer}</Badge>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-medium">Stock:</span>
              <Badge variant="secondary">{product.stock}</Badge>
            </div>
          </div>

          <Button
            size="lg"
            className="w-full md:w-auto"
            disabled={product.stock === 0}
          >
            <ShoppingCart className="w-5 h-5 mr-2" />
            {product.stock === 0 ? "Out of Stock" : "Add to Cart"}
          </Button>

          <div>
            <h3 className="text-xl font-bold mb-3">Product Description</h3>
            <p className="text-gray-700 leading-relaxed">
              {product.description}
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-12">
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Reviews</CardTitle>
          </CardHeader>
          <CardContent>
            {product.reviews.length > 0 ? (
              <div className="space-y-4">
                {product.reviews.map((review) => (
                  <div key={review.id} className="border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-orange-500">
                        {review.author}
                      </span>
                      <span className="text-sm text-gray-500">
                        {review.date}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      {renderStars(review.rating)}
                    </div>
                    <p className="text-gray-700">{review.comment}</p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <span className="text-4xl">😭</span>
                <p className="text-orange-500 mt-2">No Reviews Yet...</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
