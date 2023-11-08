import { createClient } from 'redis';

const client = await createClient()
    .on('error', err => console.log('Redis Client Error', err));

client.on('connect', () => {
    console.log("Connected !");
});

client.connect();

await client.set('key', 'value');
await client.set('key2', 'value2');

const value = await client.MGET(['key', 'key2']);

console.log(value);

await client.disconnect();