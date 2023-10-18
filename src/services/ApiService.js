// ApiService.js

// Function to fetch the current silver price from an API
export const fetchSilverPrice = async () => {
    try {
      // Replace this with your actual API endpoint
      const response = await fetch('https://api.example.com/silver-price');
      const data = await response.json();
  
      // Extract the silver price from the API response
      const silverPrice = data.price;
  
      return silverPrice;
    } catch (error) {
      console.error('Error fetching silver price:', error);
      throw error; // Propagate the error to handle it in your components
    }
  };
  
  // Function to fetch the current Bitcoin price from an API
  export const fetchBitcoinPrice = async () => {
    try {
      // Replace this with your actual API endpoint
      const response = await fetch('https://api.example.com/bitcoin-price');
      const data = await response.json();
  
      // Extract the Bitcoin price from the API response
      const bitcoinPrice = data.price;
  
      return bitcoinPrice;
    } catch (error) {
      console.error('Error fetching Bitcoin price:', error);
      throw error; // Propagate the error to handle it in your components
    }
  };  