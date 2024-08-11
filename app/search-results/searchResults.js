"use client";

import { useState } from "react";
import AppHeader from "@/components/header";
import RecipeCard from "@/components/recipieCard";
import RecipeModal from "@/components/recipieModal";

const SearchResults = () => {
    const [recipies, setRecipies] = useState([]);
    const [selectedRecipe, setSelectedRecipe] = useState(null);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [bookmarkedRecipes, setBookmarkedRecipes] = useState([]);

    const openModal = (recipe) => {
        setSelectedRecipe(recipe);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setSelectedRecipe(null);
        setModalIsOpen(false);
    };

    const toggleBookmark = (recipe) => {
        const isBookmarked = bookmarkedRecipes.some(
            (r) => r.idMeal === recipe.idMeal
        );
        if (isBookmarked) {
            setBookmarkedRecipes(
                bookmarkedRecipes.filter((r) => r.idMeal !== recipe.idMeal)
            );
        } else {
            setBookmarkedRecipes([...bookmarkedRecipes, recipe]);
        }
    };

    return (
        <div className="w-full">
            <AppHeader setRecipies={setRecipies} />
            <h1  className="text-3xl font-bold text-center mt-8 text-black ">Recipes</h1>
            <ul className="flex flex-col gap-4 mt-4 hover:cursor-pointer">
                {recipies && recipies.map((recipe) => (
                    <li key={recipe.idMeal} onClick={() => openModal(recipe)}>
                        <RecipeCard
                            name={recipe.strMeal}
                            category={recipe.strCategory}
                            image={recipe.strMealThumb}
                            instructions={recipe.strInstructions}
                            isBookmarked={bookmarkedRecipes.some(
                                (r) => r.idMeal === recipe.idMeal
                            )}
                            onBookmark={() => toggleBookmark(recipe)}
                        />
                    </li>
                ))}
            </ul>
            
            <h2 className="text-2xl font-bold mt-8 text-black">Bookmarked Recipes</h2>
            <ul className="flex flex-col gap-4 mt-4">
                {bookmarkedRecipes.map((recipe) => (
                    <li key={recipe.idMeal} onClick={() => openModal(recipe)}>
                        <RecipeCard
                            name={recipe.strMeal}
                            category={recipe.strCategory}
                            image={recipe.strMealThumb}
                            instructions={recipe.strInstructions}
                            isBookmarked
                            onBookmark={() => toggleBookmark(recipe)}
                        />
                    </li>
                ))}
            </ul>

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
