//nombre

let nombre = prompt("Ingresa el nombre")
let apellido = prompt("Ingresa el apellido")
console.log(nombre + " " + apellido);

//fecha

let nacimiento = Number(prompt("Ingresa tu año de nacimiento"))
let añoactual = 2021
let edad = añoactual - nacimiento
alert(nombre + " " + "tiene" + " " + edad + " " + "años");
if (edad >= 18) {
    console.log("usted puede ingresar")

}
else {
    console.log("no puede ingresar")
}

//año

let actual = prompt("Ingresa el año actual")
if (actual == 2021) {
    alert("correcto");
}
else {
    alert("no es correcto");
}
