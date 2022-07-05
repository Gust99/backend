import amqp from 'amqplib';

export default class Producer {
    private static instance: Producer;
    private connection!: amqp.Connection;
    private channel!: amqp.Channel;
    private queue: string;
    
    private constructor(queue: string) {
        this.queue = queue;
    }

    private async connect() {
        this.connection = await amqp.connect('amqp://localhost');
    }

    private async createChannel() {
        this.channel = await this.connection.createChannel();
    }

    async sendData(data: string) {
        await this.getConnection();
        await this.getChannel();

        this.channel.assertQueue(this.queue, {
            durable: false
        });

        this.channel.sendToQueue(this.queue, Buffer.from(data));
        console.log(" Payload Sent => %s", data);
    }

    static getInstance(queue: string): Producer {
        console.log('PRODUCER',Producer.instance);
        if(Producer.instance === undefined) {
            Producer.instance = new Producer(queue);
        }
        console.log('PRODUCER',Producer.instance);
        return Producer.instance;
    }

    async getConnection(): Promise<amqp.Connection> {
        if(!this.connection) {
            await this.connect();
        }

        return this.connection;
    }

    async getChannel(): Promise<amqp.Channel> {
        if(!this.channel) {
            await this.createChannel();
        }

        return this.channel;
    }
}