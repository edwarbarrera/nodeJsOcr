const Thing = require('../models/Thing');

exports.createThing = ((req, res, next) => {
    delete req.body._id;

    const thing = new Thing({
        ...req.body
    });
    thing.save()
        .then(() => res.status(201).json({ message: ' all is ok you r dealing stuff' }))
        .catch(error => res.status(400).json({ error: error }));
});

exports.updateOne = ((req, res, next) => {
    Thing.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
        .then(thing => res.status(201).json(thing))
        .catch(error => res.status(404).json({ error: error + 'je pas trouvao' }));
}
);
exports.findOne = (
    (req, res, next) => {
        Thing.findOne({ _id: req.params.id })
            .then(thing => res.status(200).json(thing))
            .catch(error => res.status(404).json({ error: error + 'je pas trouvao' }));
    }
);
exports.deleteOne = (
    (req,res, next)=>{
        Thing.deleteOne({_id:req.params.id})
       .then(thing => res.status(200).json({message: 'ninjutsu disparition'}))
       .catch(error => res.status(404).json({error: error + 'je pas trouvao'}));
       } 
);
exports.getAll = ((req,res, next)=>{
    Thing.find()
   .then(things => res.status(200).json(things))
   .catch();
   } 
 );