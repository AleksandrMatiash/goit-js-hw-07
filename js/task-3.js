const inputField = document.querySelector("#name-input")
const outputSpan = document.querySelector("#name-output")

inputField.addEventListener("input", () => {
    const name = inputField.value.trim();
    outputSpan.textContent = name === "" ? "Anonymous" : name;
});
