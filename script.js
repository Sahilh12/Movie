const form = document.querySelector('form')
const input = document.querySelector('input')
const search = document.querySelector('button')
const moviePoster = document.querySelector('img')
const movieName = document.querySelector('.movie-name')
const rating = document.querySelector('.rate')
const releasedDate = document.querySelector('.released-date span')
const duration = document.querySelector('.duration span')
const cast = document.querySelector('.cast span')
const plot = document.querySelector('.plot span')
const category = document.querySelector('.category')
const rate = document.querySelector('.rating')
const p = document.querySelector('.empty')
const container = document.querySelector('.container')
const movieDetail = document.querySelector('.movie-detail-container')


form.addEventListener('submit' , (e) => {
    e.preventDefault()
    
})
 
search.addEventListener('click' , () => {
    const movieName = input.value.trim()
     
    if(movieName !== ''){
        getMovieInfo(movieName)
    }
})

const getMovieInfo =async (movie) => {
    p.innerHTML = ''
    // category ? category.remove():'';


    const myApi = '3dd1a4db'
    const url = `http://www.omdbapi.com/?apikey=${myApi}&t=${movie}`
    const res = await fetch(url)
    const data = await res.json()
    console.log(data)
     moviePoster.src = data.Poster
     movieName.innerText= data.Title
     rating.innerText = data.Ratings[0].Value
     releasedDate.innerText = data.Released
     duration.innerText = data.Runtime
     cast.innerText = data.Actors
     plot.innerText = data.Plot
 
     const arr = data.Genre.split(',')
     arr.forEach(element => {
        const span = document.createElement('span')
        span.classList.add('category')
        span.innerText = element
        p.append(span)
     });
    // for(let i=0; i<arr.length; i++){
    //     const span = document.createElement('span')
    //     span.classList.add('category')
    //     span.innerText = arr[i]
    //     p.append(span)
    // }
    
}