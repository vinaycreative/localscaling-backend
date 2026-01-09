#!/usr/bin/env node

// This script ensures we're running from the correct directory
const path = require("path")
const { spawn } = require("child_process")
const fs = require("fs")

// Get the directory where this script is located (project root)
const scriptDir = __dirname

// Try multiple possible locations for dist/server.js
const possiblePaths = [
  path.join(scriptDir, "dist", "server.js"), // Normal case: dist at project root
  path.join(scriptDir, "..", "dist", "server.js"), // If running from src directory
  path.join(process.cwd(), "dist", "server.js"), // From current working directory
]

let distPath = null
for (const possiblePath of possiblePaths) {
  if (fs.existsSync(possiblePath)) {
    distPath = possiblePath
    break
  }
}

if (!distPath) {
  console.error("Error: Cannot find dist/server.js in any expected location")
  console.error(`Current working directory: ${process.cwd()}`)
  console.error(`Script directory: ${scriptDir}`)
  console.error("Tried paths:", possiblePaths)
  process.exit(1)
}

console.log(`Starting server from: ${distPath}`)
console.log(`Working directory: ${scriptDir}`)

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
