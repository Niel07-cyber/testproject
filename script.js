// Profile Dropdown Toggle
document.getElementById("profile-icon").addEventListener("click", function () {
    let dropdown = document.getElementById("dropdown-menu");
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
  });
  
  // Close dropdown when clicking outside
  document.addEventListener("click", function (event) {
    let profileIcon = document.getElementById("profile-icon");
    let dropdown = document.getElementById("dropdown-menu");
  
    if (!profileIcon.contains(event.target) && !dropdown.contains(event.target)) {
      dropdown.style.display = "none";
    }
  });
  
  // Logout Action
  document.getElementById("logout").addEventListener("click", function () {
    alert("Logging out...");
    window.location.href = "index.html"; // Redirect to login page
  });
  
  
  