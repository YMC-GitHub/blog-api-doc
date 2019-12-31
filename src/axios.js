import axios from 'axios'
import fs from 'fs'
axios({
    method: 'get',
    url: '/backend/admin/list',
    baseURL: 'http://192.168.2.3:4000/api',
    headers: { 'X-Requested-With': 'XMLHttpRequest' },
    params: {
        ID: 12345
    },
})
    .then(function (response) {
        response.data.pipe(fs.createWriteStream('ada_lovelace.jpg'))
    });
