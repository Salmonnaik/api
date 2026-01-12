import { supabase } from "../supabase.js";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const { skill } = req.query;

    if (!skill) {
      return res.status(400).json({ error: "Skill parameter is required" });
    }

    try {
      const { data, error } = await supabase
        .from("projects")
        .select("*")
        .ilike("skill", `%${skill}%`);

      if (error) throw error;

      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
