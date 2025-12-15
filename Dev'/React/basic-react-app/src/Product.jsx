import "./Product.css";
import Price from "./Price";

function Product({ title, idx }) {
  let oldPrices = ["12,485", "11, 990", "1599", "599"];
  let newPrices = ["8,999", "9,199", "899", "279"];
  let description = [
    ["8,000 DPI", "5 Programmable Buttons"],
    ["Intuitive Surface", "Designed for iPad Pro"],
    ["Designed for iPad Pro", "Intuitive Surface"],
    ["Wireless", "Optical Orientation"],
  ];
  return (
    <div className="Product" style={{ backgroundColor: "#0A174E" }}>
      <h3>{title}</h3>
      <h4>{description[idx][0]}</h4>
      <p>{description[idx][1]}</p>
      <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]} />
    </div>
  );
}

export default Product;
