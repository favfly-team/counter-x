import client from "./lib/kernex-client";

const counterx = {};

// Function to send a hit request to the counter API
counterx.hit = async (namespace, key) => {
  try {
    // Make an API request to the hit route

    if (!namespace || !key) {
      // Invalid namespace or key
      return { error: "Invalid namespace or key" };
    }

    // Get details from count-api
    const res = await client.resource("count-api").find({
      namespace: namespace,
      key: key,
    });

    let result = {};

    if (res?.total > 0) {
      // If data exists, update the data
      const { _id, value } = res.data?.[0];

      result = await client.resource("count-api").patch(_id, {
        value: value + 1,
      });
    } else {
      // If data does not exist, create the data
      result = await client.resource("count-api").create({
        namespace,
        key,
        value: 1,
      });
    }

    return result;
  } catch (error) {
    // Handle the error here
    console.error("An error occurred:", error);
    throw error; // Rethrow the error if needed
  }
};

export default counterx;
