const axios = require('axios');

const api = axios.default.create({
    baseURL: 'https://musical-app-electron-backend.herokuapp.com',
    headers: { 'X-Custom-Header': 'foobar' }
});


module.exports = api;