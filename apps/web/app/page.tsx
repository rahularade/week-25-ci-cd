import prisma from "@repo/db/client";
import styles from "./page.module.css";

export default async function Home() {

  const user = await prisma.user.findFirst();
  return (
    <div>
      <div>
    Username: 
      {user?.username}
      </div>
      <div>
    Password: 
      {user?.password}
      </div>
    </div>
  );
}
