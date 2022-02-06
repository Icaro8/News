require("dotenv").config();
const express = require("express");
const { Routes } = require("react-router-dom");
const route = express.Router();
const PostController = require("./controllers/posts.controller");
const PostMiddleware = require("./middlewares/post.middleware");

route.get("/", (req, res) => res.json({ Icaro: "Lindo" }));

route.get("/posts", PostController.index);

route.post("/posts", PostController.store);

route.put("/post/:id", PostMiddleware.validateId, PostController.update);

module.exports = route;
