/**
 * Created by fly on 2016/9/17.
 */
var filedir = './awesomeProject/source';
var fs = require('fs');

fs.watch(filedir,function(ev,file) {
    //console.log(ev + '/' + file);
    var content = '';
    fs.readdir(filedir,function(err,fileList) {

        fileList.forEach(function(f) {

            if(f){
                var info = fs.statSync(filedir + '/' + f);
                //console.log(info);
                if(info.mode == 33206){
                    var c = fs.readFileSync( filedir + '/' + f );
                    content += c.toString() + '\n';
                }
            }

        })
        fs.writeFile('./awesomeProject/js/index.js', content);
    })
})
