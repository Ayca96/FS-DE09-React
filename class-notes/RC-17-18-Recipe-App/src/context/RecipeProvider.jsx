//! context alani creat edelim

import axios from "axios";
import { useEffect, useState } from "react";
import { createContext } from "react";

export const RecipeContext=createContext();

const RecipeProvider=({children})=>{

//! login ve privaterouter sayfalarinda gerekli usestat actik.

const [name, setName] = useState(localStorage.getItem("username") || "")
const [password, setPassword] = useState(localStorage.getItem("password") || "")

const APP_ID = "bfbb3efc";
const APP_KEY = "43faeee790f26cd82b28050d3031619d";

//! HOME, HEADER RECIPECARD ICIN GEREKLI OLAN VERILER.


const [recipes,setRecipes]=useState([])
const [query,setQuery]=useState("pie")
const [mealType,setMealType]=useState("Breakfast")

const [loading, setLoading] = useState(false)
const [error, setError] = useState(false)

const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${mealType}`;

const getData= async () =>{

const {data} = await axios.get(url)

setRecipes (data.hits)
console.log(data.hits);
console.log(data);
console.log(recipes);




}




return(

<RecipeContext.Provider value={{name,password,setName,setPassword,setQuery,setMealType,recipes,getData}} >


{children}


</RecipeContext.Provider>


)

}
export default RecipeProvider;