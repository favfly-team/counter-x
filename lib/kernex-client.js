import kernex from "@kernex/client";

// Import the environment variable
const apiKey = process.env.NEXT_PUBLIC_KERNEX_API_KEY;

const client = new kernex.default({
  appUrl: "https://api.kernex.io/api/v1/65ebd1a5578a21fb915b8aa5",
  appApiKey: apiKey, // Replace this with your api key
});

// const client = {
//   hit: function () {},
// };

export default client;
