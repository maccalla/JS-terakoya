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

const name = "庵野";
const drink = "ビール";
const food = "ミックスグリル";
const res = getArrow({ name, drink, food });
console.log(res);
