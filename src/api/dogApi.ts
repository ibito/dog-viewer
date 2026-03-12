const API_BASE_URL = `https://dog.ceo/api/`;

export async function getRandomDogs(count: number) {
    const res = await fetch(`${API_BASE_URL}breeds/image/random/${count}`);
    if (!res.ok) {
        throw new Error('Error while fetching...');
    }

    return res.json();
}
