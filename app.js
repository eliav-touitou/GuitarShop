"use strict";
function ClassicGuitar(manufactureYear, brand, price) {
  this.manufactureYear = manufactureYear;
  this.brand = brand;
  this.price = price;
  this.numberOfStrings = 6;
  this.used = false;
}

const guitar1 = new ClassicGuitar(20, "logo", "electric");
console.log(guitar1);
console.log(guitar1.play());
// function ClassicGuitar(manufactureYear: number, brand: string, price:number): ClassicGuitar

// play(): string ("🎶🎶🎶"). A guitar once played, becomes used and it's price drops by 10%

// getManufactureYear(): number, getBrand(): string and getPrice():number

// setPrice(newPrice: number): void
