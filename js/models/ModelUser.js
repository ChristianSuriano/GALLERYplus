import {generateUUID} from "../utils/Generate.js";

class ModelUser {
    constructor(name, surname, username, password, email) {
        this.id = generateUUID();
        this.name = name;
        this.surname = surname;
        this.username = username;
        this.password = password;
        this.email = email;
        this.photos = [];
    }

}

export {ModelUser};