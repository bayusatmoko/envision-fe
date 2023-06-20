import config from "../../config";
import axios from ".";

export const getNewReleasesApi = async () => {
    const response = await axios.get(`${config.api.baseUrl}/browse/new-releases`)
    return response.data.albums.items
}

export const getFeaturedPlaylistApi = async () => {
    const response = await axios.get(`${config.api.baseUrl}/browse/featured-playlists`, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }})
    return response.data.playlists.items
}

export const getCategoriesApi = async () => {
    const response = await axios.get(`${config.api.baseUrl}/browse/categories`, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }})
    return response.data.categories.items
}