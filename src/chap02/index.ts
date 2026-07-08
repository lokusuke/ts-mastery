// -- 基本の型と型注釈 --

//string
const message: string = "Hello, TypeScript!";

const greeting: string = `メッセージ: ${message}`;
console.log(greeting);

// number
const integer: number = 10; //整数
const decimal: number = 3.14; //少数
const binary: number = 0b1010; // 2進数

console.log(integer + binary);

// boolean
const isActive: boolean = true;
console.log(isActive);

// 型推論

// 明示的な方注釈
const explicitRate: number = 1.1;

// 型推論（推奨される書き方）
const implicitRate = 1.1;
let implicitRate2 = 1.1;
// implicitRate = "a" // これは型エラー

// 計算結果も推論される
const total = 1000 * implicitRate;
console.log(total);

// 危険なAny型

// 明示的にAnyを指定（非推奨）
// let dangerousData: any = "This is String";
// dangerousData.toFixed();

// unknown
const apiResponse: unknown = 0.5;
// console.log(apiResponse.toFixed());

// 型チェックを行う
if (typeof apiResponse === "number") {
  console.log(`数値です: ${apiResponse.toFixed()}`);
} else {
  console.log("数値ではありません");
}

// nullとundefined

// ユーザ名もしくはnullを返す関数
const fetchUserName = () => {
  return Math.random() > 0.5 ? "Yamada" : null;
};

// nullが入る可能性がある
const userData: string | null = fetchUserName();

console.log(userData?.toUpperCase());
