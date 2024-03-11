## counter-x

![npm](https://img.shields.io/npm/v/countapi-js)

This is the official promise-based wrapper for [Counter-x](https://counter-x-api.vercel.app/) API. Counter-x is a free counting service, you can use it to track page hits, and custom events.

## Installation

```plaintext
npm install counter-x
```

## Example

First, include the package

```plaintext
const counterx = require('counter-x');

// or with ES6
import counterx from "counter-x";
```

## Keys and namespaces

Namespaces are meant to avoid name collisions. Its recommend use the domain of the application as namespace to avoid collision with other websites. By default, the **visits** and **event** functions will use the current domain as namespace and the provided arguments as key.  
If the namespace is not specified the key is assigned to the _default_ namespace.

Keys and namespaces must match **^\[A-Za-z0-9\_-.\]{3,64}$**.

## Available methods

> ℹ️ \*\*Note\*\*: When requesting existing keys, if the key doesn't exists the status returned will be 404 (the promise will not fail).

### get

**counterx.get(namespace, key)**

Get the value of a key.

```plaintext
counterx.get('mysite.com', 'test').then((result) ={ ... });
```

**Rest API**

```plaintext
https://counter-x-api.vercel.app/api/get/{namespace}/{key}
```

result may look like

```plaintext
{
  result: {
    _id: "65ecc799578a21fb",
    namespace: "mysite.com",
    key: "test",
    value: 32,
    createdAt: "2024-03-09T20:33:29.881Z",
    updatedAt: "2024-03-11T04:11:35.652Z"
  }
}
```

### hit

**counterx.hit(namespace, key)**

A shorthand for update with amount=1. And useful if you don't want to create a key manually, since if you request a key that doesn't exists, a key with \_enable_reset\_=false, \_update_lowerbound\_=0 and \_update_upperbound\_=1 will be created automatically.

```plaintext
countapi.hit('mysite.com', 'test').then((result) ={ ... });
```

**Rest API**

```plaintext
https://counter-x-api.vercel.app/api/hit/{namespace}/{key}
```

result may look like

```plaintext
{
  result: {
    _id: "65ecc799578a21fb",
    namespace: "mysite.com",
    key: "test",
    value: 25,
    createdAt: "2024-03-09T20:33:29.881Z",
    updatedAt: "2024-03-11T04:11:35.652Z"
  }
}
```

## Further information

Visit https://github.com/favfly-team/counter-x#readme for the full API documentation.

## License

[MIT](LICENSE)
