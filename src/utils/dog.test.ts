import { describe, it, expect } from "vitest";
import { toDog } from "./toDog.ts";

describe("toDog", () => {
    it("should parse breed from url", () => {
        const url =
            "https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg";

        const dog = toDog(url);

        expect(dog.breed).toBe("hound afghan");
        expect(dog.imageUrl).toBe(url);
    });
});
