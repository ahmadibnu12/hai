let password = "";

function addNumber (number) {
    password += number;
    document.getElementById("passwordInput").value = password;
}

function clearPassword () {
    password = "";
    document.getElementById("passwordInput").value = password;
}

function checkPassword() {
    const correctPassword = "260524";
    if (password === correctPassword) {
    window.location.href = "1.html"
} else {
    document.getElementById("message").textContent = "Password salah!";
    document.getElementById("message").style.color = "red";
    clearPassword();
  } 
}