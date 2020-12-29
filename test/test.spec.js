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

// 変数に型が string, number, array, object, function になる値を入れる
// その型を typechecker でチェックして、期待する型になるようにテストを書く

describe("typeAllCheck", () => {
  it("string", () => {
    const str = "hello world";
    const res = getType(str);
    expect(res).toEqual("string");
  });

  it("number", () => {
    const num = 12;
    const res = getType(num);
    expect(res).toEqual("number");
  });

  it("array", () => {
    const arr = [1, 2, 3];
    const res = getType(arr);
    expect(res).toEqual("array");
  });

  it("object", () => {
    const obj = { name: "ko-ji", age: 12 };
    const res = getType(obj);
    expect(res).toEqual("object");
  });

  it("function", () => {
    const func = () => "hello world";
    const res = getType(func);
    expect(res).toEqual("function");
  });
});

// テスト駆動でやろう
// 配列をなんでもいいので作る
// 作られた配列の型を getType で確認
// さらに、配列の n 番目の中身と、その型をテストで確認

describe("type", () => {
  //配列
  const arr = [1, 2, 3];

  test("配列の型", () => {
    const res = getType(arr);
    expect(res).toEqual("array");
  });

  test("配列の最初", () => {
    const res = arr[0];
    expect(res).toEqual(1);
  });

  test("配列の0番目の型", () => {
    const res = arr[0];
    expect(getType(res)).toEqual("number");
  });
});

// オブジェクトを書く
// オブジェクトの用語を思い出す！
// テストを書いて、オブジェクトのプロパティにアクセスし、その値をテストしよう！

const obj = {
  name: "ko-ji",
  age: 28,
  pocket: ["key", "bread", "candy"]
};

describe("オブジェクト", () => {
  test("型チェック", () => {
    expect(getType(obj)).toEqual("object");
  });

  test("配列チェック", () => {
    const res = obj["pocket"][0];
    expect(res).toEqual("key");
  });

  test("配列型チェック", () => {
    const res = obj["pocket"];
    expect(getType(res)).toEqual("array");
  });
});

// オブジェクトを複数作る
// そのオブジェクトを配列にしまう
// テストを書いて、配列の各要素、それからその要素であるオブジェクトの値などなどをチェック！

const persons = [
  { name: "ko-ji", age: 19, alive: true },
  { name: "se-ji", age: 23, alive: false },
  { name: "kanji", age: 40, alive: true }
];

describe("オブジェクトin配列", () => {
  test("オブジェクトの型チェック", () => {
    for (var i = 0; i < persons.length; i++) {
      const res = persons[i];
      expect(getType(res)).toEqual("object");
    }
  });

  test("オブジェクトの中身の型チェック", () => {
    for (const obj of persons) {
      const res_name = obj["name"];
      const res_age = obj["age"];
      const res_alive = obj["alive"];
      expect(getType(res_name)).toEqual("string");
      expect(getType(res_age)).toEqual("number");
      expect(getType(res_alive)).toEqual("boolean");
    }
  });
});

// オブジェクトを作る
// そのオブジェクトのプロパティの少なくとも一つに「配列」をしまう
// テストを書いて、値や型をチェック！

describe("配列inオブジェクト", () => {
  const obj = {
    num_arr: [1, 2, 3],
    str_arr: ["1", "2", "3"],
    bool_arr: [true, false, true]
  };

  test("オブジェクトの要素の型チェック", () => {
    const res_num = obj["num_arr"];
    expect(getType(res_num)).toEqual("array");
    const res_str = obj["str_arr"];
    expect(getType(res_str)).toEqual("array");
    const res_bool = obj["bool_arr"];
    expect(getType(res_bool)).toEqual("array");
  });

  test("オブジェクトの要素チェック", () => {
    const res_num = obj["num_arr"][0];
    expect(getType(res_num)).toEqual("number");
    const res_str = obj["str_arr"][0];
    expect(getType(res_str)).toEqual("string");
    const res_bool = obj["bool_arr"][0];
    expect(getType(res_bool)).toEqual("boolean");
  });
});

//まずは以下のコードをテストにコピペします。
//その上で、"john" の部分を色々かえて、テストを実行してみてください。
//すると当然ですが、テストの結果も変えないと、テストが通りませんよね。変えましょう。
// 色々値を変えてみて、それでいてテストを通るようにしてください。
// イメージとしては、まだ明確にはわからない filter の仕様を理解する気持ちで！

describe("filter", () => {
  const members = ["nakanishi", "jim", "john", "jona", "johin", "+++"];

  // filter を使って、条件を絞り込む
  const res = members.filter((member) => {
    return member.match(/jo/);
  });

  it("絞り込まれているか", () => {
    const expected = ["john", "jona", "johin"];
    expect(res).toEqual(expected);
  });
});

//前回、filter() の紹介をしましたが、この関数の引数には さらに関数 を渡します。
//関数 に 関数 を渡す。これは新しい要素です。
//直接アロー関数を書いて渡す方法と、あらかじめ関数を定義しておいて渡す方法の二つがあります。
// filter()に関数を渡してテストするようにかく

//discribe:テストに見出しをつける
describe("filterに関数を渡す", () => {
  const members = ["nakanishi", "jim", "john", "jona", "johin", "+++"];

  //it:テストに名前をつける
  it("filterに関数を渡してテスト", () => {
    const filterJoh = (arr) => {
      return arr.match(/joh/);
    };
    const expected = ["john", "johin"];
    const res = members.filter(filterJoh);
    expect(res).toEqual(expected);
  });
});

//動画を見て動きを確認する
//filterにわたす関数でtrueを返す、falseを返すパターンを確認する
//true: 配列を全て返す、false: 空配列を返す

describe("filterにわたす関数の動きを確認する", () => {
  const arr = ["a", "b", "c"];

  const funcFilterTrue = (arr) => {
    return true;
  };

  const funcFilterFalse = (arr) => {
    return false;
  };

  it("all true", () => {
    const res = arr.filter(funcFilterTrue);
    expect(res).toEqual(["a", "b", "c"]);
  });

  it("all false", () => {
    const res = arr.filter(funcFilterFalse);
    expect(res).toEqual([]);
  });
});
