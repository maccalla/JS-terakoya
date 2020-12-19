//変数にアロー関数をバインドします(変数名はなんでも OK)
//そのアロー関数は、引数を受けれるようにしてください(この際の変数名もなんでも OK)
const getArgument = (argument) => {
  return argument;
};

//そのアロー関数は、受け取った引数をそのまま返すようにしてください
//(今日説明してきたアロー関数と全く同じですね。自分で書くだけです)
const res = getArgument("ArrowFunction!!");
console.log(res);
