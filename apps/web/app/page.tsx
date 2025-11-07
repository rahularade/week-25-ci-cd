import prisma from "@repo/db/client";
import styles from "./page.module.css";

export default async function Home() {
    const user = await prisma.user.findFirst();
    return (
        <div style={{ textAlign: "center" }}>
            <div style={{ color: "yellow" }}>
                Username:
                {user?.username}
            </div>
            <div style={{ color: "yellow" }}>
                Password:
                {user?.password}
            </div>
        </div>
    );
}
