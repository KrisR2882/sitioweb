const RickAndMortyView = {
    renderCharacters(characters) {
        let characterCards = '';
        characters.forEach(character => {
            characterCards += `
                <div class="col-lg-4 col-md-6 mb-4">
                    <div class="card h-100">
                        <img src="${character.image}" class="card-img-top" alt="${character.name}">
                        <div class="card-body">
                            <h5 class="card-title">${character.name}</h5>
                            <p class="card-text">Especie: ${character.species}</p>
                            <p class="card-text">Género: ${character.gender}</p>
                            <p class="card-text">Origen: ${character.origin.name}</p>
                            <p class="card-text">Ubicación actual: ${character.location.name}</p>
                        </div>
                    </div>
                </div>
            `;
        });
        document.getElementById('app').innerHTML = `
            <div class="row">
                ${characterCards}
            </div>
        `;
    }
};
