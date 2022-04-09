function connectWallet() {
  alert("Commitment Deposit Smart Contract currently in development at HeartBank®");
}

function checkMark(checkbox) {
  window.location.replace("#");
  localStorage.setItem(checkbox.id, checkbox.checked);
  renderStats();
}

function renderStats() {

  let chapterTotal = 0;
  let extraCreditTotal = 0;

  for (let i = 1; i <= 19; i++) {

    const chapterCompleted = localStorage.getItem("chapter" + i) === "true";
    document.getElementById("chapter" + i).checked = chapterCompleted;
    chapterTotal += chapterCompleted ? 1 : 0;

    ["podcast", "app", "tutoring"].forEach(extraCredit => {
      const extraCreditCompleted = localStorage.getItem("chapter" + i + "-" + extraCredit) === "true";
      document.getElementById("chapter" + i + "-" + extraCredit).checked = extraCreditCompleted;
      document.getElementById("chapter" + i + "-" + extraCredit).disabled = true;
      extraCreditTotal += extraCreditCompleted ? 1 : 0;
    })

  }

  document.getElementById("chapters-completed").textContent = chapterTotal;
  document.getElementById("extra-credits-completed").textContent = extraCreditTotal;
  document.getElementById("total-completed").textContent = Math.round((chapterTotal + extraCreditTotal) / 400 * 100);
}

window.onload = () => {
  if (window.location.hash) localStorage.setItem(window.location.hash.substring(1), true);
  renderStats();
}

window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-TR7EB8HM4Z');