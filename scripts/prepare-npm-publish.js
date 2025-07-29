const fs = require('fs');
const path = require('path');

// Read the version from the main package.json
const rootPackageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));

// Read the dist package.json
const distPackagePath = path.join('dist', 'ngx-markjs', 'package.json');
const distPackageJson = JSON.parse(fs.readFileSync(distPackagePath, 'utf8'));

// Update the version to match the release version
// Semantic-release will have already updated the version in projects/ngx-markjs/package.json
// We need to make sure the dist version matches
const sourcePackagePath = path.join('projects', 'ngx-markjs', 'package.json');
const sourcePackageJson = JSON.parse(fs.readFileSync(sourcePackagePath, 'utf8'));
distPackageJson.version = sourcePackageJson.version;

// Write back the updated package.json
fs.writeFileSync(distPackagePath, JSON.stringify(distPackageJson, null, 2));

// Copy README to dist
const readmeSrc = 'README.md';
const readmeDest = path.join('dist', 'ngx-markjs', 'README.md');
fs.copyFileSync(readmeSrc, readmeDest);

console.log(`Prepared package for publishing version ${distPackageJson.version}`);