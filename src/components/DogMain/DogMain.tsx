import styles from './DogMain.module.css';
import type { Dog } from '../../types/Dog';

interface DogMainProps {
    selectedDog: Dog | null;
    onFavorite: (dog: Dog) => void;
}

export function DogMain({ selectedDog, onFavorite }: DogMainProps) {
    if (!selectedDog) return null

    return (
        <div>
            <img src={selectedDog.imageUrl} className={styles.image} alt={selectedDog.breed} />
            <div className={styles.title}><div>{selectedDog.breed}</div>
                <button
                    className={styles.favoritesButton}
                    onClick={() => {
                        if (selectedDog) {
                            onFavorite(selectedDog);
                        }
                    }}
                    disabled={!selectedDog}
                >

                    Favorite
                </button>
            </div>
        </div>

    )
}
