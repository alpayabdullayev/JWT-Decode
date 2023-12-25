import User from "../model/usersSchema.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"

export const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
};

export const getUserById = async (req, res) => {
    try {
        const { id } = req.params
        const user = await User.findById(id)

        if (!user) {
            return res.status(404).json({ message: "Not Found" });
        }

        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error", error, message });
    }
}

export const createUser = async (req, res) => {
    try {
        const { username, password, role } = req.body
        const round = 10
        const hashedPassword = await bcrypt.hashSync(password, round)

        const newUser = new User({
            username,
            password: hashedPassword,
            role: role,
        });
        await newUser.save()
        res.status(200).json({ message: "Created User", newUser });
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error", error, message });
    }
}

export const deleteUser = async (req, res) => {
    try {
      const {id} = req.params;
      const deleteUser = await User.findByIdAndDelete(id);
      if (deleteUser) {
        res.status(200).json({ deleteUser });
      } else {
        res.status(404).json({ message: "Not Found" });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  export const updateUser = async (req, res) => {
    try {
      const id = req.params;
      const {username,password,role} = req.body
      const updateUser = await User.findByIdAndUpdate(id);

      const round = 10
      const hashedPassword = await bcrypt.hashSync(password, round)

      if (updateUser) {
        User.username = username;
        User.password = hashedPassword;
        User.role = role;
      }
      res.status(200).json({ message: updateUser });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };