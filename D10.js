/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/
let sum = 10+20 
console.log("Esercizio A")
console.log(sum);

/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/
let random = Math.floor(Math.random() * 21);
console.log("Esercizio B")
console.log(random); 

/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/const me = {
  name: "Paolo",
  surname: "Esposito",
  age: 29  };
  console.log("Esercizio C")
console.log(me);
/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/
delete me.age;
console.log("Esercizio D")
console.log(me)

/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/
me.skills = ["Javascript", "Html",]
console.log("Esercizio E")
console.log(me)
/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/
me.skills.push("CSS")
console.log("Esercizio F")
console.log(me)
/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/
me.skills.pop("")
console.log("Esercizio G");
console.log(me);
// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/
function  dice () {
const randomNumber= Math.floor(Math.random() * 6) + 1;
return randomNumber;
 }

let result1= dice();
console.log("Esercizio 1");
console.log(result1)
/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/
function whoIsBigger (num1, num2) { 
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}
let result2= whoIsBigger(77,88);
console.log("Esercizio 2");
console.log(result2);
/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/
function splitMe(string) {
  var words = string.split(" ");
  return words;
  
}
let result3= splitMe("Campo77 Run Hide Pray");
console.log("Esercizio 3");
console.log(result3);

/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/
function deleteOne(str, removeFirst) {
  if (removeFirst) {
    return str.substring(1);
  } else {
    return str.substring(0, str.length - 1);
  }
}
console.log("Esercizio 4");
let result4a = deleteOne("Ernesto", true);
console.log(result4a); // risultato "rnesto"

let result4b = deleteOne("Ernesto", false);
console.log(result4b); // risultato "Ernest"

/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/
  function onlyLetters(string) {
    let result = " ";
    for (let i = 0; i < string.length; i++) {
      if (string[i] >= "0" && string[i] <= "9") {
        continue;
      }
      result += string[i];
    }
    return result; 
    //ho utilizzato un aiuto su google per arrivare alla soluzione
  }
  
  let input5 = "W 77Il 77Presidente77 ";
  let result5 = onlyLetters(input5);
  console.log("Esercizio 5");
  console.log(result5);

/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/
function isThisAnEmailA(string) {
  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(string);
}

let input6a = "example@example.com";
let isValidEmailA = isThisAnEmailA(input6a);
console.log("Esercizio 6a");
console.log(isValidEmailA);
//Prima Soluzione trovata su Google, per facilitare il mio lavoro in azienda 
//avrei utilizzato il lavoto di un altro risparmiando tempo

//Seconda soluzione :Nella funzione "isThisAnEmailB", la stringa di input viene suddivisa in due 
//parti separate da @  utilizzando split(). Se il risultato non ha esattamente
// due elementi, significa che manca @ o sono presenti più di un carattere @ quindi 
//l'indirizzo email non è valido e la funzione restituisce false.

//Se il risultato ha esattamente due elementi, la seconda parte 
//viene ulteriormente suddivisa in parti separate dal carattere "." 
//utilizzando nuovamente il metodo split(). Se il numero di parti separate 
//da "." è inferiore a 2, significa che manca il dominio o il dominio è incompleto, 
//quindi l'indirizzo email non è valido e la funzione restituisce false.

//Infine con un ciclo controllo se ci sono almeno 2 caratteri nelle parti del dominio. 
//Se una delle parti del dominio ha una lunghezza inferiore a 2 caratteri,
// l'indirizzo email non è valido e la funzione restituisce false.

//Se tutte le condizioni sono soddisfatte, la funzione restituisce true, indicando che 
//la stringa è un valido indirizzo email.
//Scusate la spiegazione lunga
function isThisAnEmailB(string) {
  let emailParts = string.split("@");
  if (emailParts.length !== 2) {
    return false;
  }

  let domainParts = emailParts[1].split(".");
  if (domainParts.length < 2) {
    return false;
  }

  for (var i = 0; i < domainParts.length; i++) {
    if (domainParts[i].length < 2) {
      return false;
    }
  }

  return true;
}

