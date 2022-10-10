var list1 = [
    { firstName: 'Maria', lastName: 'Y.', country: 'Cyprus', continent: 'Europe', age: 20, language: 'Java' },
    { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 65, language: 'Python' },
  ];

var list2 = [
    { firstName: 'Janet', lastName: 'A.', country: 'Greece', continent: 'Europe', age: 29, language: 'JavaScript' },
    { firstName: 'David', lastName: 'G.', country: 'USA', continent: 'Americas', age: 37, language: 'Javascript' },
    { firstName: 'Joseph', lastName: 'H.', country: 'Cuba', continent: 'Americas', age: 21, language: 'Solidity ' },
    ];

var list3 = [
    { firstName: 'Susan', lastName: 'S.', country: 'Ghana', continent: 'Africa', age: 19, language: 'React' },
    { firstName: 'Michael', lastName: 'L.', country: 'Kosovo', continent: 'Europe', age: 43, language: 'C++' },
    { firstName: 'John', lastName: 'T.', country: 'Macedonia', continent: 'Europe', age: 51, language: 'Python' },
    ];

function getAverageAge(list) {
    let age = 0
    list.forEach(el => {
      age += el.age
    })
    return Math.round(age/list.length)
  }

console.log(getAverageAge(list1)) // => 43
console.log(getAverageAge(list2)) // => 29
console.log(getAverageAge(list3)) // => 38