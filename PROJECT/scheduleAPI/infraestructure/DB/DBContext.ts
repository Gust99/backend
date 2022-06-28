import mongoose from "mongoose";

export default class DBContext {
    async initDB() {
        await mongoose.connect('mongodb://localhost/backend_project');
    }
}