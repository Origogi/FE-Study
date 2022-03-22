// Q1. make a string out of an array
{
  const fruits = ["apple", "banana", "orange"];
  const join = fruits.join(", ");
  console.log(join);
}

// Q2. make an array out of a string
{
  const fruits = "🍎, 🥝, 🍌, 🍒";
  const splited = fruits.split(", ");
  console.log(splited);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
  const array = [1, 2, 3, 4, 5];
  const reversed = array.reverse();
  console.log(reversed);
}

// Q4. make new array without the first two elements
{
  const array = [1, 2, 3, 4, 5];
  const sliced = array.slice(2);
  console.log(sliced);
}

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student("A", 29, true, 45),
  new Student("B", 28, false, 80),
  new Student("C", 30, true, 90),
  new Student("D", 40, false, 66),
  new Student("E", 18, true, 88),
];

// Q5. find a student with the score 90
{
  const score90 = students.find((item) => item.score === 90);
  console.log(score90);
}

// Q6. make an array of enrolled students
{
  const filtered = students.filter((item) => item.enrolled);
  console.log(filtered);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
  const score = students.map((item) => item.score);
  console.log(score);
}

// Q8. check if there is a student with the score lower than 50
{
  // const has = students.find((item) => item.score <= 50) != undefined;
  const has = students.some((item) => item.score <= 50);
  console.log(has);
}

// Q9. compute students' average score
{
  const sum = students.map((item) => item.score).reduce((a, b) => a + b);
  const average = sum / students.length;
  console.log(average);
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
  const result = students.map((item) => item.score).join(", ");
  console.log(result);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
  const result = students
    .map((item) => item.score)
    .sort()
    .join(", ");
  console.log(result);
}
