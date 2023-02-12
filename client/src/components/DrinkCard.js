import React from 'react'
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion'

import "./DrinkCard.css"
export const DrinkCard = ({ drink }) => {
    let url = "/final/" + JSON.stringify(drink.idDrink);
    let navigate = useNavigate(); 
    return (
      <button className='drinkCards'style={{fontFamily: "", fontSize: 20, color: "#323232"}} onClick={() => 
        navigate(url)}>
            <b>{drink.strDrink}</b> |  Main Ingredient: <b>{drink.strIngredient1}</b> | Glass Type: <b>{drink.strGlass}</b></button>

    )
  
}
