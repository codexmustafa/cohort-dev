// // 90 - A
// // 80 - B
// // 70 - C
// // 60 >= D
// // F



// function gradeCalc (calculateGrade) {
//     if(calculateGrade >= 90) {
//         return 'A'
//     } else if (calculateGrade >= 80) {
//         return 'B'
//     } else if (calculateGrade >= 70) {
//         return 'C'
//     } else if (calculateGrade >= 60) {
//         return 'D'
//     } else {
//         return 'F'
//     }
// }

// let grade = gradeCalc(68);

// console.log(grade)


// // write blog on 10 array methods

// function guest (num) {
//     if(num % 2 == 0) {
//         return "Even"
//     } else if(num % 2 != 0) {
//         return "Odd"
//     }
// }

// let res = guest(7);

// console.log(res)


// function findLargest(a, b, c) {
//     // Return the largest among a, b, and c
//     if(a >= b){
//       return a;
//     } else if(b >= c) {
//       return b;
//     } else if(c >= a){
//       return c
//     }
//   }


//   console.log(findLargest(5,5,5))


function calculateGrade(marks) {
    // Return grade based on the marks
    if (marks >= 90) {
      return "A";
    } else if (marks <= 89) {
      return "B";
    } else if (marks <= 79) {
      return "C"
    } else if (marks <= 69) {
      return "D"
    } else if (marks<= 60) {
      return "F"
    }
  }

  clg