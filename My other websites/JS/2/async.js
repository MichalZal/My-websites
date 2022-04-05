const posts = [
  {title: 'Post One', body: 'This is post one'},
  {title: 'Post Two', body: 'This is post dwo'}
]

// funkcja 1 
function getPosts() {
  setTimeout(() => {
    let output = ''
    posts.forEach((post, index) => {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000)
}

//funckja 2
function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post)
    
      const error = false;

      if (!error) {
        resolve()
      } else {
        reject("Erorr: Coś poszło nie tak!");
      }

    }, 2000)
  })
}

// fukcja asynchorniczna wywoiułująca obie fukcjje 
async function init() {
    // await oznacza zeby poczekana na tą funckje na którą wskauzje
    await createPost({title: 'Post three', body: 'This is post three'})
        .catch(err => console.log(err))
    getPosts()
}

init()

// createPost({title: 'Post three', body: 'This is post three'})
//     .then(getPosts)
//     .catch(err => console.log(err))

//promise.all

// const promise1 = Promise.resolve("Hello world!")
// const promsie2 = 10
// const promise = new Promise((resolve, reject) => {
//     setTimeout(resolve, 2000, "Goodbye");
// })
// const promise3 = fetch('https://jsonplaceholder.typicode.com/users')
//     .then(res => res.json())

// Promise.all([promise1, promsie2, promise, promise3])
//     .then((values) => console.log(values))
