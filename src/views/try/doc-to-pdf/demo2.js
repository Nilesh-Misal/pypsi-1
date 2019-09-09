var toPdf = require("office-to-pdf")
var fs = require("fs")
var wordBuffer = fs.readFileSync('C:/Users/admin/Documents/pypsi-stuff/newoypsi/generator-ak/src/views/try/doc-to-pdf/easy-do.docx')

toPdf(wordBuffer).then(
  (pdfBuffer) => {
    fs.writeFileSync("test.pdf", pdfBuffer)
  }, (err) => {
    console.log(err)
  }
)