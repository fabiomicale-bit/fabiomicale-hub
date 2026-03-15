import { redirect } from "next/navigation";
export default function HomePage() {
  if (process.env.VERCEL_ENV === "production") {
    redirect("/maintenance");
  }
  return null;
}
