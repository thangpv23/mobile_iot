

import MQTT from 'sp-react-native-mqtt';
export const getClient = async () =>{
    const client =  await MQTT.createClient({
        host: 'cougar.rmq.cloudamqp.com',
        port: 1883,
        protocol: 'tcp',
        user: 'kjzeruxa:kjzeruxa',
        pass: 'Fd5zulptVaOqpBVeLn4r3rZdWSD_wIQW',
        auth:true,
        clientId:"test",
        clean:true,
    })
    client.on('closed', function() {
        console.log('mqtt.event.closed');
    });

    client.on('error', function(msg) {
        console.log('mqtt.event.error', msg);
    });
    client.on('message', function(msg) {
        console.log('mqtt.event.message', msg);
    });
    client.connect();
    return client;
};
