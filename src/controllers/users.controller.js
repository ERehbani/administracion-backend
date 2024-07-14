const UserService = require("../services/users.service");
const userService = new UserService();

class UsersController {
  async createUser(req, res) {
    try {
      const newUsers = req.body; // Se espera un array de objetos
      if (!Array.isArray(newUsers)) {
        return res
          .status(400)
          .json({
            message: "El cuerpo de la solicitud debe ser un array de objetos",
          });
      }
      const users = await userService.createUsers(newUsers);
      res.status(201).json(users);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error al crear usuarios" });
    }
  }

  async getAllUsers(req, res) {
    try {
      const users = await userService.getAllUsers();
      res.json(users);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
}

module.exports = UsersController;
