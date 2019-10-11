const {
    NODE_ENV
} = require('../environment');


const config = {
    "development": {
        "proxy": "/api/",
        "baseUrl": 'http://localhost:3333'
    },
    "production": {
        "proxy": "/api/",
        "baseUrl": 'http://localhost:3333'
    }
}
module.exports=config[NODE_ENV]