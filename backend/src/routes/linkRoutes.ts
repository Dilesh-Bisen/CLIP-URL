import { Router } from 'express';
import { createLink, deleteLink, getAllLinks, getLink } from '../controllers/linkController';

const router = Router();

router.post('/links', createLink);
router.get('/links', getAllLinks);
router.get('/links/:id', getLink);
router.delete('/links/:id', deleteLink);

export default router;