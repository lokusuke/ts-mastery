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

// 修飾子(?, readonly)
const appConfig: {
  readonly apiKey: string;
  theme: string;
  debugMode?: boolean;
} = {
  apiKey: "abcdef12345",
  theme: "dark",
};

// のちにオプショナルプロパティを追加
appConfig.debugMode = true;

// 読み取りはOK
console.log(appConfig.apiKey);

// // 書き込みはNG
// appConfig.apiKey = "new_key";

// オプショナルチェーンとNull合体演算子
const fetchBook = (): { title: string; author?: { name: string } } => {
  return Math.random() > 0.5
    ? { title: "TypeScript入門", author: { name: "Taro" } }
    : { title: "TypeScript入門" };
};

const book1 = fetchBook();

// 危険なアクセス（実行時にエラーになるかのうせいがある）
// console.log(book1.author.name)

// 安全なアクセス
console.log(book1.author?.name);

// Null合体演算子との組み合わせ
const authorName = book1.author?.name ?? "名無しの著者";
console.log(authorName);

// ??と||の違い
const count = 0;
console.log(count ?? 10);
console.log(count || 10);

// インデックスシグネチャとRecord

// 1. インデックスシグネチャ（固定キーと動的キー）
const gameConfig: {
  id: string;
  [key: string]: string;
} = {
  id: "g-100",
  difficulty: "hard",
  bgm: "on",
};

// プロパティを追加
gameConfig.theme = "dark";
console.log(gameConfig);

// 存在しないプロパティを書いてもエラーにならない点に注意！！
console.log(gameConfig.zz);

// 2. Record型（キーの種類を制限できる）
const reportCard: Record<"math" | "english", "A" | "B" | "C"> = {
  math: "A",
  english: "B",
};

// satisfies演算子

// 1. 通常の型注釈 インデックスシグネチャの場合は特定のキーが存在するか保証しなくなる
const playerAnnotation: { [key: string]: string | number } = {
  name: "player1",
  score: 12345.678,
};

// キーの存在、値の型があやふや
// console.log(playerAnnotation.score?.toFixed());

// 2. satisfiesの場合
const playerSatisfies = {
  name: "player1",
  score: 12345.678,
} satisfies { [key: string]: string | number }; // ->この型注釈を守っているかどうかを記憶するようになる

console.log(playerSatisfies.score.toFixed()); // エラーにならない！
