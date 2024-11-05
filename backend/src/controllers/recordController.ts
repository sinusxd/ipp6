import { Request, Response } from 'express';
import Record from '../models/recordModel';

export const addRecord = async (req: Request, res: Response): Promise<void> => {
    try {
        const { title, content } = req.body;
        const record = new Record({ title, content });
        await record.save();
        res.status(201).json(record);
    } catch (error) {
        const err = error as Error;
        res.status(500).json({ message: err.message });
    }
};

export const getRecordById = async (req: Request, res: Response): Promise<void> => {
    try {
        const record = await Record.findById(req.params.id);
        if (!record) {
            res.status(404).json({ message: 'Record not found' });
            return;
        }
        res.json(record);
    } catch (error) {
        const err = error as Error;
        res.status(500).json({ message: err.message });
    }
};
