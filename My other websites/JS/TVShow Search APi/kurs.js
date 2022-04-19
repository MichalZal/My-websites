const form = document.querySelector('#searchFrom')
const container = document.querySelector('.container')

form.addEventListener('submit', async (e) => {
  e.preventDefault()

  try {
    let searchTerm = form.elements.query.value
    const res = await getShows(searchTerm) // pobieramy shows
    container.innerHTML = ''
    await makeImages(res.data) // wyświetlamy wszystkie shows
    form.elements.query.value = ''; // czyścimy input.
  }
  catch (e) {
    console.log(`error with query: ${e}`)
  }
})

const getShows = async (id) => {
  try {
    const config = {params: {q: id}} // dodawanie parametru. Czyli inputa
    return axios.get(`https://api.tvmaze.com/search/shows`, config)
  } 
  catch (e) {
    console.log(`Problem z odczytaniem filmów: ${e}`)
    return 'Brak filmów'
  }
}

const makeImages = async (shows) => {
  try {
    for await (let result of shows) { // iterujemy przez wszystkie filmy
      if (result.show.image) { // jeśli film istnieje to robimy to: reszte ingerujemy.
        const img = document.createElement('img') // tworzymy nowe img
        img.src = result.show.image.medium; // dodajemy im atrybut src
        container.append(img) // dodajemy je do containera
      } else return null
    }
  }
  catch (e) {
    console.log(`problem z wyświetleniem filmów: ${e}`)
  }
}


