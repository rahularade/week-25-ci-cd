import express from "express";
import prisma from "@repo/db/client";
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hii there");
});

app.post("/signup", async (req, res) => {
    const { username, password } = req.body;

    if (username.trim() === "" || password.trim() === "") {
        return res.status(400).json({
            message: "Invalid inputs",
        });
    }

    try {
        await prisma.user.create({
            data: {
                username,
                password,
            },
        });

        res.status(201).json({
            message: "User created successfully!",
        });
    } catch (error) {
        // @ts-ignore
        if (error.code === "P2002") {
            res.status(409).json({
                message: "Username already exists",
            });
        } else {
            res.status(500).json({
                message: "Internal server error",
            });
        }
    }
});

app.listen(3001, () => {
    console.log("Server is running on port 3001");
});
