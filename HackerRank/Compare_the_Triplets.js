const a = [5, 6, 7, 3,1];
const b = [3, 6, 1, 1,5];
function compareTriplets(a, b) {
  let result = [0,0];
  for (let i = 0; i < a.length; i++) {
    if (a[i] > b[i]) {
      result[0] = result[0]+1
    } else if (a[i] < b[i]) {
      result[1] = result[1]+1
    }
  }
return result;
}
const result = compareTriplets(a, b); 
console.log(result)