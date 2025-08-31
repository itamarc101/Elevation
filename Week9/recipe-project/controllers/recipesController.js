const { v4: uuidv4 } = require("uuid");
const { readRecipes, writeRecipes } = require("../utils/fileHandler");

// Helpers
function matchesQuery(recipe, { difficulty, maxCookingTime, search }) {
  if (difficulty && recipe.difficulty !== difficulty) return false;
  if (maxCookingTime && recipe.cookingTime > Number(maxCookingTime))
    return false;
  if (search) {
    const q = search.toLowerCase();
    if (
      !recipe.title.toLowerCase().includes(q) &&
      !recipe.description.toLowerCase().includes(q)
    )
      return false;
  }
  return true;
}

async function getAllRecipes(req, res, next) {
  try {
    const { difficulty, maxCookingTime, search } = req.query;
    const recipes = await readRecipes();
    const filtered = recipes.filter((r) =>
      matchesQuery(r, { difficulty, maxCookingTime, search })
    );
    res.json(filtered);
  } catch (err) {
    next(err);
  }
}

async function getRecipeById(req, res, next) {
  try {
    const { id } = req.params;
    const recipes = await readRecipes();
    const found = recipes.find((r) => r.id === id);
    if (!found)
      return res
        .status(404)
        .json({ error: true, message: "Recipe not found", statusCode: 404 });
    res.json(found);
  } catch (err) {
    next(err);
  }
}

async function createRecipe(req, res, next) {
  try {
    const payload = req.body;
    const recipes = await readRecipes();
    const newRecipe = {
      id: uuidv4(),
      title: payload.title.trim(),
      description: payload.description.trim(),
      ingredients: payload.ingredients.map((i) => i.trim()),
      instructions: payload.instructions.map((s) => s.trim()),
      cookingTime: payload.cookingTime,
      servings: payload.servings,
      difficulty: payload.difficulty,
      rating: payload.rating || null,
      createdAt: new Date().toISOString(),
    };
    recipes.push(newRecipe);
    await writeRecipes(recipes);
    res.status(201).json(newRecipe);
  } catch (err) {
    next(err);
  }
}

async function updateRecipe(req, res, next) {
  try {
    const { id } = req.params;
    const payload = req.body;
    const recipes = await readRecipes();
    const idx = recipes.findIndex((r) => r.id === id);
    if (idx === -1)
      return res
        .status(404)
        .json({ error: true, message: "Recipe not found", statusCode: 404 });

    // Replace the object (PUT semantics) — keep createdAt and id
    const updated = {
      ...recipes[idx],
      title: payload.title.trim(),
      description: payload.description.trim(),
      ingredients: payload.ingredients.map((i) => i.trim()),
      instructions: payload.instructions.map((s) => s.trim()),
      cookingTime: payload.cookingTime,
      servings: payload.servings,
      difficulty: payload.difficulty,
      rating: payload.rating || recipes[idx].rating,
    };

    recipes[idx] = updated;
    await writeRecipes(recipes);
    res.json(updated);
  } catch (err) {
    next(err);
  }
}

async function deleteRecipe(req, res, next) {
  try {
    const { id } = req.params;
    const recipes = await readRecipes();
    const idx = recipes.findIndex((r) => r.id === id);
    if (idx === -1)
      return res
        .status(404)
        .json({ error: true, message: "Recipe not found", statusCode: 404 });
    recipes.splice(idx, 1);
    await writeRecipes(recipes);
    // 204 No Content
    res.status(204).end();
  } catch (err) {
    next(err);
  }
}

async function getStats(req, res, next) {
  try {
    const recipes = await readRecipes();
    const total = recipes.length;
    const avgCookingTime =
      total === 0
        ? 0
        : recipes.reduce((s, r) => s + (r.cookingTime || 0), 0) / total;

    const byDifficulty = recipes.reduce((acc, r) => {
      acc[r.difficulty] = (acc[r.difficulty] || 0) + 1;
      return acc;
    }, {});

    // Most common ingredients (bonus)
    const ingredientCounts = {};
    recipes.forEach((r) => {
      (r.ingredients || []).forEach((i) => {
        const key = i.toLowerCase();
        ingredientCounts[key] = (ingredientCounts[key] || 0) + 1;
      });
    });
    const mostCommonIngredients = Object.entries(ingredientCounts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5)
      .map(([ingredient, count]) => ({ ingredient, count }));

    res.json({
      totalRecipes: total,
      averageCookingTime: avgCookingTime,
      recipesByDifficulty: byDifficulty,
      mostCommonIngredients,
    });
  } catch (err) {
    next(err);
  }
}

module.exports = {
  getAllRecipes,
  getRecipeById,
  createRecipe,
  updateRecipe,
  deleteRecipe,
  getRecipeStats: getStats,
};
