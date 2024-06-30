import { userStore } from "../models/user-store.js";

export const accountsController = {
  index(request, response) {
    const viewData = {
      title: "Login or Signup",
    };
    response.render("index", viewData);
  },

  login(request, response) {
    const viewData = {
      title: "Login to WeatherApp",
    };
    response.render("login-view", viewData);
  },

  logout(request, response) {
    response.cookie("station", "");
    response.redirect("/");
  },

  async edit(request, response) {
  const id = request.params.id; 
    const viewData = {
      title: "Edit User Details:", 
      user: await userStore.getUserById(id), 
     
    }  
    response.render("edit-user", viewData)
  }, 


  signup(request, response) {
    const viewData = {
      title: "Login to WeatherApp",
    };
    response.render("signup-view", viewData);
  },

  async register(request, response) {
    const user = request.body;
    await userStore.addUser(user);
    console.log(`registering ${user.email}`);
    response.redirect("/");
  },

  async authenticate(request, response) {
    const user = await userStore.getUserByEmail(request.body.email);
    if (user) {
      response.cookie("station", user.email);
      console.log(`logging in ${user.email}`);
      response.redirect("/dashboard");
    } else {
      response.redirect("/login");
    }
  },


  async getLoggedInUser(request) {
    const userEmail = request.cookies.station;
    return await userStore.getUserByEmail(userEmail);
  },

  async update(request, response) {
    
    const updatedUser = {
      firstName: request.body.firstName,
      lastName: request.body.lastName,
      email: request.body.email, 
      password: Number(request.body.password),
    };
    const id = request.params.id; 
    const user = await userStore.getUserById(id); 
    console.log();
    await userStore.updateUser(user, updatedUser); 
    response.redirect("/");
  },
};