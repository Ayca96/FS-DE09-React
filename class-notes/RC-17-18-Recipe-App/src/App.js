import React from "react";
import AppRouter from "./router/AppRouter";
import RecipeProvider from "./context/RecipeProvider";




const App = () => {
 
//! context sayfamiz ile bütün browseri sarmalladik.
   return (
     <RecipeProvider>
     <AppRouter/>
     </RecipeProvider>
   );
   
  
  
};

export default App;


// Bu bir nottur 