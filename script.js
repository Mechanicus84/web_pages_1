function addNumbers() 
{
    const num1 = parseFloat(document.getElementById("num1").value) || 0;
    const num2 = parseFloat(document.getElementById("num2").value) || 0;
    const sum = num1 + num2;
    document.getElementById("result").innerText = "Result: " + sum;
}

function collect_dates () 
{
    console.log("\n --- collect_dates start --- ")
    var start_date = document.getElementById("start_date").value;
    var end_date = document.getElementById("end_date").value;
    var date_values = calculate_dates(start_date, end_date);

    console.log("\n collect_dates end --- ")

}

function calculate_dates(start_date,end_date) 
{
    console.log("\n --- calculate_days start --- ")

    var time_diff = end_date - start_date;
    var day_milliseconds = 86400000
    var days_diff = time_diff / day_milliseconds;
    var weeks_diff = days_diff / 7

    weeks_diff = parseFloat(weeks_diff).toFixed(2)

    console.log(`Start date : ${start_date}`)
    console.log(`End date : ${end_date}`)
    console.log(`Days : ${days_diff} (${weeks_diff} weeks)`)

    const return_values = 
    {
        days : days_diff,
        weeks : weeks_diff,
    }
    console.log(" --- calculate_days end --- ")
    return return_values
}

function calculate_weight_stlb_kg (stones,pounds)
{
	console.log(`\n --- calculate_weight_stlb_kg start --- `)
	var stones_to_pounds = stones * 14
	var total_pounds = stones_to_pounds + pounds
	var kilos = total_pounds / 2.2046
	kilos = parseFloat(kilos).toFixed(2)

	console.log(`${stones}st ${pounds}lb -> ${kilos}kg`)
	console.log(` --- calculate_weight_stlb_kg end --- `)
}