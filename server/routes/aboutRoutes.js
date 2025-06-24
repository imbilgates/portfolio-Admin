import express from 'express';
import {
  getAbout,
  upsertAbout
} from '../controllers/aboutController.js';

const router = express.Router();

router.get('/', getAbout);
router.post('/', upsertAbout);

export default router;
