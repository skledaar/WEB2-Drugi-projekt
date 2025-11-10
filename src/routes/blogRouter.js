import { Router } from "express";
import { getPosts, fetchUser, newPost } from "../controllers/blogController.js";
const blogRouter = Router();

blogRouter.get("/", async (req, res) => {
   try {
      const posts = await getPosts(req, res);
      const user = await fetchUser(req);
      res.status(200).render("blog", { posts, user });
   } catch (err) {
      res.status(500).send(err.message);
   }
});

blogRouter.post("/", newPost);

export default blogRouter;