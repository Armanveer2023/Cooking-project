import { useEffect, useState } from "react";
import AppHeader from "@/components/header";
import RecipeCard from "@/components/recipieCard";
import RecipeModal from "@/components/recipieModal";

const SearchResults = () => {
    const [recipies, setRecipies] = useState([]);
    const [selectedRecipe, setSelectedRecipe] = useState(null);
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = (recipe) => {
        setSelectedRecipe(recipe);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setSelectedRecipe(null);
        setModalIsOpen(false);
    };

    return (
        <div className="w-full">
            <AppHeader setRecipies={setRecipies} />
            {recipies && recipies.map((recipe) => (
                <ul className="flex flex-col gap-4 hover:cursor-pointer" key={recipe.idMeal} onClick={() => openModal(recipe)}>
                    <RecipeCard
                        name={recipe.strMeal}
                        category={recipe.strCategory}
                        image={recipe.strMealThumb}
                        instructions={recipe.strInstructions}
                    />
                </ul>
            ))}
            {modalIsOpen && (
                <RecipeModal
                    recipe={selectedRecipe}
                    closeModal={closeModal}
                />
            )}
        </div>
    );
};

export default SearchResults;
