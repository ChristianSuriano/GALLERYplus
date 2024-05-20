class ModelUser {
  constructor(name, surname, username, password, email) {
    this.id = Math.random();
    this.name = name;
    this.surname = surname;
    this.username = username;
    this.password = password;
    this.email = email;
  }
}
