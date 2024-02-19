const express= require('express');

const router =express.Router();
const stuffCtrl = require('../controllers/stuff');
const auth = require('../middelware/auth');

router.use((req,res, next)=>{
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
}
);

router.post('/', auth, stuffCtrl.createThing);
router.put('/:id', auth, stuffCtrl.updateOne);
router.get('/:id', auth, stuffCtrl.findOne);
router.delete('/:id', auth, stuffCtrl.deleteOne);
router.get('/', auth, stuffCtrl.getAll);


module.exports = router;