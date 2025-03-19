document.addEventListener("DOMContentLoaded", () => {
    const nameInput = document.getElementById("nameInput");
    const emailInput = document.getElementById("emailInput");
    const ageInput = document.getElementById("ageInput");
    const addUserButton = document.getElementById("addUser");
    const userList = document.getElementById("userList");
    const errorMessage = document.getElementById("errorMessage");

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const nameRegex = /^[A-Za-z\s]{3,}$/;
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    const ageRegex = /^(1[89]|[2-9][0-9]|100)$/;

    const renderUsers = () => {
        userList.innerHTML = "";
        users.forEach((user, index) => {
            const li = document.createElement("li");
            li.textContent = `${user.name} (${user.email}), ${user.age}`;

            const deleteButton = document.createElement("button");
            deleteButton.textContent = "Delete";
            deleteButton.classList.add("delete");
            deleteButton.addEventListener("click", () => {
                users.splice(index, 1);
                localStorage.setItem("users", JSON.stringify(users));
                renderUsers();
            });

            li.appendChild(deleteButton);
            userList.appendChild(li);
        });
    };

    renderUsers();

    const validateForm = () => {
        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const age = ageInput.value.trim();

        errorMessage.style.display = "none";
        errorMessage.innerHTML = "";

        if (!nameRegex.test(name)) {
            alert("Name must be at least 3 letters long and contain only letters.");
            return false;
        }
        if (!emailRegex.test(email)) {
            alert("Please enter a valid email address.");
            return false;
        }
        if (!ageRegex.test(age)) {
            alert("Age must be between 18 and 100.");
            return false;
        }
        return true;
    };

    document.getElementById("userForm").addEventListener("submit", (e) => {
        e.preventDefault();

        if (validateForm()) {
            const name = nameInput.value.trim();
            const email = emailInput.value.trim();
            const age = ageInput.value.trim();
            const newUser = { name, email, age };
            users.push(newUser);
            localStorage.setItem("users", JSON.stringify(users));
            renderUsers();
            nameInput.value = "";
            emailInput.value = "";
            ageInput.value = "";
        }
    });
    function checkLoginStatus() {
        const loggedInUser = localStorage.getItem("loggedInUser");
        if (loggedInUser) {

            document.getElementById("status").textContent = `Welcome back, ${loggedInUser}!`;
            document.getElementById("status").style.color = "green";
            document.getElementById("logoutButton").style.display = "block";

            document.getElementById("username").disabled = true;
            document.getElementById("password").disabled = true;
        }
    }
    
    function handleLogout() {
        localStorage.removeItem("loggedInUser");
        document.getElementById("logoutButton").style.display = "none";
        document.getElementById("status").textContent = "You have logged out.";
        document.getElementById("status").style.color = "red";
    
        const usernameInput = document.getElementById("username");
        const passwordInput = document.getElementById("password");
        usernameInput.disabled = false;
        passwordInput.disabled = false;
        usernameInput.value = "";
        passwordInput.value = "";
    }
    
    document.getElementById("logoutButton").addEventListener("click", handleLogout);
    
    document.getElementById("loginForm").addEventListener("submit", function (event) {
        event.preventDefault();
    
        const usernameInput = document.getElementById("username");
        const passwordInput = document.getElementById("password");
    
        const usernameValue = usernameInput.value.trim();
        const passwordValue = passwordInput.value.trim();
    
        fetch("users.json")
            .then((response) => response.json())
            .then((users) => {
                const user = users.find(u => u.username === usernameValue && u.password === passwordValue);
                if (user) {
                    document.getElementById("status").textContent = "Login successful!";
                    document.getElementById("status").style.color = "green";
                    const logoutButton = document.getElementById("logoutButton");
                    logoutButton.style.display = "block";
    
                    usernameInput.disabled = true;
                    passwordInput.disabled = true;

                    localStorage.setItem("loggedInUser", usernameValue);
                } else {
                    document.getElementById("status").textContent = "Invalid username or password.";
                    document.getElementById("status").style.color = "red";
                }
            })
            .catch((error) => {
                console.error("Error loading JSON:", error);
                document.getElementById("status").textContent = "Error loading user data.";
                document.getElementById("status").style.color = "red";
            });
    });
    
    checkLoginStatus();
 // Primul canvas
const canvas = document.getElementById("tutorial");
const ctx = canvas.getContext("2d");
ctx.clearRect(0, 0, canvas.width, canvas.height);

// Capul (primul schelet)
ctx.beginPath();
ctx.arc(150, 50, 30, 0, Math.PI * 2); // Centru (150, 50), rază 30
ctx.fillStyle = "white"; // Față albă
ctx.fill();
ctx.strokeStyle = "black"; // Contur negru
ctx.lineWidth = 2;
ctx.stroke();

// Ochi
ctx.beginPath();
ctx.arc(140, 45, 5, 0, Math.PI * 2); // Ochii
ctx.arc(160, 45, 5, 0, Math.PI * 2);
ctx.fillStyle = "black";
ctx.fill();

// Gură (formă de "O" deschisă)
ctx.beginPath();
ctx.arc(150, 65, 10, 0, Math.PI * 2); // Gură deschisă
ctx.strokeStyle = "black";
ctx.lineWidth = 3;
ctx.stroke();

// Coloana vertebrală
ctx.beginPath();
ctx.moveTo(150, 80); // Sub cap
ctx.lineTo(150, 200); // Până la pelvis
ctx.strokeStyle = "white"; // Contur alb
ctx.lineWidth = 4;
ctx.stroke();

// Brațele (linii în T)
ctx.beginPath();
ctx.moveTo(100, 100); // Brațul stâng
ctx.lineTo(200, 100); // Brațul drept
ctx.stroke();

// Picioarele (linii în V)
ctx.beginPath();
ctx.moveTo(150, 200); // De la pelvis
ctx.lineTo(120, 300); // Piciorul stâng
ctx.moveTo(150, 200);
ctx.lineTo(180, 300); // Piciorul drept
ctx.stroke();

// Al doilea canvas
const canvas2 = document.getElementById("tutorial2");
const ctx2 = canvas2.getContext("2d"); // Corect obținut contextul pentru canvas2
ctx2.clearRect(0, 0, canvas2.width, canvas2.height);

// Capul (al doilea schelet)
ctx2.beginPath();
ctx2.arc(150, 50, 30, 0, Math.PI * 2); // Centru (150, 50), rază 30
ctx2.fillStyle = "white"; // Față albă
ctx2.fill();
ctx2.strokeStyle = "black"; // Contur negru
ctx2.lineWidth = 2;
ctx2.stroke();

// Față (ochii convexi și gura concavă)
// Ochi (arce convexe)
ctx2.beginPath();
ctx2.arc(140, 45, 5, 0, Math.PI, false); // Ochi stâng (arc convex)
ctx2.arc(160, 45, 5, 0, Math.PI, false); // Ochi drept (arc convex)
ctx2.strokeStyle = "black";
ctx2.lineWidth = 2;
ctx2.stroke();

// Gură (arc concav)
ctx2.beginPath();
ctx2.arc(150, 65, 10, Math.PI, 0, false); // Gură concavă
ctx2.strokeStyle = "black";
ctx2.lineWidth = 3;
ctx2.stroke();

// Coloana vertebrală
ctx2.beginPath();
ctx2.moveTo(150, 80); // Sub cap
ctx2.lineTo(150, 200); // Până la pelvis
ctx2.strokeStyle = "white"; // Contur alb
ctx2.lineWidth = 4;
ctx2.stroke();

// Brațele (linii în T)
ctx2.beginPath();
ctx2.moveTo(100, 100); // Brațul stâng
ctx2.lineTo(200, 100); // Brațul drept
ctx2.stroke();

// Picioarele (linii în V)
ctx2.beginPath();
ctx2.moveTo(150, 200); // De la pelvis
ctx2.lineTo(120, 300); // Piciorul stâng
ctx2.moveTo(150, 200);
ctx2.lineTo(180, 300); // Piciorul drept
ctx2.stroke();
canvas.style.border = "none";
canvas2.style.border = "none";
});