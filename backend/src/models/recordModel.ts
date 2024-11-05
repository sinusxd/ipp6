import mongoose, { Schema, Document } from 'mongoose';

interface IRecord extends Document {
    title: string;
    content: string;
}

const RecordSchema: Schema = new Schema({
    title: { type: String, required: true },
    content: { type: String, required: true }
});

export default mongoose.model<IRecord>('Record', RecordSchema);
