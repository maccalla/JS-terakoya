//webpackでcssのインポート可能になる
import "./styles.css";

//ねじ込む隙間の対象を指定する
const target = document.querySelector("#app");
console.log(target);

//その隙間にHTMLをねじ込む
target.innerHTML = '<h2 class="red">ねじ込みました。</h2>';
