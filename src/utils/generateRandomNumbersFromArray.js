export default (arraySize, max) => {
    const arr = [];
    while(arr.length < max){
        let val = Math.floor((Math.random() * arraySize));
        if(arr.indexOf(val) < 0) arr.push(val);
      }
    return arr
}
