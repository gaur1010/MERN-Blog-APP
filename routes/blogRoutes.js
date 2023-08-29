const express=require('express')
const { getAllBlogsController, createBlogController, updateBlogController, getBlogByIdController, deleteBlogController, userBlogController } = require('../controllers/blogController');

//obj

const router = express.Router()

//routers
//Get allblogs
router.get('/all-blog',getAllBlogsController)

//post createblog

router.post('/create-blog',createBlogController)

//put updateblog

router.put('/update-blog/:id',updateBlogController)

//get single blog details

router.get('/get-blog/:id',getBlogByIdController)

//Delete blog

router.delete('/delete-blog/:id',deleteBlogController)

//gwt|| userblog

router.get('/user-blog/:id',userBlogController);
module.exports= router;