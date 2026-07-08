// BMI計算
const calculateBMI = (heightCm: number, weightKg: number): number => {
  return weightKg / (heightCm / 100) ** 2;
};

console.log(calculateBMI(174, 60));

// デフォルト値の活用
const showProfile = (name: string, age: number = 20): string => {
  return `Name: ${name}, Age: ${age}`;
};

console.log(showProfile("Hiroku"));
console.log(showProfile("Shouhei", 30));
