function exibirMensagem() {
    alert("Pokemon escolhido com sucesso!");
}

let pokemons = [
    {
      name: "Pikachu",
      image: "pikachu.jpg",
      description: "Este Pokemon é famoso por sua eletricidade. Ele é brilhante e adorável e se tornou o mascote da franquia Pokemon."
    },
    {
      name: "Charizard",
      image: "charizard.jpg",
      description: "Charizard é um Pokemon do tipo fogo/voador. Ele é um dos Pokemon mais populares e é conhecido por sua aparência intimidadora e poderosos ataques de fogo."
    },
    // adicionar mais pokemons aqui
  ];



  function showPokemon(id, name, img) {
    // Atualiza o nome e imagem do Pokémon na tela
    document.getElementById("pokemon-img").src = img;
    document.getElementById("pokemon-name").textContent = name;
  
    // Faz uma requisição para obter informações do Pokémon a partir do seu ID
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then(response => response.json())
      .then(data => {
        // Obtém as informações relevantes do Pokémon
        const height = data.height / 10; // converte de decímetros para metros
        const weight = data.weight / 10; // converte de hectogramas para quilogramas
        const types = data.types.map(type => type.type.name).join(", ");
  
        // Atualiza o texto com as informações do Pokémon
        const pokemonInfo = `Altura: ${height} m\nPeso: ${weight} kg\nTipo(s): ${types}`;
        alert(pokemonInfo);
      })
      .catch(error => console.error(error));
  }

  const pokemonList = [
    {
      name: "Bulbasaur",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
      info: "Bulbasaur is a grass/poison type Pokémon. It can evolve into Ivysaur and then into Venusaur. Its special ability is Overgrow, which increases the power of its grass-type moves when its HP is low."
    },
    {
      name: "Charmander",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
      info: "Charmander is a fire type Pokémon. It can evolve into Charmeleon and then into Charizard. Its special ability is Blaze, which increases the power of its fire-type moves when its HP is low."
    },
    {
      name: "Squirtle",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
      info: "Squirtle is a water type Pokémon. It can evolve into Wartortle and then into Blastoise. Its special ability is Torrent, which increases the power of its water-type moves when its HP is low."
    }
  ];
  
  const screenImage = document.querySelector(".screen img");
  const screenText = document.querySelector(".screen p");
  const leftButton = document.querySelector(".buttons .left");
  const rightButton = document.querySelector(".buttons .right");
  
  let currentPokemon = 0;
  
  function updateScreen() {
    screenImage.src = pokemonList[currentPokemon].image;
    screenImage.alt = pokemonList[currentPokemon].name;
    screenText.textContent = pokemonList[currentPokemon].name;
  }
  
  function updatePokemon(direction) {
    if (direction === "left") {
      currentPokemon--;
      if (currentPokemon < 0) {
        currentPokemon = pokemonList.length - 1;
      }
    } else if (direction === "right") {
      currentPokemon++;
      if (currentPokemon >= pokemonList.length) {
        currentPokemon = 0;
      }
    }
    updateScreen();
  }
  
  leftButton.addEventListener("click", function() {
    updatePokemon("left");
  });
  
  rightButton.addEventListener("click", function() {
    updatePokemon("right");
  });

  updateScreen();
  
  const pokedex = [
    {
      name: 'Bulbasaur',
      number: '001',
      image: 'https://paintbynumberscanvas.com/wp-content/uploads/2021/11/Bulbasaur-Pokemon-paint-by-number.jpg',
      description: 'A strange seed was planted on its back at birth. The plant sprouts and grows with this Pokémon.'
    },
    {
      name: 'Charmander',
      number: '004',
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png',
      description: 'The flame that burns at the tip of its tail is an indication of its emotions. The flame wavers when Charmander is enjoying itself. If the Pokémon becomes enraged, the flame burns fiercely.'
    },
    {
      name: 'Squirtle',
      number: '007',
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png',
      description: 'When it retracts its long neck into its shell, it squirts out water with vigorous force.'
    },]
      
      const screen = document.querySelector('.screen');
      const name = document.querySelector('.name');
      const number = document.querySelector('.number');
      const description = document.querySelector('.description');
      const image = document.querySelector('.pokemon-image');
      const prevButton = document.querySelector('.prev-button');
      const nextButton = document.querySelector('.next-button');
      
      let currentIndex = 0;
      
      function updatePokemon(pokemon) {
        name.textContent = pokemon.name;
        number.textContent = `#${pokemon.number}`;
        description.textContent = pokemon.description;
        image.src = pokemon.image;
      }
      
      function prevPokemon() {
        currentIndex--;
        if (currentIndex < 0) {
          currentIndex = pokedex.length - 1;
        }
        updatePokemon(pokedex[currentIndex]);
      }
      
      function nextPokemon() {
        currentIndex++;
        if (currentIndex >= pokedex.length) {
          currentIndex = 0;
        }
        updatePokemon(pokedex[currentIndex]);
      }
      
      prevButton.addEventListener('click', prevPokemon);
      nextButton.addEventListener('click', nextPokemon);
      
      updatePokemon(pokedex[currentIndex]);
      


      function previous() {
        let pokemonId = document.pokemonKeySend.pokemonId.value
        pokemonId = (Number(pokemonId)-1 <= 1) ? 1 : Number(pokemonId)-1;
        getPokemon(pokemonId)
    }
    
    function next() {
        let pokemonId = document.pokemonKeySend.pokemonId.value
        pokemonId = (Number(pokemonId)+1 >= 898) ? 898 : Number(pokemonId)+1;
        getPokemon(pokemonId)
    }
    
    function pokemonKeyId() {
        let pokemonId = document.pokemonKeySend.pokemonId.value
        pokemonId = (pokemonId <= 1) ? 1 : pokemonId;
        pokemonId = (pokemonId >= 898) ? 898 : pokemonId;
        getPokemon(pokemonId)
    }
    
    function getPokemon(id = 1) {  
        typesJson = '{'+
        '"bug": "https://raw.githubusercontent.com/luizbinario/pokemon-type-icons/main/icons/bug.svg",'+
        '"dark": "https://raw.githubusercontent.com/luizbinario/pokemon-type-icons/main/icons/dark.svg",'+
        '"dragon": "https://raw.githubusercontent.com/luizbinario/pokemon-type-icons/main/icons/dragon.svg",'+
        '"electric": "https://raw.githubusercontent.com/luizbinario/pokemon-type-icons/main/icons/electric.svg",'+
        '"fairy": "https://raw.githubusercontent.com/luizbinario/pokemon-type-icons/main/icons/fairy.svg",'+
        '"fighting": "https://raw.githubusercontent.com/luizbinario/pokemon-type-icons/main/icons/fighting.svg",'+
        '"fire": "https://raw.githubusercontent.com/luizbinario/pokemon-type-icons/main/icons/fire.svg",'+
        '"flying": "https://raw.githubusercontent.com/luizbinario/pokemon-type-icons/main/icons/flying.svg",'+
        '"ghost": "https://raw.githubusercontent.com/luizbinario/pokemon-type-icons/main/icons/ghost.svg",'+
        '"grass": "https://raw.githubusercontent.com/luizbinario/pokemon-type-icons/main/icons/grass.svg",'+
        '"ground": "https://raw.githubusercontent.com/luizbinario/pokemon-type-icons/main/icons/ground.svg",'+
        '"ice": "https://raw.githubusercontent.com/luizbinario/pokemon-type-icons/main/icons/ice.svg",'+
        '"normal": "https://raw.githubusercontent.com/luizbinario/pokemon-type-icons/main/icons/normal.svg",'+
        '"poison": "https://raw.githubusercontent.com/luizbinario/pokemon-type-icons/main/icons/poison.svg",'+
        '"psychic": "https://raw.githubusercontent.com/luizbinario/pokemon-type-icons/main/icons/psychic.svg",'+
        '"rock": "https://raw.githubusercontent.com/luizbinario/pokemon-type-icons/main/icons/rock.svg",'+
        '"steel": "https://raw.githubusercontent.com/luizbinario/pokemon-type-icons/main/icons/steel.svg",'+
        '"water": "https://raw.githubusercontent.com/luizbinario/pokemon-type-icons/main/icons/water.svg"'+
    '}'
      
        let pokemonApi = "https://pokeapi.co/api/v2/pokemon/"+id
        // let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
        let pokemonreq = new XMLHttpRequest();
        let typesreq = new XMLHttpRequest();
        pokemonreq.open("GET", pokemonApi, false)
        pokemonreq.send()
        let pokemonData = JSON.parse(pokemonreq.responseText)
        document.getElementById("pokemonId").value = pokemonData.id
        document.getElementById("name-display").innerHTML = pokemonData.name
        document.getElementById("imgPokemon").src = pokemonData.sprites.front_default
        document.getElementById("pokemonType").innerHTML = ""
        pokemonTypes = JSON.parse(typesJson)                     
        pokemonData.types.map(item => document.getElementById("pokemonType").innerHTML += "<img src="+pokemonTypes[item.type.name]+" height=50>")
    }


    const navToggle = document.querySelector('nav-toggle');
const nav = document.querySelector('nav');

navToggle.addEventListener('click', () => {
  nav.classList.toggle('active');
});
