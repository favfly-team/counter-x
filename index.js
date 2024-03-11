// declare counterx as an empty object
const counterx = {};

// Function to send a hit request to the counter-x API
counterx.hit = async (namespace, key) => {
  try {
    if (!namespace || !key) {
      // Invalid namespace or key
      return { error: "Invalid namespace or key" };
    }

    // Make an API request to the hit route
    const response = await fetch(
      `https://counter-x-api.vercel.app/api/hit/${namespace}/${key}`
    );

    return response;
  } catch (error) {
    return { error: "An error occurred", error };
  }
};

counterx.get = async (namespace, key) => {
  try {
    if (!namespace || !key) {
      // Invalid namespace or key
      return { error: "Invalid namespace or key" };
    }

    // Make an API request to the hit route
    const response = await fetch(
      `https://counter-x-api.vercel.app/api/get/${namespace}/${key}`
    );

    return response;
  } catch (error) {
    return { error: "An error occurred", error };
  }
};

export default counterx;
