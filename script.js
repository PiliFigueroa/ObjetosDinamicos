/*
    Declarar una variable con el nombre propiedadNombre y asignar el valor nombre
    Declarar una variable con el nombre propiedadEdad y asignar el valor edad
    Crear un objeto persona con las propiedades nombre y edad
    Asignar a las propiedades del objeto persona tu nombre y edad
    Mostrar en consola los valores de cada propiedad del objeto persona utilizando corchetes y los valores: 'nombre' y 'edad' en lugar de utilizar el punto
    Mostrar en consola los valores de cada propiedad del objeto persona utilizando las variables propiedadNombre y propiedadEdad
*/

const propiedadNombre = "nombre"
const propiedadEdad = "edad"

const persona = {
    nombre: "Mira",
    edad: 27
}

// console.log("muestro nombre: ", persona["nombre"])
// console.log("muestro edad: ", persona["edad"])

// console.log("muestro nombre: ", persona[propiedadNombre])
// console.log("muestro edad: ", persona[propiedadEdad])

/*
    Partiendo de un objeto guardado en la variable producto
    Mostrar en la consola el nombre de todas las propiedades que tiene el producto
    Utilizar el método keys
*/

// const producto = {
//     id: 'ADA-020',
//     title: 'Gubergren sed est amet voluptua',
//     price: 123.75,
//     picture: 'https://i.kinja-img.com/gawker-media/image/upload/s--53mPze4a--/c_scale,f_auto,fl_progressive,q_80,w_800/1315358249455433031.jpg',
//     condition: 'nuevo',
//     free_shipping: true,
//     location: 'Capital Federal'
//   };
  
  // completá acá el código
//   const todasLasPropiedades = Object.keys(producto)
//   const todosLosValores = Object.values(producto)
//   const valoresYPropiedades = Object.entries(producto)
  
//   console.log(todasLasPropiedades)
//   console.log(todosLosValores)
//   console.log(valoresYPropiedades)

/*
    Partiendo de un objeto guardado en la variable producto
    Mostrar en la consola el nombre y valor de todas las propiedades que tiene el producto
    Utilizar el método keys
    El formato para mostrar la propiedad y valor es: "producto['ACA NOMBRE DE LA PROPIEDAD'] -> [ACA VALOR DE LA PROPIEDAD]"
*/

const producto = {
    id: 'ADA-020',
    title: 'Gubergren sed est amet voluptua',
    price: 123.75,
    picture: 'https://i.kinja-img.com/gawker-media/image/upload/s--53mPze4a--/c_scale,f_auto,fl_progressive,q_80,w_800/1315358249455433031.jpg',
    condition: 'nuevo',
    free_shipping: true,
    location: 'Capital Federal'
};

// console.log(producto["country"])
// console.log(producto["location"])

// for (const nombrePropiedad of Object.keys(producto)) {
//     console.log(  producto[nombrePropiedad]  )
// }

// RESULTADO ESPERADO
// producto['id'] -> ADA-020
// producto['title'] -> Gubergren sed est amet voluptua
// producto['price'] -> 123.75
// producto['picture'] -> https://i.kinja-img.com/gawker-media/image/upload/s--53mPze4a--/c_scale,f_auto,fl_progressive,q_80,w_800/1315358249455433031.jpg
// producto['condition'] -> nuevo
// producto['free_shipping'] -> true
// producto['location'] -> Capital Federal

/*
    Partiendo de un objeto guardado en la variable user
    Verificar si tiene la propiedad email
        Si no la tiene, mostrar en pantalla: 'El usuario no tiene la propiedad email'
        Si la tiene, mostrar en pantalla: 'El usuario tiene la propiedad email'
*/

// const user = {
//     username: "ada_lovelace",
//     password: "1234567890!",
// };
  
// acá tu solucion
// if (user["email"] === undefined) {
//     console.log('El usuario no tiene la propiedad email')
// } else {
//     console.log('El usuario tiene la propiedad email')
// }

/*
Completa el código dentro de la función hasProperty
 Si el objeto de la variable object tiene la propiedad que recibe en la variable property, retorna true
 Sino retorna false
*/

// const hasProperty = (object, property) => object.hasOwnProperty(property)
const hasProperty = (object, property) => {
    //  PRIMER APPROACH
    // if (object[property] === undefined) {
    //     return false
    // } else {
    //     return true
    // }
    // SEGUNDO APPROACH
    // return !(object[property] === undefined) ? true : false
    // TERCER APPROACH
    return !!object[property]
}

const user = {
    username: "ada_lovelace",
    password: "1234567890!",
};

const user2 = {
    username: "grace_hopper",
    password: "1234567890!",
    email: "grace@hopper.com",
};
  
// console.log(hasProperty(user, "email")); // false
// console.log(hasProperty(user, "password")); // true
// console.log(hasProperty(user, "id")); // false

// console.log(hasProperty(user2, "email")); // true
// console.log(hasProperty(user2, "password")); // true
// console.log(hasProperty(user2, "id")); // false