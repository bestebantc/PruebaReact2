

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

// import crypto from '@aws-crypto/sha256-js';
// import { defaultProvider } from '@aws-sdk/credential-provider-node';
// import { SignatureV4 } from '@aws-sdk/signature-v4';
// import { HttpRequest } from '@aws-sdk/protocol-http';
// import { default as fetch, Request } from 'node-fetch';
// const { Sha256 } = crypto;

const crypto = require('@aws-crypto/sha256-js');
const { defaultProvider }= require('@aws-sdk/credential-provider-node');
const { SignatureV4 } = require('@aws-sdk/signature-v4');
const { HttpRequest } = require('@aws-sdk/protocol-http');
const nodeFetch  = require('node-fetch');
const fetch = nodeFetch.default;
const Request = nodeFetch.Request;

const { Sha256 } = crypto;

const query = /* GraphQL */ `
  mutation CreateTodo ($input: CreateTodoInput!) {
    createTodo(input: $input) {
      id
      s1
      s2
      s3
      s4
      s5
      s6
      s7
      s8
      s9
      s10
      createdAt
      updatedAt
    }
  }
  
`;


exports.handler = async (event) => {
    console.log("!Hola¡, Aqui se empieza a debuguear")
    console.log(`EVENT: ${JSON.stringify(event)}`);
    
    
    const variables = {
        input: {
          s1: event.data.s1,
          s2: event.data.s2,
          s3: event.data.s3,
          s4: event.data.s4,
          s5: event.data.s5,
          s6: event.data.s6,
          s7: event.data.s7,
          s8: event.data.s8,
          s9: event.data.s9,
          s10: event.data.s10
        }
      };
    console.log("Variables:", variables)

    const endpoint = new URL("https://jr5ias5gvbhzlbzwx5dem5dchq.appsync-api.us-east-1.amazonaws.com/graphql");
    const region = "us-east-1"

    const signer = new SignatureV4({
        credentials: defaultProvider(),
        region: region,
        service: 'appsync',
        sha256: Sha256
      });

    const requestToBeSigned = new HttpRequest({
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': 'da2-kbfpqjwlxne27g4jnj6qyhvjte',
          host: endpoint.host
        },
        hostname: endpoint.host,
        body: JSON.stringify({ query, variables }),
        path: endpoint.pathname
      });
    
    const signed = await signer.sign(requestToBeSigned);
    const request = new Request(endpoint, signed);
    
    let statusCode = 200;
    let body;
    let response;
    console.log(request)
    try {
        response = await fetch(request);
        console.log("Respuesta:  ",response)
        body = await response.json();
        if (body.errors) statusCode = 400;
    } catch (error) {
        statusCode = 500;
        console.log("errorResponse:  ",error)
        body = {
          errors: [
            {
              message: error.message
            }
          ]
        };
    }
    console.log("!Hola¡, Aqui se termina el debuguear")
    return {
        statusCode,
        body: JSON.stringify(body)
      };  
};

