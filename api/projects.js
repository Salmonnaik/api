import { supabase } from "../supabase.js";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const { skill } = req.query;

    if (!skill) {
      return res.status(400).json({ error: "Skill parameter is required" });
    }

    if (supabase) {
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
      // Mock data for local testing
      const mockProjects = [
        {
          title: "Developer Portfolio & Project Showcase",
          description: "An interactive portfolio website designed to present my technical skills, completed projects, and online presence. Focuses on responsiveness, performance, and clean user experience.",
          skill: ["HTML",
    "CSS",
    "JavaScript",
    "React.js",
    "Responsive Web Design",
    "Git & GitHub",
    "UI/UX Fundamentals"],
          links: ["https://bsnprofile.ccbp.tech/"]
        },
        {
          title: "Training & Placement Portal (TNP)",
          description: "A web-based Training and Placement portal developed to manage student profiles, placement updates, and recruitment information. Designed with a focus on usability, structured data display, and responsive layout.",
          skill: [
    "HTML5",
    "CSS3",
    "JavaScript",
    "React.js",
    "Responsive Web Design",
    "Component-Based UI",
    "Git & GitHub"
  ],
          links: ["https://tnp44.ccbp.tech/"]
        }
      ];
      res.status(200).json(mockProjects);
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
