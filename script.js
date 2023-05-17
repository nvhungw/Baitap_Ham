// // Bài 8: Viết hàm nhận vào một số, kiểm tra xem nếu số đưa vào có phải là nguyên dương không. Nếu là nguyên dương trả về true, ngược lại trả về false.
// function isPositiveInteger(number) {
//   let isBigger = Number(number) > 0;
//   return isBigger;
// }

// let numberInput = document.querySelector('.number-input');
// let btnCheck = document.querySelector('.btn-check');
// let result = document.querySelector('.result');

// btnCheck.addEventListener('click', function () {
//   let numberInputValue = numberInput.value;
//   let message = `${numberInputValue}  không phải là số nguyên dương`;
//   if (isPositiveInteger(numberInputValue)) {
//     message = `${numberInputValue} là số nguyên dương`;
//   }
//   result.innerHTML = message;
// });

// // Bài 9: Viết hàm truyền vào mảng số nguyên bất kỳ, sau đó đảo ngược mảng số nguyên đó
// function flipArray(numbersArr) {
//   let arrTemp = [];
//   for (let index = numbersArr.length - 1; index >= 0; index--) {
//     let item = numbersArr[index];
//     arrTemp.push(item);
//   }
//   return arrTemp;
// }
// let arr = [1, 5, 3, 4];
// let arrFlip = flipArray(arr);
// console.log(arrFlip);

// // Bài 10: Viết hàm truyền vào một mảng ký tự, và một ký tự bất kỳ, kiểm tra xem ký tự bất kỳ đó có nằm trong mảng không. Nếu có trả về số lần xuất hiện của ký tự đó, nếu không trả về -1
// let character = '2';
// let arrSearch = ['2', 'a', 'a', 'a'];

// function countCharacterInArray(characterSearch, arr) {
//   let countStr = 0;
//   for (let index in arr) {
//     if (arr[index] === character) {
//       countStr += 1;
//     }
//   }
//   if (countStr == 0) {
//     return -1;
//   }
//   return countStr;
// }

// let count = countCharacterInArray(character, arrSearch);
// console.log(count);

// Bài khác
let productnNames = ['Iphone 11'];
function renderProductNames(products) {
  //Hàm in ra
  let productElement = document.querySelector('.products');
  let productHtml = '';
  for (let index in products) {
    // Nối chuỗi dùng +=
    let item = products[index];
    productHtml += `<div class="product-1">
    <p>${item}</p>
    <p>2000$</p>
    <img src="./" alt="">
    <button>buy</button>
    <p>-------------------</p>
</div>`;
  }
  productElement.innerHTML = productHtml;
}
renderProductNames(productnNames); //Gọi lại Hàm in ra

let inputName = document.querySelector('.input-name');
let addBtn = document.querySelector('.add');

addBtn.addEventListener('click', function () {
  let inputNameValue = inputName.value;
  productnNames.push(inputNameValue);
  renderProductNames(productnNames); //Gọi lại Hàm in ra
  inputName.value = '';
});
