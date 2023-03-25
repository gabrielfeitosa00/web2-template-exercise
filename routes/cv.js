var express = require('express');
var router = express.Router();

/* GET CV page. */


router.get('/', function (req, res, next) {
  res.render('cv', {
    title: 'CV', skills: [
      { name: "Github" },
      { name: "Javascript" },
      { name: "Typescript" }
    ],
    experience: [
      { name: "HR Manager at Unect" },
      { name: "Fullstack developer at Unect" },
      { name: "Junior developer at Luby" }
    ]
  });
});

module.exports = router;
