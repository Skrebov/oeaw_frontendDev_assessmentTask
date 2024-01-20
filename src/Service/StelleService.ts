import { StelleAPI } from "@/API/StelleAPI";
import { ActivityService } from "./ActivityService";


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

export const StelleService = {
    searchStelle
}