const salary = 21001;
const isBCS = true;
const height = 68;
const hasCar = false;
// height = 71;

if (salary > 20000 && height > 66) {
  console.log("Su----------patro");
} else {
  console.log("Onno patro khuji");
}

if (salary > 25000 || height > 72) {
  console.log("eso baba kobul");
} else {
  console.log("vaag tui mokbul");
}

//------------COMPLEX CONDITION--------------

if ((salary > 25000 && hasCar == true) || isBCS == true) {
  console.log("tomar 14 gusti raji");
}

if ((salary > 25000 || hasCar == true) && isBCS == true) {
  console.log("tomar 14 gusti raji");
}
