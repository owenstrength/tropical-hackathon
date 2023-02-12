import {React, useState} from 'react'
import {motion} from 'framer-motion'

import {DrinkCard} from "../components/DrinkCard"
function CocktailSelection() {

    const [isSet, setIsSet] = useState(null)
    const [data, setData] = useState(null)

    const [vodka, setVodka] = useState(null)
    const [rum, setRum] = useState(null)
    const [malibu, setMalibu] = useState(null)
    const [gin, setGin] = useState(null)
    const [all, setAll] = useState(null)

    if (vodka) {
        if (!isSet) {
            fetch("http://localhost:8080/api/Vodka").then((response) => response.json()).then((json) => {setData(json); setIsSet(true)});
            console.log(data)
            console.log(isSet)
        }
    }
    if (rum) {
        if (!isSet) {
            fetch("http://localhost:8080/api/Rum").then((response) => response.json()).then((json) => {setData(json); setIsSet(true)});
            console.log(data)
            console.log(isSet)
        }
    }
    if (gin) {
        if (!isSet) {
            fetch("http://localhost:8080/api/Gin").then((response) => response.json()).then((json) => {setData(json); setIsSet(true)});
            console.log(data)
            console.log(isSet)
        }
    }
    if (malibu) {
        if (!isSet) {
            fetch("http://localhost:8080/api/Amaretto").then((response) => response.json()).then((json) => {setData(json); setIsSet(true)});
            console.log(data)
            console.log(isSet)
        }
    }
    if (all) {
        if (!isSet) {
            fetch("http://localhost:8080/api/All").then((response) => response.json()).then((json) => {setData(json); setIsSet(true)});
            console.log(data)
            console.log(isSet)
        }
    }
    

  return (
    <>
    <motion.div
      className="container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
    >
      <div >
        <h1 style={{fontFamily: "Ragile", fontSize: 40, color: "#323232"}}>Select Your Ingredients</h1>
      </div>
      <button className="button" style={{fontFamily: "Ragile", fontSize: 20, color: "#323232"}} onClick={()=> {setVodka(true); setMalibu(false); setGin(false); setRum(false); setAll(false); setIsSet(false);}}>Vodka</button>
      <button className="button" style={{fontFamily: "Ragile", fontSize: 20, color: "#323232"}} onClick={()=> {setVodka(false); setMalibu(false); setGin(false); setRum(true); setAll(false); setIsSet(false);}}>Rum</button>
      <button className="button" style={{fontFamily: "Ragile", fontSize: 20, color: "#323232"}} onClick={()=> {setVodka(false); setMalibu(true); setGin(false); setRum(false); setAll(false); setIsSet(false);}}>Amaretto</button>
      <button className="button" style={{fontFamily: "Ragile", fontSize: 20, color: "#323232"}} onClick={()=> {setVodka(false); setMalibu(false); setGin(true); setRum(false); setAll(false); setIsSet(false);}}>Gin</button>
      <button className="button" style={{fontFamily: "Ragile", fontSize: 20, color: "#323232"}} onClick={()=> {setVodka(false); setMalibu(false); setGin(false); setRum(false); setAll(true); setIsSet(false);}}>All</button>

      {/*<SearchBar />*/}
      <div className="contianer" style={{overflow: 'auto', height: '100vh', display: 'block', marginLeft: 20,}}>

        { isSet ? (
        (data).map((Drink) => (
            <DrinkCard drink={Drink} />
        ))
        ) : (
            <p/>
        )
        }
        </div>


    {/* ocean */}
    <div className="ocean">
      <div className="wave"></div>
      <div className="wave"></div>
      </div>
    </motion.div>
    {/*<SearchBar />*/}
    
    </>
  );
}

export default CocktailSelection;