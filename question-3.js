// Question #3
let userPassword = "";
// เริ่มเขียนโค้ดตรงนี้
function chackPasswordStrength (password) {
    if (password.length < 6) {
        return "Weak"
    } else if (password.length <= 10) {
        return "Medium"
    } else {
        return "Strong"
    }
}

console.log(chackPasswordStrength(userPassword));