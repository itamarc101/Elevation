const fs = require('fs').promises;
const path = require('path');

const DATA_PATH = path.resolve(__dirname, '../routes/recipes.json');
async function readRecipes() {
  try {
    const raw = await fs.readFile(DATA_PATH, 'utf8');
    return JSON.parse(raw || '[]');
  } catch (err) {
    // If file not found, initialize with empty array
    if (err.code === 'ENOENT') return [];
    throw err;
  }
}

async function writeRecipes(recipes) {
  try {
    await fs.mkdir(path.dirname(DATA_PATH), { recursive: true });
    await fs.writeFile(DATA_PATH, JSON.stringify(recipes, null, 2), 'utf8');
  } catch (err) {
    throw err;
  }
}

module.exports = { readRecipes, writeRecipes };