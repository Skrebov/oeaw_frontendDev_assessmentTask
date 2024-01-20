import axios from 'axios';

const searchStelle = async (zitat: string) => {
    return axios.get(`https://mmp.acdh-dev.oeaw.ac.at/api/stelle/`).then(response => {return response.data}).catch(
        (error) => {
            throw new Error(error.response.data.message || 'Failed to search Stelle');
    }
)
}

export const StelleAPI  = {
    searchStelle
}