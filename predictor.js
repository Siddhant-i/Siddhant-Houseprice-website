document.getElementById("predictForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const area = parseFloat(document.getElementById("area").value);
  const location = document.getElementById("location").value;
  const bedrooms = parseInt(document.getElementById("bedrooms").value);
  const age = parseInt(document.getElementById("age").value);

  // Basic price per sqft by location
  let basePricePerSqft = 0;
  if (location === "VIP") basePricePerSqft = 1000;
  else if (location === "Minal Residency") basePricePerSqft = 2000;
  else if (location === "Katara Extension") basePricePerSqft = 100;
  else if (location === "Ayodhya Nagar") basePricePerSqft = 300;
  else if (location === "Indrapuri") basePricePerSqft = 800;
  else if (location === "Bairagarh") basePricePerSqft = 100;
  else if (location === "Kolar") basePricePerSqft = 500;
  else if (location === "Karond") basePricePerSqft = 100;
  else if (location === "MP Nagar") basePricePerSqft = 1000;
  else if (location === "Ashoka Garden") basePricePerSqft = 700;
  else if (location === "Bagh dil khusha") basePricePerSqft = 80;


  // Logic: basic * area + bedroom factor - age depreciation
  let estimatedPrice =
    area * basePricePerSqft +
    bedrooms * 10000 -
    age * 1000;

  estimatedPrice = Math.max(estimatedPrice, 0); // prevent negative price

  const resultDiv = document.getElementById("result");
  resultDiv.textContent = `Estimated House Price: Rs${estimatedPrice.toLocaleString()}`;
});
