let Toadd = (a: number, b: number) => {
  return a + b
}


console.log(Toadd(20, 20));


const arr: string[] = ["shakib", "Hazari"]
const arr2: Array<string> = ["shakib", "Hazari"]

const numarr: number[] = [10, 20]
const FeniLatLong: readonly [number, number] = [1015215, 2059487]


const concatName = (firstName: string, lastName?: string) => {
  if (!lastName) {
    return firstName
  }

  return firstName + " " + lastName
}

console.log(concatName("cfgv"));

const gretting = (fullName: string, gertt = "hello") => {
  console.log(fullName, " " + gertt);
}

console.log(gretting("ss"));

const sum = (...numbers: number[]) => {
  return numbers.reduce((total, sum) => total + sum, 0)
}
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8));

const toUserAction = (...args: [name: string, age: number, boolean]) => {
  const [name, age] = args
  console.log(name + "is" + age);
}

console.log(toUserAction("shakib", 29, true));