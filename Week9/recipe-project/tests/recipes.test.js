const request = require("supertest");
const app = require("../server"); // Make sure server.js exports the app
const fileHandler = require("../utils/fileHandler");

const mockRecipes = [
  {
    id: "1",
    title: "Test Recipe",
    description: "Desc",
    ingredients: ["a"],
    instructions: ["b"],
    cookingTime: 30,
    servings: 2,
    difficulty: "easy",
  },
];

describe("Recipe API", () => {
  beforeEach(() => {
    jest.spyOn(fileHandler, "readRecipes").mockResolvedValue([...mockRecipes]);
    jest.spyOn(fileHandler, "writeRecipes").mockResolvedValue();
  });
  test("should create a new recipe with valid data", async () => {
    const res = await request(app)
      .post("/api/recipes")
      .send({
        title: "Test Recipe",
        description: "A valid description",
        ingredients: ["ingredient1"],
        instructions: ["step1"],
        cookingTime: 10,
        servings: 2,
        difficulty: "easy",
      });
    expect(res.statusCode).toBe(201);
    expect(res.body.title).toBe("Test Recipe");
  });

  test("should fail to create a recipe with invalid data", async () => {
    const res = await request(app).post("/api/recipes").send({ title: "x" }); // missing required fields
    expect(res.statusCode).toBe(400);
    expect(res.body.error).toBe(true);
  });

  test("should retrieve all recipes", async () => {
    const res = await request(app).get("/api/recipes");
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  test("should retrieve a specific recipe", async () => {
    const res = await request(app).get("/api/recipes/1");
    expect(res.statusCode).toBe(200);
    expect(res.body.id).toBe("1");
  });

  test("should update an existing recipe", async () => {
    const res = await request(app)
      .put("/api/recipes/1")
      .send({
        title: "Updated",
        description: "Updated description",
        ingredients: ["ingredient1"],
        instructions: ["step1"],
        cookingTime: 15,
        servings: 3,
        difficulty: "medium",
      });
    expect(res.statusCode).toBe(200);
    expect(res.body.title).toBe("Updated");
  });

  test("should delete a recipe", async () => {
    const res = await request(app).delete("/api/recipes/1");
    expect(res.statusCode).toBe(204);
  });

  test("should filter recipes by difficulty", async () => {
    const res = await request(app).get("/api/recipes?difficulty=easy");
    expect(res.statusCode).toBe(200);
    // Add more checks as needed
  });

  test("should return 404 for invalid recipe ID", async () => {
    const res = await request(app).get("/api/recipes/invalid-id");
    expect(res.statusCode).toBe(404);
    expect(res.body.error).toBe(true);
  });
});
