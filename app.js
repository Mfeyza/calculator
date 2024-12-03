async function calculator() {

    const num1 = parseFloat(prompt("Birinci sayıyı girin:"));
    const num2 = parseFloat(prompt("İkinci sayıyı girin:"));
    const sum = prompt("İşlemi seçin (+, -, *, /):");
  
    if (isNaN(num1) || isNaN(num2)) {
      console.log("Lütfen geçerli bir sayı girin.");
      return;
    }
  
    let result;
  
    if (sum === "+") {
      result = num1 + num2;
    } else if (sum === "-") {
      result = num1 - num2;
    } else if (sum === "*") {
      result = num1 * num2;
    } else if (sum === "/") {
      if (num2 === 0) {
        console.log("Bir sayı sıfıra bölünemez.");
        return;
      }
      result = num1 / num2;
    } else {
      console.log("Geçersiz işlem seçildi.");
      return;
    }
  
    await new Promise(resolve => setTimeout(resolve, 1000)); 
  
    console.log(`Sonuç: ${result}`);
  }

calculator();
  