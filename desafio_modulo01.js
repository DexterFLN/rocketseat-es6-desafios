//exercicio 01

class Usuario {
    constructor(email, password) {
        this.email = email;
        this.senha = password;
    }

    isAdmin() {
        return this.admin === true;
    }
};

class Admin extends Usuario {
    admin = true;
};

const User1 = new Usuario('email@teste.com', 'senha123');
const Adm1 = new Admin('email@teste.com', 'senha123');
console.log(User1.isAdmin()) // false
console.log(Adm1.isAdmin()) // true


//exercicio 02