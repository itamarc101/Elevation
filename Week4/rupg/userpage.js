class UserPage {
    /**
     * @param {APIManager} apiManager - An instance of the APIManager class.
     * @param {Renderer} renderer - An instance of the Renderer class.
     */
    constructor(apiManager, renderer) {
        this.apiManager = apiManager;
        this.renderer = renderer;
        this.currentRenderedData = null; // Stores the data of the currently displayed user for saving

        // Bind event listeners to the correct 'this' context of UserPage
        // Using jQuery event delegation or direct binding in main.js might be cleaner,
        // but this approach keeps event logic within the controller class.
        $("#generate-user-btn").on("click", this.generate.bind(this));
        $("#save-user-btn").on("click", this.saveCurrentUserPage.bind(this));
        $("#load-user-btn").on("click", this.loadSelectedUserPage.bind(this));

        // Initial population of the dropdown when the page loads
        this.loadSavedUsersIntoDropdown();
    }

    async generate() {
    this.renderer.clearError();
    this.renderer.toggleLoading(true);

    try {
        const [usersResponse, kanyeQuote, pokemonData, aboutMeText] = await Promise.all([
            this.apiManager.fetchUsers(7),
            this.apiManager.fetchKanyeQuote(),
            this.apiManager.fetchRandomPokemon(),
            this.apiManager.fetchBaconIpsum(3)
        ]);

        const usersArray = usersResponse.results;
        if (!usersArray || usersArray.length < 7) {
            throw new Error("Failed to get enough user data from Random User API.");
        }

        const mainUser = usersArray[0];
        const friends = usersArray.slice(1, 7);

        // ✅ This part was missing — you MUST render the data to the page:
        this.renderer.renderMainUser(mainUser);
        this.renderer.renderFriends(friends);
        this.renderer.renderKanyeQuote(kanyeQuote);
        this.renderer.renderPokemon(pokemonData);
        this.renderer.renderAboutMe(aboutMeText);

        // ✅ Save current state
        this.currentRenderedData = {
            mainUser,
            friends,
            kanyeQuote,
            pokemonData,
            aboutMeText
        };

    } catch (error) {
        console.error("Error generating user page:", error);
        this.renderer.displayError(`Could not generate user page: ${error.message || 'An unknown error occurred.'}`);
    } finally {
        this.renderer.toggleLoading(false);
    }
}


    /**
     * Saves the currently displayed user page data to Local Storage.
     */
    saveCurrentUserPage() {
        if (!this.currentRenderedData) {
            alert("Please generate a user page first before attempting to save!");
            return;
        }

        // Use the main user's full name as the key for saving
        const userName = `${this.currentRenderedData.mainUser.name.first} ${this.currentRenderedData.mainUser.name.last}`;
        
        // Retrieve existing saved users from Local Storage
        let savedUsers = JSON.parse(localStorage.getItem('rup_saved_users') || '{}');

        // Check if a user with this name already exists and ask for confirmation to overwrite
        if (savedUsers[userName] && !confirm(`A user named "${userName}" already exists. Do you want to overwrite their saved data?`)) {
            return; // User cancelled the overwrite
        }

        // Save the current user's data
        savedUsers[userName] = this.currentRenderedData;
        localStorage.setItem('rup_saved_users', JSON.stringify(savedUsers));

        alert(`User "${userName}" has been successfully saved!`);
        this.loadSavedUsersIntoDropdown(); // Refresh the dropdown to include the newly saved user
    }

    /**
     * Loads a selected user's page data from Local Storage and renders it.
     */
    loadSelectedUserPage() {
        const selectedUserName = $("#saved-users-dropdown").val();

        if (!selectedUserName) {
            alert("Please select a user from the 'Select a saved user' dropdown to load.");
            return;
        }

        // Retrieve all saved users
        const savedUsers = JSON.parse(localStorage.getItem('rup_saved_users') || '{}');
        const userData = savedUsers[selectedUserName];

        if (userData) {
            // Render the loaded data to the page
            this.renderer.renderMainUser(userData.mainUser);
            this.renderer.renderFriends(userData.friends);
            this.renderer.renderKanyeQuote(userData.kanyeQuote);
            this.renderer.renderPokemon(userData.pokemonData);
            this.renderer.renderAboutMe(userData.aboutMeText);
            
            // Update the currentRenderedData to reflect the loaded user
            this.currentRenderedData = userData; 
            this.renderer.clearError(); // Clear any previous errors
            alert(`User "${selectedUserName}" loaded successfully!`);
        } else {
            // Should not happen if dropdown is correctly populated, but good for robustness
            this.renderer.displayError(`Error: Saved data for "${selectedUserName}" not found.`);
            alert(`Error: Saved data for "${selectedUserName}" could not be found.`);
        }
    }

    /**
     * Populates the "saved users" dropdown menu by fetching data from Local Storage.
     * This method is called during initialization and after a user is saved.
     */
    loadSavedUsersIntoDropdown() {
        const savedUsers = JSON.parse(localStorage.getItem('rup_saved_users') || '{}');
        this.renderer.populateSavedUsersDropdown(savedUsers);
    }
}
