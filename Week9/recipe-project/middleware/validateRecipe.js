const allowedDifficulties = ['easy', 'medium', 'hard'];

function isString(v) { return typeof v === 'string' && v.trim().length > 0; }

function validateRecipe(req, res, next) {
  const data = req.body;
  const errors = [];

  // title
  if (!isString(data.title) || data.title.trim().length < 3 || data.title.trim().length > 100) {
    errors.push('title: Required string 3-100 chars');
  }

  // description
  if (!isString(data.description) || data.description.trim().length < 10 || data.description.trim().length > 500) {
    errors.push('description: Required string 10-500 chars');
  }

  // ingredients
  if (!Array.isArray(data.ingredients) || data.ingredients.length < 1) {
    errors.push('ingredients: Required array with at least 1 item');
  } else if (!data.ingredients.every(i => isString(i))) {
    errors.push('ingredients: every item must be a non-empty string');
  }

  // instructions
  if (!Array.isArray(data.instructions) || data.instructions.length < 1) {
    errors.push('instructions: Required array with at least 1 item');
  } else if (!data.instructions.every(i => isString(i))) {
    errors.push('instructions: every item must be a non-empty string');
  }

  // cookingTime
  if (typeof data.cookingTime !== 'number' || !Number.isFinite(data.cookingTime) || data.cookingTime <= 0) {
    errors.push('cookingTime: Required positive number (minutes)');
  }

  // servings
  if (typeof data.servings !== 'number' || !Number.isInteger(data.servings) || data.servings <= 0) {
    errors.push('servings: Required positive integer');
  }

  // difficulty
  if (!isString(data.difficulty) || !allowedDifficulties.includes(data.difficulty)) {
    errors.push('difficulty: Required one of: "easy", "medium", "hard"');
  }

  if (errors.length) {
    return res.status(400).json({ error: true, message: errors.join('; '), statusCode: 400 });
  }

  next();
}

module.exports = validateRecipe;