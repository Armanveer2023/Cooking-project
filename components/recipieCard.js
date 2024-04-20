const RecipeCard = ({ name, category, image, instructions }) => {
    return (
        <div className="border border-gray-200 rounded-lg shadow-md p-4">
            <img src={image} alt={name} className="w-full h-auto mb-4 rounded-md" />
            <h2 className="text-xl font-semibold mb-2">{name}</h2>
            <p className="text-gray-600 mb-2">{category}</p>
            <p className="text-gray-700">{instructions.substring(0, 100)}...</p>
        </div>
    );
};

export default RecipeCard;