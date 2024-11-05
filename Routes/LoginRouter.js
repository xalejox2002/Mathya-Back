import express from "express";
import { login } from "../Controllers/loginController.js";

const loginRouters = express.Router();

loginRouters.post("/", (req, res) => {
    login(req, res);
});

export default loginRouters;