var input6b = "example@example.com";
var isValidEmailB = isThisAnEmailB(input6b);
console.log(isValidEmailB);


/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/

function whatDayIsIt() {
  const daysOfWeek = ['Domenica', 'Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì', 'Sabato'];
  let currentDate = new Date();
  let currentDay = currentDate.getDay();
  return daysOfWeek[currentDay];
}

let today = whatDayIsIt();
console.log("Esercizio 7");
console.log(today)
/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/
function rollTheDices(numRolls) {
  let diceValues = [];
  let sum = 0;
  
  for (let i = 0; i < numRolls; i++) {
    let diceResult = dice();
    diceValues.push(diceResult);
    sum += diceResult;
  }
  
  return {
    sum: sum,
    values: diceValues
  };
}

let rolls = 5;
let rollResult = rollTheDices(rolls);
console.log("Esercizio 8");
console.log(rollResult.sum); // Stampa il totale dei valori estratti
console.log(rollResult.values); // Stampa l'array con tutti i valori estratti

/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/
function howManyDays(date) {
  let currentDate = new Date();
  let timeDiff = currentDate.getTime() - date.getTime();
  let daysDiff = Math.floor(timeDiff / (1000 * 3600 * 24));
  return daysDiff;
}

let inputDate = new Date("2023-5-20");
let daysPassed = howManyDays(inputDate);
console.log("Esercizio 9");
console.log(daysPassed);
/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/
function isTodayMyBirthday() {
  let today = new Date();
  let birthday = new Date("1994-04-29"); // Sostituisci con la tua data di compleanno
  
  let isBirthday = today.getDate() === birthday.getDate() && today.getMonth() === birthday.getMonth();
  return isBirthday;
}

let todayIsMyBirthday = isTodayMyBirthday();
console.log("Esercizio 10");
console.log(todayIsMyBirthday);
// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/
function deleteProp(obj, prop) {
  delete obj[prop];
  return obj;
}

// Esempio di utilizzo
let myObject = {
  name: "Ernesto",
  age: "Troppi",
  city: "Libery7"
};

let modificaObject = deleteProp(myObject, "age");
console.log("Esercizio 11");
console.log(modificaObject);
/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/
function newestMovie(movies) {
  let newest = null;

  for (let i = 0; i < movies.length; i++) {
    const movie = movies[i];
    const year = parseInt(movie.Year);

    if (!isNaN(year)) {
      if (newest === null || year > parseInt(newest.Year)) {
        newest = movie;
      }
    }
  }

  return newest;
}
 //soluzione alla fine della pagina

/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/
function countMovies(movies) {
  return movies.length;
}
//soluzione alla fine della pagina

/* ESERCIZIO 14
Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/
function onlyTheYears(movies) {
  const years = movies.map(movie => movie.Year);
  return years; 
 }
 //soluzione alla fine della pagina
 
 /* ESERCIZIO 15
 Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
 */
function onlyInLastMillennium(movies) {
  const lastMillenniumMovies = movies.filter(movie => {
    const year = parseInt(movie.Year);
    return year >= 2000 && year <= 2999;
  });
  
  return lastMillenniumMovies;
}

//soluzione alla fine della pagina

