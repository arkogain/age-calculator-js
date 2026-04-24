const input = document.getElementById("dob");
const result = document.getElementById("result");

const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
	if (!input.value) {
		alert("Please enter your date of birth.");
		return;
	}

	const birtDate = new Date(input.value);
	const today = new Date();

	let years = today.getFullYear() - birtDate.getFullYear();
	let months = today.getMonth() - birtDate.getMonth();
	let days = today.getDate() - birtDate.getDate();

	// // Adjust for negative months and days

	// if (days < 0) {
	// 	months--;
	// 	const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
	// 	days += lastMonth.getDate();
	// }

	// // Adjust for negative months

	// if (months < 0) {
	// 	years--;
	// 	months += 12;
	// }

	if (birtDate > today) {
		result.textContent = "You are not born yet!";
	} else {
		result.textContent = `You age is : ${years} years, ${months} months, and ${days} days old.`;
	}
});
