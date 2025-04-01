export function isValidUrl(url: string): boolean {
    try {
        new URL(url);
        return /^https?:/i.test(url)
    } catch {
        return false
    }
}

export function cleanAltText(output: unknown): string {
    return String(output).trim().replace(/^caption:\s*/i, "");
}