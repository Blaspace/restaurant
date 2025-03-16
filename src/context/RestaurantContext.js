import React, {createContext, useState} from 'react'

const RestaurantContext = createContext()


export function RestaurantProvider({children}) {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cartItem")) || []
  );

const restaurants = [
    {
    name: "McDonald's East London",
    location: {},
    state: "South London",
    phoneNumber: "+234 792 8292 677",
    website: "https://www.McDonald.com",
    photo: "String",
    coverPhoto: "String",
    menu: ["burger", "drink", "fries"]
},
{
    name: "Papa John's",
    location: {},
    state: "South London",
    phoneNumber: "+234 792 8292 677",
    website: "https://www.PapaJohn.com",
    photo: "String",
    coverPhoto: "String",
    menu: ["pizza", "soup", "fries"]
},
{
    name: "KFC West London",
    location: {},
    state: "West London",
    phoneNumber: "+234 792 8292 677",
    website: "https://www.KFC.com",
    photo: "String",
    coverPhoto: "String",
    menu: ["salad", "soup", "fries"]
},
{
    name: "Texas Chicken",
    location: {},
    state: "South London",
    phoneNumber: "+234 792 8292 677",
    website: "https://www.TexasChicken.com",
    photo: "String",
    coverPhoto: "String",
    menu: ["salad", "drink", "fries"]

},
{
    name: "Burgger King",
    location: {},
    state: "South London",
    phoneNumber: "+234 792 8292 677",
    website: "https://www.BurggerKing.com",
    photo: "String",
    coverPhoto: "String",
    menu: ["burger", "drink", "fries"]
},
{
    name: "Shaurma1",
    location: {},
    state: "South London",
    phoneNumber: "+234 792 8292 677",
    website: "https://www.Shaurma1.com",
    photo: "String",
    coverPhoto: "String",
    menu: ["pizza", "breaffast", "salad"]

},
]
const items = [
  {
    name: "fries clasics for 3",
    category: "fries",
    description:
      "1 mcchicken, 1 big mark,1 royal cheesburger, 3 royal size french fries, 3 cold drinkf",
    price: 100,
    img: require("../public/Rectangle 46 (4).png"),
  },
  {
    name: "fries clasics for 2",
    category: "fries",
    description:
      "1 mcchicken, 1 big mark,1 royal cheesburger, 3 royal size french fries, 3 cold drinkf",
    price: 65,
    img: require("../public/Rectangle 46.png"),
  },
  {
    name: "fries clasics for 1",
    category: "fries",
    description:
      "1 mcchicken, 1 big mark,1 royal cheesburger, 3 royal size french fries, 3 cold drinkf",
    price: 30,
    img: require("../public/Rectangle 46 (4).png"),
  },
  {
    name: "fries pro for 3",
    category: "fries",
    description:
      "1 mcchicken, 1 big mark,1 royal cheesburger, 3 royal size french fries, 3 cold drinkf",
    price: 150,
    img: require("../public/Rectangle 46.png"),
  },
  {
    name: "fries pro for 2",
    category: "fries",
    description:
      "1 mcchicken, 1 big mark,1 royal cheesburger, 3 royal size french fries, 3 cold drinkf",
    price: 100,
    img: require("../public/Rectangle 46 (4).png"),
  },
  {
    name: "fries pro for 1",
    category: "fries",
    description:
      "1 mcchicken, 1 big mark,1 royal cheesburger, 3 royal size french fries, 3 cold drinkf",
    price: 50,
    img: require("../public/Rectangle 46.png"),
  },
  {
    name: "burger clasics for 3",
    category: "burger",
    description:
      "1 mcchicken, 1 big mark,1 royal cheesburger, 3 royal size french fries, 3 cold drinkf",
    price: 100,
    img: require("../public/Rectangle 46 (5).png"),
  },
  {
    name: "burger clasics for 2",
    category: "burger",
    description:
      "1 mcchicken, 1 big mark,1 royal cheesburger, 3 royal size french fries, 3 cold drinkf",
    price: 65,
    img: require("../public/Rectangle 46 (5).png"),
  },
  {
    name: "burger clasics for 1",
    category: "burger",
    description:
      "1 mcchicken, 1 big mark,1 royal cheesburger, 3 royal size french fries, 3 cold drinkf",
    price: 30,
    img: require("../public/Rectangle 46 (5).png"),
  },
  {
    name: "burger pro for 3",
    category: "burger",
    description:
      "1 mcchicken, 1 big mark,1 royal cheesburger, 3 royal size french fries, 3 cold drinkf",
    price: 150,
    img: require("../public/Rectangle 46 (5).png"),
  },
  {
    name: "burger pro for 2",
    category: "burger",
    description:
      "1 mcchicken, 1 big mark,1 royal cheesburger, 3 royal size french fries, 3 cold drinkf",
    price: 100,
    img: require("../public/Rectangle 46 (5).png"),
  },
  {
    name: "burger pro for 1",
    category: "burger",
    description:
      "1 mcchicken, 1 big mark,1 royal cheesburger, 3 royal size french fries, 3 cold drinkf",
    price: 50,
    img: require("../public/Rectangle 46 (5).png"),
  },
  {
    name: "drink pro for 3",
    category: "drink",
    description:
      "1 mcchicken, 1 big mark,1 royal cheesburger, 3 royal size french fries, 3 cold drinkf",
    price: 150,
    img: require("../public/Rectangle 46 (1).png"),
  },
  {
    name: "drink pro for 2",
    category: "drink",
    description:
      "1 mcchicken, 1 big mark,1 royal cheesburger, 3 royal size french fries, 3 cold drinkf",
    price: 100,
    img: require("../public/Rectangle 46 (2).png"),
  },
  {
    name: "drink pro for 1",
    category: "drink",
    description:
      "1 mcchicken, 1 big mark,1 royal cheesburger, 3 royal size french fries, 3 cold drinkf",
    price: 50,
    img: require("../public/Rectangle 46 (3).png"),
  },
  {
    name: "drink clasics for 3",
    category: "drink",
    description:
      "1 mcchicken, 1 big mark,1 royal cheesburger, 3 royal size french fries, 3 cold drinkf",
    price: 100,
    img: require("../public/Rectangle 46 (1).png"),
  },
  {
    name: "drink clasics for 2",
    category: "drink",
    description:
      "1 mcchicken, 1 big mark,1 royal cheesburger, 3 royal size french fries, 3 cold drinkf",
    price: 65,
    img: require("../public/Rectangle 46 (2).png"),
  },
  {
    name: "drink clasics for 1",
    category: "drink",
    description:
      "1 mcchicken, 1 big mark,1 royal cheesburger, 3 royal size french fries, 3 cold drinkf",
    price: 30,
    img: require("../public/Rectangle 46 (3).png"),
  },
  {
    name: "salad clasics for 3",
    category: "salad",
    description:
      "1 mcchicken, 1 big mark,1 royal cheesburger, 3 royal size french fries, 3 cold drinkf",
    price: 100,
    img: require("../public/Rectangle 15.png"),
  },
  {
    name: "salad clasics for 2",
    category: "salad",
    description:
      "1 mcchicken, 1 big mark,1 royal cheesburger, 3 royal size french fries, 3 cold drinkf",
    price: 65,
    img: require("../public/Rectangle 15.png"),
  },
  {
    name: "salad clasics for 1",
    category: "salad",
    description:
      "1 mcchicken, 1 big mark,1 royal cheesburger, 3 royal size french fries, 3 cold drinkf",
    price: 30,
    img: require("../public/Rectangle 15.png"),
  },
  {
    name: "salad pro for 3",
    category: "salad",
    description:
      "1 mcchicken, 1 big mark,1 royal cheesburger, 3 royal size french fries, 3 cold drinkf",
    price: 150,
    img: require("../public/Rectangle 15.png"),
  },
  {
    name: "salad pro for 2",
    category: "salad",
    description:
      "1 mcchicken, 1 big mark,1 royal cheesburger, 3 royal size french fries, 3 cold drinkf",
    price: 100,
    img: require("../public/Rectangle 15.png"),
  },
  {
    name: "salad pro for 1",
    category: "salad",
    description:
      "1 mcchicken, 1 big mark,1 royal cheesburger, 3 royal size french fries, 3 cold drinkf",
    price: 50,
    img: require("../public/Rectangle 15.png"),
  },
  {
    name: "pizza clasics for 3",
    category: "pizza",
    description:
      "1 mcchicken, 1 big mark,1 royal cheesburger, 3 royal size french fries, 3 cold drinkf",
    price: 100,
    img: require("../public/Rectangle 19.png"),
  },
  {
    name: "pizza clasics for 2",
    category: "pizza",
    description:
      "1 mcchicken, 1 big mark,1 royal cheesburger, 3 royal size french fries, 3 cold drinkf",
    price: 65,
    img: require("../public/Rectangle 19.png"),
  },
  {
    name: "pizza clasics for 1",
    category: "pizza",
    description:
      "1 mcchicken, 1 big mark,1 royal cheesburger, 3 royal size french fries, 3 cold drinkf",
    price: 30,
    img: require("../public/Rectangle 19.png"),
  },
  {
    name: "pizza pro for 3",
    category: "pizza",
    description:
      "1 mcchicken, 1 big mark,1 royal cheesburger, 3 royal size french fries, 3 cold drinkf",
    price: 150,
    img: require("../public/Rectangle 19.png"),
  },
  {
    name: "pizza pro for 2",
    category: "pizza",
    description:
      "1 mcchicken, 1 big mark,1 royal cheesburger, 3 royal size french fries, 3 cold drinkf",
    price: 100,
    img: require("../public/Rectangle 19.png"),
  },
  {
    name: "pizza pro for 1",
    category: "pizza",
    description:
      "1 mcchicken, 1 big mark,1 royal cheesburger, 3 royal size french fries, 3 cold drinkf",
    price: 50,
    img: require("../public/Rectangle 19.png"),
  },
  {
    name: "pasta clasics for 3",
    category: "pasta",
    description:
      "1 mcchicken, 1 big mark,1 royal cheesburger, 3 royal size french fries, 3 cold drinkf",
    price: 100,
    img: require("../public/Rectangle 17.png"),
  },
  {
    name: "pasta clasics for 2",
    category: "pasta",
    description:
      "1 mcchicken, 1 big mark,1 royal cheesburger, 3 royal size french fries, 3 cold drinkf",
    price: 65,
    img: require("../public/Rectangle 17.png"),
  },
  {
    name: "pasta clasics for 1",
    category: "pasta",
    description:
      "1 mcchicken, 1 big mark,1 royal cheesburger, 3 royal size french fries, 3 cold drinkf",
    price: 30,
    img: require("../public/Rectangle 17.png"),
  },
  {
    name: "pasta pro for 3",
    category: "pasta",
    description:
      "1 mcchicken, 1 big mark,1 royal cheesburger, 3 royal size french fries, 3 cold drinkf",
    price: 150,
    img: require("../public/Rectangle 17.png"),
  },
  {
    name: "pasta pro for 2",
    category: "pasta",
    description:
      "1 mcchicken, 1 big mark,1 royal cheesburger, 3 royal size french fries, 3 cold drinkf",
    price: 100,
    img: require("../public/Rectangle 17.png"),
  },
  {
    name: "pasta pro for 1",
    category: "pasta",
    description:
      "1 mcchicken, 1 big mark,1 royal cheesburger, 3 royal size french fries, 3 cold drinkf",
    price: 50,
    img: require("../public/Rectangle 17.png"),
  },
  {
    name: "breakfast clasics for 3",
    category: "breakfast",
    description:
      "1 mcchicken, 1 big mark,1 royal cheesburger, 3 royal size french fries, 3 cold drinkf",
    price: 100,
    img: require("../public/Rectangle 21.png"),
  },
  {
    name: "breakfast clasics for 2",
    category: "breakfast",
    description:
      "1 mcchicken, 1 big mark,1 royal cheesburger, 3 royal size french fries, 3 cold drinkf",
    price: 65,
    img: require("../public/Rectangle 21.png"),
  },
  {
    name: "breakfast clasics for 1",
    category: "breakfast",
    description:
      "1 mcchicken, 1 big mark,1 royal cheesburger, 3 royal size french fries, 3 cold drinkf",
    price: 30,
    img: require("../public/Rectangle 21.png"),
  },
  {
    name: "breakfast pro for 3",
    category: "breakfast",
    description:
      "1 mcchicken, 1 big mark,1 royal cheesburger, 3 royal size french fries, 3 cold drinkf",
    price: 150,
    img: require("../public/Rectangle 21.png"),
  },
  {
    name: "breakfast pro for 2",
    category: "breakfast",
    description:
      "1 mcchicken, 1 big mark,1 royal cheesburger, 3 royal size french fries, 3 cold drinkf",
    price: 100,
    img: require("../public/Rectangle 21.png"),
  },
  {
    name: "breakfast pro for 1",
    category: "breakfast",
    description:
      "1 mcchicken, 1 big mark,1 royal cheesburger, 3 royal size french fries, 3 cold drinkf",
    price: 50,
    img: require("../public/Rectangle 21.png"),
  },
  {
    name: "soup clasics for 3",
    category: "soup",
    description:
      "1 mcchicken, 1 big mark,1 royal cheesburger, 3 royal size french fries, 3 cold drinkf",
    price: 100,
    img: require("../public/Rectangle 23.png"),
  },
  {
    name: "soup clasics for 2",
    category: "soup",
    description:
      "1 mcchicken, 1 big mark,1 royal cheesburger, 3 royal size french fries, 3 cold drinkf",
    price: 65,
    img: require("../public/Rectangle 23.png"),
  },
  {
    name: "soup clasics for 1",
    category: "soup",
    description:
      "1 mcchicken, 1 big mark,1 royal cheesburger, 3 royal size french fries, 3 cold drinkf",
    price: 30,
    img: require("../public/Rectangle 23.png"),
  },
  {
    name: "soup pro for 3",
    category: "soup",
    description:
      "1 mcchicken, 1 big mark,1 royal cheesburger, 3 royal size french fries, 3 cold drinkf",
    price: 150,
    img: require("../public/Rectangle 23.png"),
  },
  {
    name: "soup pro for 2",
    category: "soup",
    description:
      "1 mcchicken, 1 big mark,1 royal cheesburger, 3 royal size french fries, 3 cold drinkf",
    price: 100,
    img: require("../public/Rectangle 23.png"),
  },
  {
    name: "soup pro for 1",
    category: "soup",
    description:
      "1 mcchicken, 1 big mark,1 royal cheesburger, 3 royal size french fries, 3 cold drinkf",
    price: 50,
    img: require("../public/Rectangle 23.png"),
  },
];
  return (
    <RestaurantContext.Provider value={{restaurants, items, cart, setCart}}>
      {children}
    </RestaurantContext.Provider>
  )
}

export default RestaurantContext
