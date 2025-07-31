const apiManager = new APIManager()
const renderer = new Renderer()
const userPage = new UserPage(apiManager, renderer)
userPage.generate()


$("#generate-user-btn").on("click", function() {
        userPage.generate(); // Call the generate method to fetch and display a new user
});

  