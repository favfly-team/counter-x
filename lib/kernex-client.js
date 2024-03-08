import kernex from "@kernex/client";

// Import the environment variable
const apiKey = process.env.NEXT_PUBLIC_KERNEX_API_KEY;

const client = kernex({
  appUrl: "https://api.kernex.io/api/v1/653e5c8bbfe9c33929bdea98",
  appApiKey: apiKey, // Replace this with your api key
});

export default client;
