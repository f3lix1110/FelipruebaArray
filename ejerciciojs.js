var carreritas = ["Lucia","Roberto","Maria","Jesus","Andrea","Jose"];

console.log("Clasificacion Actual: "+carreritas);

carreritas.splice(2,4);
carreritas.push("Andrea","Maria","Jesus","Jose");

console.log("Andrea adelanta a Maria: "+carreritas)

carreritas.pop();

console.log("Jose es descalificado de la carrera: "+carreritas);

carreritas.shift();
carreritas.unshift("Cristobal","Fernanda","Armando");
carreritas.unshift("Lucia");

console.log("Detras de Lucia y antes de Roberto se clasifican tres nuevos corredores: "+carreritas);

carreritas.unshift("Federico");

console.log("Hay un nuevo concursante que toma el primer puesto: "+carreritas);

console.log(carreritas.length);
console.log(Object.keys(carreritas));
console.log(carreritas);