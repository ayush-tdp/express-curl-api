const express = require("express");
const cors = require("cors");
const { exec } = require("child_process");

const app = express();
app.use(cors());
app.use(express.json());

// Serve README.md as HTML when accessing "/"
app.get("/", (req, res) => {
    const readmePath = path.join('', "README.md");

    fs.readFile(readmePath, "utf8", (err, data) => {
        if (err) {
            return res.status(500).send("Error reading README.md");
        }
        res.send(`<html>
            <head>
                <title>README</title>
                <style>
                    body { font-family: Arial, sans-serif; padding: 20px; background: #f5f5f5; }
                    pre { white-space: pre-wrap; word-wrap: break-word; background: white; padding: 20px; border-radius: 10px; }
                </style>
            </head>
            <body>
                <h1>📄 Project Documentation</h1>
                <pre>${data}</pre>
            </body>
        </html>`);
    });
});

app.all("/api/all-in-one", (req, res) => {
    try {
        const { method, url, headers, body } = req.body;

        if (!method || !url) {
            return res.status(400).json({ error: "Method and URL are required." });
        }

        let curlCommand = `curl -X ${method.toUpperCase()} "${url}"`;

        if (headers && typeof headers === "object") {
            Object.entries(headers).forEach(([key, value]) => {
                curlCommand += ` -H "${key}: ${value}"`;
            });
        }

        if (body && Object.keys(body).length > 0) {
            curlCommand += ` -d '${JSON.stringify(body)}'`;
        }

        console.log("Executing:", curlCommand);

        exec(curlCommand, (error, stdout, stderr) => {
            if (error) {
                return res.status(500).json({ error: "Curl execution failed", details: stderr });
            }
            try {
                res.json(JSON.parse(stdout));
            } catch {
                res.send(stdout);
            }
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = app;
