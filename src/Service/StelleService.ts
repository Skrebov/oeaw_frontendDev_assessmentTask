import { StelleAPI } from "@/API/StelleAPI";
import { ActivityService } from "./ActivityService";
import { StellenResult, searchType } from "@/Interface/StelleTypes";

const searchStelle = async (searchInput: searchType) => {
  return StelleAPI.searchStelle(searchInput)
    .then((result) => {
      return result;
    })
    .catch((errorMsg) => {
      ActivityService.displayErrorMessage(errorMsg.message);
      throw new Error(errorMsg.message);
    });
};

const searchStellePagination = async (paginationInput: string) => {
  return StelleAPI.searchStellePagination(paginationInput)
    .then((result) => {
      return result;
    })
    .catch((errorMsg) => {
      ActivityService.displayErrorMessage(errorMsg.message);
      throw new Error(errorMsg.message);
    });
};

//this is a basic check if the returned data objects contain all the fields that I want to access before actually doing so
const transformData = (data: any): StellenResult => {
  try {
    // Check if the required fields exist in the 'data' object
    if (
      !data ||
      data.count === undefined ||
      data.next === undefined ||
      data.previous === undefined ||
      data.results === undefined
    ) {
      throw new Error("Incomplete data provided");
    }

    if (data.count === 0) {
      throw new Error("No entries found!");
    }

    return {
      count: data.count,
      next: data.next,
      previous: data.previous,
      results: data.results.map((item: any) => {
        // Check if the required fields exist in each 'item' object
        if (
          item.id === undefined ||
          item.display_label === undefined ||
          item.text === undefined ||
          item.key_word === undefined ||
          item.text.start_date === undefined ||
          item.text.end_date === undefined ||
          item.text.autor === undefined
        ) {
          throw new Error("Incomplete data");
        }

        return {
          id: item.id,
          display_label: item.display_label,
          key_word: {
            stichwort: item.key_word.map((kw: any) => {
              if (kw.stichwort === undefined) {
                throw new Error("Incomplete stichwort data");
              }
              return kw.stichwort;
            }),
          },
          text_start_date: item.text.start_date,
          text_end_date: item.text.end_date,
          authors: item.text.autor.map((author: any) => {
            if (author.name_en === undefined) {
              throw new Error("Incomplete autor data");
            }
            return author.name_en;
          }),
        };
      }),
    };
  } catch (error: any) {
    // Handle the error here
    ActivityService.displayErrorMessage(error.message);
  }
  return { count: 0, next: "", previous: "", results: [] };
};

export const StelleService = {
  searchStelle,
  transformData,
  searchStellePagination,
};
