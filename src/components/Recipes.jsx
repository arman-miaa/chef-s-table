import { useEffect } from "react";
import { useState } from "react";

const Recipes = ({ addRecipeToQueue }) => {
  const [recipes, setRecipes] = useState([]);
//   console.log(recipes);

  useEffect(() => {
    fetch("recipes.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);

  return (
    <div className="md:w-2/3">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {recipes.map((recipe) => (
          <div key={recipe.recipe_id} className="card bg-base-100  border-2">
            <figure className="px-8 py-6">
              <img
                className="md:h-52 w-full rounded-xl "
                src={recipe.recipe_image}
                alt="recipe image"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-xl text-gray-800 font-semibold">
                {recipe.recipe_name}
              </h2>
              <p className="text-gray-600 text-base">
                {recipe.short_description}
              </p>
              <h3 className="text-xl text-gray-800 font-medium">
                Inqredients: {recipe.ingredients.length}
              </h3>
              <ul className="ml-8">
                {recipe.ingredients.map((item, index) => (
                  <li className="list-disc text-gray-600" key={index}>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex gap-4">
                <div className="flex items-center">
                  <i className="fa-regular fa-clock mr-2 text-2xl"></i>
                  <p>{recipe.preparing_time} minute.</p>
                </div>
                <div className="flex items-center">
                  <i className="fa-solid fa-fire-flame-curved mr-2 text-2xl"></i>
                  <p>{recipe.preparing_time} calorie.</p>
                </div>
              </div>
              <div className="card-actions ">
                <button
                  onClick={() => addRecipeToQueue(recipe)}
                  className="btn bg-green-400 rounded-full px-8 text-xl text-gray-800 mt-6 font-medium"
                >
                  Want To Cook
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recipes;
