const User = require('../models/user');

class UserService {
    static create(id, username, name) {
        return new User(id, username, name, "Sin bio")
    }

    static getInfo(user) {
        /*var list = [];
        list.push(user.id);
        list.push(user.username);
        list.push(user.name);
        list.push(user.bio);
        return list;*/
        return Object.values(user);
    }

    static updateUsername(user, newUsername) {
        //user.username = newUsername;
        user.setUsername= newUsername;
    }

    static getAllUsernames(listUsers) {
        /*var listUser = listUsers;
        var allUsernames = [];
        listUser.forEach(user => allUsernames.push(user.username));
        return allUsernames;*/
        const userUnsernames = listUsers.map(user => user.username);
        return userUnsernames;
    }      
}

module.exports = UserService;
