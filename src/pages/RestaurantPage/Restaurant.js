import React from 'react'
import Nav from '../../components/Nav'
import RestaurantHeader from './RestaurantHeader'
import Footer from "../../components/Footer"
import ThirdSection from '../../components/ThirdSection'
import './restaurant.css'
import FirstSection from './FirstSection'
import TopSection from './TopSection'
import FilterSection from './FilterSection'
import Items from './Items'
import DeliverySection from './DeliverySection'
import Location from './Location'
import Review from './Review'

function Restaurant() {

  const fries = [
    {
      name: "The clasics for 3",
      description:
        "1 mcchicken, 1 big mark,1 royal cheesburger, 3 royal size french fries, 3 cold drinkf",
      price: "GPB 35.5",
      img: require("../../public/Rectangle 46 (4).png"),
    },
    {
      name: "The clasics for 3",
      description:
        "1 mcchicken, 1 big mark,1 royal cheesburger, 3 royal size french fries, 3 cold drinkf",
      price: "GPB 35.5",
      img: require("../../public/Rectangle 46.png"),
    },
    {
      name: "The clasics for 3",
      description:
        "1 mcchicken, 1 big mark,1 royal cheesburger, 3 royal size french fries, 3 cold drinkf",
      price: "GPB 35.5",
      img: require("../../public/Rectangle 46 (4).png"),
    },
    {
      name: "The clasics for 3",
      description:
        "1 mcchicken, 1 big mark,1 royal cheesburger, 3 royal size french fries, 3 cold drinkf",
      price: "GPB 35.5",
      img: require("../../public/Rectangle 46.png"),
    },
    {
      name: "The clasics for 3",
      description:
        "1 mcchicken, 1 big mark,1 royal cheesburger, 3 royal size french fries, 3 cold drinkf",
      price: "GPB 35.5",
      img: require("../../public/Rectangle 46 (4).png"),
    },
    {
      name: "The clasics for 3",
      description:
        "1 mcchicken, 1 big mark,1 royal cheesburger, 3 royal size french fries, 3 cold drinkf",
      price: "GPB 35.5",
      img: require("../../public/Rectangle 46.png"),
    },
  ];

  const burger = [
    {
      name: "The clasics for 3",
      description:
        "1 mcchicken, 1 big mark,1 royal cheesburger, 3 royal size french fries, 3 cold drinkf",
      price: "GPB 35.5",
      img: require("../../public/Rectangle 46 (5).png"),
    },
    {
      name: "The clasics for 3",
      description:
        "1 mcchicken, 1 big mark,1 royal cheesburger, 3 royal size french fries, 3 cold drinkf",
      price: "GPB 35.5",
      img: require("../../public/Rectangle 46 (5).png"),
    },
    {
      name: "The clasics for 3",
      description:
        "1 mcchicken, 1 big mark,1 royal cheesburger, 3 royal size french fries, 3 cold drinkf",
      price: "GPB 35.5",
      img: require("../../public/Rectangle 46 (5).png"),
    },
    {
      name: "The clasics for 3",
      description:
        "1 mcchicken, 1 big mark,1 royal cheesburger, 3 royal size french fries, 3 cold drinkf",
      price: "GPB 35.5",
      img: require("../../public/Rectangle 46 (5).png"),
    },
    {
      name: "The clasics for 3",
      description:
        "1 mcchicken, 1 big mark,1 royal cheesburger, 3 royal size french fries, 3 cold drinkf",
      price: "GPB 35.5",
      img: require("../../public/Rectangle 46 (5).png"),
    },
    {
      name: "The clasics for 3",
      description:
        "1 mcchicken, 1 big mark,1 royal cheesburger, 3 royal size french fries, 3 cold drinkf",
      price: "GPB 35.5",
      img: require("../../public/Rectangle 46 (5).png"),
    },
  ];

  const drink = [
    {
      name: "The clasics for 3",
      description:
        "1 mcchicken, 1 big mark,1 royal cheesburger, 3 royal size french fries, 3 cold drinkf",
      price: "GPB 35.5",
      img: require("../../public/Rectangle 46 (1).png"),
    },
    {
      name: "The clasics for 3",
      description:
        "1 mcchicken, 1 big mark,1 royal cheesburger, 3 royal size french fries, 3 cold drinkf",
      price: "GPB 35.5",
      img: require("../../public/Rectangle 46 (2).png"),
    },
    {
      name: "The clasics for 3",
      description:
        "1 mcchicken, 1 big mark,1 royal cheesburger, 3 royal size french fries, 3 cold drinkf",
      price: "GPB 35.5",
      img: require("../../public/Rectangle 46 (3).png"),
    },
    {
      name: "The clasics for 3",
      description:
        "1 mcchicken, 1 big mark,1 royal cheesburger, 3 royal size french fries, 3 cold drinkf",
      price: "GPB 35.5",
      img: require("../../public/Rectangle 46 (1).png"),
    },
    {
      name: "The clasics for 3",
      description:
        "1 mcchicken, 1 big mark,1 royal cheesburger, 3 royal size french fries, 3 cold drinkf",
      price: "GPB 35.5",
      img: require("../../public/Rectangle 46 (2).png"),
    },
    {
      name: "The clasics for 3",
      description:
        "1 mcchicken, 1 big mark,1 royal cheesburger, 3 royal size french fries, 3 cold drinkf",
      price: "GPB 35.5",
      img: require("../../public/Rectangle 46 (3).png"),
    },
  ];

  

  return (
    <div>
      <Nav/>
        <RestaurantHeader/>
        <TopSection/>
        <FilterSection/>
        <FirstSection/>
        <Items items={burger} title={"Burgers"}/>
        <Items items={fries} title={"Fries"}/>
        <Items items={drink} title={"Cold drinks"}/>
        <DeliverySection/>
        <Location/>
        <Review/>
        <ThirdSection/>
        <Footer/>
    </div>
  )
}

export default Restaurant
