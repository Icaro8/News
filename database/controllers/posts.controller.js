const response = require("express");
const { v4: uuid } = require("uuid");
const Post = require("../schemas/posts");

module.exports = {
  async index(request, response) {
    try {
      const post = await Post.find();
      return response.status(200).json({ post });
    } catch (error) {
      return response.status(500).json({ error: error.message });
    }
  },
  async store(request, response) {
    const { name, email, title, content } = request.body;

    if (!name || !email || !title || !content) {
      return response.status(500).json({ error: "Os campos são obrigatório" });
    }
    const post = new Post({
      id: uuid(),
      name,
      email,
      title,
      content,
      date: new Date().toLocaleDateString(),
      liked: false,
      unLiked: false,
    });
    try {
      await post.save();
      return response.status(201).json({ message: "Post Create" });
    } catch (error) {
      return response.status(400).json({ error: "hi" });
    }
  },
  async update(request, response) {
    const { email, title } = request.body;

    if (!title && !email) {
      return response.status(400).json({ error: "Informações erradas" });
    }
    if (title) request.post.title = title;
    if (title) request.post.email = email;

    try {
      await response.post.save();
      return response
        .status(200)
        .json({ message: "Post Atualizado com sucesso" });
    } catch (error) {
      return response.status(500).json({ error: error.message });
    }
  },
};
