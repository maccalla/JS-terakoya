//アロー関数を使う
//引数を二つ以上受けとる
const getArrow = ({ name, drink, food }) => {
  return (
    name +
    "様、" +
    "ご注文は「" +
    drink +
    "」と「" +
    food +
    "」ですね。" +
    drink +
    "は先にお持ちしますか？"
  );
};

//使う
const name = "庵野";
const drink = "ビール";
const food = "ミックスグリル";
const res = getArrow({ name, drink, food });
console.log(res);
