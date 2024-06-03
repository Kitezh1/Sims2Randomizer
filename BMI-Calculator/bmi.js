function returnBMI() {
    let weight = parseFloat(document.getElementById('input-weight').value);
    let height = parseFloat(document.getElementById('input-height').value) / 100;
    let bmi = document.getElementById('myBMI');
    let bmiValue = weight / (height * height);

    bmi.textContent = "Your BMI is " + bmiValue.toFixed(1)
    return false;
}