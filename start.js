#!/usr/bin/env node

// This script ensures we're running from the correct directory
const path = require("path")
const { spawn } = require("child_process")

// Get the directory where this script is located
const scriptDir = __dirname
const distPath = path.join(scriptDir, "dist", "server.js")

// Check if dist/server.js exists
const fs = require("fs")
if (!fs.existsSync(distPath)) {
  console.error(`Error: Cannot find ${distPath}`)
  console.error(`Current working directory: ${process.cwd()}`)
  console.error(`Script directory: ${scriptDir}`)
  process.exit(1)
}

// Spawn node with tsconfig-paths/register
const nodeProcess = spawn("node", ["-r", "tsconfig-paths/register", distPath], {
  stdio: "inherit",
  cwd: scriptDir,
})

nodeProcess.on("error", (error) => {
  console.error("Failed to start node process:", error)
  process.exit(1)
})

nodeProcess.on("exit", (code) => {
  process.exit(code || 0)
})
