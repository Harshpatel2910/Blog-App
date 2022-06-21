const express = require('express');

const blogControlloer = require('../controllers/blogController');

const router = express.Router();


// blog routes

router.get('/create',blogControlloer.blog_create_get);


router.get('/', blogControlloer.blog_index);


router.post('/', blogControlloer.blog_create_post);


router.get('/:id', blogControlloer.blog_detail);


router.delete('/:id', blogControlloer.blog_delete)

module.exports = router;