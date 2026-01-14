import { supabase } from "../supabase.js";

export default async function handler(req, res) {
  if (req.method === "GET") {
    if (supabase) {
      try {
        const { data, error } = await supabase
          .from("profile")
          .select("*")
          .single();

        if (error) throw error;

        res.status(200).json(data);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    } else {
      // Mock data for local testing
      res.status(200).json({
        name: "B Salmon Naik",
        email: "bodasalmonnaik@gmail.com",
        education: "B tech in ECE",
        github: "https://github.com/Salmonnaik",
        linkedin:"https://www.linkedin.com/in/salmon-naik-boda",
        portfolio: "https://bsnprofile.ccbp.tech/"
      });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
