import amqp from 'amqplib';

export default class Consumer {
    private connection!: amqp.Connection;
    private channel!: amqp.Channel;

    private async connect() {
        this.connection = await amqp.connect('amqp://localhost');
    }

    private async createChannel() {
        this.channel = await this.connection.createChannel();
    }

    async fetchData(queue: string, callback: Function) {
        await this.connect();
        await this.createChannel();

        this.channel.assertQueue(queue, {
            durable: false
        });

        console.log(" Waiting for messages in %s. To exit press CTRL+C", queue);
        
        this.channel.consume(queue, (msg: any) => {
            console.log(" Payload received => %s", msg.content.toString());

            callback(msg.content.toString());
        }, {
            noAck: true
        });
    }
}