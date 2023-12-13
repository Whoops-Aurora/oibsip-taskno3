function convertTemperature() {
    const temperatureInput = document.getElementById('temperatureInput').value;
    const unitSelect = document.getElementById('unitSelect').value;
    const resultElement = document.getElementById('result');
    let result = '';
  
    if (!temperatureInput || isNaN(temperatureInput)) {
      result = 'Please enter a valid temperature!';
    } else {
      const temperature = parseFloat(temperatureInput);
      switch (unitSelect) {
        case 'celsius':
          result = `${temperature}°C is ${((temperature * 9) / 5 + 32).toFixed(2)}°F`;
          break;
        case 'fahrenheit':
          result = `${temperature}°F is ${(((temperature - 32) * 5) / 9).toFixed(2)}°C`;
          break;
        case 'kelvin':
          result = `${temperature}K is ${(temperature - 273.15).toFixed(2)}°C`;
          break;
        default:
          result = 'Please select a valid unit!';
          break;
      }
    }
    resultElement.textContent = result;
  }
  