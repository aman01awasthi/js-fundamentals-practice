let slip = [];
console.log(slip);

async function getAdvice() {
  try {
    let res = await fetch(`https://api.adviceslip.com/advice`);
    let response = await res.json();
    console.log(response);
    slip = response.slip.advice;
  } catch (err) {
    console.log("error");
  }
}

document.getElementById("getAdvice").addEventListener("click", async () => {
  await getAdvice();
  displayAdvice();
});

function displayAdvice(container) {
  let renderAdvice = document.getElementById("container");
  renderAdvice.textContent = "";

  let h1 = document.createElement("h1");
  h1.textContent = `Advice: ${slip}`;

  renderAdvice.appendChild(h1);
}
