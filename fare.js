const calculateBtn = document.getElementById("calculateBtn");
const fareOutput = document.getElementById("fare");

if (calculateBtn && fareOutput) {
    calculateBtn.addEventListener("click", function () {
        const vehicle = document.getElementById("vehicle").value;
        const distance = Number(document.getElementById("distance").value);

        if (!distance || distance <= 0) {
            fareOutput.textContent = "Enter a valid distance";
            return;
        }

        let fare = 0;

        if (vehicle === "economy") {
            fare = 800 + 250 * distance;
        } else if (vehicle === "standard") {
            fare = 1200 + 350 * distance;
        } else if (vehicle === "executive") {
            fare = 200000 + 500 * distance;
        }

        fareOutput.textContent = "$" + fare.toLocaleString();
    });
}