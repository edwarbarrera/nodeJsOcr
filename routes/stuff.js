const express= require('express');

const router =express.Router();
const stuffCtrl = require('../controllers/stuff');
const auth = require('../middelwares/auth');
const multer = require('../middelwares/multer-config');

router.use((req,res, next)=>{
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  }
  );

router.get('/', auth, stuffCtrl.getAll);
router.post('/', auth, multer, stuffCtrl.createThing);
router.get('/:id', auth, stuffCtrl.findOne);
router.put('/:id', auth,  multer, stuffCtrl.updateOne);
router.delete('/:id', auth, stuffCtrl.deleteOne);


module.exports = router;