// renderer.js

class Renderer {
    constructor() {
        // Cache jQuery selectors for performance and readability
        this.$mainUserPicture = $("#main-user-picture");
        this.$mainUserName = $("#main-user-name");
        this.$mainUserLocation = $("#main-user-location");
        this.$kanyeQuote = $("#kanye-quote");
        this.$quoteAuthor = $(".quote-author"); // Assuming this is for Kanye West
        this.$pokemonName = $("#pokemon-name"); // This should be a span within the H3
        this.$pokemonImage = $("#pokemon-image");
        this.$aboutMeText = $("#about-me-text");
        this.$friendsList = $("#friends-list");
        this.$generateUserBtn = $("#generate-user-btn");
        this.$saveUserBtn = $("#save-user-btn");
        this.$loadUserBtn = $("#load-user-btn");
        this.$savedUsersDropdown = $("#saved-users-dropdown");
        
        // Error message element (ensure this div exists in your index.html)
        // <div id="error-message" style="color: red; text-align: center; margin-top: 10px; display: none;"></div>
        this.$errorMessage = $("#error-message");
    }

    /**
     * Renders the main user's profile information.
     * @param {object} user - The user object from Random User Generator API.
     */
    renderMainUser(user) {
        if (!user) {
            console.error("Renderer: No user data provided for main user.");
            return;
        }
        this.$mainUserPicture.attr("src", user.picture.large || 'https://via.placeholder.com/150')
                             .attr("alt", `${user.name.first} ${user.name.last}`);
        this.$mainUserName.text(`${user.name.first} ${user.name.last}`);
        this.$mainUserLocation.text(`${user.location.city}, ${user.location.state}`);
    }

    /**
     * Renders the list of friends.
     * @param {Array<object>} friends - An array of friend user objects.
     */
    renderFriends(friends) {
        this.$friendsList.empty(); // Clear existing friends
        if (!friends || friends.length === 0) {
            this.$friendsList.append("<li>No friends found.</li>");
            return;
        }
        friends.forEach(friend => {
            this.$friendsList.append(`<li>${friend.name.first} ${friend.name.last}</li>`);
        });
    }

    /**
     * Renders the Kanye West quote.
     * @param {string} quote - The quote string.
     */
    renderKanyeQuote(quote) {
        this.$kanyeQuote.text(`"${quote}"`);
        this.$quoteAuthor.text("-Kanye West"); // The author is always Kanye for this API
    }

    /**
     * Renders the random Pokemon's name and image.
     * Applies proper casing to the Pokemon name.
     * @param {object} pokemon - The Pokemon object with name and image URL.
     */
    renderPokemon(pokemon) {
        if (!pokemon || !pokemon.name || !pokemon.image) {
            console.error("Renderer: Invalid Pokemon data provided.", pokemon);
            this.$pokemonName.text("Unknown");
            this.$pokemonImage.attr("src", "https://via.placeholder.com/100").attr("alt", "Unknown Pokemon");
            return;
        }
        // Extension: Proper Case for Pokemon Name
        const properCaseName = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
        this.$pokemonName.text(properCaseName);
        this.$pokemonImage.attr("src", pokemon.image).attr("alt", properCaseName);
    }

    /**
     * Renders the "About me" text.
     * @param {string} text - The Bacon Ipsum text.
     */
    renderAboutMe(text) {
        this.$aboutMeText.text(text);
    }

    /**
     * Populates the dropdown with saved user names.
     * @param {object} savedUsers - An object where keys are user names and values are user data.
     */
    populateSavedUsersDropdown(savedUsers) {
        this.$savedUsersDropdown.empty().append('<option value="">Select a saved user</option>');
        for (const name in savedUsers) {
            if (Object.hasOwnProperty.call(savedUsers, name)) { // Best practice to check ownership
                this.$savedUsersDropdown.append(`<option value="${name}">${name}</option>`);
            }
        }
    }

    /**
     * Displays an error message on the page.
     * @param {string} message - The error message to display.
     */
    displayError(message) {
        this.$errorMessage.text(`Error: ${message}`).show();
    }

    /**
     * Clears any displayed error messages.
     */
    clearError() {
        this.$errorMessage.empty().hide();
    }

    /**
     * Toggles the loading state of the page, disabling/enabling buttons and updating text.
     * @param {boolean} isLoading - True to show loading state, false to hide.
     */
    toggleLoading(isLoading) {
        this.$generateUserBtn.prop("disabled", isLoading);
        this.$saveUserBtn.prop("disabled", isLoading);
        this.$loadUserBtn.prop("disabled", isLoading);
        this.$savedUsersDropdown.prop("disabled", isLoading);

        this.$generateUserBtn.text(isLoading ? "Generating..." : "Generate User");
    }

    /**
     * Toggles the visibility of the friends list (for a "toggle friends" button if you add one).
     * @param {boolean} show - True to show, false to hide.
     */
    toggleFriendsListVisibility(show) {
        // This assumes you add a "show" class to your CSS for display: block/flex
        // and its absence for display: none.
        this.$friendsList.toggleClass("show", show);
    }
}
