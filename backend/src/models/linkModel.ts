import { Schema, model } from 'mongoose';
import { nanoid } from 'nanoid';

const linkSchema = new Schema({
    originalLink: { type: String, required: true },
    shortLink: { type: String, required: true, default: () => nanoid(7) },
    clicks: { type: Number, default: 0 },
    createdAt: { type: Date, default: Date.now },
});

export const LinkModel = model('Link', linkSchema);