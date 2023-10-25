// let size = 6;
// let etoile = "";

// for (let y = 0; y <= size*4; y++) {
//   for (let x = 0; x <= size*8; x++) {
//     if (size == 0) {
//       console.log("Mettez une vrai taille!!");
//     }
//     //coté du haut
//     else if (x == size*4 + y && y <= size) {
//       etoile += "*";
//     } else if (x == size*4 - y && y <= size) {
//       etoile += "*";
//     } else if ((y == size && x <= size*3) || (y == size && x >= size*5)) {
//       etoile += "*";
//     }
//     //coté droit
//     else if (x == size*9 - y && y <= size*2 - 1) {
//       etoile += "*";
//     } else if (x == size*4 - y && y <= size) {
//       etoile += "*";
//     } else if (x == size*5 + y && y >= size*2) {
//       etoile += "*";
//     }
//     //coté gauche
//     else if ((y == size*3 && x <= size*3) || (y == size*3 && x >= size*5)) {
//       etoile += "*";
//     } else if (x == size*3 - y && y >= size*2) {
//       etoile += "*";
//     } else if (x == size*4 - y && y <= size) {
//       etoile += "*";
//     } else if (x == y - size && y <= size*2) {
//       etoile += "*";
//     }
//     //coté bas
//     else if (x == size + y - size && y >= size*3) {
//       etoile += "*";
//     } else if (x == size*8 - y && y >= size*3) {
//       etoile += "*";
//     }
//     else {
//       etoile += " ";
//     }
//   }
//   etoile += "\n"
// }
// console.log(etoile)