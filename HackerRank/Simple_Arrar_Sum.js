function SimpleArraySum(ar) {
  let value = 0;
  for (let i = 0; i < ar.length; i++) {
    value = value + ar[i];
  }
  return value;

}
const result = SimpleArraySum([1, 2, 3, 4, 10, 11]);
// console.log(result);

function abcd(data, HR) {
  const sumWithInitial = data.reduce((a) => {return a },{});

  return sumWithInitial;
}

console.log(abcd([
  { department: 'HR', employee: 'Alice' },
  { department: 'IT', employee: 'Bob' },
  { department: 'HR', employee: 'Charlie' },
  { department: 'IT', employee: 'David' }
], "HR"))
