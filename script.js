function convertTemperature() {
    const temperatureInput = document.getElementById('temperatureInput').value;
    const unitSelect = document.getElementById('unitSelect').value;
    const resultElement = document.getElementById('result');
    const emojiElement = document.getElementById('emoji');
    const body = document.body;
    let result = '';
  
    if (!temperatureInput || isNaN(temperatureInput)) {
      result = 'Please enter a valid temperature!';
    } else {
      const temperature = parseFloat(temperatureInput);
      let convertedTemperature = 0;
  
      switch (unitSelect) {
        case 'celsius':
          convertedTemperature = ((temperature * 9) / 5) + 32;
          result = `${temperature}°C is ${convertedTemperature.toFixed(2)}°F`;
          break;
        case 'fahrenheit':
          convertedTemperature = (((temperature - 32) * 5) / 9);
          result = `${temperature}°F is ${convertedTemperature.toFixed(2)}°C`;
          break;
        case 'kelvin':
          convertedTemperature = (temperature - 273.15);
          result = `${temperature}K is ${convertedTemperature.toFixed(2)}°C`;
          break;
        default:
          result = 'Please select a valid unit!';
          break;
      }
  
      // Update emoji based on the converted temperature
      if (convertedTemperature < 0) {
        emojiElement.textContent = '❄️'; // Cold
      } else if (convertedTemperature > 30) {
        emojiElement.textContent = '🔥'; // Hot
      } else {
        emojiElement.textContent = '😊'; // Normal
      }
  
      // Adjusting background based on the converted temperature
      if (convertedTemperature < 0) {
        body.style.backgroundImage = 'url("https://source.unsplash.com/1600x900/?winter")';
      } else if (convertedTemperature > 30) {
        body.style.backgroundImage = 'url("https://source.unsplash.com/1600x900/?summer")';
      } else {
        body.style.backgroundImage = 'url("https://source.unsplash.com/1600x900/?spring")';
      }
    }
    resultElement.textContent = result;
  }
  