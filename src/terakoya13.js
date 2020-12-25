// 関数とテストを別々のファイルに定義する
// それぞれ export/import して、テストを正常に動かす
const testFuncExport = (str) => {
  if (str === "true") {
    return "return true!!";
  } else if (str === "false") {
    return "return false!!";
  } else {
    return "trun or false!!";
  }
};

export default testFuncExport;
