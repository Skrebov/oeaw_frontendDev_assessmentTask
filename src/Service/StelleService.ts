import { StelleAPI } from "@/API/StelleAPI";
import { ActivityService } from "./ActivityService";
import { StellenResult, searchType } from "@/Interface/StelleTypes";


const searchStelle = async (searchInput: searchType) => {
    return StelleAPI.searchStelle(searchInput).then(
        result => {
            return result;
        }
    ).catch(
		(errorMsg) => {
			ActivityService.displayErrorMessage(errorMsg.message)
			throw new Error(errorMsg.message)
		}
	)
}

const transformData = (data: any): StellenResult => {
    return {
        count: data.count,
        next: data.next,
        previous: data.previous,
        results: data.results.map((item: any) => ({
            id: item.id,
            display_label: item.display_label,
            key_word: {
                stichwort: item.key_word.map((kw: any) => kw.stichwort)
            },
            text_start_date: item.text.start_date,
            text_end_date: item.text.end_date,
            authors: item.text.autor.map((author: any) => author.name_en)
        }))
    };
};


export const StelleService = {
    searchStelle, transformData
}