// 関数内で if 文 を使う。
// if 文 の条件判断は true かそれ以外かを判断する。
// if 文 の条件判断がどうなるにせよ、必ず return で何かを返す関数とする。
// else は使わずに「早期リターン」を使うバージョンで書く
const getArrow = (boolean) => {
  if (boolean === true) {
    return "ok!";
  }

  if (boolean === false) {
    return "no!";
  } else {
    return "exception!";
  }
};

const lst = [true, false, undefined];

for (var i = 0; i < lst.length; i++) {
  console.log(getArrow(lst[i]));
}
