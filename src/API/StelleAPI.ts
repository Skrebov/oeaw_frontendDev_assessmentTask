import axios from "axios";
import { searchType } from "@/Interface/StelleTypes";

const searchStelle = async (searchInput: searchType) => {
  return axios
    .get(
      `https://mmp.acdh-dev.oeaw.ac.at/api/stelle/?zitat=${searchInput.zitat}&zitat_lookup=icontains&limit=${searchInput.limit}`
    )
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw new Error(error.response.data.message || "Failed to search Stelle");
    });
};

const searchStellePagination = async (paginationInput: string) => {
  return axios
    .get(paginationInput)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw new Error(error.response.data.message || "Failed to search Stelle");
    });
};

export const StelleAPI = {
  searchStelle,
  searchStellePagination,
};
