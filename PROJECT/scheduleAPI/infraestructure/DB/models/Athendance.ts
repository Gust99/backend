import { Schema, model } from 'mongoose';
import { Athendance } from '../../../core/Entities/athendance';

const athendanceSchema = new Schema<Athendance>({
    start: { type: String, required: true },
    end: { type: String, required: true },
    date: { type: Date, required: true },
    notes: { type: String, required: true },
    userID: { type: String, required: true }
});

export const AthendanceModel = model<Athendance>('Athendance', athendanceSchema);