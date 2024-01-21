import { StelleAPI } from "@/API/StelleAPI";
import { ActivityService } from "./ActivityService";
import { StellenResult } from "@/Interface/StelleTypes";


const searchStelle = async (zitat:string) => {
    return StelleAPI.searchStelle(zitat).then(
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
            }
        }))
    };
};


export const StelleService = {
    searchStelle, transformData
}