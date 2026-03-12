import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";

import { DogMain } from "./DogMain";

const dog = {
    imageUrl: "https://images.dog.ceo/breeds/hound-afghan/test.jpg",
    breed: "hound afghan",
};

describe("DogMain", () => {
    it("renders dog image", () => {
        render(
            <DogMain
                selectedDog={dog}
                onFavorite={() => { }}
            />
        );

        const img = screen.getByRole("img");

        expect(img).toBeDefined();
    });

    it("calls onFavorite when button clicked", () => {
        const onFavorite = vi.fn();

        render(
            <DogMain
                selectedDog={dog}
                onFavorite={onFavorite}
            />
        );

        const button = screen.getByRole("button");

        fireEvent.click(button);

        expect(onFavorite).toHaveBeenCalled();
    });
});
