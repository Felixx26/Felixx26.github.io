const { Router } = require('express');
const router = Router();

router.get('/', (req, res)=>{
    const data = {
        "name": "Felix",
        "website": "felix.com"
    };
    res.json(data);
})

module.exports = router;