class User {
  // esempio di user
  userID = Math.random();
  username = "";
  password = "";

  constructor(username, password) {
    this.username = username;
    this.password = password;
  }

  login(username, password) {
    if (username === this.username && password === this.password) {
      console.log("login riuscito");
    } else {
      console.log("username o password errati");
    }
  }
}

const newUser = new User("pippo", "pippo1");
newUser.login("pippo", "pippo1"); // Output: username o password errati
