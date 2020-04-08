const express = require('express')
const app = express()
const port = process.env.PORT || 9090;
const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser')
const path = require("path")

app
    .use(fileUpload({
      createParentPath: true
    }))
    .use(bodyParser.urlencoded({ extended: true }))
    .use(bodyParser.json())
    // .use(partials())
    .set('view-engine', 'ejs')
    .set('views', path.join(__dirname,'views'))

    .use(express.static(path.join(__dirname, './static'), {
        // etag: false,
        // maxAge: '31536000'
    }))

    .get('/', (req, res) => {
      res.send("Hoi")
    })

    .post('/upload', (req, res)=>{

      console.log(req.files)
      try {
        if(!req.files) {
            res.send({
                status: false,
                message: 'No file uploaded'
            });
        } else {
            //Use the name of the input field (i.e. "avatar") to retrieve the uploaded file
            let schema = req.files.schema;
            
            //Use the mv() method to place the file in upload directory (i.e. "uploads")
            avatar.mv('./data');

            //send response
            res.send("Nice");
        }
    } catch (err) {
        res.status(500).send(err);
    }
    })


    .listen(port, () => console.log(`WEBDESIGN is listening on port ${port}!`))