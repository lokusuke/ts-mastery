// 演習問題：型注釈
const productName: string = "Wireless Mouse";
const price: number = 1500;
const stock: boolean = true;

// 演習問題:unknownの活用
let input: unknown = "Hello";
typeof input === "string"
  ? console.log(input.length)
  : console.log("inputはstring型ではありません");
