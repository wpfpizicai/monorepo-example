import addOne from 'lerna-example-module-util';
export default function addThree(a,b){
  let addOneResult = add(a,b);
  console.log("@@addOneResult", addOneResult);
  let addThreeResult = addOneResult + 3;
  console.log('@@addThreeResult', addThreeResult);
  return addThreeResult;
}
