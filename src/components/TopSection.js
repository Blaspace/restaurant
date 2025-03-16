import React, { Component, useContext, useEffect, useState } from "react";
import { BsCartCheckFill } from "react-icons/bs";
import {FaMapMarkerAlt} from "react-icons/fa"
import RestaurantContext from "../context/RestaurantContext";
import Cart from "./Cart";

function TopSection() {
  const { cart } = useContext(RestaurantContext);
  const [loading, setLoading] = useState(true);
  const [openCart, setOpenCart] = useState(false);
  const [message, setMessage] = useState();
  const [address, setAddress] = useState({
    street: "",
    city: "",
    state: "",
    country: "",
  });

  useEffect(() => {
    if (
      address.country.length ||
      address.city.length ||
      address.state.length ||
      address.street.length
    ) {
      setLoading(false);
    }
  }, [address]);

  const getLocationString = async (lat, lng) => {
    const apiKey =
      process.env.RAECT_APP_GOOGLE_API_KEY ||
      "AIzaSyCwoSjppYajRChYEkn6joNsZyqLboqAXAU";
    const res = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${apiKey}`
    );
    const data = await res.json();

    const addressCom = data.results[0].address_components;
    const formatedAddressCom = data.results[0].formatted_address;
    const addressInfo = {
      street: "",
      city: "",
      state: "",
      country: "",
    };
    addressCom?.forEach((value) => {
      if (
        value?.types?.includes("street_number") ||
        value?.types?.includes("route")
      ) {
        addressInfo.street = value?.long_name;
      }
      if (value?.types?.includes("locality")) {
        addressInfo.city = value?.long_name;
      }
      if (value?.types?.includes("administrative_area_level_1")) {
        addressInfo.state = value?.long_name;
      }
      if (value?.types?.includes("country")) {
        addressInfo.country = value?.long_name;
      }
    });
    setAddress((prev) => ({ ...prev, ...addressInfo }));
  };

  const getGeolocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          getLocationString(latitude, longitude);
        },
        (erro) => {
          console.log(erro);
          setMessage(erro.message);
        }
      );
    } else {
      setMessage("Could not get location");
    }
  };

  useEffect(() => {
    getGeolocation();
  }, []);

  return (
    <>
    <Cart showCart={openCart} setShowCart={setOpenCart}/>
    <div className="tops-con">
      <div className="tops">
        <p className="top-text">
          Get 5% off your first order, <span>promo ORDER</span>
        </p>
        <section>
          <p>
          <FaMapMarkerAlt size={20}/>  {!loading
              ? `${address.street && address.street + ","} ${
                  address.city && address.city + ","
                } ${address.state && address.state + ","} ${
                  address.country && address.country + ","
                }`
              : "loading address..."}
          </p>
          <article>
            <BsCartCheckFill size={30} color="green" onClick={()=>setOpenCart(true)}/>
            <center>
              <p>{cart.length}</p>
            </center>
          </article>
        </section>
      </div>
    </div>
    </>
  );
}

export default TopSection;
