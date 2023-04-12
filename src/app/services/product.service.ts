import { Injectable } from '@angular/core';
import { Product } from './../Model/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  product_info: Product[] = [
    {name: "Laptop", price: 50000, stock: 10, owner: "Mehzabin"},
    {name: "Mobile", price: 20000, stock: 27, owner: "Mehzabin"},
    {name: "Tablet", price: 30000, stock: 33, owner: "Mehzabin"},
    {name: "Camera", price: 40000, stock: 41, owner: "Mehzabin"},
    {name: "TV", price: 50000, stock: 50, owner: "Mehzabin"},
  ]
  constructor() { }
  addProduct(productName:string, price:number, stock:number, owner:string):void{
    this.product_info.push({
      name:productName, price:price, stock:stock, owner:owner
    });
  }
  
  getProductList(): Product[]{
    return this.product_info;
  }

  decrementProductStock(productName:string, amount:number):void{
    for(let i=0; i<this.product_info.length; i++){
      if(this.product_info[i].name==productName) {
        this.product_info[i].stock -= amount;
        break;
      }
    }
  }

  removeProdcutList(product:Product){
    for(let i=0;i<this.product_info.length;i++){
      if(this.product_info[i].name=product.name){
        delete this.product_info[i];
        break;
      }
    }
  }

  incrementStock(index: number): void {
    this.product_info[index].stock++;
  }
  decrementStock(index: number): void {
    this.product_info[index].stock--;
  }

  update(originalProductName:string, productName:string, price:number, stock:number, owner:string){
    for(let i=0; i<this.product_info.length; i++){
      if(this.product_info[i].name==originalProductName){
        this.product_info[i].name = productName;
        this.product_info[i].price = price;
        this.product_info[i].stock = stock;
        this.product_info[i].owner = owner;
        return;
      }
    }
    console.log("Invalid credentials! Failed to update data...");
  }


  buy(product: Product, amount:number){
    for(let i=0; i<this.product_info.length; i++){
      if(this.product_info[i]==product){
        this.product_info[i].stock-=amount;
        break;
      }
    }
  }
  
}
