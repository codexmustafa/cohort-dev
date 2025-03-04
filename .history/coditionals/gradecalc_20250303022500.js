// 90 - A
// 80 - B
// 70 - C
// 60 >= D
// F



function gradeCalc (calculateGrad) {
    let grade; 
    if(calculateGrade >= 90) {
        return = 'A'
    } else if (calculateGrade >= 80) {
        grade = 'B'
    } else if (calculateGrade >= 70) {
        grade = 'C'
    } else if (calculateGrade >= 60) {
        grade = 'D'
    } else {
        grade = 'F'
    }
    
    console.log(grade)
}
