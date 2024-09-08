// Random background color on page load
document.addEventListener("DOMContentLoaded", function () {
    var colors = [
      "#FFB6C1",
      "#ADD8E6",
      "#90EE90",
      "#FFA07A",
      "#87CEFA",
      "#FFD700",
      "#98FB98",
      "#EE82EE",
      "#B0C4DE",
      "#FF69B4",
    ];
    var usedColors = [];
    function getRandomColor() {
      var color;
      do {
        color = colors[Math.floor(Math.random() * colors.length)];
      } while (usedColors.includes(color) && usedColors.length < colors.length);
      usedColors.push(color);
      return color;
    }

    // Set random background color
    document.body.style.backgroundColor = getRandomColor();

    // Set different random colors for each compartment
    var compartments = document.querySelectorAll(".compartment");
    compartments.forEach(function (compartment) {
      compartment.style.backgroundColor = getRandomColor();
    });
  });

  function toggleChemistry() {
    var chemistrySection = document.getElementById("chemistry-section");
    chemistrySection.classList.toggle("active");
  }

  function updateCalculations() {
    var volume = parseFloat(document.getElementById("volume").value) || 0;

    for (var i = 1; i <= 6; i++) {
      var baseValue =
        parseFloat(document.getElementById("base" + i).value) || 0;
      var targetValue =
        parseFloat(document.getElementById("target" + i).value) || 0;
      var difference = targetValue - baseValue;
      document.getElementById("difference" + i).textContent =
        difference.toFixed(2);
      var requiredAmountMg = (difference * volume) / 100;
      document.getElementById("required" + i).textContent =
        requiredAmountMg.toFixed(2);
      document.getElementById("required_gms" + i).textContent = (
        requiredAmountMg / 1000
      ).toFixed(3);
    }
  }

  function updateDoubleSaltCalculations() {
    var base = parseFloat(document.getElementById("base-salt").value) || 0;
    var target =
      parseFloat(document.getElementById("target-salt").value) || 0;
    var difference = target - base;
    document.getElementById("difference-salt").textContent =
      difference.toFixed(2);
    var volume = parseFloat(document.getElementById("volume").value) || 0;
    var requiredAmount = (difference * volume) / 100;
    document.getElementById("required-salt").textContent =
      requiredAmount.toFixed(2);
    var mmolsRequired = requiredAmount / 24.3;
    document.getElementById("mmols-required-salt").textContent =
      mmolsRequired.toFixed(2);
    var amountRequiredMg = mmolsRequired * 246.5;
    document.getElementById("amount-required-mg-salt").textContent =
      amountRequiredMg.toFixed(2);
    var amountRequiredGms = amountRequiredMg / 1000;
    document.getElementById("amount-required-gms-salt").textContent =
      amountRequiredGms.toFixed(3);
  } 
  function updateDoubleSaltCalculations_2() {
    var base = parseFloat(document.getElementById("base-salt-2").value) || 0;
    var target =
      parseFloat(document.getElementById("target-salt-2").value) || 0;
    var difference = target - base;
    document.getElementById("difference-salt-2").textContent =
      difference.toFixed(2);
    var volume = parseFloat(document.getElementById("volume").value) || 0;
    var requiredAmount = (difference * volume) / 10000;
    document.getElementById("required-salt-2").textContent =
      requiredAmount.toFixed(2);
    var mmolsRequired = requiredAmount / 55.8;
    document.getElementById("mmols-required-salt-2").textContent =
      mmolsRequired.toFixed(2);
    var amountRequiredMg = mmolsRequired * 392.14;
    document.getElementById("amount-required-mg-salt-2").textContent =
      amountRequiredMg.toFixed(2);
    var amountRequiredGms = amountRequiredMg / 1000;
    document.getElementById("amount-required-gms-salt-2").textContent =
      amountRequiredGms.toFixed(3);
    } 

  // Login protection
  function checkLogin() {
    var userId = prompt("Enter Login ID:");
    var password = prompt("Enter Password:");
    if (userId !== "KMF" || password !== "fazil") {
      alert("Invalid login. Please refresh and try again.");
      document.body.innerHTML = "";
    }
  }

  // Trigger login prompt on page load
  window.onload = checkLogin;
