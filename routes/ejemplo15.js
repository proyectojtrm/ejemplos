function contarA(cadena){
var cont_a=0;
var cont_i=0;

while(cont_i <= cadena.length){

 if (cadena[cont_i]=="a" ){

 	cont_a++;
 }
 
cont_i++;
}
return cont_a;


}
console.log("la cantidad de a es :");
console.log(contarA("hola roxana"));
