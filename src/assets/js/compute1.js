
var $ =require('jquery');
var fs = require('fs');
const {c, cpp, node, python, java} = require('compile-run');

$('#click1').on('click',()=>{
alert('hello')
});

$('#create').on('click',()=>{
   var x=$('#filename').val();
   alert(x);

fs.writeFile(Dirname+'/src/'+x,'write your code here',(err)=>{
if(err) throw err;

alert('file created successfully');
})

    });


    $(window).on('load',()=>{

        fs.readdir('Dirname+'/src/', (err, files) => {
            files.forEach(file => {
              console.log(file);
             filesload(file);
            });
          });
         });
         $('#loadfile').on('click',()=>{
             var filename=$('#choosefile').val();
             alert(filename);
             readfilecontendt(filename);


         })


         $('#compilecode').on('click',()=>{
            var code= $('#codearea').val();

            let resultPromise = python.runSource(code);
            resultPromise
                .then(result => {
                    $('#resultdisplay').text(result['stdout']);
                    console.log(result);
                })
                .catch(err => {
                    $('#resultdisplay').text(err);
                    console.log(err);
                });

         })

function readfilecontendt(filename){
fs.readFile('Dirname+'/src/'+filename,(err,res)=>{
    if(err) throw err;

$('#codearea').val(res);

})

}

function filesload(file){
    $('#choosefile').append('  <option id="allfiles" value="'+file+'">'+file+'</option>')
}

