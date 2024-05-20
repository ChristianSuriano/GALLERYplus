class ControllerUsers {
  #users = [];

  create(name, surname, username, password, email) {
    const user = new ModelUser(name, surname, username, password, email);
    this.users.push(user);
  }
  read(id) {}
  update(id, name, surname, username, password, email) {}
  delete(id) {}
  get(username, password) {
    //per vedere se pass e usurname sono corretti
    const userFound = this.users.find(function (user) {
      if (user.username === username && user.password === password) return true;
      return false;
    });
    return userFound;
  }
}
