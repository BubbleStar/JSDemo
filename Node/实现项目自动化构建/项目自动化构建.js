var fs = require('fs');

var projectData = {
  'name' : 'awsomeProject',
  'fileData' : [
    {
      'name' : 'html',
      'type' : 'dir'
    },
    {
      'name' : 'css',
      'type' : 'dir'
    },
    {
      'name' : 'js',
      'type' : 'dir'
    },
    {
      'name' : 'images',
      'type' : 'dir'
    },
    {
      'name' : 'index.html',
      'type' : 'file',
      'content' : '<html>\n\t<head>\n\t\t<title>\n\t\t</title>\n\t</head>\n\t<body>\n\t</body>\n</html>'
    }
  ]
};
if(projectData.name){
  fs.mkdirSync(projectData.name);

  var fileData = projectData.fileData;
  if(fileData && fileData.forEach){
    fileData.forEach(function(f){
      f.path = projectData.name + '/' + f.name;
      switch (f.type) {
        case 'dir':
          fs.mkdirSync(f.path);
          break;
        case 'file':
          fs.writeFileSync(f.path , f.content);
          break;
        default:break;
      }
    })
  }
}
