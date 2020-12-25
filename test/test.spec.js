import { getType } from "typechecker";

import testFuncExport from "/src/terakoya13.js";

// この講義で説明したのと同じ手順でテスト実行までやってみる。
// つまり、test.spec.js ファイルを作成して、
// テストの内容をコピペして、
// テストタブで確認。
test("最初のテスト　加算", () => {
  expect(1 + 1).toEqual(2);
});

// test("最初のテスト　加算error", () => {
//   expect(1 + 3).toEqual(2);
// });

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

describe("真偽値のチェックテストの関数", () => {
  test("testFunc_true", () => {
    expect(testFunc(true)).toEqual("true");
  });

  test("testFunc_true", () => {
    expect(testFunc(false)).not.toEqual("true");
  });
});

// 関数とテストを別々のファイルに定義する
// それぞれ export/import して、テストを正常に動かす

describe("読み込んだ関数のチェックテストの関数", () => {
  test("testFuncExport_true", () => {
    expect(testFuncExport("true")).toEqual("return true!!");
  });

  test("testFuncExport_false", () => {
    expect(testFuncExport("false")).toEqual("return false!!");
  });
});

// CodeSandbox でのライブラリの使い方に慣れる
// 具体的には typechecker を Dependencies に追加し、テストで import する
// 今回書いたテストを書いて、実行する

describe("type", () => {
  it("string", () => {
    const str = "hello world";
    const res = getType(str);
    expect(res).toEqual("string");
  });
});
