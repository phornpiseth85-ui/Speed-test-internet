function helloworld() {
    console.log("Hello, World!");
}
helloworld();
const testBtn = document.getElementById("testBtn");

testBtn.addEventListener("click", async () => {
  const result = document.getElementById("speedResult");

  result.textContent = "Testing internet connection...";

  try {
    const start = performance.now();

    await fetch("https://www.google.com/favicon.ico", {
      mode: "no-cors",
      cache: "no-store"
    });

    const ping = Math.round(performance.now() - start);

    result.textContent =
      `Connection request completed. Time: ${ping} ms.`;
  }catch (error) {
    result.textContent = "Connection test failed.";
  }
});