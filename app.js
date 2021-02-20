"use strict";
function ClassicGuitar(manufactureYear, brand, price) {
  this.manufactureYear = manufactureYear;
  this.brand = brand;
  this.price = price;
  this.numberOfStrings = 6;
  this.used = false;
  this.play = function () {
    this.used = true;
    return (this.price *= 0.9);
  };
  this.getManufactureYear = function () {
    return this.manufactureYear;
  };
  this.getBrand = function () {
    return this.brand;
  };
  this.getPrice = function () {
    return this.price;
  };
}
function detectSound(sound) {
  if (sound === "🎸") {
    return "ElectricGuitar";
  } else if (sound === "🔊") {
    return "BassGuitar";
  }
  return "ClassicGuitar";
}

const guitar1 = new ClassicGuitar(20, "logo", "electric");
console.log(guitar1);
console.log(guitar1.play());
// function ClassicGuitar(manufactureYear: number, brand: string, price:number): ClassicGuitar

// play(): string ("🎶🎶🎶"). A guitar once played, becomes used and it's price drops by 10%

// getManufactureYear(): number, getBrand(): string and getPrice():number

// setPrice(newPrice: number): void
