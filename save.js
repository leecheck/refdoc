var request = require('request')
var fs = require('fs')
var path = require("path"); 
const docList = [
    [
        { topic: "Three", text: 'THREE.TextSprite', url: 'https://raw.githubusercontent.com/SeregPie/THREE.TextSprite/main/README.md' },

    ],
    [

    ],
    [

    ]
]

let allList = [];
docList.map((doc, index) => {
    doc.map((item, index) => {
        allList.push(item)
    })
})

function mkdirsSync(dirname) {
    if (fs.existsSync(dirname)) {
        return true;
    } else {
        if (mkdirsSync(path.dirname(dirname))) {
            fs.mkdirSync(dirname);
            return true;
        }
    }
}

for (const doc of allList) {
    const name = doc.url.slice(doc.url.lastIndexOf('/') + 1)
    let dir = './' + doc.topic + "/" + doc.text  
    mkdirsSync(dir)
    request(doc.url).pipe(fs.createWriteStream(dir + "/" + name));
}