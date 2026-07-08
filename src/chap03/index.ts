// 関数の基本

// 1. 基本的な関数の定義
function calculateTax(price: number, taxRate: number): number {
  const result = price * taxRate;
  return result;
}

// 呼び出し側: 契約通りに使えば快適
const tax = calculateTax(2000, 0.1);
console.log(`tax: ${tax}`);

// 契約違反の例
// calculateTax("2000", 0.1);

// アロー関数
const createLoginMessage = (userName: string): string => {
  return `Welcome back, ${userName}`;
};

console.log(createLoginMessage("Hiroku"));

// オプションとデフォルト
// パターンA: デフォルトパラメータ（推奨）
const connectToDB = (retryCount: number = 3): string => {
  return `接続試行回数: ${retryCount}`;
};

console.log(connectToDB());
console.log(connectToDB(10));

// パターンB: オプション引数
const getPrice = (price: number, discount?: number): number => {
  if (discount !== undefined) {
    return price - discount;
  }
  return price;
};

console.log(getPrice(1000));
console.log(getPrice(1000, 200));

// 可変長引数
const sumAll = (...numbers: number[]): number => {
  return numbers.reduce((total, current) => total + current, 0);
};

console.log(sumAll(10, 20));
console.log(sumAll(1, 2, 3, 4, 5));

// voidとnever
// void: メッセージを表示して完了
const logMessage = (msg: string): void => {
  console.log(`LOG: ${msg}`);
};
logMessage("Hello");

// never: エラーを投げる（ここでプログラムが止まる）
const throwError = (msg: string): never => {
  throw new Error(msg);
};

// throwError("致命的なエラーが発生しました");
// console.log("ここは実行されません！");
