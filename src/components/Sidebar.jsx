const Sidebar = ({ recipeQueue, handleRemove, prepareRecipe,calulateTimeAndCalories,totalTime, totalCalories }) => {
  console.log(recipeQueue);
  return (
    <div className="md:w-1/3 border-2 rounded-2xl text-gray-600 p-2 bg-base-100">
      {/* Want to cook title */}
      <div className="overflow-x-auto">
        <h2 className="border-b-2 mx-auto font-semibold text-2xl text-gray-800 text-center pb-2">
          Want To Cook: {recipeQueue.length}
        </h2>
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
              {/* <th>Button</th> */}
            </tr>
          </thead>
          <tbody>
            {recipeQueue.map((recipe, index) => (
              <tr className="hover" key={index}>
                <th>{index + 1}</th>
                <td>{recipe.recipe_name}</td>
                <td>{recipe.preparing_time}</td>
                <td>{recipe.calories}</td>
                <td>
                  <button
                    onClick={() => {
                      handleRemove(recipe.recipe_id);
                      calulateTimeAndCalories(
                        recipe.preparing_time,
                        recipe.calories
                      );
                    }}
                    className=" bg-green-400 rounded-full px-2 md:px-6 py-2  my-2  text-gray-800 mt-6 font-medium"
                  >
                    Preparing
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Currently cooking table */}
      <div className="overflow-x-auto mt-8">
        <h2 className="border-b-2 mx-auto font-semibold text-2xl text-gray-800 text-center pb-2">
          Currently Cooking: {prepareRecipe.length}
        </h2>
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
              {/* <th>Button</th> */}
            </tr>
          </thead>
          <tbody>
            {prepareRecipe.map((recipe, index) => (
              <tr className="hover" key={index}>
                <th>{index + 1}</th>
                <td>{recipe.recipe_name}</td>
                <td>{recipe.preparing_time}</td>
                <td>{recipe.calories}</td>
              </tr>
            ))}
            <tr className="border-none">
              <th></th>
              <td></td>
              <td>Total Time = {totalTime}</td>
              <td>Total Calories = {totalCalories}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Sidebar;
