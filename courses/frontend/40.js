function connectWallet() {
  alert("Commitment Deposit Smart Contract currently in development at HeartBank®");
}

function checkMark(checkbox) {
  window.location.replace("#");
  localStorage.setItem(checkbox.id, checkbox.checked);
  renderStats();
}

function renderStats() {

  let total = 0;
  let totalCompleted = 0;

  ["p", "a", "s", "q", "h", "l", "t", "g"].forEach(ds => {

    for (let i = 1; i <= 15; i++) {
      const problemCompleted = localStorage.getItem(ds + "-" + i) === "true";
      const checkbox = document.getElementById(ds + "-" + i);
      if (checkbox) {
        checkbox.checked = problemCompleted;
        checkbox.disabled = true;
        totalCompleted += problemCompleted ? 1 : 0;
        total += 1;
      }  
    }

  });

  document.getElementById("problems-completed").textContent = totalCompleted;
  document.getElementById("total-completed").textContent = Math.round(totalCompleted / total * 100);
  document.getElementById("progress").max = total;
  document.getElementById("total").textContent = total;
}

window.onload = () => {
  if (window.location.hash) localStorage.setItem(window.location.hash.substring(1), true);
  renderStats();
}

window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-TR7EB8HM4Z');