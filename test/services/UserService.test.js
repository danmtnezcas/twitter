const UserService = require('../../app/services/userservice')

describe("Tests for UserService", () => {
    test("1. Create a new user using the UseService", () => {
        const user = UserService.create(1, "danmtnezcas", "Daniel");
        expect(user.username).toBe("danmtnezcas");
        expect(user.name).toBe("Daniel");
        expect(user.id).toBe(1);
        expect(user.bio).not.toBeUndefined();
    })

    test("2. Get all user data in a list", () => {
        const user = UserService.create(1, "danmtnezcas", "Daniel");
        const userInfoInList = UserService.getInfo(user);
        expect(userInfoInList[0]).toBe(1);
        expect(userInfoInList[1]).toBe("danmtnezcas");
        expect(userInfoInList[2]).toBe("Daniel");
        expect(userInfoInList[3]).toBe("Sin bio");
    })
})
