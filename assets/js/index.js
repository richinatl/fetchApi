// Write an asynchronous function that accepts 1 parameter
// A city name
// When invoked, this function should use geocode.xyz's API retrieve the city data, which uses a URL formatted as follows:

// https://geocode.xyz/seattle?json=1

// Once retrieved, print to the console the latitude and longitude
// Invoke your async function with a few cities as a tes

async function getCity(city) {
  const res = await fetch(`https://geocode.xyz/${city}?json=1`);
  const data = await res.json();
  console.log(`Located at ${data.latt} lattitude & ${data.longt} longitude`);
}

getCity("seattle");
