// Question #5
const products = [
  {
    name: "เสื้อยืด",
    price: 10,
    quantity: 2,
  },
  {
    name: "กางเกงยีนส์",
    price: 5,
    quantity: 3,
  },
  {
    name: "เสื้อเชิ้ต",
    price: 10,
    quantity: 5,
  },
];

const promotionCode = "";
// เริ่มเขียนโค้ดตรงนี้
function calculateTotalPrice (product,promotion) {
  let total = 0;
  for (let i = 0; i < products.length; i++) {
    total += product[i].price * product[i].quantity;
  }
  if (promotion === "SALE20") {
    return total - (0.2 * total)
  } else if (promotion === "SALE50") {
    return total - (0.5 * total)
  } else {
    return total
  }
}
console.log(calculateTotalPrice(products,promotionCode))