/* ESERCIZIO 16
Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/
function sumAllTheYears(movies) {
  let sum = 0;
  
  for (let i = 0; i < movies.length; i++) {
    const movie = movies[i];
    const year = parseInt(movie.Year);
    
    if (!isNaN(year)) {
      sum += year;
    }
  }
  
  return sum;
}
//soluzione alla fine della pagina

/* ESERCIZIO 17
Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/
function searchByTitle(searchString, movies) {
  const searchResults = movies.filter(movie => {
    const title = movie.Title.toLowerCase();
    return title.includes(searchString.toLowerCase());
  });
  
  return searchResults;
}
//soluzione alla fine della pagina

/* ESERCIZIO 18
Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
"match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/

  function searchAndDivide(searchString, movies) {
    const match = [];
    const unmatch = [];
  
    for (let i = 0; i < movies.length; i++) {
      const movie = movies[i];
      const title = movie.Title.toLowerCase();
  
      if (title.includes(searchString.toLowerCase())) {
        match.push(movie);
      } else {
        unmatch.push(movie);
      }
    }
  
    return {
      match: match,
      unmatch: unmatch
    };
  }
  //soluzione alla fine della pagina
  
  /* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
  */
  function removeIndex(index, movies) {
    if (index < 0 || index >= movies.length) {
      return movies;
    }
  
    const updatedMovies = [...movies]; // ho copiato l'array per evitare di modificarlo direttamente
    updatedMovies.splice(index, 1); 
  
    return updatedMovies;
  }
  // DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)
  //soluzione alla fine della pagina

  /* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/

function selezionaElementoContainer() {
  const elementoContainer = document.getElementById("container");
  return elementoContainer;
}

/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/
function selezionaElementiTD() {
  const elementiTD = document.getElementsByTagName("td");
  return Array.from(elementiTD);  }

/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/
function stampaTestoElementiTD() {
  let elementiTD = document.getElementsByTagName("td");
  let numeroElementiTD = elementiTD.length;

  for (let i = 0; i < numeroElementiTD; i++) {
    let testoTD = elementiTD[i].textContent;
    console.log(testoTD);
 }
}
/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/
function aggiungiBackgroundRossoAiLink() {
  let links = document.getElementsByTagName("a");
  let numeroLinks = links.length;

  for (let i = 0; i < numeroLinks; i++) {
    links[i].style.backgroundColor = "red";
  }
}
/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/
function aggiungiElementoAllaLista() {
  let myList = document.getElementById("myList");
  let nuovoElemento = document.createElement("li");
  nuovoElemento.textContent = "Nuovo elemento";

  myList.appendChild(nuovoElemento);
}

/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/
function svuotaLista() {
  const myList = document.getElementById("myList");
  while (myList.firstChild) {
    myList.removeChild(myList.firstChild);
  }
}
/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
  */
  function aggiungiClasseATuttiTR() {
    let trElements = document.getElementsByTagName("tr");
    let numeroTR = trElements.length;
  
    for (let i = 0; i < numeroTR; i++) {
      trElements[i].classList.add("test");
    }
  }
  
// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/
function halfTree(altezza) {
  var albero = '';

  for (var i = 1; i <= altezza; i++) {
    albero += '*'.repeat(i) + '\n';
  }
  
  return albero;
}

let altezza = 77; // Esempio di altezza dell'albero
let result27 = halfTree(altezza);
//il consol.log è alla fine per una questione di ordine visivo in console

/* ESERCIZIO 28
Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
  ***
  *****
  
*/

/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/
function isItPrime(numero) {
  if (numero < 2) {
    return false;
  }
 
  for (var i = 2; i <= Math.sqrt(numero); i++) {
    if (numero % i === 0) {
      return false;
    }
  }

  return true;
}
let numero = 17; 
let result29 = isItPrime(numero);

//il consol.log è alla fine per una questione di ordine visivo in console

/* Questo array viene usato per gli esercizi. Non modificarlo. */

const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
    },

  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
]

console.log("Esercizio 12");
const newest = newestMovie(movies);
console.log(newest);

console.log("Esercizio 13");
const count = countMovies(movies);
console.log(count);

console.log("Esercizio 14");
const years = onlyTheYears(movies);
console.log(years);

console.log("Esercizio 15");
const lastMillenniumMovies = onlyInLastMillennium(movies);
console.log(lastMillenniumMovies);

console.log("Esercizio 16");
const sum2 = sumAllTheYears(movies);
console.log(sum2);

console.log("Esercizio 17");
const searchString = "Lord";
const searchResults = searchByTitle(searchString, movies);
console.log(searchResults);  

console.log("Esercizio 18");
const searchString2 = "Lord";
const searchResult = searchAndDivide(searchString2, movies);
console.log(searchResult);

console.log("Esercizio 19");
const indexToRemove = 8;
const updatedMovies = removeIndex(indexToRemove, movies);
console.log(updatedMovies);
 
console.log("Esercizio 27");
console.log(result27);

console.log("Esercizio 29");
console.log(result29); 
