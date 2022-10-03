const items = [
    {name: 'Bike', price: 100},
    {name: 'TV', price: 150},
    {name: 'Album', price: 50}
]

const numbers = [1, 2, 3];

// L'array originale non viene mai toccato. In tutti questi casi viene stampato cio che ritorna e che puo essere tranquillamente passato ad un altra variabile che diventerebbe quindi un array a parte

// Filter method
console.log("Filter: ")
console.log(items.filter(item => {
    return item.price > 50;
}))

// IndexOf. Ritorna l'indice dell'elemento che sta cercando in base al parametro inserito oppure -1 se non lo trova
console.log("IndexOf: ");
console.log(numbers.indexOf(2));

// Join. Inserisce tutto all'interno di una stringa e ogni elemento è separato dal separatore selezionato
console.log("Join: ");
console.log(numbers.join(", "));

// Pop. Estrae l'ultimo elemento dell'array e lo fa ritornare e la lunghezza dell'array quindi cambia
console.log("Pop:")
console.log(items.pop());

// Splice. Permette di aggiungere un elemento nella posizione desiderata. Come primo parametro si mette la posizione, come secondo il numero di elementi da sostituire e come terzo l'elemento da aggiungere (se ne possono mettere anche piu di uno). Se il metodo viene lasciato vuoto l'array viene svuotato
console.log("Splice:")
numbers.splice(1, 0, 5);
// console.log(numbers);
// let n = numbers.splice(1, 1); Ritorna a n l'elemento che è stato eliminato
// console.log(numbers);
items.splice(1, 0, {name: 'Cinema ticket', price: 7})
console.log(items)
console.log(numbers);


// Slice. Ritorna una fetta dell'array partendo dall'indice del primo parametro fino al secondo (secondo escluso pero), se slice viene lasciato vuoto ritorna una copia dell'array. Se il 2 parametro non viene specificato viene estrapolato la fetta partendo dall'inizio (specificato) fino alla fine dell'array
console.log('Slice: ')
console.log(items.slice());
console.log(items.slice(1))
console.log(items.slice(1, 2))
console.log(items.slice(-1)) //Prende solo l'ultimo

// Sort. Riordina gli array sia in ordine che in ordine numerico. Con le stringhe da la precedenza agli uppercase e tra stringhe e numeri da la precedenza ai numeri
console.log("Sort:");
console.log(numbers.sort())
const words = ['ciao', 'sono', 'Francesco', 5];
console.log(words.sort())

// Map method. Map e forEach sono molto simili, map ritorna l'array "modificato", forEach fa solo le istruzioni specificate
console.log("Map: ")
console.log(items.map(item => {
    return item.name;
}))

// Find method
console.log("Find: ")
console.log(items.find(item => {
    return item.name === 'TV';
}))

// forEach. Fa delle istruzioni per ogni elemento dell'array
console.log("forEach: ")
items.forEach(item => {
    console.log(item.price);
})

// Some method. Cerca se c'è anche solo un elemento dell'array che risponde alla condizione indicata e ritorna true se lo trova altrimenti false
console.log("Some: " + items.some(item =>{
    return item.price < 10;
}))

// Every method. Molto simile a some() pero al contrario si chiede se tutti gli elementi dell'array rispondono alla condizione richiesta e torna true in questo caso senno false
console.log("Every: " + items.every(item =>{
    return item.price > 50;
}))

// Reduce method. Fa una determinata operazione all'interno dell'array dove il primo parametro passato sarà il totale e il secondo il singolo elemento dell'array. Come secondo parametro dentro reduce puoi mettere un altro valore che sarà il valore iniziale del totale
console.log("Reduce: "+ items.reduce((tot, item) => {
    return tot * item.price;
}, 1))

// Include method. Si chiede se il parametro inserito è presente nell'array e in questo caso restituisce true altrimenti false
console.log("Include: " + numbers.includes(2));