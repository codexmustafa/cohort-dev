function leap (year) {
    if (year % 4) {
        return "Leap Year"
    } else if(year % 100) {
        return "Not a Leap Year"
    } else if (year % 100 && 400) {
        return "Leap Year"
    }
}

console.log(leap(2000))