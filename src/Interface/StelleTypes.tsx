export interface StellenResult {
  count: number;
  next: string;
  previous: string;
  results: Stelle[];
}

export interface Stelle {
  id: number;
  display_label: string;
  key_word: key_word;
  text_start_date: string;
  text_end_date: string;
  authors: string[];
}

interface key_word {
  stichwort: string[];
}

export interface searchType {
  zitat: string;
  limit: string;
}
