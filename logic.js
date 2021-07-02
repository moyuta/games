let turn; // 1と-1が入れ替わる 1がマル -1がバツ
let count; // ターンの回数
let flag; // 1がマルの勝ち -1がバツの勝ち 0が同点
let state = new Array(3);
for (let i = 0; i < 3; i++) {
  state[i] = new Array(3);
}

module.exports = class logic {
  first() {
    // リロードした時
    turn = 1;
    flag = 2;
    count = 0;
    // 0をセットする
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        state[i][j] = 0;
      }
    }
  }
  click(data) {
    count++;
    state[data.y][data.x] = turn;
    // Q1 ターンを切り替えよう!!ターンという箱に変化を加えよう

    // -------終わる条件--------
    // Q2 置いた個数(count)が?個になったら引き分けにしよう!

    // Q3 ○の勝利条件，バツの勝利条件を決めよう!(winの中身を書こう)
    // ○が勝つ
    win(1);
    // ×がかつ
    win(-1);
    // -----------------------------
    let result = [state, flag];
    return result;
  }
};

function win(turn) {
  // ヒント 1つは以下のもの
  // 使える人はfor文で効率的に書いてみよう
  // if (state[0][0] == turn && state[1][1] == turn && state[2][2] == turn) {
  //   flag = turn;
  // }
}
