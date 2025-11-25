const name: string = "Alice";
const age: number = 30;
const isOnline: boolean = true;

console.log(`Name: ${name}`);
console.log(`Age: ${age}`);
console.log(`Online: ${isOnline}`);
console.log("");

const promise: Promise<number> = new Promise((resolve, reject) => {
  const random: number = Math.random();

  if (random < 0.5) {
    setTimeout(reject, 1000, new Error("Error!"));
  } else {
    setTimeout(resolve, 1000, random);
  }
});
