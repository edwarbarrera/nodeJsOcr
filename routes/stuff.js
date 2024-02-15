const express= require('express');
const router =express.Router();
const Thing = require('../models/Thing');
const stuffCtrl = require('../controllers/stuff')


router.use((req,res, next)=>{
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
}
);

router.post('/', stuffCtrl.createThing);
router.put('/:id', stuffCtrl.updateOne);
router.get('/:id', stuffCtrl.findOne);
router.delete('/:id', stuffCtrl.deleteOne);
router.get('/', stuffCtrl.getAll);


module.exports = router;