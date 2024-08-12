import axios from 'axios';

const baseAPI = 'https://api.tvmaze.com/shows';

export const showSeries = async (setSeries) => {
    try {
        const response = await axios.get(baseAPI);
        const retrievedData = response.data;
        setSeries(retrievedData); 
        return retrievedData;
    } catch (error) {
        console.error('Error fetching series:', error);
        return [];
    }
};