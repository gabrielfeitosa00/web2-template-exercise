var express = require('express');
var router = express.Router();

/* GET CV page. */


router.get('/', function (req, res, next) {
    res.render('media', {
        title: 'Minhas redes socias',
        items: [
            { name: "Meu Github", link: "https://github.com/gabrielfeitosa00" },
        
        ]
    });
});


module.exports = router;
