const UserService = require('../../app/models/userservice')

describe("Tests for UserService", () => {
    test("1. Create a new user using the UseService", () => {
        const user = UserService.create(1, "danmtnezcas", "Daniel");
        expect(user.username).toBe("danmtnezcas");
        expect(user.name).toBe("Daniel");
        expect(user.id).toBe(1);
        expect(user.bio).not.toBeUndefined();
    })
})