// Iteration 1: Names and Input//
let hacker1 = "John Doe";
console.log ("El nombre del conductor es " + hacker1);
let hacker2 = "Jane Doe";
console.log ("El nombre del navegante es " + hacker2);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length)  {
    console.log ("El conductor tiene el nombre más largo, tiene " + hacker1.length + " caracteres");
} 
else if (hacker2.length > hacker1.lenght) {
    console.log ("Parece que el navegante tiene el nombre más largo, tiene " + hacker2.length + " caracteres");
}
else { 
    console.log("¡Vaya, ambos tienen nombres igual de largos, " + hacker1.length + " caracteres");
}
// Iteration 3: Loops

/*imprime todos los caracteres del nombre del conductor, separados por un espacio y en mayúsculas*/
for (let i = 0; i < hacker1.length; i++) {
    console.log(hacker1.charAt(i).toUpperCase());
}

/*caracteres del navegador en orden inverso. Se ha empezado por el final y se le ha restado*/
for (let i = hacker2.length; i >= 0; i--) {
    console.log(hacker2.charAt(i).toUpperCase());
}

/*Según orden lexicográfico de las cadenas*/



