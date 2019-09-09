var docxConverter = require('docx-pdf');

docxConverter('C:/Users/admin/Documents/pypsi-stuff/newoypsi/generator-ak/src/views/try/doc-to-pdf/easy-do.docx','output.pdf',function(err,result){
  if(err){
    console.log(err);
  }
  console.log('result'+result);
});

