const UsersModel = require("../models/users.model");

class UserService {
    async createUsers(usersData) {
        try {
          const users = await Promise.all(usersData.map(async userData => {
            const { first_name, last_name, direction, phone, expenses, value, observations } = userData;
            if (!first_name || !last_name || !direction || !phone || !expenses || !value || !observations) {
              throw new Error("Todos los datos son obligatorios");
            }
            const user = new UsersModel({
              first_name,
              last_name,
              direction,
              phone,
              expenses,
              value,
              observations,
            });
            await user.save();
            return user;
          }));
          return users;
        } catch (err) {
          console.error(err);
          throw new Error("Error al crear usuarios");
        }
      }

  async getAllUsers() {
    try {
      const users = await UsersModel.find();
      return (users);
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = UserService;
