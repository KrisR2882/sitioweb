const RickAndMortyModel = {
    async getCharacters() {
        try {
            const response = await axios.get('https://rickandmortyapi.com/api/character');
            return response.data;
        } catch (error) {
            console.error('Error al obtener los personajes:', error);
            throw error;
        }
    }
};
