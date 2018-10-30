const swag = require('../models/swag');

module.exports = {
    search: (req, res, next) => {
        const { catagory } = req.query;
        if (!catagory) {
            res.status(200).send(swag);
        } else {
            const filterSwag = swag.filter(swag => swag.category === catagory);
            res.status(200).send(filterSwag);
        }
    }
};