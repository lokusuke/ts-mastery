// 配列の定義

// 1. 数値だけの定義
const scores: number[] = [80, 90, 100];

// // 操作するときも安全
// scores.push("100")

// 2. 複数の型が混ざる配列（union型との組み合わせ）
// const mixedArray: (string | number)[] = ["Code", 101, "Test"];
const mixedArray: Array<string | number> = ["Code", 101, "Test"];
mixedArray.push(100);
// mixedArray.push(true);

// タプル
// RGBカラーコードを表現
let rgb: [number, number, number] = [255, 0, 0];

// Reactなどのライブラリでは戻り値として多用されます
const useMockState = (): [() => string, (newValue: string) => void] => {
  let state = "Initial";

  const getState = () => state;

  const setState = (newValue: string) => {
    state = newValue;
    console.log(`State updated to: ${newValue}`);
  };
  return [getState, setState];
};

const [getMyState, setMyState] = useMockState();
console.log(getMyState());
console.log(setMyState("Loading"));
console.log(getMyState());

// オブジェクト型
// ユーザー情報の型定義
const userData: { id: number; usename: string; isAdmin: boolean } = {
  id: 1,
  usename: "Hiroku",
  isAdmin: true,
};

// 1. 存在しないプロパティへのアクセスはエラー
// console.log(userData.email);

// 2. 定義と違う構造の代入もエラー
// userData.email = "test@example.com";
