const url="https://icanhazdadjoke.com/";
const button=document.querySelector('.btn');
console.log(button);


const joke=document.querySelector('.result');
console.log(joke);

button.addEventListener('click',()=>{
    
fetchJoke();
    }); 

    const fetchJoke=async()=>{
        joke.textContent = 'Loading...';
        try {
          const response = await fetch(url, {
            headers: {
              Accept: 'application/json',
               'User-Agent': 'learning app',
             },
         });   
        // console.log(response);
        if (!response.ok) {
          throw new Error('error');
        }
         const data = await response.json();
          joke.textContent = data.joke;
        } catch (error) {
          console.log(error.message);
          joke.textContent = 'There was an error...'
          
        }
        
                 
    };
    fetchJoke(); // sayfa açıldığı zaman otomatik olarak çalışır. Ve sayfa açıldığında bir şaka gösterir.
    
// fetch only throws an error if cannor reseolve
//error response still a response
//check  for status code 
//throw new Error('Whoooops') if status code is not ok






    // const url = 'https://icanhazdadjoke.com/';

// const btn = document.querySelector('.btn');
// const result = document.querySelector('.result');

// btn.addEventListener('click', () => {
//   fetchDadJoke();
// });

// const fetchDadJoke = async () => {
//   result.textContent = 'Loading...';
//   try {
//     const response = await fetch(url, {
//       headers: {
//         Accept: 'application/json',
//         'User-Agent': 'learning app',
//       },
//     });
//     if (!response.ok) {
//       throw new Error(' error');
//     }
//     const data = await response.json();

//     result.textContent = data.joke;
//   } catch (error) {
//     console.log(error.message);
//     result.textContent = 'There was an error...';
//   }
// };

// fetchDadJoke();



// const url = 'https://icanhazdadjoke.com/';

// const btn = document.querySelector('.btn');
// const result = document.querySelector('.result');

// btn.addEventListener('click', () => {
//   fetchDadJoke();
// });

// const fetchDadJoke = async () => {
//   result.textContent = 'Loading...';
//   try {
//     const response = await fetch(url, {
//       headers: {
//         Accept: 'application/json',
//         'User-Agent': 'learning app',
//       },
//     });
//     if (!response.ok) {
//       throw new Error(' error');
//     }
//     const data = await response.json();

//     result.textContent = data.joke;
//   } catch (error) {
//     console.log(error.message);
//     result.textContent = 'There was an error...';
//   }
// };

// fetchDadJoke();
