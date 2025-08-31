const express = require("express");
const router = express.Router();
const recipesController = require("../controllers/recipesController");
const validateRecipe = require("../middleware/validateRecipe");

// GET /api/recipes
router.get("/", recipesController.getAllRecipes);

// GET /api/recipes/:id
router.get("/:id", recipesController.getRecipeById);

// POST /api/recipes
router.post("/", validateRecipe, recipesController.createRecipe);

// PUT /api/recipes/:id
router.put("/:id", validateRecipe, recipesController.updateRecipe);

// DELETE /api/recipes/:id
router.delete("/:id", recipesController.deleteRecipe);

// GET /api/recipes/stats
router.get("/stats", recipesController.getRecipeStats);

module.exports = router;
