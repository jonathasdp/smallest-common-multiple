function smallestCommons(arr) {
  let sortedArr = arr.sort((a, b) => a - b);
  let sequencedArr = [...new Array(sortedArr[1] + 1).keys()].splice(sortedArr[0]);
  let multiple = 1;

  while (sequencedArr.some(s => multiple % s !== 0)) {
    multiple++;
  }

  return multiple;
}