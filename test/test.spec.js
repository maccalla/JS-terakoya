// この講義で説明したのと同じ手順でテスト実行までやってみる。
// つまり、test.spec.js ファイルを作成して、
// テストの内容をコピペして、
// テストタブで確認。
test("最初のテスト　加算", () => {
  expect(1 + 1).toEqual(2);
});

test("最初のテスト　加算error", () => {
  expect(1 + 3).toEqual(2);
});

//今回書いたテストを、「コピペではなく、自分でちゃんと書いてみる」
test("テストterakoya10", () => {
  expect((1 / 2) * 4).toEqual(2);
});

// なんでもいいので関数を書く
// それに対してテストをする
// .not を使ったテストも書いてみる
const testFunc = (boolean) => {
  return boolean === true ? "true" : "false";
};

test("testFunc_true", () => {
  expect(testFunc(true)).toEqual("true");
});

test("testFunc_true", () => {
  expect(testFunc(false)).not.toEqual("true");
});

// 以前自分が 寺子屋 8 で書いた条件分岐する関数を引っ張り出す
// それに対してテストをする
// テスト全体を describe() で囲ってみる。
