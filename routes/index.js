var express = require('express');
var router = express.Router();
const FilesUpload = require('../modal')
const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    return cb(null, "./public/images");
  },
  filename: function (req, file, cb) {
    return cb(null, `${Date.now()}_${file.originalname}`)
  },
})

const upload = multer({ storage })
/* GET home page. */
router.get('/', async (req, res) => {
  const data = await FilesUpload
    .find()
  // console.log(data)
  res.render("index", { title: "Home", data: data });
})

router.post('/profile', upload.single('profilepic'), async function (req, res, next) {
  const filePath = `/images/${req.file.filename}`
  console.log(req.file)

  const data = new FilesUpload({
    fullname: req.body.fullname,
    path: filePath,
    email: req.body.email
  });
  await data.save()

  res.redirect('/')
})


module.exports = router;
