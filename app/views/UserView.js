const User = require('../../app/models/User');
const UserService = require('../../app/services/UserService');

class UserView {
    static createUser(payload) {
        if(payload === null) {
            console.log("Error es null");
            return {error: "El payload no existe."}
        }
    }
}

module.exports = UserView;