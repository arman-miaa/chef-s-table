import { useState } from "react";
import Banner from "./components/Banner";
import Header from "./components/Header";
import OurRecipes from "./components/OurRecipes";
import Recipes from "./components/Recipes";
import Sidebar from "./components/Sidebar";


const App = () => {
  const [recipeQueue, setRecipeQueue] = useState([]);

  const addRecipeToQueue = recipe => {
    const isExist = recipeQueue.find(previousRecipe => previousRecipe.recipe_id === recipe.recipe_id);
    if (!isExist) {
      
      setRecipeQueue([...recipeQueue, recipe])
    } else {
      alert('Recipe already exists in the queue.')
    }
  }
  console.log(recipeQueue);

  return (
    <div className="container mx-auto px-4">
      {/* Header */}
      <Header></Header>
      {/* Banner */}
      <Banner></Banner>
      {/* Our Recipes Section */}
      <OurRecipes></OurRecipes>
      {/* Recipe Card section */}
      <section className="flex flex-col md:flex-row gap-6">
        {/* Card section */}
        <Recipes addRecipeToQueue={addRecipeToQueue}></Recipes>
        {/* sideber */}
        <Sidebar recipeQueue={recipeQueue}></Sidebar>
      </section>
    </div>
  );
};

export default App;