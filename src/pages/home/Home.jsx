import React from 'react';
import Hero from "../../conponents/Hero";
import JoinCommunity from "../../conponents/JoinCommunity";
import Shop from "../shop/Shop";

const Home = () => {
   
  return (
    <div>
       <Hero/>
       <Shop/>
       <JoinCommunity/>
    </div>
  )
}

export default Home