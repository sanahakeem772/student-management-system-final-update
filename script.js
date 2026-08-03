// Explore button
function exploreCourses() {

    document.getElementById("courses").scrollIntoView({
        behavior: "smooth"
    });

}

// Navigation
function showSection(sectionId) {

    document.getElementById(sectionId).scrollIntoView({
        behavior: "smooth"
    });

}

// Welcome Message
window.onload = function () {

    alert("Welcome to Student Course Management System!");

};
// Register Form Validation

document.getElementById("registerForm").addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    // Clear previous errors
    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("passwordError").textContent = "";
    document.getElementById("confirmError").textContent = "";

    let valid = true;

    // Name Validation
    if (name === "") {
        document.getElementById("nameError").textContent = "Name is required";
        valid = false;
    }

    // Email Validation
    if (email === "") {
        document.getElementById("emailError").textContent = "Email is required";
        valid = false;
    } else if (!email.includes("@")) {
        document.getElementById("emailError").textContent = "Enter a valid email";
        valid = false;
    }

    // Password Validation
    if (password.length < 6) {
        document.getElementById("passwordError").textContent =
            "Password must be at least 6 characters";
        valid = false;
    }

    // Confirm Password
    if (confirmPassword !== password) {
        document.getElementById("confirmError").textContent =
            "Passwords do not match";
        valid = false;
    }

    // Success
    if (valid) {
        alert("Registration Successful!");

        // Reset Form
        document.getElementById("registerForm").reset();

        // Optional: Redirect to Login Page
        // window.location.href = "login.html";
    }

});
// Login Form Validation

document.getElementById("loginForm").addEventListener("submit", function(event) {

    event.preventDefault();

    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value;

    let valid = true;

    // Clear previous errors
    document.getElementById("emailError").textContent = "";
    document.getElementById("passwordError").textContent = "";

    // Email Validation
    if (email === "") {
        document.getElementById("emailError").textContent = "Email is required";
        valid = false;
    } 
    else if (!email.includes("@")) {
        document.getElementById("emailError").textContent = "Enter a valid email";
        valid = false;
    }

    // Password Validation
    if (password === "") {
        document.getElementById("passwordError").textContent = "Password is required";
        valid = false;
    } 
    else if (password.length < 6) {
        document.getElementById("passwordError").textContent = "Password must be at least 6 characters";
        valid = false;
    }

    // Success
    if (valid) {
        alert("Login Successful!");

        // Redirect to Dashboard
        window.location.href = "dashboard.html";
    }

});
document.getElementById("registerForm").addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    // Error elements
    let nameError = document.getElementById("nameError");
    let emailError = document.getElementById("emailError");
    let passwordError = document.getElementById("passwordError");
    let confirmError = document.getElementById("confirmError");

    // Clear previous errors
    nameError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";
    confirmError.textContent = "";

    let isValid = true;

    // Name Validation
    if (name === "") {
        nameError.textContent = "Please enter your name";
        isValid = false;
    }

    // Email Validation
    if (email === "") {
        emailError.textContent = "Please enter your email";
        isValid = false;
    } else {
        let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if (!email.match(emailPattern)) {
            emailError.textContent = "Please enter a valid email";
            isValid = false;
        }
    }

    // Password Validation
    if (password === "") {
        passwordError.textContent = "Please enter your password";
        isValid = false;
    } else if (password.length < 6) {
        passwordError.textContent = "Password must be at least 6 characters";
        isValid = false;
    }

    // Confirm Password Validation
    if (confirmPassword === "") {
        confirmError.textContent = "Please confirm your password";
        isValid = false;
    } else if (password !== confirmPassword) {
        confirmError.textContent = "Passwords do not match";
        isValid = false;
    }

    // Success
    if (isValid) {
        alert("Registration Successful!");

        // Reset form
        document.getElementById("registerForm").reset();

        // Redirect to Login Page
        window.location.href = "login.html";
    }

});
// Welcome Message
window.onload = function () {
    alert("Welcome to Student Dashboard!");
};

