// const movies = [
//     {
//         title: "Siema",
//         score: 75
//     },
//     {
//         title: "ELo",
//         score: 80
//     },
//     {
//         title: "JOł",
//         score: 85
//     },
//     {
//         title: "SIemanko",
//         score: 90
//     },
//     {
//         title: "HElo",
//         score: 95
//     },
//     {
//         title: "Kaziu",
//         score: 90
//     },
//     {
//         title: "Witaj",
//         score: 85
//     },
// ]

// const moviesScore1 = movies.map((movie) => {
//     return `Movie ${movie.title} has ${movie.score} score`
// })

// const moviesScore2 = movies.map( movie => (
//     `Movie ${movie.title} has ${movie.score} score`
// ))

// const moviesScore3 = movies.map(movie => `movie ${movie.title}has ${movie.score / 10} score`)

// console.log(moviesScore1)
// console.log(moviesScore2)
// console.log(moviesScore3)

// console.log('Siemano')
// setTimeout(() => {
//     console.log("Siemano 3 sekundy później")
// }, 3000)
// setTimeout(() => {
//     console.log("Siemano po 6 sekundach")
// }, 6000)

// setTimeout(() => {
//     return ''
// }, 7000)

// const id = setInterval(() => {
//     console.log(Math.random())
// }, 500) // wykonsoluje liczbe co pół sekundy

// const nums = [9,8,7,6,5,4,3,2,1]
//                     // iterator      warunek 
// const odds = nums.filter(num => num % 2 == 1)
// console.log(odds) // [9,7,5,3,1]

// const smallNumbers = nums.filter(num => num < 5)
// console.log(smallNumbers) // [4,3,2,1]

// const movies = [
//     {
//         title: 'Amadeus',
//         score: 99,
//         year: 1984
//     },
//     {
//         title: 'Sharkando',
//         score: 35,
//         year: 2013
//     },
//     {
//         title: 'Alienus',
//         score: 64,
//         year: 2001
//     },
//     {
//         title: 'Kozac',
//         score: 85,
//         year: 1935
//     },
//     {
//         title: 'Witold',
//         score: 55,
//         year: 1999
//     },
//     {
//         title: 'Mariusz',
//         score: 19,
//         year: 2022
//     },
// ]

// const moviesEighty = movies.filter(movie => movie.score > 80)
// console.log(moviesEighty) // zwróci filmy ze scorem większym niż 80

// const words = ['dog', 'cat', 'apple', 'peach', 'log', 'bag', 'mountain', 'cloud', 'terrain']

// const isAnyMoreThan3 = words.some(word => word.length <= 3)
// const isEveryMoreThan3 = words.every(word => word.length <= 3)
// console.log(isAnyMoreThan3) // true
// console.log(isEveryMoreThan3) // false

// const exams = [13,67,34,86,67,34,98,34,1,76,4,55,87,44,76,34,78,92]

// const didAnyonePassedExam = exams.some(score => score >= 50)
// const didEveryonePassedExam = exams.every(score => score >= 50)
// console.log(didAnyonePassedExam) // true
// console.log(didEveryonePassedExam) // false 

// const odds = [3,5,7,9,11]

// const reducesOdss = odds.reduce((firstValue, secondValue) => firstValue - secondValue)
// console.log(reducesOdss) // 35
// // firstValue[0] = 3, secondValue[0] = 5
// // firstValue[1] = firstValue[0] + secondValue[0]       | secndValue[1] = 7
// // firstValue[2] = firstValue[1] + secondValue[1]       | secondValue[2] = 9
// // firstValue[3] = firstValue[2] + secondValue[2]       | secondValue[3] = 11
// // firstValue[4] = firstValue[3] + secondValue[3]       | sKONIEC
// //firstvalue[4] = 35

const prices = [9,1,19,49,30]

// let total1 = 0;
// for (let price of prices) {
//     total1 += price
// }
// console.log(total1) // 108


// const total2 = prices.reduce((total, price) => total + price)
// console.log(total2) // 108

// const maxElement = prices.reduce((min, max) => {
//     return max
// } )

// const minElement = prices.reduce((min, max) => {
//     return min
// } )

// console.log(maxElement) // 30
// console.log(minElement) // 9

// const highestRatedMovie = movies.reduce((bestMovie, currMovie) => {
//     if (currMovie.score > bestMovie.score) {
//         return currMovie
//     }

