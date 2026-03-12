import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import { FavoritesList } from "./FavoritesList";

describe("FavoritesList", () => {
    it("renders favorites", () => {
        const favorites = [
            { imageUrl: "a", breed: "a" },
            { imageUrl: "b", breed: "b" },
        ];

        render(
            <FavoritesList
                favorites={favorites}
                onSelect={() => { }}
                onRemove={() => { }}
            />
        );

        const images = screen.getAllByRole("img");

        expect(images.length).toBe(2);
    });
});
