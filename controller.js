const RickAndMortyController = {
    async showCharacters() {
        try {
            const response = await RickAndMortyModel.getCharacters();
            RickAndMortyView.renderCharacters(response.results);
        } catch (error) {
            console.error('Error en el controlador:', error);
        }
    }
};


RickAndMortyController.showCharacters();