//     return bestMovie
// })

// console.log(highestRatedMovie)



// const evens = [2,4,6,8] 

// const evensReduced = evens.reduce((sum, num) => {
//     sum + num
// }, 100) // zaczyna od stu
// console.log(evensReduced)


// const person = {
//     firstName: 'Viggo',
//     lastName: 'Mortensen',
//     fullName: () => {
//         console.log(`${this.firstName} - ${this.lastName}`)
//     },
//     shoutName: function() {
//         setTimeout(() => {
//             console.log(`${this.firstName} ${this.lastName}`)
//         }, 1000)
//     }
// }

// person.shoutName()

// wywoływanie funkcji w funkcji na przykłądzie callstacku

// funkcją mnążąca x i y
// const multiply = (x,y) => x * y

// // funckja tworząca x do potęgi
// const square = x => multiply(x, x)
// // ta funkcja wywołuje multiply


// const isRightTriangle = (a,b,c) => {
//     if (square(a) + square(b) === square(c)) return true
//     else return false

//     // linie powyżej mozna też zapisać w ten sposób:
//     return square(a) + square(b) === square(c)
// } // ta funkcja wywołuje square i zwraca boola


// const triagnle = isRightTriangle(3,4,5)
// console.log(triagnle) // false

// console.log("Sending request to server") // wykona się pierwsze
 
// setTimeout(() => {
//     console.log("SENT")
// }, 3000) // javascript go wywołuje i oddaje do przeglądarki, a sam leci dalej

// setTimeout(() => {
//     console.log("Almost end")
// }, 2000) // javascript go wywołuje i oddaje do przeglądarki, a sam leci dalej.
// console.log("Koniec kompilowania")
// koniec kompilowania.



// // document.body.style.backgroundColor = 'red';
// // // kolor czerowny od razu

// // setTimeout(() => {
// //     document.body.style.backgroundColor = 'orange';

// //     setTimeout(() => {
// //         document.body.style.backgroundColor = 'yellow';

// //         setTimeout(() => {
// //             document.body.style.backgroundColor = 'green';
// //         }, 1000) // kolor zielony po 3 sekundach

// //     }, 1000) // kolor żółty po 2 sekundach

// // }, 1000) // kolor pomarańczowy po 1 sekundzie


// // // pętla rozpoczyna się dopiero po 4 sekundach
// // setInterval(() => {
// //     document.body.style.backgroundColor = 'red';
// //     // po 4 sekundach czerwony

// //     setTimeout(() => {
// //         document.body.style.backgroundColor = 'orange';

// //         setTimeout(() => {
// //             document.body.style.backgroundColor = 'yellow';

// //             setTimeout(() => {
// //                 document.body.style.backgroundColor = 'green';
// //             }, 1000) // po 7 sekundach zielony

// //         }, 1000) // po 6 sekundach zółty

// //     }, 1000) // po 5 sekundach pomarańczowy

// // }, 4000) // mijają 4 sekundy i od początku cały interwał

// // setTimeout(() => {
// //     document.body.style.backgroundColor = 'red'
// //     setTimeout(() => {
// //         document.body.style.backgroundColor = 'orange'
// //         setTimeout(() => {
// //             document.body.style.backgroundColor = 'green'
// //             setTimeout(() => {
// //                 document.body.style.backgroundColor = 'blue'
// //                 setTimeout(() => {
// //                     document.body.style.backgroundColor = 'black'
// //                 }, 1000)
// //             }, 1000)
// //         }, 1000)
// //     }, 1000)
// // }, 1000)

// // typowy pattern w node.JS lub Express
// // makeRequest(() => {
// //     console.log('failure')
// // }, () => {
// //     console.log('success')
// // }
// // // funckja ma dwa callbaki failure i succes


// // // a teraz kiedy jest succes to chcemy wykonać jakąs inną funkcje 
// // // wtedy to wyfgąda tragicznie. w ten sposób"
// // makeRequest(() => {
// //     console.log('failure')
// // }, () => {
// //     console.log('success')

// //     makeSecondRequest(() => {
// //             console.log('failure')
// //         }, () => {
// //             console.log('success')

// //             makeThirdRequest(() => {
// //                     console.log('failure')
// //                 }, () => {

// //                     console.log('success')
// //                 })
// //             console.log('success')
// //         })
// //     console.log('success')
// // })

