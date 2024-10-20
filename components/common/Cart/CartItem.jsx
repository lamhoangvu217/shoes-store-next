// components/CartItem.js

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { useState } from 'react';

const CartItem = ({ item, onQuantityChange }) => {
  const [quantity, setQuantity] = useState(item.quantity);

  const handleQuantityChange = (newQuantity) => {
    setQuantity(newQuantity);
    onQuantityChange(item.id, newQuantity); // Update parent component about the change
  };

  return (
    <Card className="flex items-center justify-between p-4 border rounded-lg shadow-md">
      {/* Product Image */}
      <img
        src={item.imageUrl}
        alt={item.title}
        className="w-24 h-24 object-cover rounded"
      />

      {/* Product Details */}
      <CardContent className="flex flex-col flex-grow px-4">
        <h2 className="text-lg font-semibold">{item.title}</h2>

        {/* Quantity Control */}
        <div className="flex items-center mt-2">
          <Button
            variant="outline"
            onClick={() => handleQuantityChange(Math.max(quantity - 1, 1))}
            className="mr-2"
          >
            -
          </Button>
          <span className="text-lg">{quantity}</span>
          <Button
            variant="outline"
            onClick={() => handleQuantityChange(quantity + 1)}
            className="ml-2"
          >
            +
          </Button>
        </div>
      </CardContent>

      <CardFooter>
        {/* Optionally, you can add a button to remove the item from the cart */}
        {/* <Button variant="solid" className="ml-4">
          Remove
        </Button> */}
      </CardFooter>
    </Card>
  );
};

export default CartItem;
