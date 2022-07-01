import { connect } from 'amqplib/callback_api';

connect('amqp://localhost', (error0, connection) => {
    if (error0) {
        throw error0;
    }

    connection.createChannel((error1, channel) => {
        if (error1) {
            throw error1;
        }

        const queue = 'project/athendances';

        channel.assertQueue(queue, {
            durable: false
        });

        console.log(" Waiting for messages in %s. To exit press CTRL+C", queue);
        
        channel.consume(queue, (msg) => {
            console.log(" Payload received => %s", msg.content.toString());
        }, {
            noAck: true
        });
    });
});