fetch('https://rickandmortyapi.com/api/character').then((response)=> response.json())
    .then(characters =>{
        let charactersGallery =  document.getElementById('container')
        console.log({charactersGallery})
        charactersGallery.innerHTML = "";

        let content = '';
         characters.results.forEach(character => {

            const card = document.createElement('div')
            card.classList.add('card__character')

            const image = document.createElement('img');
            image.classList.add('character__image');
            image.src = character.image;

            const characterInfo = document.createElement('section')
            characterInfo.classList.add('text__container')

            const name = document.createElement('h2')
            name.classList.add('character__name')
            name.textContent = character.name;

            const codeStatus = document.createElement('span')
            codeStatus.classList.add('status__code', character.status === 'Dead' ? 'status__code--dead' : 'status__code--active')

            const status = document.createElement('span');
            status.classList.add('character__status');
            status.textContent = character.status;


            characterInfo.append(name, codeStatus, status);
            card.append(image, characterInfo)
            charactersGallery.append(card)
        });
    })
    .catch(console.log)