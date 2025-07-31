class APIManager {
    constructor() {
        // Base URLs for APIs (optional, but good practice)
        this.randomUserBase = 'https://randomuser.me/api/';
        this.kanyeApi = 'https://api.kanye.rest/';
        this.pokeApiBase = 'https://pokeapi.co/api/v2/pokemon/';
        this.baconIpsumBase = 'https://baconipsum.com/api/';
    }

    async #fetchData(url, errorMessage) { // Private helper method
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return await response.json();
        } catch (error) {
            console.error(`Error fetching ${errorMessage}:`, error);
            // You might want to throw a custom error or return a specific error state
            throw new Error(`Failed to fetch ${errorMessage}.`);
        }
    }

    async fetchUsers(count = 1) {
        return this.#fetchData(`${this.randomUserBase}?results=${count}`, 'random users');
    }

    async fetchKanyeQuote() {
        const data = await this.#fetchData(this.kanyeApi, 'Kanye quote');
        return data.quote;
    }

    async fetchRandomPokemon() {
        const randomId = Math.floor(Math.random() * 1025) + 1; // 1 to 1025
        const data = await this.#fetchData(`${this.pokeApiBase}${randomId}/`, 'Pokemon');
        return {
            name: data.name,
            image: data.sprites.front_default // Or other sprites
        };
    }

    async fetchBaconIpsum(paragraphs = 3) {
        const data = await this.#fetchData(`${this.baconIpsumBase}?type=all-meat&paras=${paragraphs}`, 'Bacon Ipsum');
        return data.join('\n\n');
    }
}