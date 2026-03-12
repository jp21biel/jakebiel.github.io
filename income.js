document.getElementById("incomeForm").addEventListener("submit", function(e){
    e.preventDefault();
    const source = document.getElementById("incomeSource").value;
    const amount = document.getElementById("amount").value;
    const frequency = document.getElementById("frequency").value;
    console.log("Form submitted successfully!");
    console.log("Income Source:", source);
    console.log("Amount:", amount);
    console.log("Frequency: ", frequency);
});