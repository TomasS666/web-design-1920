const express = require('express')
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })
const XLSX = require("xlsx")
const xlsxParser = require("xlsx-parse-json")
const app = express()
const excelToJson = require('convert-excel-to-json');
const excel = require('excel-stream')
const port = process.env.PORT || 9090;
const fs = require("fs")
const bodyParser = require('body-parser')
const path = require("path")

app
    
    // .use(bodyParser.urlencoded({ extended: true }))
    // .use(bodyParser.json())
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

    .post('/upload', upload.single('schema'), (req, res)=>{

      console.log(req.file)
      const file = req.file
      console.log(file.path)

    // const workbook =   XLSX.readFile(file.path)
    // var stream = XLSX.stream.to_json(workbook, {raw:true});
    // // const pretty = JSON.stringify(workbook, null, 4)
    //   res.json(stream)




 
      const result = excelToJson({
          sourceFile: file.path
      });
      res.header("Content-Type",'application/json');
      res.send(JSON.stringify(result, null, 4))

    })


    .listen(port, () => console.log(`WEBDESIGN is listening on port ${port}!`))