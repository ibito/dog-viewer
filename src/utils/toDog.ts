import type { Dog } from "../types/Dog";
import { getBreedFromUrl } from "./getBreed";

export function toDog(url: string): Dog {
    return {
        imageUrl: url,
        breed: getBreedFromUrl(url)
    }
}
