import { useDogs } from './hooks/useDogs'
import styles from './App.module.css';
import { DogList } from './components/DogList/DogList';
import { FavoritesList } from './components/FavoritesList/FavoritesList';
import { DogMain } from './components/DogMain/DogMain';

function App() {
  const { selectedDog, loading, dogs, favorites, addFavorite, removeFavorite, setSelectedDog, error } = useDogs();

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <>
      {loading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      <div className={styles.container}>
        <div className={styles.left}>
          <DogMain selectedDog={selectedDog} onFavorite={addFavorite} />
          <DogList dogs={dogs} onSelect={(selectedDog) => setSelectedDog(selectedDog)} />
        </div>
        <div className={styles.right}>
          <FavoritesList onSelect={setSelectedDog} onRemove={removeFavorite} favorites={favorites} />
        </div>
      </div>
    </>
  )
}

export default App
