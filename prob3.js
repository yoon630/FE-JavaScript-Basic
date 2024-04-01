/* 3번 문제 답안을 작성해주세요. */
function solution(arr) {
  const minValue = Math.min(...arr);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === minValue) {
      const removedArr = arr.splice(i, 1);
      if (arr.length === 0) {
        return [-1];
      } else {
        return arr;
      }
    }
  }
}
