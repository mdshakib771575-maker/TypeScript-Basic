let Toadd = (a: number, b: number) => {
  return a + b
}


console.log(Toadd(20, 20));


const arr: string[] = ["shakib", "Hazari"]
const arr2: Array<string> = ["shakib", "Hazari"]

const numarr: number[] = [10, 20]
const FeniLatLong: readonly [number, number] = [1015215, 2059487]


const concatName =(firstName:string,lastName?:string)=>{
         if(!lastName){
          return firstName
         }

         return firstName +" "+ lastName
} 

console.log(concatName("cfgv")); 

const gretting = (fullName:string, gertt ="hello")=>{
       console.log(fullName," " + gertt);
}

console.log(gretting("ss")); 