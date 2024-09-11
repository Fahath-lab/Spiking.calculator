// Login protection
function checkLogin() {
    var userId = prompt("Enter Login ID:");
    var password = prompt("Enter Password:");

    // Add multiple valid login credentials
    if (
        (userId === "KMF" && password === "fazil") ||   // First login ID and password
        (userId === "EQAS" && password === "bioch")  // Second login ID and password
    ) {
        alert("Login successful!");
    } else {
        alert("Invalid login. Please refresh and try again.");
        document.body.innerHTML = "";  // Clear the page content if login fails
    }
      
      }

      // Trigger login prompt on page load
      window.onload = checkLogin;