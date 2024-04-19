# Address Service

hoppysearch - JavaScript/Node.js client for AddressService

**Package Name**: address-service-js

### What You Get:

1. A feature offering a selection of addresses with diverse fields through autocomplete functionality.
2. Fields include coordinates, street number, city, street, district, postcode, region, and a unique identifier (hs_guid).
3. Customize your own user form with the retrieved address data.ith a seamless experience to obtain addresses.

## Installation

Proceed with the installation by following these steps:

### Getting Started

1. Install the address-service-js package in your JavaScript/Node.js project:

    #### cmd 

    ```javascript
    npm i address-service-js
    ```

2. Depending on your project's syntax, import the addressService function accordingly.

    1. For ES syntax:

       #### Javascript

       ```javascript
        import addressService from 'address-service-js';
        // Ensure "type": "module" in package.json
       ``` 

    2. For CommonJS syntax:

       #### Javascript

       ```javascript
        const addressService = require('address-service-js');
        // Ensure "type": "commonjs" or skip "type" in package.json
       ```   

3. Use the function to retrieve addresses:

    #### Javascript

    ```javascript
        async function getAddress(address) {
        const result = await addressService(address);
        console.log(result);
       }
    ```

4. Call the function with the desired address:

    #### Javascript

    ```javascript
       getAddress("20 A");
    ```   

5. Upon calling the getAddress function with valid parameters, you will receive a JSON response containing a list of addresses. Here's an example output:

    ```javascript
        {
                "totalHits": { "value": 27, "relation": "GREATER_THAN_OR_EQUAL_TO" },
                 "processingTime": "462ms",
                 "documents": [
                        {
                            "coordinates_0": -70.5612909,
                            "number": "20",
                            "coordinates_1": 41.9318039,
                            "unit": "",
                            "city": "PLYMOUTH",
                            "street": "AVENUE A",
                            "district": "PLYMOUTH",
                            "postcode": "02360",
                            "region": "MA",
                            "hs_guid": "7e1f48df-b929-4c12-a779-10158bc9370d"
                        },
                        {
                            "coordinates_0": -71.7178363,
                            "number": "20",
                            "coordinates_1": 42.0750203,
                            "unit": "",
                            "city": "DOUGLAS",
                            "street": "A STREET",
                            "district": "WORCESTER",
                            "postcode": "01516",
                            "region": "MA",
                            "hs_guid": "64853dc7-bba1-4cb5-aa88-3311b90e914b"
                        },
                        // ... (Additional address entries)
                    ]
            }
    ```

#### If you need video help to use Address Service Node Js/Javascript package then watch this video:[Address Service Node Js/Javascript Demo](https://youtu.be/gKVPZTJqFVM)