// webpage : https://mechanicus84.github.io/web_pages_1/

function addNumbers() 
{
    const num1 = parseFloat(document.getElementById("num1").value) || 0;
    const num2 = parseFloat(document.getElementById("num2").value) || 0;
    const sum = num1 + num2;
    document.getElementById("result").innerText = "Result: " + sum;
}

function calculateDates() {
    const startInput = document.getElementById("start").value;
    const endInput = document.getElementById("end").value;

    if (!startInput || !endInput) {
        document.getElementById("dateResult").innerText = "Please select both dates.";
        return;
    }

    const startDate = new Date(startInput);
    const endDate = new Date(endInput);

    if (endDate < startDate) {
        document.getElementById("dateResult").innerText = "End date must be after start date.";
        return;
    }

    // Total days
    const msPerDay = 1000 * 60 * 60 * 24;
    const diffMs = endDate - startDate;
    const totalDays = Math.floor(diffMs / msPerDay);

    // Weeks + remaining days
    const weeks = Math.floor(totalDays / 7);
    const remainingDays = totalDays % 7;

    // Working days (Mon–Fri)
    let workingDays = 0;
    let current = new Date(startDate);
    while (current <= endDate) {
        const day = current.getDay(); // 0=Sun, 6=Sat
        if (day !== 0 && day !== 6) {
        workingDays++;
        }
        current.setDate(current.getDate() + 1);
    }

    // Output
    document.getElementById("dateResult").innerHTML = `
        <p><strong>Total Days:</strong> ${totalDays}</p>
        <p><strong>Weeks:</strong> ${weeks} weeks and ${remainingDays} days</p>
        <p><strong>Working Days (Mon–Fri):</strong> ${workingDays}</p>
        `;
}

function feetInchesToMetres() {
    const feet = parseFloat(document.getElementById("feet").value) || 0;
    const inches = parseFloat(document.getElementById("inches").value) || 0;

    const totalInches = (feet * 12) + inches;
    const metres = totalInches * 0.0254; // 1 inch = 0.0254 m

    document.getElementById("metresResult").innerText =
    `${feet} ft ${inches} in = ${metres.toFixed(2)} m`;
    }

function metresToFeetInches() {
    const metres = parseFloat(document.getElementById("metres").value) || 0;

    const totalInches = metres / 0.0254;
    const feet = Math.floor(totalInches / 12);
    const inches = Math.round(totalInches % 12);

    document.getElementById("feetInchesResult").innerText =
    `${metres.toFixed(2)} m = ${feet} ft ${inches} in`;
}