import { useState } from "react";
import Banner from "./components/Banner";
import Header from "./components/Header";
import OurRecipes from "./components/OurRecipes";
import Recipes from "./components/Recipes";
import Sidebar from "./components/Sidebar";


const App = () => {
  const [recipeQueue, setRecipeQueue] = useState([]);
  const [prepareRecipe, setPrepareRecipe] = useState([]);
  const [totalTime, setTotalTime] = useState(0);
  const [totalCalories, setTotalCalories] = useState(0);

  const addRecipeToQueue = recipe => {
    const isExist = recipeQueue.find(previousRecipe => previousRecipe.recipe_id === recipe.recipe_id);
    if (!isExist) {
      
      setRecipeQueue([...recipeQueue, recipe])
    } else {
      alert('Recipe already exists in the queue.')
    }
  }
  
  const handleRemove = id => {
    // find which recipe to remove
    const deleteRecipe = recipeQueue.find(recipe => recipe.recipe_id === id)

    // remove from want to cook table
    const updateQueue = recipeQueue.filter(recipe => recipe.recipe_id !== id)
    setRecipeQueue(updateQueue)
    setPrepareRecipe([...prepareRecipe, deleteRecipe])
  }

  const calulateTimeAndCalories = (time, calorie) => {
    setTotalTime(totalTime + time)
    setTotalCalories(totalCalories + calorie)
  }

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
        <Sidebar
          calulateTimeAndCalories={calulateTimeAndCalories}
          prepareRecipe={prepareRecipe}
          handleRemove={handleRemove}
          recipeQueue={recipeQueue}
          totalTime={totalTime}
          totalCalories={totalCalories}
        ></Sidebar>
      </section>
    </div>
  );
};

export default App;