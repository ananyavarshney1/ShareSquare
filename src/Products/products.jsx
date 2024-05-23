import React from "react";
import "./products.css";
import bed from "/assets/bed.png"
import bicycle from "/assets/bicycle.png"
// import bicycle from ""
import sofa from "/assets/sofa.png"
import table from "/assets/table.jpg"
// import chair from "../assets/chair.png"
import dumbells from "/assets/dumbells.jpg"
import television from "/assets/television.png"
import treadmill from "/assets/treadmill.png"
import tv from "/assets/tv.jpg"
import speaker from "/assets/speaker.jpg"
import { Link,NavLink } from "react-router-dom"

const images = [
  {
    img:bed,
    title: "Bed",
    connect:"/bed"
  },
  {
    img: bicycle,
    title: "Bicycle",
    connect:"/"
  },
  {
    img: sofa,
    title: "Washing Machine",
    connect:"/wash"
  },
  {
    img: table,
    title: "Table",
    connect:"/"
  },
//   101 103 119 guest launge 121 cafe 108 110 128
  {
    img: television,
    title: "Television",
    connect:"/"
  },
  {
    img: treadmill,
    title: "Treadmill",
    connect:"/"
  },
  {
    img: dumbells,
    title: "Dumbells",
    connect:"/"
  },
  {
    img: speaker,
    title: "Speaker",
    connect:"/"
  }
];

const Products = () => {
  return (
    <div className=" products my-6">
      <div className="mx-16">
        <h1 className="text-center text-3xl font-medium my-10">
          Rent  Products
        </h1>
        <div className="op">
          {images.map((image) => (
            <div key={image.title} className="w-full relative">
            <NavLink className="underline1" to={image.connect}>
            <div className="equipTitle">{image.title}</div>
            <img className="equipImg" src={image.img} alt=""/>
            </NavLink>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
