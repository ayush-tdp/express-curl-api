const express = require("express");
const cors = require("cors");
const { exec } = require("child_process");

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.post("/api/all-in-one", (req, res) => {
    try {
        const { method, url, headers, body } = req.body;

        if (!method || !url) {
            return res.status(400).json({ error: "Method and URL are required." });
        }

        let curlCommand = `curl -X ${method.toUpperCase()} "${url}"`;

        // Add headers
        if (headers && typeof headers === "object") {
            Object.entries(headers).forEach(([key, value]) => {
                curlCommand += ` -H "${key}: ${value}"`;
            });
        }

        // Add body (if present)
        if (body && Object.keys(body).length > 0) {
            curlCommand += ` -d '${JSON.stringify(body)}'`;
        }

        console.log("Executing:", curlCommand);

        exec(curlCommand, (error, stdout, stderr) => {
            if (error) {
                return res.status(500).json({ error: "Curl execution failed", details: stderr });
            }
            res.json(JSON.parse(stdout));
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

module.exports = app; // Required for Vercel deployment
