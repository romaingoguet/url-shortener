const express = require('express');
const router = express.Router();

const db = require('../services/db');
const { nanoid } = require('nanoid');

router.get('/:slug', async (req, res, next) => {
    const slug = req.params.slug;
    await db.incrementClicked(slug);
    const result = await db.getUrl(slug);
    res.redirect(result.url);
});

router.get('/url/:slug', async (req, res, next) => {
    try {
        const slug = req.params.slug;
        const result = await db.getUrl(slug);
        res.status(200).json(result.docs[0].data());
    } catch (error) {
        next(error);
    }
});

router.post('/url', async (req, res, next) => {
    try {
        const { url } = req.body;
        const slug = nanoid(5).toLowerCase();
        const newUrl = { slug, url, clicked: 0 };
        await db.saveUrl(newUrl);
        res.status(201).json(newUrl);
    } catch (error) {
        next(error);
    }
});


module.exports = router;