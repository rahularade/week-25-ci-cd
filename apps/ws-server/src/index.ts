import prisma from "@repo/db/client";
import { WebSocketServer } from "ws";

const wss = new WebSocketServer({port: 8080}, () => {
    console.log("WS server running on port 8080")
})

wss.on("connection", async(ws) => {
    await prisma.user.create({
        data: {
            username: Math.random().toString(),
            password: Math.random().toString()
        }
    })
    ws.send("You are connected to ws-server")
})