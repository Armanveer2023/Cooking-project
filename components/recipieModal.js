// import React from "react";

// const RecipeModal = ({ recipe, closeModal }) => {
//     return (
//         <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-900 bg-opacity-50 z-50">
//             <div className="flex flex-col bg-white rounded-lg p-8 overflow-auto h-2/3 w-2/3 text-orange-800">
//                 <button
//                     className="m-4 text-gray-500 hover:text-gray-800 text-2xl"
//                     onClick={closeModal}
//                 >
//                     &times;
//                 </button>
//                 <div className="flex flex-row bg-orange-100 p-4 rounded-xl drop-shadow-lg">
//                     <img src={recipe.strMealThumb} alt={recipe.strMeal} className="my-4 rounded-lg w-96 h-96 drop-shadow-lg" />
//                     <div className="flex flex-col gap-4 mt-4 ml-4">
//                         <h2 className="text-3xl font-bold p-4 bg-orange-200 rounded-xl drop-shadow-lg">{recipe.strMeal}</h2>
//                         <div className="flex flex-row gap-4">
//                             <p className="p-4 bg-orange-200 rounded-xl drop-shadow-lg"><span className="font-semibold">Category:</span> {recipe.strCategory}</p>
//                             <p className="p-4 bg-orange-200 rounded-xl drop-shadow-lg"><span className="font-semibold">Area:</span> {recipe.strArea}</p>
//                         </div>
//                     </div>
//                 </div>
//                 <p className="bg-orange-100 p-4 rounded-xl drop-shadow-lg mt-4"><span className="font-bold text-xl">Instructions:</span><br /> {recipe.strInstructions}</p>
//                 <div className="bg-orange-100 p-4 rounded-xl drop-shadow-lg mt-4">
//                     <h3 className="text-xl font-semibold mb-2">Ingredients:</h3>
//                     <ul>
//                         {Object.keys(recipe)
//                             .filter(
//                                 (key) =>
//                                     key.startsWith("strIngredient") &&
//                                     recipe[key]
//                             )
//                             .map((key, index) => (
//                                 <li key={index}>
//                                     {recipe[key]} -{" "}
//                                     {recipe[`strMeasure${key.slice(13)}`]}
//                                 </li>
//                             ))}
//                     </ul>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default RecipeModal;
import React from "react";

const RecipeModal = ({ recipe, closeModal }) => {
    return (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-900 bg-opacity-50 z-50">
            <div className="flex flex-col bg-white rounded-lg p-8 overflow-auto h-2/3 w-2/3 text-orange-800 relative">
                <button
                    className="absolute top-0 right-4 text-gray-500 hover:text-gray-800 text-2xl"
                    onClick={closeModal}
                >
                    &times;
                </button>
                <div className="flex flex-row bg-orange-100 p-4 rounded-xl drop-shadow-lg">
                    <img src={recipe.strMealThumb} alt={recipe.strMeal} className="my-4 rounded-lg w-96 h-96 drop-shadow-lg" />
                    <div className="flex flex-col gap-4 mt-4 ml-4">
                        <h2 className="text-3xl font-bold p-4 bg-orange-200 rounded-xl drop-shadow-lg">{recipe.strMeal}</h2>
                        <div className="flex flex-row gap-4">
                            <p className="p-4 bg-orange-200 rounded-xl drop-shadow-lg"><span className="font-semibold">Category:</span> {recipe.strCategory}</p>
                            <p className="p-4 bg-orange-200 rounded-xl drop-shadow-lg"><span className="font-semibold">Area:</span> {recipe.strArea}</p>
                        </div>
                    </div>
                </div>
                <p className="bg-orange-100 p-4 rounded-xl drop-shadow-lg mt-4"><span className="font-bold text-xl">Instructions:</span><br /> {recipe.strInstructions}</p>
                <div className="bg-orange-100 p-4 rounded-xl drop-shadow-lg mt-4">
                    <h3 className="text-xl font-semibold mb-2">Ingredients:</h3>
                    <ul>
                        {Object.keys(recipe)
                            .filter(
                                (key) =>
                                    key.startsWith("strIngredient") &&
                                    recipe[key]
                            )
                            .map((key, index) => (
                                <li key={index}>
                                    {recipe[key]} -{" "}
                                    {recipe[`strMeasure${key.slice(13)}`]}
                                </li>
                            ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default RecipeModal;
