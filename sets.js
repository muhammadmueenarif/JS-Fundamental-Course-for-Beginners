const programming= new Set();
programming.add("javascript");
programming.add("c#");
programming.add("c++");
programming.add("java");
programming.add("python");

console.log(programming);

console.log(`the size is ${programming.size}`);
console.log(programming.has("java"));

programming.delete("python");
console.log(programming);