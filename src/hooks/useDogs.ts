import { useState, useEffect } from 'react';

import { getRandomDogs } from "../api/dogApi";
import type { Dog } from '../types/Dog';
import { toDog } from '../utils/toDog';

export function useDogs() {
    const [dogs, setDogs] = useState<Dog[]>([]);
    const [selectedDog, setSelectedDog] = useState<Dog | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [favorites, setFavorites] = useState<Dog[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function load() {
            try {
                setLoading(true);
                setError(null);
                const data = await getRandomDogs(11);
                console.log('data: ', data);
                if (data.status !== 'success') {
                    setError('API error');
                    throw new Error('API error');
                }

                const parsedData: Dog[] = data.message.map(toDog);
                if (parsedData.length === 0) {
                    setError('No dogs found');
                    return;
                }
                setSelectedDog(parsedData[0]);
                setDogs(parsedData.slice(1));
            } catch (e) {
                console.error(e);
                setError('Failed to load dogs');
            } finally {
                setLoading(false);
            }
            setLoading(false);
        }
        load();
    }, []);

    function addFavorite(dog: Dog) {
        setFavorites(prev => {
            if (prev.find(d => d.imageUrl === dog.imageUrl)) {
                return prev
            }

            return [...prev, dog]
        })
    }

    function removeFavorite(url: string) {
        setFavorites(prev => prev.filter(d => d.imageUrl !== url));
    }

    return {
        selectedDog,
        dogs,
        loading,
        favorites,
        error,
        setSelectedDog,
        addFavorite,
        removeFavorite
    }
}
