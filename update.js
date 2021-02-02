var request = require('request')
var fs = require('fs')
var path = require("path");
const topics = {
    webgl: "webgl",
    Maptalks: "Maptalks",
    GIS: "GIS",
    Three: "Three",
    Front: "Front"
}

const docList = [
    [
        { topic: topics.GIS, text: 'SdTdtConf', url: 'http://www.sdmap.gov.cn/ImgMetaService/QueryMeta.ashx?wktpoint=POINT(119%2036.4)&level=7&key=4DFF6D4BADF3FB52D07CB30C92E48E9E' }, 
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
    //const name = doc.url.slice(doc.url.lastIndexOf('/') + 1)
    const name = "README.md"
    let dir = './' + doc.topic + "/" + doc.text
    mkdirsSync(dir)
    request(doc.url).pipe(fs.createWriteStream(dir + "/" + name));
}