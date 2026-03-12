import type { Dog } from '../../types/Dog';
import styles from './DogList.module.css';

interface DogListProps {
    dogs: Dog[];
    onSelect: (dog: Dog) => void
}
export function DogList({ dogs, onSelect }: DogListProps) {
    return (
        <div className={styles.list}>
            {dogs.map((dog: Dog) => (
                <div>
                    <img
                        key={dog.imageUrl}
                        src={dog.imageUrl}
                        className={styles.thumb}
                        onClick={() => onSelect(dog)}
                    />
                    <span className={styles.breed}>{dog.breed}</span>
                </div>
            ))}
        </div>

    )
}
