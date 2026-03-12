export function getBreedFromUrl(url: string): string {
    const match = url.match(/breeds\/([^/]+)/);

    if (!match) { return "unknown" }
    return match[1].replace('-', ' ');
}