// const fakeRequestCallback = (url, success, failure) => {
//     const delay1 = Math.floor(Math.random() * 4500) + 500;
//     setTimeout(() => {
//         if(delay1 > 4000) {
//             failure('connection Timeout')
//         } else {
//             success(`Here is your fake data from ${url}`)
//         }
//     }, delay1)
// }

// const fakeRequestPromise = (url) => {
//     return new Promise((resolve, reject) => {
//         const delay2 = Math.floor(Math.random() * (4500)) + 500;

//         setTimeout(() => {
//             if(delay2 > 4000) {
//                 reject('connection Timeout')
//             } else {
//                 resolve(`Here is your fake data from ${url}`)
//             }
//         }, delay2)
//     })
// }

// // res to `Here is your fake data from ${url}`
// // err to 'connection Timeout'

// fakeRequestCallback('siema.com', (res) => {
//     // udało się 
//     console.log('it worked')
//     console.log(res) 
//     fakeRequestCallback('siema.com/page2', (res) => {
//         // udało się po raz 2
//         console.log('it worked second time')
//         console.log(`second res: ${res}`)
//         fakeRequestCallback('siema.com/page2/header', (res) => {
//             // udało się po raz 3
//             console.log('it worked second time')
//             console.log(`second res: ${res}`)
//             fakeRequestCallback('siema.com/page2/main', (res) => {
//                 // udało się po raz 4
//                 console.log('it worked second time')
//                 console.log(`second res: ${res}`)
//             }, (err) => {
//                 // udało się 3 razy, ale potem się nie udało
//                 console.log('error 2')
//                 console.log(`description2: ${err}`)
//             })
//         }, (err) => {
//             // udało 2 razy, ale potem się nie udało
//             console.log('error 2')
//             console.log(`description2: ${err}`)
//         })
//     }, (err) => {
//         // udało się raz, ale potem się nie udało
//         console.log('error 2')
//         console.log(`description2: ${err}`)
//     })
// }, (er) => {
//     // nie udało się ani razu
//     console.log('error')
//     console.log(er)
// })


// const peoples = ['Marcin', 'Michał', 'Maciek', 'Natan']
// const Marcin = peoples[0]
// const natan = peoples[3]

// for (let i = 0; i < peoples.length; i++) {
//     console.log(peoples[i].toLowerCase())
// }

// for (let people of peoples) {
//     console.log(people)
// }

// for (let i = 1; i <= 3; i++) {
//     console.log(`Zewnętrzna pętla ${i}`)

//     for (let j = 1; j <= 3; j++) 
//     {
//         console.log(`Środkowoa pętla ${j}`)

//         for (let k = 1; k <= 3; k++) {
//             console.log(`Wewnętrzna pętla ${k}`)
//         }
//     }

// }

// const fakeRequestPromise = (url) => {
    // return new Promise((resolve, reject) => {
    //     const delay2 = Math.floor(Math.random() * (4500)) + 500;

    //     setTimeout(() => {
    //         if(delay2 > 4000) {
    //             reject('connection Timeout')
    //         } else {
    //             resolve(`Here is your fake data from ${url}`)
    //         }
    //     }, delay2)
    // })
// }

// fakeRequestPromise('yelp.com/api/coffee')
// //     .then(res => {
// //         console.log(`it worked! ${res}`)
// //         fakeRequestPromise('yelp.com/api/coffee/page2')
// //             .then(res2 => {
// //                 console.log(`it worked seconnd time ${res2}`)
// //                 fakeRequestPromise('yelp.com/api/coffee/page3')
// //                     .then(res3 => {
// //                         console.log(`it worked third time ${res3}`)
// //                     })
// //                     .catch(err3 => {
// //                         console.log('it worked 2 times then err')
// //                     })
// //             })
// //             .catch(err2 => {
// //                 console.log(`it worked 1 time then err ${err2}`)
// //             })
// //     })
// //     .catch(err => {
// //         console.log(`error: ${err}`)
// //     })

// // fakeRequestPromise('yelp.com')
// //     .then(res => {
// //         console.log(`done: ${res}`)
// //         return fakeRequestPromise('yelp.com/page1')
// //     })
// //     .then(res => {
// //         console.log(`done: ${res}`)
// //         return fakeRequestPromise('yelp.com/page2')
// //     })
// //     .then(res => {
// //         console.log(`done: ${res}`)
// //     })
// //     .catch(err => {
// //         console.log(`error: ${err}`)
// //     })


