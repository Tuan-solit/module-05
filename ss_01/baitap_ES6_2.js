// bai1
function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
console.log(arr.filter((num) => isPrime(num) === true));

// bai2
const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
  gender: 'male',
  occupation: 'developer',
  nationality: 'American',
  city: 'New York',
  hobbies: ['reading', 'traveling', 'photography'],
  languages: ['English', 'Spanish'],
  education: {
    degree: 'Bachelor',
    major: 'Computer Science',
    university: 'Harvard University'
  }
};

const {firstName, gender, education:{degree}} = person;
const [english] = person.languages;
const student = {
  firstName,
  gender,
  degree,
  english,
};
console.log(student);

// bai3
function getInfo({firstName = 'Quan', degree = 'NA'}){
    console.log(`firstName: ${firstName}`);
    console.log(`degree: ${degree}`);
}
const sv1 = {
    firstName: 'John',
    gender: 'male',
    degree: 'Bachelor',
    english: 'English'
}
const sv2 = {
    Name: 'John',
    gender: 'male',
    degree: 'Bachelor',
    english: 'English'
}
getInfo(sv1);
getInfo(sv2);
