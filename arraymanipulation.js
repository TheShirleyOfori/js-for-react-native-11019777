function processArray(arr) {
    return arr.map(num => {
      if (num % 2 === 0) {
        return num ** 2;
      } else {
        return num * 3;
      }
    });
  }
  
  function formatArrayStrings(stringArr, numArr) {
    return stringArr.map((str, index) => {
      if (numArr[index] % 2 === 0) {
        return str.toUpperCase();
      } else {
        return str.toLowerCase();
      }
    });
  }
  

  const originalArray = [1, 2, 3, 4, 5, 6];
  const processedArray = processArray(originalArray);
  const stringArray = ["welcome", "to", "my", "first", "DCIT206", "assignment"];
  const formattedStringArray = formatArrayStrings(stringArray, processedArray);
  console.log(formattedStringArray); 