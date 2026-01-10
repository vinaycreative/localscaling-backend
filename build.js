#!/usr/bin/env node

const fs = require("fs")
const path = require("path")
const { execSync } = require("child_process")

console.log("Building TypeScript...")
execSync("tsc", { stdio: "inherit" })

const projectRoot = __dirname
const distAtRoot = path.join(projectRoot, "dist")
const srcDir = path.join(projectRoot, "src")
const distInSrc = path.join(srcDir, "dist")

// Check if we need to create dist inside src (for Render when root is src)
if (fs.existsSync(distAtRoot) && fs.existsSync(srcDir)) {
  if (!fs.existsSync(distInSrc)) {
    console.log("Creating dist reference inside src directory for Render compatibility...")
    
    // Try symlink first (works on Unix systems)
    try {
      const relativePath = path.relative(srcDir, distAtRoot)
      fs.symlinkSync(relativePath, distInSrc, "dir")
      console.log("✓ Symlink created: src/dist -> dist")
    } catch (err) {
      // If symlink fails, copy the files
      console.log("Symlink failed, copying files instead...")
      
      function copyRecursive(src, dest) {
        fs.mkdirSync(dest, { recursive: true })
        const entries = fs.readdirSync(src, { withFileTypes: true })
        
        for (const entry of entries) {
          const srcPath = path.join(src, entry.name)
          const destPath = path.join(dest, entry.name)
          
          if (entry.isDirectory()) {
            copyRecursive(srcPath, destPath)
          } else {
            fs.copyFileSync(srcPath, destPath)
          }
        }
      }
      
      copyRecursive(distAtRoot, distInSrc)
      console.log("✓ Files copied to src/dist")
    }
  }
}

console.log("✓ Build complete!")
