#!/usr/bin/env node
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Create __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Get the component name from the command line arguments
const componentName = process.argv[2];
if (!componentName) {
  console.error(
    "Please provide a component name. Usage: npm run new-component ThisComponent"
  );
  process.exit(1);
}

// Define the component directory under src/components/
const componentsDir = path.join(__dirname, "..", "components");
const componentDir = path.join(componentsDir, componentName);

try {
  if (fs.existsSync(componentDir)) {
    console.error(`Error: Directory "${componentDir}" already exists.`);
    process.exit(1);
  }
  fs.mkdirSync(componentDir, { recursive: true });
} catch (err) {
  console.error(`Error creating directory "${componentDir}": ${err.message}`);
  process.exit(1);
}

// Define the content for the component file
const componentContent = `
import React from 'react';

const ${componentName} = () => {
  return (
    <>
      <p>This is a new component</p>
    </>
  );
};

export default ${componentName};
`.trim();

// Define the index.js path for the component folder
const componentIndexFilePath = path.join(componentDir, "index.js");

// Check if the component index.js exists and modify it
let componentIndexContent = "";

if (fs.existsSync(componentIndexFilePath)) {
  // Read existing index.js content
  componentIndexContent = fs.readFileSync(componentIndexFilePath, "utf-8");

  // Check if import already exists
  const importStatement = `import ${componentName} from './${componentName}';`;
  if (!componentIndexContent.includes(importStatement)) {
    componentIndexContent = `${importStatement}\n${componentIndexContent}`;
  }
} else {
  // Create index.js with import and export if it doesn’t exist
  componentIndexContent = `import ${componentName} from './${componentName}';\nexport { ${componentName} };`;
}

// Write the component file
try {
  fs.writeFileSync(
    path.join(componentDir, `${componentName}.jsx`),
    componentContent
  );
} catch (err) {
  console.error(`Error writing component file: ${err.message}`);
  process.exit(1);
}

// Write the component-level index.js file
try {
  fs.writeFileSync(componentIndexFilePath, componentIndexContent);
} catch (err) {
  console.error(`Error writing index file: ${err.message}`);
  process.exit(1);
}

// ---- Update components-level index.js ----

const componentsIndexPath = path.join(componentsDir, "index.js");

let componentsIndexContent = "";

if (fs.existsSync(componentsIndexPath)) {
  // Read the existing file content
  componentsIndexContent = fs.readFileSync(componentsIndexPath, "utf-8");

  // Check if export already exists
  const exportStatement = `export { ${componentName} } from './${componentName}';`;
  if (!componentsIndexContent.includes(exportStatement)) {
    // Append new export
    componentsIndexContent += `\n${exportStatement}`;
  }
} else {
  // Create new components index.js if it doesn’t exist
  componentsIndexContent = `export { ${componentName} } from './${componentName}';`;
}

// Write the updated components index.js file
try {
  fs.writeFileSync(componentsIndexPath, componentsIndexContent);
} catch (err) {
  console.error(`Error updating components index.js: ${err.message}`);
  process.exit(1);
}

console.log(
  `Component "${componentName}" created successfully at ${componentDir}`
);
console.log(
  `Updated components index.js to include: export { ${componentName} } from './${componentName}';`
);
