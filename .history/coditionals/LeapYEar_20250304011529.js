function leap (year) {
    if (year % 4 == 100) {
        return "Leap Year"
    } else {
        return "Not a Leap Year"
    }
}

console.log(leap(2000))