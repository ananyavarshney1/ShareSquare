import React from "react";
import "./products.css";
import bed from "../assets/bed.png"
import bicycle from "../assets/bicycle.png"
import sofa from "../assets/sofa.png"
import table from "../assets/table.jpg"
// import chair from "../assets/chair.png"
import dumbells from "../assets/dumbells.jpg"
import television from "../assets/television.png"
import treadmill from "../assets/treadmill.png"
import tv from "../assets/tv.jpg"
import speaker from "../assets/speaker.jpg"
const images = [
  {
    img:bed,
    title: "Bed"
  },
  {
    img: bicycle,
    title: "Bicycle"
  },
  {
    img: sofa,
    title: "Washing Machine"
  },
  {
    img: table,
    title: "Table"
  },
//   101 103 119 guest launge 121 cafe 108 110 128
  {
    img: television,
    title: "Television"
  },
  {
    img: treadmill,
    title: "Treadmill"
  },
  {
    img: dumbells,
    title: "Dumbells"
  },
  {
    img: speaker,
    title: "Speaker"
  }
];

const Products = () => {
  return (
    <div className=" products my-6">
      <div className="mx-16">
        <h1 className="text-center text-3xl font-medium my-10">
          Sell New & Used Products
        </h1>
        <div className="op">
          {images.map((image) => (
            <div key={image.title} className="w-full relative">
              <h1 className="equipTitle">{image.title}</h1>
              <img className="equipImg" src={image.img} alt=""/>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
