import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: "Client-ID 1SJOpQj3m6tJkZDCzRfhlUL3Ac3zqRPk7HeVvDxFuig"
    }
});