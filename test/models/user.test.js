const User = require('../../app/models/user');

describe("Unit Tests for User class", () => {
    test("Create an User object", () => {
        // Aquí invocas el código que vas a usar en tu app
        const user = new User(1, "danmtnezcas", "Daniel", "Bio");

        /** Aquí validas los resultados de ese código
         *  Esta es una comparacaión que va a igualar el valor de la izquierda con el valor de la derecha (valor esperado)
         */

        expect(user.id).toBe(1);
        expect(user.username).toBe("danmtnezcas");
        expect(user.name).toBe("Daniel");
        expect(user.bio).toBe("Bio");
        expect(user.dateCreated).not.toBeUndefined(); // Verifica que el valor no sea undefine .not.toBeUndefined()
        expect(user.lastUpdated).not.toBeUndefined();
    })
    test("Add getters", () => {
        const user = new User(1, "danmtnezcas", "Daniel", "Bio");
        expect(user.getUsername).toBe("danmtnezcas");
        expect(user.getBio).toBe("Bio");
        expect(user.getDateCreated).not.toBeUndefined();
        expect(user.getLastUpdated).not.toBeUndefined();
    })
})