export interface StellenResult {
    count: number,
    next: string,
    previous: string
    results: Stelle[]
}

export interface Stelle {
    id: number,
    display_label: string,
    key_word: key_word
}

interface key_word {
    stichwort: string[]
}
