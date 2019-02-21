var express = require('express')
var app = express()

app.set('views', './views')
app.use(express.static(__dirname + '/img'));
app.set('view engine', 'ejs')

app.get('/computer', function (req, res) {
    res.render('computer', {
        computers: [
            {
                no: 'Windows',
                p: '/1.jpg'
            },
            {
                no: 'OSX',
                p: '/2.jpg'
            },
            {
                no: 'Android',
                p: '/3.jpg'
            },
            {
                no: 'IOS',
                p: '/4.jpg'
            }

        ]
    })
})
app.listen(8000)