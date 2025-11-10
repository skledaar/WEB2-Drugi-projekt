import pool from "../middleware/db.js";

export const getPosts = async (req, res) => {
   try {
      const result = await pool.query("SELECT * FROM posts;");
      return result.rows;
   } catch (err) {
      console.error(err);
      throw new Error("Server error getPosts");
   }
};

export const newPost = async (req, res) => {
   const text = req.body.post_text;
   const email = req.oidc?.user.email;
   if (!email) return res.status(401).send("Niste ulogirani!");

   try {
      const query = ("INSERT INTO posts(email, post_text) VALUES ($1, $2);");
      const result = await pool.query(query, [email, text]);
      return res.redirect("/blog");
   } catch (err) {
      console.error(err);
      throw new Error("Server error newPost");
   }
}

export async function fetchUser(req) {
   const user = req.oidc?.user || null;

   return user;
};
