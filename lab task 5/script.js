function toggleJoinButton() {
    let checked = document.getElementById("medicalCheck").checked;

    document.getElementById("joinButton").disabled = !checked;
}


function validateForm() {

    let name = document.getElementById("fullName").value;
    let age = document.getElementById("age").value;
    let mobile = document.getElementById("mobile").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let plan = document.getElementById("plan").value;
    let startDate = document.getElementById("startDate").value;
    let mainTrainer = document.getElementById("mainTrainer").value;
    let backupTrainer = document.getElementById("backupTrainer").value;
    let addons = document.getElementById("addons").value;

    document.getElementById("nameError").innerHTML = "";
    document.getElementById("ageError").innerHTML = "";
    document.getElementById("mobileError").innerHTML = "";
    document.getElementById("emailError").innerHTML = "";
    document.getElementById("passwordError").innerHTML = "";
    document.getElementById("confirmPasswordError").innerHTML = "";
    document.getElementById("planError").innerHTML = "";
    document.getElementById("dateError").innerHTML = "";
    document.getElementById("timeError").innerHTML = "";
    document.getElementById("mainTrainerError").innerHTML = "";
    document.getElementById("backupTrainerError").innerHTML = "";
    document.getElementById("addonsError").innerHTML = "";
    document.getElementById("finalMessage").innerHTML = "";

    let valid = true;

    if (name == "") {
        document.getElementById("nameError").innerHTML = "Please enter your name.";
        valid = false;
    }
    else if (name.length < 3) {
        document.getElementById("nameError").innerHTML = "Name must have at least 3 characters.";
        valid = false;
    }
    else {
        for (let i = 0; i < name.length; i++) {
            let ch = name.charAt(i);

            if (!((ch >= "A" && ch <= "Z") || (ch >= "a" && ch <= "z") || ch == " ")) {
                document.getElementById("nameError").innerHTML = "Name can contain only letters and spaces.";
                valid = false;
                break;
            }
        }
    }

    if (age == "" || isNaN(age) || age < 16 || age > 65) {
        document.getElementById("ageError").innerHTML = "Age must be between 16 and 65.";
        valid = false;
    }

    if (mobile.length != 11 || mobile.charAt(0) != "0" || mobile.charAt(1) != "1" || mobile.charAt(2) < "3" || mobile.charAt(2) > "9") {
        document.getElementById("mobileError").innerHTML = "Enter a valid 11-digit mobile number.";
        valid = false;
    }
    else {
        for (let i = 0; i < mobile.length; i++) {
            if (mobile.charAt(i) < "0" || mobile.charAt(i) > "9") {
                document.getElementById("mobileError").innerHTML = "Mobile number must contain only digits.";
                valid = false;
                break;
            }
        }
    }

    let atPosition = email.indexOf("@");
    let dotPosition = email.indexOf(".", atPosition);

    if (email == "" || email.indexOf(" ") != -1 || atPosition <= 0 || dotPosition < atPosition + 2 || dotPosition == email.length - 1) {
        document.getElementById("emailError").innerHTML = "Enter a valid email address.";
        valid = false;
    }

    let hasCapital = false;
    let hasNumber = false;

    for (let i = 0; i < password.length; i++) {
        let ch = password.charAt(i);

        if (ch >= "A" && ch <= "Z") {
            hasCapital = true;
        }

        if (ch >= "0" && ch <= "9") {
            hasNumber = true;
        }
    }

    if (password.length < 8 || !hasCapital || !hasNumber) {
        document.getElementById("passwordError").innerHTML = "Password needs 8 characters, one capital letter and one number.";
        valid = false;
    }

    if (confirmPassword == "" || confirmPassword != password) {
        document.getElementById("confirmPasswordError").innerHTML = "Passwords do not match.";
        valid = false;
    }

    if (plan == "") {
        document.getElementById("planError").innerHTML = "Please select a membership plan.";
        valid = false;
    }

    if (startDate == "") {
        document.getElementById("dateError").innerHTML = "Please select a start date.";
        valid = false;
    }

    if (!document.getElementById("morning").checked &&
        !document.getElementById("afternoon").checked &&
        !document.getElementById("evening").checked) {
        document.getElementById("timeError").innerHTML = "Please select a workout time.";
        valid = false;
    }

    if (mainTrainer == "") {
        document.getElementById("mainTrainerError").innerHTML = "Please select a main trainer.";
        valid = false;
    }

    if (backupTrainer == "") {
        document.getElementById("backupTrainerError").innerHTML = "Please select a backup trainer.";
        valid = false;
    }
    else if (mainTrainer == backupTrainer) {
        document.getElementById("backupTrainerError").innerHTML = "Choose a different backup trainer.";
        valid = false;
    }

    if (addons == "") {
        document.getElementById("addonsError").innerHTML = "Please enter family add-ons.";
        valid = false;
    }
    else if (isNaN(addons) || addons < 0 || addons > 3) {
        document.getElementById("addonsError").innerHTML = "Family add-ons must be between 0 and 3.";
        valid = false;
    }
    else {
        for (let i = 0; i < addons.length; i++) {
            if (addons.charAt(i) < "0" || addons.charAt(i) > "9") {
                document.getElementById("addonsError").innerHTML = "Enter a whole number.";
                valid = false;
                break;
            }
        }
    }

    if (valid == false) {
        return false;
    }

    let planFee = 0;

    if (plan == "Monthly") {
        planFee = 1500;
    }
    else if (plan == "Quarterly") {
        planFee = 4000;
    }
    else if (plan == "Yearly") {
        planFee = 14000;
    }

    let total = planFee + (addons * 500);

    document.getElementById("finalMessage").innerHTML =
        "Welcome, " + name + "! Your " + plan +
        " membership starts on " + startDate +
        ". Total payable: " + total + " Taka.";

    document.getElementById("gymForm").reset();

    document.getElementById("joinButton").disabled = true;

    return false;
}
