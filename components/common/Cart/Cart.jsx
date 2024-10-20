"use client"

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle
} from "@/components/ui/sheet"
import { Card, CardContent, CardFooter, CardHeader } from "../../ui/card"
import CartItem from "./CartItem";
import { useState } from "react";
const initialItems = [
  {
    id: '1',
    title: 'Product 1',
    imageUrl: 'https://via.placeholder.com/150',
    quantity: 1,
  },
  {
    id: '2',
    title: 'Product 2',
    imageUrl: 'https://via.placeholder.com/150',
    quantity: 2,
  },
];
export function Cart({ cartOpen }) {
  const [cartItems, setCartItems] = useState(initialItems);
  const handleQuantityChange = (id, newQuantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };
  return (
    <div className="grid grid-cols-2 gap-2">
      <Sheet open={cartOpen}>
        <SheetContent side={"right"}>
          <SheetHeader>
            <SheetTitle>Cart</SheetTitle>
          </SheetHeader>
          <div className="grid gap-4 py-4">
            {cartItems.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                onQuantityChange={handleQuantityChange}
              />
            ))}
          </div>
          <SheetFooter>
            <SheetClose asChild>
              <Button type="submit">Checkout</Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  )
}