// // const fakeRequestFunction = (url) => {
// //     return new Promise((resolve, reject) => {
// //       setTimeout(() => {
// //         let rand = Math.random()
// //         if (rand < .7) {
// //             resolve(`here is your date from ${url}`)
// //         }
// //         reject('Timeout')
// //       }, 1000)
// //     })
// // }

// // fakeRequestFunction('siema.com')
// //     .then((res) => {
// //         console.log(`done: ${res}`)
// //     })
// //     .catch(err => {
// //         console.log(`error ${err}`)
// //     })


// const delayedColorChange = (color, delay, doNext) => {
//     setTimeout(() => {
//         document.body.style.backgroundColor = color;
//         doNext() && doNext
//     }, delay)
// }

// delayedColorChange('red', 1000, () => {
//     delayedColorChange('orange', 1000, () => {
//         delayedColorChange('blue', 1000, () => {
//             delayedColorChange('yellow', 1000, () => {
//                 delayedColorChange('pink', 1000, () => {
//                     delayedColorChange('indigo', 1000, () => {
//                         delayedColorChange('violet', 1000, () => {
    
//                         })
//                     })
//                 })
//             })
//         })
//     })
// })

// const delayedColorChangePromise = (color, delay) => {
//     return new Promise((resolve, reject ) => {
//       setTimeout(() => {
//         document.body.style.backgroundColor = color;
//         resolve()
//       }, delay)
//     })
// }

// delayedColorChangePromise('red', 1000)
//     .then(() => delayedColorChangePromise('orange', 1000))
//     .then(() => delayedColorChangePromise('yellow', 1000))
//     .then(() => delayedColorChangePromise('green', 1000))
//     .then(() => delayedColorChangePromise('blue', 1000))
//     .then(() => delayedColorChangePromise('black', 1000))
//     .then(() => delayedColorChangePromise('pink', 1000))


// setInterval(() => {
//     delayedColorChangePromise('red', 1000)
//     .then(() => delayedColorChangePromise('orange', 1000))
//     .then(() => delayedColorChangePromise('yellow', 1000))
//     .then(() => delayedColorChangePromise('green', 1000))
//     .then(() => delayedColorChangePromise('blue', 1000))
//     .then(() => delayedColorChangePromise('black', 1000))
//     .then(() => delayedColorChangePromise('pink', 1000))
// }, 7000)


// const empty = async () => {

// } // funkcja zwraca promie, który oczekuje na niewiadomo co.

// const hello = async () => {
//     return 'Hey guy!'
// } // funkcja zwraca promise, który jest resolved

// const goodbye = async () => {
//     throw new Error('Goodbye!')
// } // funkcja zwraca promise, który jest rejected

// const sing = async () => {
//     throw new Error('Rejected promise')
//     return 'LA LA LA LA'
// }

// sing()
//   .then((data) => {
//     console.log(`rosolve with: ${data}`)
//   })
//   .catch(err => {
//       console.log(`error: ${err}`)
//   })

// przykład z logowaniem:

// const login = async (username, password) => {
//     if (!username || !password) throw 'Fill all inputs' // reject
//     if (password === 'siema123') return 'Welcome' // resolve
//     throw 'Invalid Password' // reject
// }

// login('Marcin', 'siema123')
//   .then(msg => { // msg == welcome
//     console.log(`logged in ${msg}`)
//   })
//   .catch(err => { 
//     console.log(`error ${err}`)
//   })

// const delayedColorChange = (color, delay) => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         document.body.style.backgroundColor = color;
//         resolve()
//       }, delay)
//     })
// }

// delayedColorChange('red', 1000)
//   .then(delayedColorChange('red', 1000) )
//   .then(delayedColorChange('orange', 1000) )
//   .then(delayedColorChange('yellow', 1000) )
//   .then(delayedColorChange('blue', 1000) )
//   .then(delayedColorChange('green', 1000) )

// const rainbow = async () => {
//     await delayedColorChange('red', 1000)
//     await delayedColorChange('orange', 1000)
//     await delayedColorChange('yellow', 1000)
//     await delayedColorChange('green', 1000)
//     await delayedColorChange('blue', 1000)
//     await delayedColorChange('violet', 1000)
//     await delayedColorChange('pink', 1000)
//     return 'All done' // zwraca resolve promise
// }
// rainbow() // dzięki returnowi można zrobić jeszcze .then()
//   .then(() => delayedColorChange('red', 1000))
//   .then(() => console.log('koniec '))

