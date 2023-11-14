import projectsList from "@/data/projects-list.json";
import { redirect } from "next/navigation";

export default async function ProjectsPage() {
  return redirect("/projects/1");
}
