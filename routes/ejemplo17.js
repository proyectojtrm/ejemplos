var pelicula ={
titulo :"X-MEN",
genero :"ACCION",
director :"MARVEL",
duracion:150,


/*resumen:function(){

var res="la pelicula : " + pelicula.titulo
+" es de genero : "+pelicula.genero
+" y esta dirigida por : "+pelicula.dirigida
+" de duracion: "+pelicula.duracion+"min";
return res;

}*/
dura:function(){

var dur="la pelicula : " + pelicula.titulo+" de duracion: "+pelicula.duracion+"min";
return dur;
}

}
console.log(pelicula.dura());


/*console.log(pelicula.resumen());
console.log(pelicula["genero"]);

for (i in pelicula){

console.log(i+":"+pelicula[i]);

}*/



/*console.log("pelicula : "+ pelicula.titulo);
console.log("genero : "+ pelicula.genero);
console.log("director : "+ pelicula.director);
console.log("duracion : "+ pelicula.duracion);*/