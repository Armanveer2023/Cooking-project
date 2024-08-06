"use client";
import SearchBar from "@/components/searchBar";

const AppHeader = ({setRecipies}) => {
    return (
        <div className="w-full mb-6">
            <header className="header w-full bg-orange-400 py-6 px-4 flex flex-row rounded-xl items-center gap-4 drop-shadow-xl">
                <h1 className="text-3xl font-bold text-nowrap">
                    Let Him Cook
                </h1>
                <SearchBar setRecipies={setRecipies}/>
            </header>
        </div>
    );
};

export default AppHeader;