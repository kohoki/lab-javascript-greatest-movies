// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    return moviesArray.map((movie) => movie.director);
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    if (moviesArray.length === 0)
    {
      return 0;
    }
    let arrayOfSsdramaMovies = moviesArray.filter(movie => movie.director === "Steven Spielberg" && (movie.genre.indexOf("Drama") > -1));
    return arrayOfSsdramaMovies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0)
    {
      return 0;
    }
    let counter = 0;
    let newArray = moviesArray.map(movie => {
      if (movie.score === "" || movie.score === undefined)
      {
        counter++;
        return 0;
      }
      counter++;
      return movie.score;
    }).reduce((accumulator, currentValue) => accumulator + currentValue);
    return Math.round(((newArray/counter) + Number.EPSILON) * 100) / 100;
  }

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray){
    let counter = 0;
    let newArray = moviesArray.map(movie => 
      {
        if (movie.genre.indexOf("Drama") > -1)
        {
          counter++;
          return movie.score;
        }
        return 0;
      });
    
    let sum = newArray.reduce((a, b) => a + b);
    console.log(sum)
    if (sum === 0)
    {
      return 0;
    }
    return Math.round(((sum/counter) + Number.EPSILON) * 100) / 100;
  }
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    let copyArray = [...moviesArray];
    copyArray.sort((a, b) => a.year - b.year);
    copyArray.sort((a, b) => {
      if (a.year === b.year)
      {
        if (a.title < b.title)
        {
          return -1;
        }
        return 1;
      }
    });
    return copyArray;
  }
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    let newArray = moviesArray.map((movies)=>movies.title);
    newArray.sort((a,b)=> {
        if (a < b)
        {
          return -1;
        }
        return 1;});
    if (newArray.length > 20)
    {
      newArray.splice(20, newArray.length);
    }
    
   
    return newArray;
  }
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    let copyArray = [...moviesArray];
    copyArray.forEach(element => {
      if(element.duration.length === 2)
      {
        element.duration = parseInt(element.duration[0]) * 60;
      }
      else
      {
        element.duration = (parseInt(element.duration[0]) * 60 ) + (parseInt(element.duration.substring(3,5)));
      }
    });
    return copyArray;
  }

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
