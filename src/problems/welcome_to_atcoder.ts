// 問題: https://atcoder.jp/contests/practice/tasks/practice_1

import { readAll } from "@std/io/read-all";

export const welcomeToAtCoder = async () => {
  const lines = new TextDecoder().decode(await readAll(Deno.stdin)).split("\n");
  // const lines = new TextDecoder().decode(await Deno.readAll(Deno.stdin)).split("\n"); // AtCoder用の書き方（Denoのサポートバージョンが1.35.1のため）

  let inputLineIndex = 0;
  const readLine = () => lines[inputLineIndex++];

  // 一行目
  const a = Number(readLine());
  // 二行目
  const [b, c] = readLine().split(" ").map((x) => Number(x));
  // 三行目
  const s = readLine();

  // 出力
  const sum = a + b + c;
  console.log(sum + " " + s);
};