const fakeRequestPromise = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * (4500)) + 500; 
        setTimeout(() => {
          if(delay > 4000) {
            reject("Connection Timeout!")
          } else {
              resolve(`here is data from ${url}`)
          }
      }, delay)
    })
}

// const makeTwoRequests = async () => {
//     await fakeRequestPromise('siema.com')
//       .then(msg => {
//         console.log(`yay! ${msg}`)
//         return fakeRequestPromise('siema.com/page1')
//       })
//       .then(msg => {
//         console.log(`2 yay! ${msg}`)
//       })
//       .catch(err => {
//         console.log(`ugh: ${err}`)
//       })
//     console.log(`koniec :))`)
// }

// const makeTwoRequests = async () => {
//   try {
//     console.log('dzien dobry')
//     let data1 = await fakeRequestPromise('/page1')
//     console.log(data1)
//     let data2 = await fakeRequestPromise('/page1')
//     console.log(data2)

//   } catch (e) {
//     console.log(`error: ${e}`)
//   }

//   console.log("dzień dobry")
// }

// makeTwoRequests()

//=====================XHR

// const req = new XMLHttpRequest();

// req.onload = function() {
//   console.log('LOADED!')
//   const data = JSON.parse(this.responseText) // na jsona
//   console.log(data)
// } // jak się załaduje

// req.onerror = function() {
//   console.log('Error')
//   console.log(this)
// } // jak masz errora

// req.open("GET","https://swapi.dev/api/people/1") // pierw otwierasz
// req.send() // potem wysyłasz


//=====================Fetch==========================//
// fetch("https://swapi.dev/api/people/1")
//   .then(res => { 
//     console.log("Rosolved!", res)
//     return res.json()
//   })
//   .then(data => {
//     console.log("our data: ", data)
//     return fetch("https://swapi.dev/api/people/2")
//   })
//   .then(res2 => res2.json())
//   .then(data2 => console.log("our data2: ", data2))
//   .catch(err => {
//     console.log(`Something went wrong :( ${err}`)
//   })

// const loadStarWarsPeople = async () => {
//   try {
//     const res = await fetch("https://swapi.dev/api/people/1")
//     const data = await res.json()
//     console.log("first data: ", data)

//     const res2 = await fetch("https://swapi.dev/apiasd/people/2")
//     const data2 = await res2.json()
//     console.log("second data: ", data2)
//   } catch (e) {
//     console.log(`Error: ${e}`)
//   }
// }

// loadStarWarsPeople()

// .then() .catch()
// axios.get("https://swapi.dev/api/people/1")
//   .then(res => {
//     console.log('response: ', res)
//   })
//   .catch(e => console.log(e))
// // to wykonuje się dopiero po kilku sekundach

// // async function
// const axiosRequest = async (id) => {
//   try {
//     const res = await axios.get(`https://swapi.dev/api/people/${id}/`)
//     console.log(`response ${id}: `, res.data)
//   }
//   catch (e) {
//     console.log(e)
//   }

// }
// axiosRequest(1) // wywołanie do callstacku
// axiosRequest(2) // wywołanie do callstacku
// wszystko to jest asynchroniczne dlatego wykona w zależnosci o d tego jak szybko wykona sie zapytania do serwera.

// w tym przykładzie potrzebny jest header
// bo request zwraca html a nei JSONa



// dodawnie joke przy kliknieciu:
// const btn = document.querySelector('.btn')
// const addJokeToPage = async () => {
//   const jokes = document.querySelector('.jokes')
//   const li = document.createElement('li')
//   try {
//     let joke = await getDadJoke() // przypisanie joke do zmiennej joke
//     li.append(joke)
//     jokes.append(li)
//   }
//   catch (e) {
//     console.log(`error przy dodawaniu joke ${e}`)
//   }
// }

// const getDadJoke = async () => {
//   try {
//     const config = { headers: { Accept: "application/json"}}
//     const res = await axios.get(`https://icanhazdadjoke.com/`, config)
//     return res.data.joke;
//   }
//   catch (e) {
//     console.log(`error przy zapytaniu: ${e}`)
//     return "No jokes available"
//   }
// }
// btn.addEventListener('click', addJokeToPage)


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


