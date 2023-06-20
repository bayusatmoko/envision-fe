import axios from "axios";
import config from "../../config";

export const getTokenApi = async () => {
    const response = await axios.post(config.api.authUrl, null , { headers: {'Content-Type':'application/x-www-form-urlencoded'}, params: { grant_type: 'client_credentials' }, auth: {
        username: config.api.clientId,
        password: config.api.clientSecret
    }})

    return response.data.access_token
}