// Enrolled Courses Button
function viewCourses() {
    alert("Opening Courses Page...");
    window.location.href = "courses.html";
}

// Learning Progress Button
function viewProgress() {
    alert("Opening Progress Page...");
    window.location.href = "progress.html";
}

// Assignment Button
function checkAssignments() {
    alert("You have 3 pending assignments.");
}

// Completed Modules Button
function viewModules() {
    alert("You have completed 12 modules.");
}

// Logout
function logout() {

    let confirmLogout = confirm("Are you sure you want to logout?");

    if (confirmLogout) {
        alert("Logged Out Successfully!");
        window.location.href = "login.html";
    }

}
// Store enrolled courses
let enrolledCourses = [];

// Enroll Function
function enrollCourse(courseName) {

    // Check if already enrolled
    if (enrolledCourses.includes(courseName)) {
        alert("You have already enrolled in " + courseName + " course.");
        return;
    }

    // Add course
    enrolledCourses.push(courseName);

    alert("Successfully enrolled in " + courseName + " course!");

    console.log("Enrolled Courses:", enrolledCourses);
}

// Show all enrolled courses
function showEnrolledCourses() {

    if (enrolledCourses.length === 0) {
        alert("You have not enrolled in any course yet.");
    } else {
        alert("Enrolled Courses:\n\n" + enrolledCourses.join("\n"));
    }

}

// Logout Function
function logout() {

    let choice = confirm("Do you want to logout?");

    if (choice) {
        alert("Logout Successful!");
        window.location.href = "login.html";
    }

}
// Show welcome message
window.onload = function () {
    alert("Welcome to Learning Progress Page!");
};

// Course progress values
let progressData = {
    HTML: 90,
    CSS: 75,
    JavaScript: 60,
    Python: 50
};

// Display Progress
function showProgress() {

    document.getElementById("htmlProgress").style.width = progressData.HTML + "%";
    document.getElementById("htmlProgress").innerHTML = progressData.HTML + "%";

    document.getElementById("cssProgress").style.width = progressData.CSS + "%";
    document.getElementById("cssProgress").innerHTML = progressData.CSS + "%";

    document.getElementById("jsProgress").style.width = progressData.JavaScript + "%";
    document.getElementById("jsProgress").innerHTML = progressData.JavaScript + "%";

    document.getElementById("pythonProgress").style.width = progressData.Python + "%";
    document.getElementById("pythonProgress").innerHTML = progressData.Python + "%";
}

// Update Progress
function updateProgress(course, value) {

    if (progressData[course] < 100) {

        progressData[course] += value;

        if (progressData[course] > 100) {
            progressData[course] = 100;
        }

        showProgress();

        alert(course + " Progress Updated to " + progressData[course] + "%");
    } else {

        alert(course + " Course Completed!");
    }
}

// Load Progress when page opens
showProgress();
// Store enrolled courses
let enrolledCourses = [];

// Enroll Course
function enrollCourse(courseName) {

    // Check if already enrolled
    if (enrolledCourses.includes(courseName)) {
        alert("You are already enrolled in " + courseName + "!");
        return;
    }

    // Add course
    enrolledCourses.push(courseName);

    alert("Successfully enrolled in " + courseName + " Course!");

    // Show total enrolled courses
    console.log("Enrolled Courses:", enrolledCourses);
    console.log("Total Courses:", enrolledCourses.length);
}

// View Enrolled Courses
function viewCourses() {

    if (enrolledCourses.length === 0) {
        alert("No courses enrolled yet.");
    } else {
        alert(
            "Your Enrolled Courses:\n\n" +
            enrolledCourses.join("\n")
        );
    }
}

// Logout
function logout() {

    let choice = confirm("Are you sure you want to logout?");

    if (choice) {
        alert("Logged Out Successfully!");
        window.location.href = "login.html";
    }
}