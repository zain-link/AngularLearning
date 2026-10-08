import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
interface Product {
name: string;
qty: number;
price: number;
}
@Component({
selector: 'app-root',
imports: [RouterOutlet, CommonModule],
templateUrl: './app.html',
styleUrl: './app.css'
})
export class App {
protected title = 'inventory';
products: Product[] = [];
addProduct (nameInput: HTMLInputElement, qtyInput: HTMLInputElement, priceInput: HTMLInputElement)
{
const name = nameInput.value.trim();
const qty = Number(qtyInput.value);
const price = Number(priceInput.value);
if (name && qty > 0 && price > 0)
{
const newProduct: Product = { name, qty, price };
this.products.push(newProduct);
// form reset
nameInput.value = '';
qtyInput.value = '';
priceInput.value = '';
}
}
}