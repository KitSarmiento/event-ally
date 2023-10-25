const router = require('express').Router();
const {Checklist} = require('../../models');



router.post('/', async (req, res) => {
    try {
        const checklistData = await Checklist.create({
            ...req.body,
            user_id: req.session.user_id,
        
        });
        res.status(200).json(checklistData);
    } catch (err) {
        res.status(400).json(err);

    }
    }
);




router.delete('/:id', async (req, res) => {

    try {
        const checklistData = await Checklist.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            },
        });
        if (!checklistData) {
            res.status(404).json({ message: 'No checklist found with this id!' });
            return;
        }
        res.status(200).json(checklistData);
    } catch (err) {
        res.status(500).json(err);
    }
});




module.exports = router;