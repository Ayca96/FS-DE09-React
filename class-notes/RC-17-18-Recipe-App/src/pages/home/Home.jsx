import React, { useContext } from 'react'
import Header from '../../components/header/Header'
import RecipeCard from "./RecipeCard";
import homeSvg from "../../assets/home.svg"
import { RecipeContext } from '../../context/RecipeProvider';

const Home = () => {
const {recipes}=useContext(RecipeContext)

  return (
    <div>
      <Header />

{recipes.length > 0  ? ( <RecipeCard />): <img src={homeSvg}/>}

      {/* dizi doluysa <RecipeCard /> a git boşsa aşçı resmi */}
     
    </div>
  );
}

export default Home