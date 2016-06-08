function contarA(cadena,letra){
//function contarA(cadena,letra)	
//cont_a=0;
for(i=0,cont_a=0;i<cadena.length;i++){

 if (cadena[i]==letra ){

 	cont_a++;
 }
 

}
return cont_a;


}

var frase="hola horacio";
var letra="o";
;console.log("la cantidad de o es :");
console.log(contarA(frase,letra));
//console.log(contarA(frase,letra));