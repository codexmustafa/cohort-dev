// 90 - A
// 80 - B
// 70 - C
// 60 >= D
// F



function gradeCalc (calculateGrade) {
    if(calculateGrade >= 90) {
        return 'A'
    } else if (calculateGrade >= 80) {
        return 'B'
    } else if (calculateGrade >= 70) {
        return 'C'
    } else if (calculateGrade >= 60) {
        return 'D'
    } else {
        return 'F'
    }
}

let grade = gradeCalc(68);

console.log(grade)


write blog on