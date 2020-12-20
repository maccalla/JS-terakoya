//関数内で return を使う。
//return より後ろに処理を書く。
const getArrow = () => {
  return "return!!";

  console.log("after return...");
};

//return より後ろの処理が実行されないことを確認する。
const res = getArrow();
console.log(res);
