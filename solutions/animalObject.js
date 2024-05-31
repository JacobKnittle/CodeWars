// animal object with 3 properties name, legs, and color
// return string like "This white dog has 4 legs"

const animal = (obj) => `This ${obj.color} ${obj.name} has ${obj.legs} legs.`;

console.log(animal({ name: 'cat', legs: 'three', color: 'orange' }));
