import pool from "../middleware/db.js";

export const getBySurname = async (req, res) => {
   const lastName = req.query.lastname;
   const vulnerable = req.query.vulnerable;
   try {
      if (vulnerable === "true") {
         const result = await pool.query(
            "SELECT * FROM users WHERE lastName = '"+lastName+"';"
         );
         return res.status(200).send(result.rows);
      } else {
         //if (!lastName || !lastName.match(/^\p{L}+$/u)) {
         //   return res.status(400).send("...to nije prezime.");
         //}
         //nepotrebna provjera jer se šalje kao parametar, a ne query string
         const query = `SELECT * FROM users WHERE lastName = $1;`;
         const result = await pool.query(query, [lastName]);
         return res.status(200).send(result.rows);
      }
   } catch (err) {
      console.error(err);
      res.status(500).send("Server error getprezime");
   }
};