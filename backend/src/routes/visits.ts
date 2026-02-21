import { Router } from 'express';
import prisma from '../db';
import { authenticateToken } from '../middleware/auth';

const router = Router();

// Public: Record a page visit
router.post('/', async (req, res) => {
    try {
        const { path, referrer } = req.body;
        if (!path) {
            res.status(400).json({ error: 'Missing path' });
            return;
        }
        await prisma.pageVisit.create({
            data: { path, referrer }
        });
        res.status(201).json({ success: true });
    } catch (error) {
        console.error('Visit tracking error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Protected: Get visit count (Admin only)
router.get('/count', authenticateToken, async (req, res) => {
    try {
        const total = await prisma.pageVisit.count();
        const today = await prisma.pageVisit.count({
            where: {
                createdAt: {
                    gte: new Date(new Date().setHours(0, 0, 0, 0))
                }
            }
        });
        res.json({ total, today });
    } catch (error) {
        console.error('Visit count error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

export default router;
