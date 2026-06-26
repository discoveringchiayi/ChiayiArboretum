var APP_DATA = {
  "scenes": [
    {
      "id": "0-gate1",
      "name": "Gate",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -0.6205895210612056,
        "pitch": 0.034986274952926166,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": -0.11378168588575654,
          "pitch": 0.10575108940387956,
          "rotation": 6.283185307179586,
          "target": "1-firstfork"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-firstfork",
      "name": "FIRSTfork",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 2.559524256437923,
        "pitch": -0.012679992566479115,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": -0.6236711496770049,
          "pitch": 0.12352515733394931,
          "rotation": 0,
          "target": "0-gate1"
        },
        {
          "yaw": -1.699809696199278,
          "pitch": 0.1210969155280317,
          "rotation": 4.71238898038469,
          "target": "2-brasiliensis"
        },
        {
          "yaw": -0.00019179410893954696,
          "pitch": 0.12860402011063599,
          "rotation": 1.5707963267948966,
          "target": "5-ormosia-monosperma"
        },
        {
          "yaw": 1.9805704726808564,
          "pitch": 0.08161867495404351,
          "rotation": 0,
          "target": "4-araucaria-cunninghamii"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-brasiliensis",
      "name": "brasiliensis",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -3.0931254199885174,
        "pitch": 0.025566568630123854,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": -3.095358125769886,
          "pitch": 0.16328889996599827,
          "rotation": 0,
          "target": "3-brasiliensis2"
        },
        {
          "yaw": -0.08374473570501806,
          "pitch": 0.06607542320749005,
          "rotation": 4.71238898038469,
          "target": "1-firstfork"
        },
        {
          "yaw": 1.3651697867878774,
          "pitch": 0.05377092092002478,
          "rotation": 1.5707963267948966,
          "target": "4-araucaria-cunninghamii"
        },
        {
          "yaw": 0.3464119174884974,
          "pitch": 0.0327886532084527,
          "rotation": 0,
          "target": "5-ormosia-monosperma"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-brasiliensis2",
      "name": "brasiliensis2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 0.7654232402146519,
        "pitch": -0.02195509538625906,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": -3.0247529449757717,
          "pitch": 0.058886487853071046,
          "rotation": 0,
          "target": "2-brasiliensis"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.252460649252063,
          "pitch": -0.03880327204267786,
          "title": "巴西橡膠樹",
          "text": "<img src='img/HeveaBrasiliensis.jpg' width='250' /><br>圖片來源: https://cptfri.tfri.gov.tw/view.php?theme=plants&subtheme=&id=13438"
        }
      ]
    },
    {
      "id": "4-araucaria-cunninghamii",
      "name": "Araucaria cunninghamii",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.1392602867091917,
          "pitch": 0.08447823828512568,
          "rotation": 0,
          "target": "1-firstfork"
        },
        {
          "yaw": 0.2685276179816185,
          "pitch": 0.09799849010195061,
          "rotation": 0.7853981633974483,
          "target": "7-ecopond"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.8498037142651658,
          "pitch": -0.01285188109400437,
          "title": "肯氏南洋杉",
          "text": "<img src='img/AraucariaCunninghamii.jpg' width='250' />圖片來源:&nbsp;https://cptfri.tfri.gov.tw/view.php?theme=plants&amp;subtheme=&amp;id=13548"
        }
      ]
    },
    {
      "id": "5-ormosia-monosperma",
      "name": "Ormosia monosperma",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.6515913006931182,
          "pitch": 0.14610310556276573,
          "rotation": 0,
          "target": "1-firstfork"
        },
        {
          "yaw": 0.03139109806579121,
          "pitch": 0.34116048913848296,
          "rotation": 0,
          "target": "6-ormosia-monosperma2"
        },
        {
          "yaw": -1.5267845531702378,
          "pitch": 0.05075284184303541,
          "rotation": 0,
          "target": "4-araucaria-cunninghamii"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-ormosia-monosperma2",
      "name": "Ormosia monosperma2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -0.6757817226011085,
        "pitch": -0.15564573894112144,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": 2.577303774011381,
          "pitch": 0.06863466315283873,
          "rotation": 0,
          "target": "5-ormosia-monosperma"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.17535899474442296,
          "pitch": -0.025053724084749263,
          "title": "單子紅豆",
          "text": "1923年，由日本人金平亮三氏從南洋引進到臺灣，並在臺北植物園、六龜扇平工作站及嘉義樹木園等3處栽種。<div>如今僅嘉義樹木園的單子紅豆能順利開花結果。</div>"
        }
      ]
    },
    {
      "id": "7-ecopond",
      "name": "ecoPond",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -0.8511244838595111,
        "pitch": 0.05562575603956077,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": 0.945404947713449,
          "pitch": 0.012075210470094078,
          "rotation": 1.5707963267948966,
          "target": "4-araucaria-cunninghamii"
        },
        {
          "yaw": -1.7767346239358375,
          "pitch": 0.07854738752318724,
          "rotation": 0.7853981633974483,
          "target": "8-ecopond2"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.9199952568126282,
          "pitch": 0.1900437727946489,
          "title": "生態水池",
          "text": "包含微生物、水生植物、水生動物的生物多樣性環境。<img src='img/ecopond.jpg' width='250' />"
        }
      ]
    },
    {
      "id": "8-ecopond2",
      "name": "ecoPond2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.6433531764317788,
          "pitch": 0.13114377754609308,
          "rotation": 7.853981633974483,
          "target": "4-araucaria-cunninghamii"
        },
        {
          "yaw": 1.6797545002459406,
          "pitch": 0.09363136114967396,
          "rotation": 5.497787143782138,
          "target": "7-ecopond"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.6949097957976189,
          "pitch": 0.20956160521502198,
          "title": "生態水池",
          "text": "林業試驗所嘉義研究中心表示，生態池乾涸非風災所致，而是施工誤挖電纜造成水源中斷，目前正搶修，待供水恢復後將重現生機。"
        }
      ]
    }
  ],
  "name": "嘉義樹木園",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
