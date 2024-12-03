const opentelemetry = require('@opentelemetry/sdk-node');
const {
  getNodeAutoInstrumentations,
} = require('@opentelemetry/auto-instrumentations-node');
const {
  OTLPTraceExporter,
} = require('@opentelemetry/exporter-trace-otlp-http');

const initAndStartSDK = async () => {
  const sdk = new opentelemetry.NodeSDK({
    traceExporter: new OTLPTraceExporter(),
    instrumentations: [getNodeAutoInstrumentations()],
  });

  await sdk.start();
  return sdk;
};

const main = async () => {
  try {
    const sdk = await initAndStartSDK();
    const express = require('express');
    const http = require('http');
    const app = express();
    app.get('/', (_, response) => {
      const options = {
        hostname: 'nginx',
        port: 80,
        path: '/',
        method: 'GET',
      };
      const req = http.request(options, (res) => {
        console.log(`statusCode: ${res.statusCode}`);
        res.on('data', (d) => {
          response.send('Hello World');
        });
      });
      req.end();
    });
    app.listen(8000, () => {
      console.log('Listening for requests');
    });
  } catch (error) {
    console.error('Error occurred:', error);
  }
};

main();
