import type { Dog } from "../../types/Dog";

interface FavoritesListProps {
    favorites: Dog[];
    onSelect: (dog: Dog) => void;
    onRemove: (url: string) => void;
};

export function FavoritesList({ favorites, onSelect, onRemove }: FavoritesListProps) {
    return (
        <div>favorites
            <h3>Favorites</h3>
            {favorites.map((dog) => (

                <div key={dog.imageUrl}>
                    <img
                        src={dog.imageUrl}
                        width={50}
                        onClick={() => onSelect(dog)}
                    />
                    <button onClick={() => onRemove(dog.imageUrl)}> remove </button>
                </div>
            ))}
        </div>
    )
}
