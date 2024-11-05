import express from 'express';
import { addRecord, getRecordById } from '../controllers/recordController';

const router = express.Router();

router.post('/add', addRecord);
router.get('/:id', getRecordById);

export default router;
