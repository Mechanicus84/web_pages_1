function toggleDarkMode() {
	document.body.classList.toggle("dark-mode");
}

// Date Calculator
function calculateDates() {
	const startInput = document.getElementById("start").value;
	const endInput = document.getElementById("end").value;

	if (!startInput || !endInput) {
		document.getElementById("dateResult").innerHTML = `<span class="invalid-input">Please select both dates.</span>`;
		return;
	}

	const startDate = new Date(startInput);
	const endDate = new Date(endInput);

	if (endDate < startDate) {
		document.getElementById("dateResult").innerHTML = `<span class="invalid-input">End date must be after start date.</span>`;
		return;
	}

	const msPerDay = 1000 * 60 * 60 * 24;
	const totalDays = Math.floor((endDate - startDate) / msPerDay);
	const weeks = Math.floor(totalDays / 7);
	const remainingDays = totalDays % 7;

	let workingDays = 0;
	let current = new Date(startDate);
	while (current <= endDate) {
		const day = current.getDay();
		if (day !== 0 && day !== 6) workingDays++;
		current.setDate(current.getDate() + 1);
	}

	document.getElementById("dateResult").innerHTML = `
		<div class="calculation-result">
			<p><strong>Total Days:</strong> ${totalDays}</p>
			<p><strong>Weeks:</strong> ${weeks} weeks and ${remainingDays} days</p>
			<p><strong>Working Days (Mon–Fri):</strong> ${workingDays}</p>
		</div>
	`;
}

// Height Converter
function feetInchesToMetres() {
	const feet = parseFloat(document.getElementById("feet").value) || 0;
	const inches = parseFloat(document.getElementById("inches").value) || 0;

	if (feet < 0 || inches < 0) {
		document.getElementById("metresResult").innerHTML = `<span class="invalid-input">Please enter valid height.</span>`;
		return;
	}

	const totalInches = (feet * 12) + inches;
	const metres = totalInches * 0.0254;
	document.getElementById("metresResult").innerHTML = `<span class="calculation-result">${feet} ft ${inches} in = ${metres.toFixed(2)} m</span>`;
}

function metresToFeetInches() {
	const metres = parseFloat(document.getElementById("metres").value) || 0;

	if (metres <= 0) {
		document.getElementById("feetInchesResult").innerHTML = `<span class="invalid-input">Please enter valid metres.</span>`;
		return;
	}

	const totalInches = metres / 0.0254;
	const feet = Math.floor(totalInches / 12);
	const inches = Math.round(totalInches % 12);

	document.getElementById("feetInchesResult").innerHTML = `<span class="calculation-result">${metres.toFixed(2)} m = ${feet} ft ${inches} in</span>`;
}

// Weight Converter
function stonePoundsToKg() {
	const stone = parseFloat(document.getElementById("stone").value) || 0;
	const pounds = parseFloat(document.getElementById("pounds").value) || 0;

	if (stone < 0 || pounds < 0) {
		document.getElementById("kgResult").innerHTML = `<span class="invalid-input">Please enter valid weight.</span>`;
		return;
	}

	const totalPounds = (stone * 14) + pounds;
	const kg = totalPounds * 0.45359237;
	document.getElementById("kgResult").innerHTML = `<span class="calculation-result">${stone} st ${pounds} lb = ${kg.toFixed(2)} kg</span>`;
}

function kgToStonePounds() {
	const kg = parseFloat(document.getElementById("kg").value) || 0;

	if (kg <= 0) {
		document.getElementById("stonePoundsResult").innerHTML = `<span class="invalid-input">Please enter valid kg.</span>`;
		return;
	}

	const totalPounds = kg / 0.45359237;
	const stone = Math.floor(totalPounds / 14);
	const pounds = Math.round(totalPounds % 14);

	document.getElementById("stonePoundsResult").innerHTML = `<span class="calculation-result">${kg.toFixed(1)} kg = ${stone} st ${pounds} lb</span>`;
}

function calculateBMIMetric() {
	const kg = parseFloat(document.getElementById("bmiKg").value) || 0;
	const m = parseFloat(document.getElementById("bmiM").value) || 0;

	if (kg <= 0 || m <= 0) {
		document.getElementById("bmiResultMetric").innerHTML = `<span class="invalid-input">Please enter valid weight and height.</span>`;
		return;
	}

	const bmi = kg / (m * m);
	document.getElementById("bmiResultMetric").innerHTML = `<span class="calculation-result">BMI: ${bmi.toFixed(2)}</span>`;
}

function calculateBMIImperial() {
	const stone = parseFloat(document.getElementById("bmiStone").value) || 0;
	const pounds = parseFloat(document.getElementById("bmiPounds").value) || 0;
	const feet = parseFloat(document.getElementById("bmiFeet").value) || 0;
	const inches = parseFloat(document.getElementById("bmiInches").value) || 0;

	const totalKg = ((stone * 14) + pounds) * 0.45359237;
	const totalM = ((feet * 12) + inches) * 0.0254;

	if (totalKg <= 0 || totalM <= 0) {
		document.getElementById("bmiResultImperial").innerHTML = `<span class="invalid-input">Please enter valid weight and height.</span>`;
		return;
	}

	const bmi = totalKg / (totalM * totalM);
	document.getElementById("bmiResultImperial").innerHTML = `<span class="calculation-result">BMI: ${bmi.toFixed(2)}</span>`;
}

function calculateDosesCost() {
	const penTotalCost = parseFloat(document.getElementById("penTotalCost").value) || 0

	if (penTotalCost <= 0) {
		document.getElementById("penCostResult").innerHTML = `<span class="invalid-input">Please enter valid Pen Total Cost.</span>`;
		return;
	}

	var eachDose = penTotalCost / 4
	var doseX1 = eachDose;
	var doseX2 = eachDose * 2;
	var doseX3 = eachDose * 3;
	var doseX4 = eachDose * 4;

	//var doseCostResult = "Each Dose : "+eachDose+" | 1 x dose : "+doseX1+" | 2 x dose : "+doseX2+" | 3 x dose : "+doseX3+" | 4 x dose : "+doseX4;

	document.getElementById("penCostResult").innerHTML = `
		<span class="calculation-result">Each Dose : £${eachDose.toFixed(2)} |  1 x dose : £${doseX1.toFixed(2)} | 2 x dose : £${doseX2.toFixed(2)} | 3 x dose : £${doseX3.toFixed(2)} | 4 x dose : £${doseX4.toFixed(2)}</span>`;

	//document.getElementById("penCostResult").innerHTML = `<span class="calculation-result"> ${doseCostResult}</span>`;
}