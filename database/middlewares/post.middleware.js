const { validate: uuid } = require("uuid");
const Post = require("../schemas/posts");

module.exports = {
  async validateId(request, response, next) {
    const { id } = request.params;

    if (!uuid(id)) {
      return response.status(400).json({ error: "ID invalido" });
    }
    try {
      const post = await Post.findById(id);
      response.post = post;
      if (!post) {
        return response.status(404).json({ error: "Post not found" });
      }
    } catch (error) {
      return response.status(500).json({ error: error.message });
    }
    next();
  },
};
