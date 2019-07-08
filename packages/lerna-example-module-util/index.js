import add from 'lerna-example-module-core';
export default function addOne(a,b){
  console.log('@@addResult', add(a,b))
  return (add(a,b) + 1);
}
