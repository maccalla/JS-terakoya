//map を使って、新しい配列を作ってみよう！
// map は配列に対して実行できる JavaScript の組み込みメソッド(元から用意されているメソッド)で、
// 配列を元に trueを返した場合の要素だけが採用された」新しい配列を作るために使用します。

describe("mapの確認", () => {
  const arr = ["a", "b", "c", "d", "e"];

  it("new", () => {
    const res = arr.map(() => {
      return "new";
    });

    const expected = ["new", "new", "new", "new", "new"];

    expect(res).toEqual(expected);
  });

  it("add Mr.", () => {
    const res = arr.map((name) => {
      return "Mr." + name;
    });

    const expected = ["Mr.a", "Mr.b", "Mr.c", "Mr.d", "Mr.e"];

    expect(res).toEqual(expected);
  });
});
