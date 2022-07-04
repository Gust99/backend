import amqp from 'amqplib';

export default class Producer {
    private connection!: amqp.Connection;
    private channel!: amqp.Channel;
    private queue: string;
    
    constructor(queue: string) {
        this.queue = queue;
    }

    private async connect() {
        this.connection = await amqp.connect('amqp://localhost');
    }

    private async createChannel() {
        this.channel = await this.connection.createChannel();
    }

    async sendData(data: string) {
        await this.connect();
        await this.createChannel();

        this.channel.assertQueue(this.queue, {
            durable: false
        });

        this.channel.sendToQueue(this.queue, Buffer.from(data));
        console.log(" Payload Sent => %s", data);

        setTimeout(() => {
            this.connection.close();
            process.exit(0);
        }, 500);
    }
}