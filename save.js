var request = require('request')
var fs = require('fs')
var path = require("path");
const docList = [
    [
        { topic: "Three", text: 'THREE.TextSprite', url: 'https://raw.githubusercontent.com/SeregPie/THREE.TextSprite/main/README.md' },
        { topic: "GIS", text: 'awesome-gis', url: 'https://raw.githubusercontent.com/sshuair/awesome-gis/master/README.md' },
        { topic: "Maptalks", text: 'maptalks.three', url: 'https://raw.githubusercontent.com/maptalks/maptalks.three/master/API.ZH-CN.md' },
        { topic: "webgl", text: 'GLSL-Card', url: 'https://raw.githubusercontent.com/wshxbqq/GLSL-Card/master/README.md' },
        { topic: topics.GIS, text: 'SdTdtConf', url: 'http://www.sdmap.gov.cn/ImgMetaService/QueryMeta.ashx?wktpoint=POINT(119%2036.4)&level=7&key=4DFF6D4BADF3FB52D07CB30C92E48E9E' }, 
        { topic: topics.Front, text: 'awesome-vue', url: 'https://raw.githubusercontent.com/vuejs/awesome-vue/master/README.md' }
    ],
    [

    ],
    [

    ]
]

const topics = {
    webgl: "webgl",
    Maptalks: "Maptalks",
    GIS: "GIS",
    Three: "Three",
    Front: "Front"
}

const docnew = [
    { topic: topics.Front, text: 'awesome-vue', url: 'https://raw.githubusercontent.com/vuejs/awesome-vue/master/README.md' },
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

for (const doc of docnew) {
    //const name = doc.url.slice(doc.url.lastIndexOf('/') + 1)
    const name = "README.md"
    let dir = './' + doc.topic + "/" + doc.text
    mkdirsSync(dir)
    request(doc.url).pipe(fs.createWriteStream(dir + "/" + name));
}