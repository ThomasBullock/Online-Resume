"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*!@license Copyright 2013, Heinrich Goebl, License: MIT, see https://github.com/hgoebl/mobile-detect.js*/
!function (a, b) {
  a(function () {
    "use strict";
    function a(a, b) {
      return null != a && null != b && a.toLowerCase() === b.toLowerCase();
    }function c(a, b) {
      var c,
          d,
          e = a.length;if (!e || !b) return !1;for (c = b.toLowerCase(), d = 0; d < e; ++d) {
        if (c === a[d].toLowerCase()) return !0;
      }return !1;
    }function d(a) {
      for (var b in a) {
        h.call(a, b) && (a[b] = new RegExp(a[b], "i"));
      }
    }function e(a, b) {
      this.ua = a || "", this._cache = {}, this.maxPhoneWidth = b || 600;
    }var f = {};f.mobileDetectRules = { phones: { iPhone: "\\biPhone\\b|\\biPod\\b", BlackBerry: "BlackBerry|\\bBB10\\b|rim[0-9]+", HTC: "HTC|HTC.*(Sensation|Evo|Vision|Explorer|6800|8100|8900|A7272|S510e|C110e|Legend|Desire|T8282)|APX515CKT|Qtek9090|APA9292KT|HD_mini|Sensation.*Z710e|PG86100|Z715e|Desire.*(A8181|HD)|ADR6200|ADR6400L|ADR6425|001HT|Inspire 4G|Android.*\\bEVO\\b|T-Mobile G1|Z520m", Nexus: "Nexus One|Nexus S|Galaxy.*Nexus|Android.*Nexus.*Mobile|Nexus 4|Nexus 5|Nexus 6", Dell: "Dell.*Streak|Dell.*Aero|Dell.*Venue|DELL.*Venue Pro|Dell Flash|Dell Smoke|Dell Mini 3iX|XCD28|XCD35|\\b001DL\\b|\\b101DL\\b|\\bGS01\\b", Motorola: "Motorola|DROIDX|DROID BIONIC|\\bDroid\\b.*Build|Android.*Xoom|HRI39|MOT-|A1260|A1680|A555|A853|A855|A953|A955|A956|Motorola.*ELECTRIFY|Motorola.*i1|i867|i940|MB200|MB300|MB501|MB502|MB508|MB511|MB520|MB525|MB526|MB611|MB612|MB632|MB810|MB855|MB860|MB861|MB865|MB870|ME501|ME502|ME511|ME525|ME600|ME632|ME722|ME811|ME860|ME863|ME865|MT620|MT710|MT716|MT720|MT810|MT870|MT917|Motorola.*TITANIUM|WX435|WX445|XT300|XT301|XT311|XT316|XT317|XT319|XT320|XT390|XT502|XT530|XT531|XT532|XT535|XT603|XT610|XT611|XT615|XT681|XT701|XT702|XT711|XT720|XT800|XT806|XT860|XT862|XT875|XT882|XT883|XT894|XT901|XT907|XT909|XT910|XT912|XT928|XT926|XT915|XT919|XT925|XT1021|\\bMoto E\\b", Samsung: "\\bSamsung\\b|SM-G9250|GT-19300|SGH-I337|BGT-S5230|GT-B2100|GT-B2700|GT-B2710|GT-B3210|GT-B3310|GT-B3410|GT-B3730|GT-B3740|GT-B5510|GT-B5512|GT-B5722|GT-B6520|GT-B7300|GT-B7320|GT-B7330|GT-B7350|GT-B7510|GT-B7722|GT-B7800|GT-C3010|GT-C3011|GT-C3060|GT-C3200|GT-C3212|GT-C3212I|GT-C3262|GT-C3222|GT-C3300|GT-C3300K|GT-C3303|GT-C3303K|GT-C3310|GT-C3322|GT-C3330|GT-C3350|GT-C3500|GT-C3510|GT-C3530|GT-C3630|GT-C3780|GT-C5010|GT-C5212|GT-C6620|GT-C6625|GT-C6712|GT-E1050|GT-E1070|GT-E1075|GT-E1080|GT-E1081|GT-E1085|GT-E1087|GT-E1100|GT-E1107|GT-E1110|GT-E1120|GT-E1125|GT-E1130|GT-E1160|GT-E1170|GT-E1175|GT-E1180|GT-E1182|GT-E1200|GT-E1210|GT-E1225|GT-E1230|GT-E1390|GT-E2100|GT-E2120|GT-E2121|GT-E2152|GT-E2220|GT-E2222|GT-E2230|GT-E2232|GT-E2250|GT-E2370|GT-E2550|GT-E2652|GT-E3210|GT-E3213|GT-I5500|GT-I5503|GT-I5700|GT-I5800|GT-I5801|GT-I6410|GT-I6420|GT-I7110|GT-I7410|GT-I7500|GT-I8000|GT-I8150|GT-I8160|GT-I8190|GT-I8320|GT-I8330|GT-I8350|GT-I8530|GT-I8700|GT-I8703|GT-I8910|GT-I9000|GT-I9001|GT-I9003|GT-I9010|GT-I9020|GT-I9023|GT-I9070|GT-I9082|GT-I9100|GT-I9103|GT-I9220|GT-I9250|GT-I9300|GT-I9305|GT-I9500|GT-I9505|GT-M3510|GT-M5650|GT-M7500|GT-M7600|GT-M7603|GT-M8800|GT-M8910|GT-N7000|GT-S3110|GT-S3310|GT-S3350|GT-S3353|GT-S3370|GT-S3650|GT-S3653|GT-S3770|GT-S3850|GT-S5210|GT-S5220|GT-S5229|GT-S5230|GT-S5233|GT-S5250|GT-S5253|GT-S5260|GT-S5263|GT-S5270|GT-S5300|GT-S5330|GT-S5350|GT-S5360|GT-S5363|GT-S5369|GT-S5380|GT-S5380D|GT-S5560|GT-S5570|GT-S5600|GT-S5603|GT-S5610|GT-S5620|GT-S5660|GT-S5670|GT-S5690|GT-S5750|GT-S5780|GT-S5830|GT-S5839|GT-S6102|GT-S6500|GT-S7070|GT-S7200|GT-S7220|GT-S7230|GT-S7233|GT-S7250|GT-S7500|GT-S7530|GT-S7550|GT-S7562|GT-S7710|GT-S8000|GT-S8003|GT-S8500|GT-S8530|GT-S8600|SCH-A310|SCH-A530|SCH-A570|SCH-A610|SCH-A630|SCH-A650|SCH-A790|SCH-A795|SCH-A850|SCH-A870|SCH-A890|SCH-A930|SCH-A950|SCH-A970|SCH-A990|SCH-I100|SCH-I110|SCH-I400|SCH-I405|SCH-I500|SCH-I510|SCH-I515|SCH-I600|SCH-I730|SCH-I760|SCH-I770|SCH-I830|SCH-I910|SCH-I920|SCH-I959|SCH-LC11|SCH-N150|SCH-N300|SCH-R100|SCH-R300|SCH-R351|SCH-R400|SCH-R410|SCH-T300|SCH-U310|SCH-U320|SCH-U350|SCH-U360|SCH-U365|SCH-U370|SCH-U380|SCH-U410|SCH-U430|SCH-U450|SCH-U460|SCH-U470|SCH-U490|SCH-U540|SCH-U550|SCH-U620|SCH-U640|SCH-U650|SCH-U660|SCH-U700|SCH-U740|SCH-U750|SCH-U810|SCH-U820|SCH-U900|SCH-U940|SCH-U960|SCS-26UC|SGH-A107|SGH-A117|SGH-A127|SGH-A137|SGH-A157|SGH-A167|SGH-A177|SGH-A187|SGH-A197|SGH-A227|SGH-A237|SGH-A257|SGH-A437|SGH-A517|SGH-A597|SGH-A637|SGH-A657|SGH-A667|SGH-A687|SGH-A697|SGH-A707|SGH-A717|SGH-A727|SGH-A737|SGH-A747|SGH-A767|SGH-A777|SGH-A797|SGH-A817|SGH-A827|SGH-A837|SGH-A847|SGH-A867|SGH-A877|SGH-A887|SGH-A897|SGH-A927|SGH-B100|SGH-B130|SGH-B200|SGH-B220|SGH-C100|SGH-C110|SGH-C120|SGH-C130|SGH-C140|SGH-C160|SGH-C170|SGH-C180|SGH-C200|SGH-C207|SGH-C210|SGH-C225|SGH-C230|SGH-C417|SGH-C450|SGH-D307|SGH-D347|SGH-D357|SGH-D407|SGH-D415|SGH-D780|SGH-D807|SGH-D980|SGH-E105|SGH-E200|SGH-E315|SGH-E316|SGH-E317|SGH-E335|SGH-E590|SGH-E635|SGH-E715|SGH-E890|SGH-F300|SGH-F480|SGH-I200|SGH-I300|SGH-I320|SGH-I550|SGH-I577|SGH-I600|SGH-I607|SGH-I617|SGH-I627|SGH-I637|SGH-I677|SGH-I700|SGH-I717|SGH-I727|SGH-i747M|SGH-I777|SGH-I780|SGH-I827|SGH-I847|SGH-I857|SGH-I896|SGH-I897|SGH-I900|SGH-I907|SGH-I917|SGH-I927|SGH-I937|SGH-I997|SGH-J150|SGH-J200|SGH-L170|SGH-L700|SGH-M110|SGH-M150|SGH-M200|SGH-N105|SGH-N500|SGH-N600|SGH-N620|SGH-N625|SGH-N700|SGH-N710|SGH-P107|SGH-P207|SGH-P300|SGH-P310|SGH-P520|SGH-P735|SGH-P777|SGH-Q105|SGH-R210|SGH-R220|SGH-R225|SGH-S105|SGH-S307|SGH-T109|SGH-T119|SGH-T139|SGH-T209|SGH-T219|SGH-T229|SGH-T239|SGH-T249|SGH-T259|SGH-T309|SGH-T319|SGH-T329|SGH-T339|SGH-T349|SGH-T359|SGH-T369|SGH-T379|SGH-T409|SGH-T429|SGH-T439|SGH-T459|SGH-T469|SGH-T479|SGH-T499|SGH-T509|SGH-T519|SGH-T539|SGH-T559|SGH-T589|SGH-T609|SGH-T619|SGH-T629|SGH-T639|SGH-T659|SGH-T669|SGH-T679|SGH-T709|SGH-T719|SGH-T729|SGH-T739|SGH-T746|SGH-T749|SGH-T759|SGH-T769|SGH-T809|SGH-T819|SGH-T839|SGH-T919|SGH-T929|SGH-T939|SGH-T959|SGH-T989|SGH-U100|SGH-U200|SGH-U800|SGH-V205|SGH-V206|SGH-X100|SGH-X105|SGH-X120|SGH-X140|SGH-X426|SGH-X427|SGH-X475|SGH-X495|SGH-X497|SGH-X507|SGH-X600|SGH-X610|SGH-X620|SGH-X630|SGH-X700|SGH-X820|SGH-X890|SGH-Z130|SGH-Z150|SGH-Z170|SGH-ZX10|SGH-ZX20|SHW-M110|SPH-A120|SPH-A400|SPH-A420|SPH-A460|SPH-A500|SPH-A560|SPH-A600|SPH-A620|SPH-A660|SPH-A700|SPH-A740|SPH-A760|SPH-A790|SPH-A800|SPH-A820|SPH-A840|SPH-A880|SPH-A900|SPH-A940|SPH-A960|SPH-D600|SPH-D700|SPH-D710|SPH-D720|SPH-I300|SPH-I325|SPH-I330|SPH-I350|SPH-I500|SPH-I600|SPH-I700|SPH-L700|SPH-M100|SPH-M220|SPH-M240|SPH-M300|SPH-M305|SPH-M320|SPH-M330|SPH-M350|SPH-M360|SPH-M370|SPH-M380|SPH-M510|SPH-M540|SPH-M550|SPH-M560|SPH-M570|SPH-M580|SPH-M610|SPH-M620|SPH-M630|SPH-M800|SPH-M810|SPH-M850|SPH-M900|SPH-M910|SPH-M920|SPH-M930|SPH-N100|SPH-N200|SPH-N240|SPH-N300|SPH-N400|SPH-Z400|SWC-E100|SCH-i909|GT-N7100|GT-N7105|SCH-I535|SM-N900A|SGH-I317|SGH-T999L|GT-S5360B|GT-I8262|GT-S6802|GT-S6312|GT-S6310|GT-S5312|GT-S5310|GT-I9105|GT-I8510|GT-S6790N|SM-G7105|SM-N9005|GT-S5301|GT-I9295|GT-I9195|SM-C101|GT-S7392|GT-S7560|GT-B7610|GT-I5510|GT-S7582|GT-S7530E|GT-I8750|SM-G9006V|SM-G9008V|SM-G9009D|SM-G900A|SM-G900D|SM-G900F|SM-G900H|SM-G900I|SM-G900J|SM-G900K|SM-G900L|SM-G900M|SM-G900P|SM-G900R4|SM-G900S|SM-G900T|SM-G900V|SM-G900W8|SHV-E160K|SCH-P709|SCH-P729|SM-T2558|GT-I9205|SM-G9350|SM-J120F|SM-G920F|SM-G920V|SM-G930F|SM-N910C", LG: "\\bLG\\b;|LG[- ]?(C800|C900|E400|E610|E900|E-900|F160|F180K|F180L|F180S|730|855|L160|LS740|LS840|LS970|LU6200|MS690|MS695|MS770|MS840|MS870|MS910|P500|P700|P705|VM696|AS680|AS695|AX840|C729|E970|GS505|272|C395|E739BK|E960|L55C|L75C|LS696|LS860|P769BK|P350|P500|P509|P870|UN272|US730|VS840|VS950|LN272|LN510|LS670|LS855|LW690|MN270|MN510|P509|P769|P930|UN200|UN270|UN510|UN610|US670|US740|US760|UX265|UX840|VN271|VN530|VS660|VS700|VS740|VS750|VS910|VS920|VS930|VX9200|VX11000|AX840A|LW770|P506|P925|P999|E612|D955|D802|MS323)", Sony: "SonyST|SonyLT|SonyEricsson|SonyEricssonLT15iv|LT18i|E10i|LT28h|LT26w|SonyEricssonMT27i|C5303|C6902|C6903|C6906|C6943|D2533", Asus: "Asus.*Galaxy|PadFone.*Mobile", NokiaLumia: "Lumia [0-9]{3,4}", Micromax: "Micromax.*\\b(A210|A92|A88|A72|A111|A110Q|A115|A116|A110|A90S|A26|A51|A35|A54|A25|A27|A89|A68|A65|A57|A90)\\b", Palm: "PalmSource|Palm", Vertu: "Vertu|Vertu.*Ltd|Vertu.*Ascent|Vertu.*Ayxta|Vertu.*Constellation(F|Quest)?|Vertu.*Monika|Vertu.*Signature", Pantech: "PANTECH|IM-A850S|IM-A840S|IM-A830L|IM-A830K|IM-A830S|IM-A820L|IM-A810K|IM-A810S|IM-A800S|IM-T100K|IM-A725L|IM-A780L|IM-A775C|IM-A770K|IM-A760S|IM-A750K|IM-A740S|IM-A730S|IM-A720L|IM-A710K|IM-A690L|IM-A690S|IM-A650S|IM-A630K|IM-A600S|VEGA PTL21|PT003|P8010|ADR910L|P6030|P6020|P9070|P4100|P9060|P5000|CDM8992|TXT8045|ADR8995|IS11PT|P2030|P6010|P8000|PT002|IS06|CDM8999|P9050|PT001|TXT8040|P2020|P9020|P2000|P7040|P7000|C790", Fly: "IQ230|IQ444|IQ450|IQ440|IQ442|IQ441|IQ245|IQ256|IQ236|IQ255|IQ235|IQ245|IQ275|IQ240|IQ285|IQ280|IQ270|IQ260|IQ250", Wiko: "KITE 4G|HIGHWAY|GETAWAY|STAIRWAY|DARKSIDE|DARKFULL|DARKNIGHT|DARKMOON|SLIDE|WAX 4G|RAINBOW|BLOOM|SUNSET|GOA(?!nna)|LENNY|BARRY|IGGY|OZZY|CINK FIVE|CINK PEAX|CINK PEAX 2|CINK SLIM|CINK SLIM 2|CINK +|CINK KING|CINK PEAX|CINK SLIM|SUBLIM", iMobile: "i-mobile (IQ|i-STYLE|idea|ZAA|Hitz)", SimValley: "\\b(SP-80|XT-930|SX-340|XT-930|SX-310|SP-360|SP60|SPT-800|SP-120|SPT-800|SP-140|SPX-5|SPX-8|SP-100|SPX-8|SPX-12)\\b", Wolfgang: "AT-B24D|AT-AS50HD|AT-AS40W|AT-AS55HD|AT-AS45q2|AT-B26D|AT-AS50Q", Alcatel: "Alcatel", Nintendo: "Nintendo 3DS", Amoi: "Amoi", INQ: "INQ", GenericPhone: "Tapatalk|PDA;|SAGEM|\\bmmp\\b|pocket|\\bpsp\\b|symbian|Smartphone|smartfon|treo|up.browser|up.link|vodafone|\\bwap\\b|nokia|Series40|Series60|S60|SonyEricsson|N900|MAUI.*WAP.*Browser" }, tablets: { iPad: "iPad|iPad.*Mobile", NexusTablet: "Android.*Nexus[\\s]+(7|9|10)", SamsungTablet: "SAMSUNG.*Tablet|Galaxy.*Tab|SC-01C|GT-P1000|GT-P1003|GT-P1010|GT-P3105|GT-P6210|GT-P6800|GT-P6810|GT-P7100|GT-P7300|GT-P7310|GT-P7500|GT-P7510|SCH-I800|SCH-I815|SCH-I905|SGH-I957|SGH-I987|SGH-T849|SGH-T859|SGH-T869|SPH-P100|GT-P3100|GT-P3108|GT-P3110|GT-P5100|GT-P5110|GT-P6200|GT-P7320|GT-P7511|GT-N8000|GT-P8510|SGH-I497|SPH-P500|SGH-T779|SCH-I705|SCH-I915|GT-N8013|GT-P3113|GT-P5113|GT-P8110|GT-N8010|GT-N8005|GT-N8020|GT-P1013|GT-P6201|GT-P7501|GT-N5100|GT-N5105|GT-N5110|SHV-E140K|SHV-E140L|SHV-E140S|SHV-E150S|SHV-E230K|SHV-E230L|SHV-E230S|SHW-M180K|SHW-M180L|SHW-M180S|SHW-M180W|SHW-M300W|SHW-M305W|SHW-M380K|SHW-M380S|SHW-M380W|SHW-M430W|SHW-M480K|SHW-M480S|SHW-M480W|SHW-M485W|SHW-M486W|SHW-M500W|GT-I9228|SCH-P739|SCH-I925|GT-I9200|GT-P5200|GT-P5210|GT-P5210X|SM-T311|SM-T310|SM-T310X|SM-T210|SM-T210R|SM-T211|SM-P600|SM-P601|SM-P605|SM-P900|SM-P901|SM-T217|SM-T217A|SM-T217S|SM-P6000|SM-T3100|SGH-I467|XE500|SM-T110|GT-P5220|GT-I9200X|GT-N5110X|GT-N5120|SM-P905|SM-T111|SM-T2105|SM-T315|SM-T320|SM-T320X|SM-T321|SM-T520|SM-T525|SM-T530NU|SM-T230NU|SM-T330NU|SM-T900|XE500T1C|SM-P605V|SM-P905V|SM-T337V|SM-T537V|SM-T707V|SM-T807V|SM-P600X|SM-P900X|SM-T210X|SM-T230|SM-T230X|SM-T325|GT-P7503|SM-T531|SM-T330|SM-T530|SM-T705|SM-T705C|SM-T535|SM-T331|SM-T800|SM-T700|SM-T537|SM-T807|SM-P907A|SM-T337A|SM-T537A|SM-T707A|SM-T807A|SM-T237|SM-T807P|SM-P607T|SM-T217T|SM-T337T|SM-T807T|SM-T116NQ|SM-P550|SM-T350|SM-T550|SM-T9000|SM-P9000|SM-T705Y|SM-T805|GT-P3113|SM-T710|SM-T810|SM-T815|SM-T360|SM-T533|SM-T113|SM-T335|SM-T715|SM-T560|SM-T670|SM-T677|SM-T377|SM-T567|SM-T357T|SM-T555|SM-T561|SM-T713|SM-T719|SM-T813|SM-T819|SM-T580|SM-T355Y|SM-T280|SM-T817A|SM-T820|SM-W700|SM-P580|SM-T587", Kindle: "Kindle|Silk.*Accelerated|Android.*\\b(KFOT|KFTT|KFJWI|KFJWA|KFOTE|KFSOWI|KFTHWI|KFTHWA|KFAPWI|KFAPWA|WFJWAE|KFSAWA|KFSAWI|KFASWI|KFARWI|KFFOWI|KFGIWI|KFMEWI)\\b|Android.*Silk/[0-9.]+ like Chrome/[0-9.]+ (?!Mobile)", SurfaceTablet: "Windows NT [0-9.]+; ARM;.*(Tablet|ARMBJS)", HPTablet: "HP Slate (7|8|10)|HP ElitePad 900|hp-tablet|EliteBook.*Touch|HP 8|Slate 21|HP SlateBook 10", AsusTablet: "^.*PadFone((?!Mobile).)*$|Transformer|TF101|TF101G|TF300T|TF300TG|TF300TL|TF700T|TF700KL|TF701T|TF810C|ME171|ME301T|ME302C|ME371MG|ME370T|ME372MG|ME172V|ME173X|ME400C|Slider SL101|\\bK00F\\b|\\bK00C\\b|\\bK00E\\b|\\bK00L\\b|TX201LA|ME176C|ME102A|\\bM80TA\\b|ME372CL|ME560CG|ME372CG|ME302KL| K010 | K011 | K017 | K01E |ME572C|ME103K|ME170C|ME171C|\\bME70C\\b|ME581C|ME581CL|ME8510C|ME181C|P01Y|PO1MA|P01Z", BlackBerryTablet: "PlayBook|RIM Tablet", HTCtablet: "HTC_Flyer_P512|HTC Flyer|HTC Jetstream|HTC-P715a|HTC EVO View 4G|PG41200|PG09410", MotorolaTablet: "xoom|sholest|MZ615|MZ605|MZ505|MZ601|MZ602|MZ603|MZ604|MZ606|MZ607|MZ608|MZ609|MZ615|MZ616|MZ617", NookTablet: "Android.*Nook|NookColor|nook browser|BNRV200|BNRV200A|BNTV250|BNTV250A|BNTV400|BNTV600|LogicPD Zoom2", AcerTablet: "Android.*; \\b(A100|A101|A110|A200|A210|A211|A500|A501|A510|A511|A700|A701|W500|W500P|W501|W501P|W510|W511|W700|G100|G100W|B1-A71|B1-710|B1-711|A1-810|A1-811|A1-830)\\b|W3-810|\\bA3-A10\\b|\\bA3-A11\\b|\\bA3-A20\\b|\\bA3-A30", ToshibaTablet: "Android.*(AT100|AT105|AT200|AT205|AT270|AT275|AT300|AT305|AT1S5|AT500|AT570|AT700|AT830)|TOSHIBA.*FOLIO", LGTablet: "\\bL-06C|LG-V909|LG-V900|LG-V700|LG-V510|LG-V500|LG-V410|LG-V400|LG-VK810\\b", FujitsuTablet: "Android.*\\b(F-01D|F-02F|F-05E|F-10D|M532|Q572)\\b", PrestigioTablet: "PMP3170B|PMP3270B|PMP3470B|PMP7170B|PMP3370B|PMP3570C|PMP5870C|PMP3670B|PMP5570C|PMP5770D|PMP3970B|PMP3870C|PMP5580C|PMP5880D|PMP5780D|PMP5588C|PMP7280C|PMP7280C3G|PMP7280|PMP7880D|PMP5597D|PMP5597|PMP7100D|PER3464|PER3274|PER3574|PER3884|PER5274|PER5474|PMP5097CPRO|PMP5097|PMP7380D|PMP5297C|PMP5297C_QUAD|PMP812E|PMP812E3G|PMP812F|PMP810E|PMP880TD|PMT3017|PMT3037|PMT3047|PMT3057|PMT7008|PMT5887|PMT5001|PMT5002", LenovoTablet: "Lenovo TAB|Idea(Tab|Pad)( A1|A10| K1|)|ThinkPad([ ]+)?Tablet|YT3-X90L|YT3-X90F|YT3-X90X|Lenovo.*(S2109|S2110|S5000|S6000|K3011|A3000|A3500|A1000|A2107|A2109|A1107|A5500|A7600|B6000|B8000|B8080)(-|)(FL|F|HV|H|)", DellTablet: "Venue 11|Venue 8|Venue 7|Dell Streak 10|Dell Streak 7", YarvikTablet: "Android.*\\b(TAB210|TAB211|TAB224|TAB250|TAB260|TAB264|TAB310|TAB360|TAB364|TAB410|TAB411|TAB420|TAB424|TAB450|TAB460|TAB461|TAB464|TAB465|TAB467|TAB468|TAB07-100|TAB07-101|TAB07-150|TAB07-151|TAB07-152|TAB07-200|TAB07-201-3G|TAB07-210|TAB07-211|TAB07-212|TAB07-214|TAB07-220|TAB07-400|TAB07-485|TAB08-150|TAB08-200|TAB08-201-3G|TAB08-201-30|TAB09-100|TAB09-211|TAB09-410|TAB10-150|TAB10-201|TAB10-211|TAB10-400|TAB10-410|TAB13-201|TAB274EUK|TAB275EUK|TAB374EUK|TAB462EUK|TAB474EUK|TAB9-200)\\b", MedionTablet: "Android.*\\bOYO\\b|LIFE.*(P9212|P9514|P9516|S9512)|LIFETAB", ArnovaTablet: "97G4|AN10G2|AN7bG3|AN7fG3|AN8G3|AN8cG3|AN7G3|AN9G3|AN7dG3|AN7dG3ST|AN7dG3ChildPad|AN10bG3|AN10bG3DT|AN9G2", IntensoTablet: "INM8002KP|INM1010FP|INM805ND|Intenso Tab|TAB1004", IRUTablet: "M702pro", MegafonTablet: "MegaFon V9|\\bZTE V9\\b|Android.*\\bMT7A\\b", EbodaTablet: "E-Boda (Supreme|Impresspeed|Izzycomm|Essential)", AllViewTablet: "Allview.*(Viva|Alldro|City|Speed|All TV|Frenzy|Quasar|Shine|TX1|AX1|AX2)", ArchosTablet: "\\b(101G9|80G9|A101IT)\\b|Qilive 97R|Archos5|\\bARCHOS (70|79|80|90|97|101|FAMILYPAD|)(b|c|)(G10| Cobalt| TITANIUM(HD|)| Xenon| Neon|XSK| 2| XS 2| PLATINUM| CARBON|GAMEPAD)\\b", AinolTablet: "NOVO7|NOVO8|NOVO10|Novo7Aurora|Novo7Basic|NOVO7PALADIN|novo9-Spark", NokiaLumiaTablet: "Lumia 2520", SonyTablet: "Sony.*Tablet|Xperia Tablet|Sony Tablet S|SO-03E|SGPT12|SGPT13|SGPT114|SGPT121|SGPT122|SGPT123|SGPT111|SGPT112|SGPT113|SGPT131|SGPT132|SGPT133|SGPT211|SGPT212|SGPT213|SGP311|SGP312|SGP321|EBRD1101|EBRD1102|EBRD1201|SGP351|SGP341|SGP511|SGP512|SGP521|SGP541|SGP551|SGP621|SGP612|SOT31", PhilipsTablet: "\\b(PI2010|PI3000|PI3100|PI3105|PI3110|PI3205|PI3210|PI3900|PI4010|PI7000|PI7100)\\b", CubeTablet: "Android.*(K8GT|U9GT|U10GT|U16GT|U17GT|U18GT|U19GT|U20GT|U23GT|U30GT)|CUBE U8GT", CobyTablet: "MID1042|MID1045|MID1125|MID1126|MID7012|MID7014|MID7015|MID7034|MID7035|MID7036|MID7042|MID7048|MID7127|MID8042|MID8048|MID8127|MID9042|MID9740|MID9742|MID7022|MID7010", MIDTablet: "M9701|M9000|M9100|M806|M1052|M806|T703|MID701|MID713|MID710|MID727|MID760|MID830|MID728|MID933|MID125|MID810|MID732|MID120|MID930|MID800|MID731|MID900|MID100|MID820|MID735|MID980|MID130|MID833|MID737|MID960|MID135|MID860|MID736|MID140|MID930|MID835|MID733|MID4X10", MSITablet: "MSI \\b(Primo 73K|Primo 73L|Primo 81L|Primo 77|Primo 93|Primo 75|Primo 76|Primo 73|Primo 81|Primo 91|Primo 90|Enjoy 71|Enjoy 7|Enjoy 10)\\b", SMiTTablet: "Android.*(\\bMID\\b|MID-560|MTV-T1200|MTV-PND531|MTV-P1101|MTV-PND530)", RockChipTablet: "Android.*(RK2818|RK2808A|RK2918|RK3066)|RK2738|RK2808A", FlyTablet: "IQ310|Fly Vision", bqTablet: "Android.*(bq)?.*(Elcano|Curie|Edison|Maxwell|Kepler|Pascal|Tesla|Hypatia|Platon|Newton|Livingstone|Cervantes|Avant|Aquaris [E|M]10)|Maxwell.*Lite|Maxwell.*Plus", HuaweiTablet: "MediaPad|MediaPad 7 Youth|IDEOS S7|S7-201c|S7-202u|S7-101|S7-103|S7-104|S7-105|S7-106|S7-201|S7-Slim", NecTablet: "\\bN-06D|\\bN-08D", PantechTablet: "Pantech.*P4100", BronchoTablet: "Broncho.*(N701|N708|N802|a710)", VersusTablet: "TOUCHPAD.*[78910]|\\bTOUCHTAB\\b", ZyncTablet: "z1000|Z99 2G|z99|z930|z999|z990|z909|Z919|z900", PositivoTablet: "TB07STA|TB10STA|TB07FTA|TB10FTA", NabiTablet: "Android.*\\bNabi", KoboTablet: "Kobo Touch|\\bK080\\b|\\bVox\\b Build|\\bArc\\b Build", DanewTablet: "DSlide.*\\b(700|701R|702|703R|704|802|970|971|972|973|974|1010|1012)\\b", TexetTablet: "NaviPad|TB-772A|TM-7045|TM-7055|TM-9750|TM-7016|TM-7024|TM-7026|TM-7041|TM-7043|TM-7047|TM-8041|TM-9741|TM-9747|TM-9748|TM-9751|TM-7022|TM-7021|TM-7020|TM-7011|TM-7010|TM-7023|TM-7025|TM-7037W|TM-7038W|TM-7027W|TM-9720|TM-9725|TM-9737W|TM-1020|TM-9738W|TM-9740|TM-9743W|TB-807A|TB-771A|TB-727A|TB-725A|TB-719A|TB-823A|TB-805A|TB-723A|TB-715A|TB-707A|TB-705A|TB-709A|TB-711A|TB-890HD|TB-880HD|TB-790HD|TB-780HD|TB-770HD|TB-721HD|TB-710HD|TB-434HD|TB-860HD|TB-840HD|TB-760HD|TB-750HD|TB-740HD|TB-730HD|TB-722HD|TB-720HD|TB-700HD|TB-500HD|TB-470HD|TB-431HD|TB-430HD|TB-506|TB-504|TB-446|TB-436|TB-416|TB-146SE|TB-126SE", PlaystationTablet: "Playstation.*(Portable|Vita)", TrekstorTablet: "ST10416-1|VT10416-1|ST70408-1|ST702xx-1|ST702xx-2|ST80208|ST97216|ST70104-2|VT10416-2|ST10216-2A|SurfTab", PyleAudioTablet: "\\b(PTBL10CEU|PTBL10C|PTBL72BC|PTBL72BCEU|PTBL7CEU|PTBL7C|PTBL92BC|PTBL92BCEU|PTBL9CEU|PTBL9CUK|PTBL9C)\\b", AdvanTablet: "Android.* \\b(E3A|T3X|T5C|T5B|T3E|T3C|T3B|T1J|T1F|T2A|T1H|T1i|E1C|T1-E|T5-A|T4|E1-B|T2Ci|T1-B|T1-D|O1-A|E1-A|T1-A|T3A|T4i)\\b ", DanyTechTablet: "Genius Tab G3|Genius Tab S2|Genius Tab Q3|Genius Tab G4|Genius Tab Q4|Genius Tab G-II|Genius TAB GII|Genius TAB GIII|Genius Tab S1", GalapadTablet: "Android.*\\bG1\\b", MicromaxTablet: "Funbook|Micromax.*\\b(P250|P560|P360|P362|P600|P300|P350|P500|P275)\\b", KarbonnTablet: "Android.*\\b(A39|A37|A34|ST8|ST10|ST7|Smart Tab3|Smart Tab2)\\b", AllFineTablet: "Fine7 Genius|Fine7 Shine|Fine7 Air|Fine8 Style|Fine9 More|Fine10 Joy|Fine11 Wide", PROSCANTablet: "\\b(PEM63|PLT1023G|PLT1041|PLT1044|PLT1044G|PLT1091|PLT4311|PLT4311PL|PLT4315|PLT7030|PLT7033|PLT7033D|PLT7035|PLT7035D|PLT7044K|PLT7045K|PLT7045KB|PLT7071KG|PLT7072|PLT7223G|PLT7225G|PLT7777G|PLT7810K|PLT7849G|PLT7851G|PLT7852G|PLT8015|PLT8031|PLT8034|PLT8036|PLT8080K|PLT8082|PLT8088|PLT8223G|PLT8234G|PLT8235G|PLT8816K|PLT9011|PLT9045K|PLT9233G|PLT9735|PLT9760G|PLT9770G)\\b", YONESTablet: "BQ1078|BC1003|BC1077|RK9702|BC9730|BC9001|IT9001|BC7008|BC7010|BC708|BC728|BC7012|BC7030|BC7027|BC7026", ChangJiaTablet: "TPC7102|TPC7103|TPC7105|TPC7106|TPC7107|TPC7201|TPC7203|TPC7205|TPC7210|TPC7708|TPC7709|TPC7712|TPC7110|TPC8101|TPC8103|TPC8105|TPC8106|TPC8203|TPC8205|TPC8503|TPC9106|TPC9701|TPC97101|TPC97103|TPC97105|TPC97106|TPC97111|TPC97113|TPC97203|TPC97603|TPC97809|TPC97205|TPC10101|TPC10103|TPC10106|TPC10111|TPC10203|TPC10205|TPC10503", GUTablet: "TX-A1301|TX-M9002|Q702|kf026", PointOfViewTablet: "TAB-P506|TAB-navi-7-3G-M|TAB-P517|TAB-P-527|TAB-P701|TAB-P703|TAB-P721|TAB-P731N|TAB-P741|TAB-P825|TAB-P905|TAB-P925|TAB-PR945|TAB-PL1015|TAB-P1025|TAB-PI1045|TAB-P1325|TAB-PROTAB[0-9]+|TAB-PROTAB25|TAB-PROTAB26|TAB-PROTAB27|TAB-PROTAB26XL|TAB-PROTAB2-IPS9|TAB-PROTAB30-IPS9|TAB-PROTAB25XXL|TAB-PROTAB26-IPS10|TAB-PROTAB30-IPS10", OvermaxTablet: "OV-(SteelCore|NewBase|Basecore|Baseone|Exellen|Quattor|EduTab|Solution|ACTION|BasicTab|TeddyTab|MagicTab|Stream|TB-08|TB-09)", HCLTablet: "HCL.*Tablet|Connect-3G-2.0|Connect-2G-2.0|ME Tablet U1|ME Tablet U2|ME Tablet G1|ME Tablet X1|ME Tablet Y2|ME Tablet Sync", DPSTablet: "DPS Dream 9|DPS Dual 7", VistureTablet: "V97 HD|i75 3G|Visture V4( HD)?|Visture V5( HD)?|Visture V10", CrestaTablet: "CTP(-)?810|CTP(-)?818|CTP(-)?828|CTP(-)?838|CTP(-)?888|CTP(-)?978|CTP(-)?980|CTP(-)?987|CTP(-)?988|CTP(-)?989", MediatekTablet: "\\bMT8125|MT8389|MT8135|MT8377\\b", ConcordeTablet: "Concorde([ ]+)?Tab|ConCorde ReadMan", GoCleverTablet: "GOCLEVER TAB|A7GOCLEVER|M1042|M7841|M742|R1042BK|R1041|TAB A975|TAB A7842|TAB A741|TAB A741L|TAB M723G|TAB M721|TAB A1021|TAB I921|TAB R721|TAB I720|TAB T76|TAB R70|TAB R76.2|TAB R106|TAB R83.2|TAB M813G|TAB I721|GCTA722|TAB I70|TAB I71|TAB S73|TAB R73|TAB R74|TAB R93|TAB R75|TAB R76.1|TAB A73|TAB A93|TAB A93.2|TAB T72|TAB R83|TAB R974|TAB R973|TAB A101|TAB A103|TAB A104|TAB A104.2|R105BK|M713G|A972BK|TAB A971|TAB R974.2|TAB R104|TAB R83.3|TAB A1042", ModecomTablet: "FreeTAB 9000|FreeTAB 7.4|FreeTAB 7004|FreeTAB 7800|FreeTAB 2096|FreeTAB 7.5|FreeTAB 1014|FreeTAB 1001 |FreeTAB 8001|FreeTAB 9706|FreeTAB 9702|FreeTAB 7003|FreeTAB 7002|FreeTAB 1002|FreeTAB 7801|FreeTAB 1331|FreeTAB 1004|FreeTAB 8002|FreeTAB 8014|FreeTAB 9704|FreeTAB 1003", VoninoTablet: "\\b(Argus[ _]?S|Diamond[ _]?79HD|Emerald[ _]?78E|Luna[ _]?70C|Onyx[ _]?S|Onyx[ _]?Z|Orin[ _]?HD|Orin[ _]?S|Otis[ _]?S|SpeedStar[ _]?S|Magnet[ _]?M9|Primus[ _]?94[ _]?3G|Primus[ _]?94HD|Primus[ _]?QS|Android.*\\bQ8\\b|Sirius[ _]?EVO[ _]?QS|Sirius[ _]?QS|Spirit[ _]?S)\\b", ECSTablet: "V07OT2|TM105A|S10OT1|TR10CS1", StorexTablet: "eZee[_']?(Tab|Go)[0-9]+|TabLC7|Looney Tunes Tab", VodafoneTablet: "SmartTab([ ]+)?[0-9]+|SmartTabII10|SmartTabII7|VF-1497", EssentielBTablet: "Smart[ ']?TAB[ ]+?[0-9]+|Family[ ']?TAB2", RossMoorTablet: "RM-790|RM-997|RMD-878G|RMD-974R|RMT-705A|RMT-701|RME-601|RMT-501|RMT-711", iMobileTablet: "i-mobile i-note", TolinoTablet: "tolino tab [0-9.]+|tolino shine", AudioSonicTablet: "\\bC-22Q|T7-QC|T-17B|T-17P\\b", AMPETablet: "Android.* A78 ", SkkTablet: "Android.* (SKYPAD|PHOENIX|CYCLOPS)", TecnoTablet: "TECNO P9", JXDTablet: "Android.* \\b(F3000|A3300|JXD5000|JXD3000|JXD2000|JXD300B|JXD300|S5800|S7800|S602b|S5110b|S7300|S5300|S602|S603|S5100|S5110|S601|S7100a|P3000F|P3000s|P101|P200s|P1000m|P200m|P9100|P1000s|S6600b|S908|P1000|P300|S18|S6600|S9100)\\b", iJoyTablet: "Tablet (Spirit 7|Essentia|Galatea|Fusion|Onix 7|Landa|Titan|Scooby|Deox|Stella|Themis|Argon|Unique 7|Sygnus|Hexen|Finity 7|Cream|Cream X2|Jade|Neon 7|Neron 7|Kandy|Scape|Saphyr 7|Rebel|Biox|Rebel|Rebel 8GB|Myst|Draco 7|Myst|Tab7-004|Myst|Tadeo Jones|Tablet Boing|Arrow|Draco Dual Cam|Aurix|Mint|Amity|Revolution|Finity 9|Neon 9|T9w|Amity 4GB Dual Cam|Stone 4GB|Stone 8GB|Andromeda|Silken|X2|Andromeda II|Halley|Flame|Saphyr 9,7|Touch 8|Planet|Triton|Unique 10|Hexen 10|Memphis 4GB|Memphis 8GB|Onix 10)", FX2Tablet: "FX2 PAD7|FX2 PAD10", XoroTablet: "KidsPAD 701|PAD[ ]?712|PAD[ ]?714|PAD[ ]?716|PAD[ ]?717|PAD[ ]?718|PAD[ ]?720|PAD[ ]?721|PAD[ ]?722|PAD[ ]?790|PAD[ ]?792|PAD[ ]?900|PAD[ ]?9715D|PAD[ ]?9716DR|PAD[ ]?9718DR|PAD[ ]?9719QR|PAD[ ]?9720QR|TelePAD1030|Telepad1032|TelePAD730|TelePAD731|TelePAD732|TelePAD735Q|TelePAD830|TelePAD9730|TelePAD795|MegaPAD 1331|MegaPAD 1851|MegaPAD 2151", ViewsonicTablet: "ViewPad 10pi|ViewPad 10e|ViewPad 10s|ViewPad E72|ViewPad7|ViewPad E100|ViewPad 7e|ViewSonic VB733|VB100a", OdysTablet: "LOOX|XENO10|ODYS[ -](Space|EVO|Xpress|NOON)|\\bXELIO\\b|Xelio10Pro|XELIO7PHONETAB|XELIO10EXTREME|XELIOPT2|NEO_QUAD10", CaptivaTablet: "CAPTIVA PAD", IconbitTablet: "NetTAB|NT-3702|NT-3702S|NT-3702S|NT-3603P|NT-3603P|NT-0704S|NT-0704S|NT-3805C|NT-3805C|NT-0806C|NT-0806C|NT-0909T|NT-0909T|NT-0907S|NT-0907S|NT-0902S|NT-0902S", TeclastTablet: "T98 4G|\\bP80\\b|\\bX90HD\\b|X98 Air|X98 Air 3G|\\bX89\\b|P80 3G|\\bX80h\\b|P98 Air|\\bX89HD\\b|P98 3G|\\bP90HD\\b|P89 3G|X98 3G|\\bP70h\\b|P79HD 3G|G18d 3G|\\bP79HD\\b|\\bP89s\\b|\\bA88\\b|\\bP10HD\\b|\\bP19HD\\b|G18 3G|\\bP78HD\\b|\\bA78\\b|\\bP75\\b|G17s 3G|G17h 3G|\\bP85t\\b|\\bP90\\b|\\bP11\\b|\\bP98t\\b|\\bP98HD\\b|\\bG18d\\b|\\bP85s\\b|\\bP11HD\\b|\\bP88s\\b|\\bA80HD\\b|\\bA80se\\b|\\bA10h\\b|\\bP89\\b|\\bP78s\\b|\\bG18\\b|\\bP85\\b|\\bA70h\\b|\\bA70\\b|\\bG17\\b|\\bP18\\b|\\bA80s\\b|\\bA11s\\b|\\bP88HD\\b|\\bA80h\\b|\\bP76s\\b|\\bP76h\\b|\\bP98\\b|\\bA10HD\\b|\\bP78\\b|\\bP88\\b|\\bA11\\b|\\bA10t\\b|\\bP76a\\b|\\bP76t\\b|\\bP76e\\b|\\bP85HD\\b|\\bP85a\\b|\\bP86\\b|\\bP75HD\\b|\\bP76v\\b|\\bA12\\b|\\bP75a\\b|\\bA15\\b|\\bP76Ti\\b|\\bP81HD\\b|\\bA10\\b|\\bT760VE\\b|\\bT720HD\\b|\\bP76\\b|\\bP73\\b|\\bP71\\b|\\bP72\\b|\\bT720SE\\b|\\bC520Ti\\b|\\bT760\\b|\\bT720VE\\b|T720-3GE|T720-WiFi", OndaTablet: "\\b(V975i|Vi30|VX530|V701|Vi60|V701s|Vi50|V801s|V719|Vx610w|VX610W|V819i|Vi10|VX580W|Vi10|V711s|V813|V811|V820w|V820|Vi20|V711|VI30W|V712|V891w|V972|V819w|V820w|Vi60|V820w|V711|V813s|V801|V819|V975s|V801|V819|V819|V818|V811|V712|V975m|V101w|V961w|V812|V818|V971|V971s|V919|V989|V116w|V102w|V973|Vi40)\\b[\\s]+", JaytechTablet: "TPC-PA762", BlaupunktTablet: "Endeavour 800NG|Endeavour 1010", DigmaTablet: "\\b(iDx10|iDx9|iDx8|iDx7|iDxD7|iDxD8|iDsQ8|iDsQ7|iDsQ8|iDsD10|iDnD7|3TS804H|iDsQ11|iDj7|iDs10)\\b", EvolioTablet: "ARIA_Mini_wifi|Aria[ _]Mini|Evolio X10|Evolio X7|Evolio X8|\\bEvotab\\b|\\bNeura\\b", LavaTablet: "QPAD E704|\\bIvoryS\\b|E-TAB IVORY|\\bE-TAB\\b", AocTablet: "MW0811|MW0812|MW0922|MTK8382|MW1031|MW0831|MW0821|MW0931|MW0712", MpmanTablet: "MP11 OCTA|MP10 OCTA|MPQC1114|MPQC1004|MPQC994|MPQC974|MPQC973|MPQC804|MPQC784|MPQC780|\\bMPG7\\b|MPDCG75|MPDCG71|MPDC1006|MP101DC|MPDC9000|MPDC905|MPDC706HD|MPDC706|MPDC705|MPDC110|MPDC100|MPDC99|MPDC97|MPDC88|MPDC8|MPDC77|MP709|MID701|MID711|MID170|MPDC703|MPQC1010", CelkonTablet: "CT695|CT888|CT[\\s]?910|CT7 Tab|CT9 Tab|CT3 Tab|CT2 Tab|CT1 Tab|C820|C720|\\bCT-1\\b", WolderTablet: "miTab \\b(DIAMOND|SPACE|BROOKLYN|NEO|FLY|MANHATTAN|FUNK|EVOLUTION|SKY|GOCAR|IRON|GENIUS|POP|MINT|EPSILON|BROADWAY|JUMP|HOP|LEGEND|NEW AGE|LINE|ADVANCE|FEEL|FOLLOW|LIKE|LINK|LIVE|THINK|FREEDOM|CHICAGO|CLEVELAND|BALTIMORE-GH|IOWA|BOSTON|SEATTLE|PHOENIX|DALLAS|IN 101|MasterChef)\\b", MiTablet: "\\bMI PAD\\b|\\bHM NOTE 1W\\b", NibiruTablet: "Nibiru M1|Nibiru Jupiter One", NexoTablet: "NEXO NOVA|NEXO 10|NEXO AVIO|NEXO FREE|NEXO GO|NEXO EVO|NEXO 3G|NEXO SMART|NEXO KIDDO|NEXO MOBI", LeaderTablet: "TBLT10Q|TBLT10I|TBL-10WDKB|TBL-10WDKBO2013|TBL-W230V2|TBL-W450|TBL-W500|SV572|TBLT7I|TBA-AC7-8G|TBLT79|TBL-8W16|TBL-10W32|TBL-10WKB|TBL-W100", UbislateTablet: "UbiSlate[\\s]?7C", PocketBookTablet: "Pocketbook", KocasoTablet: "\\b(TB-1207)\\b", HisenseTablet: "\\b(F5281|E2371)\\b", Hudl: "Hudl HT7S3|Hudl 2", TelstraTablet: "T-Hub2", GenericTablet: "Android.*\\b97D\\b|Tablet(?!.*PC)|BNTV250A|MID-WCDMA|LogicPD Zoom2|\\bA7EB\\b|CatNova8|A1_07|CT704|CT1002|\\bM721\\b|rk30sdk|\\bEVOTAB\\b|M758A|ET904|ALUMIUM10|Smartfren Tab|Endeavour 1010|Tablet-PC-4|Tagi Tab|\\bM6pro\\b|CT1020W|arc 10HD|\\bTP750\\b" }, oss: { AndroidOS: "Android", BlackBerryOS: "blackberry|\\bBB10\\b|rim tablet os", PalmOS: "PalmOS|avantgo|blazer|elaine|hiptop|palm|plucker|xiino", SymbianOS: "Symbian|SymbOS|Series60|Series40|SYB-[0-9]+|\\bS60\\b", WindowsMobileOS: "Windows CE.*(PPC|Smartphone|Mobile|[0-9]{3}x[0-9]{3})|Window Mobile|Windows Phone [0-9.]+|WCE;", WindowsPhoneOS: "Windows Phone 10.0|Windows Phone 8.1|Windows Phone 8.0|Windows Phone OS|XBLWP7|ZuneWP7|Windows NT 6.[23]; ARM;", iOS: "\\biPhone.*Mobile|\\biPod|\\biPad", MeeGoOS: "MeeGo", MaemoOS: "Maemo", JavaOS: "J2ME/|\\bMIDP\\b|\\bCLDC\\b", webOS: "webOS|hpwOS", badaOS: "\\bBada\\b", BREWOS: "BREW" }, uas: { Chrome: "\\bCrMo\\b|CriOS|Android.*Chrome/[.0-9]* (Mobile)?", Dolfin: "\\bDolfin\\b", Opera: "Opera.*Mini|Opera.*Mobi|Android.*Opera|Mobile.*OPR/[0-9.]+|Coast/[0-9.]+", Skyfire: "Skyfire", Edge: "Mobile Safari/[.0-9]* Edge", IE: "IEMobile|MSIEMobile", Firefox: "fennec|firefox.*maemo|(Mobile|Tablet).*Firefox|Firefox.*Mobile|FxiOS", Bolt: "bolt", TeaShark: "teashark", Blazer: "Blazer", Safari: "Version.*Mobile.*Safari|Safari.*Mobile|MobileSafari", UCBrowser: "UC.*Browser|UCWEB", baiduboxapp: "baiduboxapp", baidubrowser: "baidubrowser", DiigoBrowser: "DiigoBrowser", Puffin: "Puffin", Mercury: "\\bMercury\\b", ObigoBrowser: "Obigo", NetFront: "NF-Browser", GenericBrowser: "NokiaBrowser|OviBrowser|OneBrowser|TwonkyBeamBrowser|SEMC.*Browser|FlyFlow|Minimo|NetFront|Novarra-Vision|MQQBrowser|MicroMessenger", PaleMoon: "Android.*PaleMoon|Mobile.*PaleMoon" }, props: { Mobile: "Mobile/[VER]", Build: "Build/[VER]", Version: "Version/[VER]", VendorID: "VendorID/[VER]", iPad: "iPad.*CPU[a-z ]+[VER]", iPhone: "iPhone.*CPU[a-z ]+[VER]", iPod: "iPod.*CPU[a-z ]+[VER]", Kindle: "Kindle/[VER]", Chrome: ["Chrome/[VER]", "CriOS/[VER]", "CrMo/[VER]"], Coast: ["Coast/[VER]"], Dolfin: "Dolfin/[VER]", Firefox: ["Firefox/[VER]", "FxiOS/[VER]"], Fennec: "Fennec/[VER]", Edge: "Edge/[VER]", IE: ["IEMobile/[VER];", "IEMobile [VER]", "MSIE [VER];", "Trident/[0-9.]+;.*rv:[VER]"], NetFront: "NetFront/[VER]", NokiaBrowser: "NokiaBrowser/[VER]", Opera: [" OPR/[VER]", "Opera Mini/[VER]", "Version/[VER]"], "Opera Mini": "Opera Mini/[VER]", "Opera Mobi": "Version/[VER]", "UC Browser": "UC Browser[VER]", MQQBrowser: "MQQBrowser/[VER]", MicroMessenger: "MicroMessenger/[VER]", baiduboxapp: "baiduboxapp/[VER]", baidubrowser: "baidubrowser/[VER]", SamsungBrowser: "SamsungBrowser/[VER]", Iron: "Iron/[VER]", Safari: ["Version/[VER]", "Safari/[VER]"], Skyfire: "Skyfire/[VER]", Tizen: "Tizen/[VER]", Webkit: "webkit[ /][VER]", PaleMoon: "PaleMoon/[VER]", Gecko: "Gecko/[VER]", Trident: "Trident/[VER]", Presto: "Presto/[VER]", Goanna: "Goanna/[VER]", iOS: " \\bi?OS\\b [VER][ ;]{1}", Android: "Android [VER]", BlackBerry: ["BlackBerry[\\w]+/[VER]", "BlackBerry.*Version/[VER]", "Version/[VER]"], BREW: "BREW [VER]", Java: "Java/[VER]", "Windows Phone OS": ["Windows Phone OS [VER]", "Windows Phone [VER]"], "Windows Phone": "Windows Phone [VER]", "Windows CE": "Windows CE/[VER]", "Windows NT": "Windows NT [VER]", Symbian: ["SymbianOS/[VER]", "Symbian/[VER]"], webOS: ["webOS/[VER]", "hpwOS/[VER];"] }, utils: { Bot: "Googlebot|facebookexternalhit|AdsBot-Google|Google Keyword Suggestion|Facebot|YandexBot|YandexMobileBot|bingbot|ia_archiver|AhrefsBot|Ezooms|GSLFbot|WBSearchBot|Twitterbot|TweetmemeBot|Twikle|PaperLiBot|Wotbox|UnwindFetchor|Exabot|MJ12bot|YandexImages|TurnitinBot|Pingdom", MobileBot: "Googlebot-Mobile|AdsBot-Google-Mobile|YahooSeeker/M1A1-R2D2", DesktopMode: "WPDesktop", TV: "SonyDTV|HbbTV", WebKit: "(webkit)[ /]([\\w.]+)", Console: "\\b(Nintendo|Nintendo WiiU|Nintendo 3DS|PLAYSTATION|Xbox)\\b", Watch: "SM-V700" } }, f.detectMobileBrowsers = { fullPattern: /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i, shortPattern: /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i, tabletPattern: /android|ipad|playbook|silk/i
    };var g,
        h = Object.prototype.hasOwnProperty;return f.FALLBACK_PHONE = "UnknownPhone", f.FALLBACK_TABLET = "UnknownTablet", f.FALLBACK_MOBILE = "UnknownMobile", g = "isArray" in Array ? Array.isArray : function (a) {
      return "[object Array]" === Object.prototype.toString.call(a);
    }, function () {
      var a,
          b,
          c,
          e,
          i,
          j,
          k = f.mobileDetectRules;for (a in k.props) {
        if (h.call(k.props, a)) {
          for (b = k.props[a], g(b) || (b = [b]), i = b.length, e = 0; e < i; ++e) {
            c = b[e], j = c.indexOf("[VER]"), j >= 0 && (c = c.substring(0, j) + "([\\w._\\+]+)" + c.substring(j + 5)), b[e] = new RegExp(c, "i");
          }k.props[a] = b;
        }
      }d(k.oss), d(k.phones), d(k.tablets), d(k.uas), d(k.utils), k.oss0 = { WindowsPhoneOS: k.oss.WindowsPhoneOS, WindowsMobileOS: k.oss.WindowsMobileOS };
    }(), f.findMatch = function (a, b) {
      for (var c in a) {
        if (h.call(a, c) && a[c].test(b)) return c;
      }return null;
    }, f.findMatches = function (a, b) {
      var c = [];for (var d in a) {
        h.call(a, d) && a[d].test(b) && c.push(d);
      }return c;
    }, f.getVersionStr = function (a, b) {
      var c,
          d,
          e,
          g,
          i = f.mobileDetectRules.props;if (h.call(i, a)) for (c = i[a], e = c.length, d = 0; d < e; ++d) {
        if (g = c[d].exec(b), null !== g) return g[1];
      }return null;
    }, f.getVersion = function (a, b) {
      var c = f.getVersionStr(a, b);return c ? f.prepareVersionNo(c) : NaN;
    }, f.prepareVersionNo = function (a) {
      var b;return b = a.split(/[a-z._ \/\-]/i), 1 === b.length && (a = b[0]), b.length > 1 && (a = b[0] + ".", b.shift(), a += b.join("")), Number(a);
    }, f.isMobileFallback = function (a) {
      return f.detectMobileBrowsers.fullPattern.test(a) || f.detectMobileBrowsers.shortPattern.test(a.substr(0, 4));
    }, f.isTabletFallback = function (a) {
      return f.detectMobileBrowsers.tabletPattern.test(a);
    }, f.prepareDetectionCache = function (a, c, d) {
      if (a.mobile === b) {
        var g, h, i;return (h = f.findMatch(f.mobileDetectRules.tablets, c)) ? (a.mobile = a.tablet = h, void (a.phone = null)) : (g = f.findMatch(f.mobileDetectRules.phones, c)) ? (a.mobile = a.phone = g, void (a.tablet = null)) : void (f.isMobileFallback(c) ? (i = e.isPhoneSized(d), i === b ? (a.mobile = f.FALLBACK_MOBILE, a.tablet = a.phone = null) : i ? (a.mobile = a.phone = f.FALLBACK_PHONE, a.tablet = null) : (a.mobile = a.tablet = f.FALLBACK_TABLET, a.phone = null)) : f.isTabletFallback(c) ? (a.mobile = a.tablet = f.FALLBACK_TABLET, a.phone = null) : a.mobile = a.tablet = a.phone = null);
      }
    }, f.mobileGrade = function (a) {
      var b = null !== a.mobile();return a.os("iOS") && a.version("iPad") >= 4.3 || a.os("iOS") && a.version("iPhone") >= 3.1 || a.os("iOS") && a.version("iPod") >= 3.1 || a.version("Android") > 2.1 && a.is("Webkit") || a.version("Windows Phone OS") >= 7 || a.is("BlackBerry") && a.version("BlackBerry") >= 6 || a.match("Playbook.*Tablet") || a.version("webOS") >= 1.4 && a.match("Palm|Pre|Pixi") || a.match("hp.*TouchPad") || a.is("Firefox") && a.version("Firefox") >= 12 || a.is("Chrome") && a.is("AndroidOS") && a.version("Android") >= 4 || a.is("Skyfire") && a.version("Skyfire") >= 4.1 && a.is("AndroidOS") && a.version("Android") >= 2.3 || a.is("Opera") && a.version("Opera Mobi") > 11 && a.is("AndroidOS") || a.is("MeeGoOS") || a.is("Tizen") || a.is("Dolfin") && a.version("Bada") >= 2 || (a.is("UC Browser") || a.is("Dolfin")) && a.version("Android") >= 2.3 || a.match("Kindle Fire") || a.is("Kindle") && a.version("Kindle") >= 3 || a.is("AndroidOS") && a.is("NookTablet") || a.version("Chrome") >= 11 && !b || a.version("Safari") >= 5 && !b || a.version("Firefox") >= 4 && !b || a.version("MSIE") >= 7 && !b || a.version("Opera") >= 10 && !b ? "A" : a.os("iOS") && a.version("iPad") < 4.3 || a.os("iOS") && a.version("iPhone") < 3.1 || a.os("iOS") && a.version("iPod") < 3.1 || a.is("Blackberry") && a.version("BlackBerry") >= 5 && a.version("BlackBerry") < 6 || a.version("Opera Mini") >= 5 && a.version("Opera Mini") <= 6.5 && (a.version("Android") >= 2.3 || a.is("iOS")) || a.match("NokiaN8|NokiaC7|N97.*Series60|Symbian/3") || a.version("Opera Mobi") >= 11 && a.is("SymbianOS") ? "B" : (a.version("BlackBerry") < 5 || a.match("MSIEMobile|Windows CE.*Mobile") || a.version("Windows Mobile") <= 5.2, "C");
    }, f.detectOS = function (a) {
      return f.findMatch(f.mobileDetectRules.oss0, a) || f.findMatch(f.mobileDetectRules.oss, a);
    }, f.getDeviceSmallerSide = function () {
      return window.screen.width < window.screen.height ? window.screen.width : window.screen.height;
    }, e.prototype = { constructor: e, mobile: function mobile() {
        return f.prepareDetectionCache(this._cache, this.ua, this.maxPhoneWidth), this._cache.mobile;
      }, phone: function phone() {
        return f.prepareDetectionCache(this._cache, this.ua, this.maxPhoneWidth), this._cache.phone;
      }, tablet: function tablet() {
        return f.prepareDetectionCache(this._cache, this.ua, this.maxPhoneWidth), this._cache.tablet;
      }, userAgent: function userAgent() {
        return this._cache.userAgent === b && (this._cache.userAgent = f.findMatch(f.mobileDetectRules.uas, this.ua)), this._cache.userAgent;
      }, userAgents: function userAgents() {
        return this._cache.userAgents === b && (this._cache.userAgents = f.findMatches(f.mobileDetectRules.uas, this.ua)), this._cache.userAgents;
      }, os: function os() {
        return this._cache.os === b && (this._cache.os = f.detectOS(this.ua)), this._cache.os;
      }, version: function version(a) {
        return f.getVersion(a, this.ua);
      }, versionStr: function versionStr(a) {
        return f.getVersionStr(a, this.ua);
      }, is: function is(b) {
        return c(this.userAgents(), b) || a(b, this.os()) || a(b, this.phone()) || a(b, this.tablet()) || c(f.findMatches(f.mobileDetectRules.utils, this.ua), b);
      }, match: function match(a) {
        return a instanceof RegExp || (a = new RegExp(a, "i")), a.test(this.ua);
      }, isPhoneSized: function isPhoneSized(a) {
        return e.isPhoneSized(a || this.maxPhoneWidth);
      }, mobileGrade: function mobileGrade() {
        return this._cache.grade === b && (this._cache.grade = f.mobileGrade(this)), this._cache.grade;
      } }, "undefined" != typeof window && window.screen ? e.isPhoneSized = function (a) {
      return a < 0 ? b : f.getDeviceSmallerSide() <= a;
    } : e.isPhoneSized = function () {}, e._impl = f, e.version = "1.3.6 2017-04-05", e;
  });
}(function (a) {
  if ("undefined" != typeof module && module.exports) return function (a) {
    module.exports = a();
  };if ("function" == typeof define && define.amd) return define;if ("undefined" != typeof window) return function (a) {
    window.MobileDetect = a();
  };throw new Error("unknown environment");
}());
(function (self) {
  'use strict';

  if (self.fetch) {
    return;
  }

  var support = {
    searchParams: 'URLSearchParams' in self,
    iterable: 'Symbol' in self && 'iterator' in Symbol,
    blob: 'FileReader' in self && 'Blob' in self && function () {
      try {
        new Blob();
        return true;
      } catch (e) {
        return false;
      }
    }(),
    formData: 'FormData' in self,
    arrayBuffer: 'ArrayBuffer' in self
  };

  if (support.arrayBuffer) {
    var viewClasses = ['[object Int8Array]', '[object Uint8Array]', '[object Uint8ClampedArray]', '[object Int16Array]', '[object Uint16Array]', '[object Int32Array]', '[object Uint32Array]', '[object Float32Array]', '[object Float64Array]'];

    var isDataView = function isDataView(obj) {
      return obj && DataView.prototype.isPrototypeOf(obj);
    };

    var isArrayBufferView = ArrayBuffer.isView || function (obj) {
      return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1;
    };
  }

  function normalizeName(name) {
    if (typeof name !== 'string') {
      name = String(name);
    }
    if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
      throw new TypeError('Invalid character in header field name');
    }
    return name.toLowerCase();
  }

  function normalizeValue(value) {
    if (typeof value !== 'string') {
      value = String(value);
    }
    return value;
  }

  // Build a destructive iterator for the value list
  function iteratorFor(items) {
    var iterator = {
      next: function next() {
        var value = items.shift();
        return { done: value === undefined, value: value };
      }
    };

    if (support.iterable) {
      iterator[Symbol.iterator] = function () {
        return iterator;
      };
    }

    return iterator;
  }

  function Headers(headers) {
    this.map = {};

    if (headers instanceof Headers) {
      headers.forEach(function (value, name) {
        this.append(name, value);
      }, this);
    } else if (Array.isArray(headers)) {
      headers.forEach(function (header) {
        this.append(header[0], header[1]);
      }, this);
    } else if (headers) {
      Object.getOwnPropertyNames(headers).forEach(function (name) {
        this.append(name, headers[name]);
      }, this);
    }
  }

  Headers.prototype.append = function (name, value) {
    name = normalizeName(name);
    value = normalizeValue(value);
    var oldValue = this.map[name];
    this.map[name] = oldValue ? oldValue + ',' + value : value;
  };

  Headers.prototype['delete'] = function (name) {
    delete this.map[normalizeName(name)];
  };

  Headers.prototype.get = function (name) {
    name = normalizeName(name);
    return this.has(name) ? this.map[name] : null;
  };

  Headers.prototype.has = function (name) {
    return this.map.hasOwnProperty(normalizeName(name));
  };

  Headers.prototype.set = function (name, value) {
    this.map[normalizeName(name)] = normalizeValue(value);
  };

  Headers.prototype.forEach = function (callback, thisArg) {
    for (var name in this.map) {
      if (this.map.hasOwnProperty(name)) {
        callback.call(thisArg, this.map[name], name, this);
      }
    }
  };

  Headers.prototype.keys = function () {
    var items = [];
    this.forEach(function (value, name) {
      items.push(name);
    });
    return iteratorFor(items);
  };

  Headers.prototype.values = function () {
    var items = [];
    this.forEach(function (value) {
      items.push(value);
    });
    return iteratorFor(items);
  };

  Headers.prototype.entries = function () {
    var items = [];
    this.forEach(function (value, name) {
      items.push([name, value]);
    });
    return iteratorFor(items);
  };

  if (support.iterable) {
    Headers.prototype[Symbol.iterator] = Headers.prototype.entries;
  }

  function consumed(body) {
    if (body.bodyUsed) {
      return Promise.reject(new TypeError('Already read'));
    }
    body.bodyUsed = true;
  }

  function fileReaderReady(reader) {
    return new Promise(function (resolve, reject) {
      reader.onload = function () {
        resolve(reader.result);
      };
      reader.onerror = function () {
        reject(reader.error);
      };
    });
  }

  function readBlobAsArrayBuffer(blob) {
    var reader = new FileReader();
    var promise = fileReaderReady(reader);
    reader.readAsArrayBuffer(blob);
    return promise;
  }

  function readBlobAsText(blob) {
    var reader = new FileReader();
    var promise = fileReaderReady(reader);
    reader.readAsText(blob);
    return promise;
  }

  function readArrayBufferAsText(buf) {
    var view = new Uint8Array(buf);
    var chars = new Array(view.length);

    for (var i = 0; i < view.length; i++) {
      chars[i] = String.fromCharCode(view[i]);
    }
    return chars.join('');
  }

  function bufferClone(buf) {
    if (buf.slice) {
      return buf.slice(0);
    } else {
      var view = new Uint8Array(buf.byteLength);
      view.set(new Uint8Array(buf));
      return view.buffer;
    }
  }

  function Body() {
    this.bodyUsed = false;

    this._initBody = function (body) {
      this._bodyInit = body;
      if (!body) {
        this._bodyText = '';
      } else if (typeof body === 'string') {
        this._bodyText = body;
      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
        this._bodyBlob = body;
      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
        this._bodyFormData = body;
      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
        this._bodyText = body.toString();
      } else if (support.arrayBuffer && support.blob && isDataView(body)) {
        this._bodyArrayBuffer = bufferClone(body.buffer);
        // IE 10-11 can't handle a DataView body.
        this._bodyInit = new Blob([this._bodyArrayBuffer]);
      } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
        this._bodyArrayBuffer = bufferClone(body);
      } else {
        throw new Error('unsupported BodyInit type');
      }

      if (!this.headers.get('content-type')) {
        if (typeof body === 'string') {
          this.headers.set('content-type', 'text/plain;charset=UTF-8');
        } else if (this._bodyBlob && this._bodyBlob.type) {
          this.headers.set('content-type', this._bodyBlob.type);
        } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
          this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
        }
      }
    };

    if (support.blob) {
      this.blob = function () {
        var rejected = consumed(this);
        if (rejected) {
          return rejected;
        }

        if (this._bodyBlob) {
          return Promise.resolve(this._bodyBlob);
        } else if (this._bodyArrayBuffer) {
          return Promise.resolve(new Blob([this._bodyArrayBuffer]));
        } else if (this._bodyFormData) {
          throw new Error('could not read FormData body as blob');
        } else {
          return Promise.resolve(new Blob([this._bodyText]));
        }
      };

      this.arrayBuffer = function () {
        if (this._bodyArrayBuffer) {
          return consumed(this) || Promise.resolve(this._bodyArrayBuffer);
        } else {
          return this.blob().then(readBlobAsArrayBuffer);
        }
      };
    }

    this.text = function () {
      var rejected = consumed(this);
      if (rejected) {
        return rejected;
      }

      if (this._bodyBlob) {
        return readBlobAsText(this._bodyBlob);
      } else if (this._bodyArrayBuffer) {
        return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer));
      } else if (this._bodyFormData) {
        throw new Error('could not read FormData body as text');
      } else {
        return Promise.resolve(this._bodyText);
      }
    };

    if (support.formData) {
      this.formData = function () {
        return this.text().then(decode);
      };
    }

    this.json = function () {
      return this.text().then(JSON.parse);
    };

    return this;
  }

  // HTTP methods whose capitalization should be normalized
  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT'];

  function normalizeMethod(method) {
    var upcased = method.toUpperCase();
    return methods.indexOf(upcased) > -1 ? upcased : method;
  }

  function Request(input, options) {
    options = options || {};
    var body = options.body;

    if (input instanceof Request) {
      if (input.bodyUsed) {
        throw new TypeError('Already read');
      }
      this.url = input.url;
      this.credentials = input.credentials;
      if (!options.headers) {
        this.headers = new Headers(input.headers);
      }
      this.method = input.method;
      this.mode = input.mode;
      if (!body && input._bodyInit != null) {
        body = input._bodyInit;
        input.bodyUsed = true;
      }
    } else {
      this.url = String(input);
    }

    this.credentials = options.credentials || this.credentials || 'omit';
    if (options.headers || !this.headers) {
      this.headers = new Headers(options.headers);
    }
    this.method = normalizeMethod(options.method || this.method || 'GET');
    this.mode = options.mode || this.mode || null;
    this.referrer = null;

    if ((this.method === 'GET' || this.method === 'HEAD') && body) {
      throw new TypeError('Body not allowed for GET or HEAD requests');
    }
    this._initBody(body);
  }

  Request.prototype.clone = function () {
    return new Request(this, { body: this._bodyInit });
  };

  function decode(body) {
    var form = new FormData();
    body.trim().split('&').forEach(function (bytes) {
      if (bytes) {
        var split = bytes.split('=');
        var name = split.shift().replace(/\+/g, ' ');
        var value = split.join('=').replace(/\+/g, ' ');
        form.append(decodeURIComponent(name), decodeURIComponent(value));
      }
    });
    return form;
  }

  function parseHeaders(rawHeaders) {
    var headers = new Headers();
    rawHeaders.split(/\r?\n/).forEach(function (line) {
      var parts = line.split(':');
      var key = parts.shift().trim();
      if (key) {
        var value = parts.join(':').trim();
        headers.append(key, value);
      }
    });
    return headers;
  }

  Body.call(Request.prototype);

  function Response(bodyInit, options) {
    if (!options) {
      options = {};
    }

    this.type = 'default';
    this.status = 'status' in options ? options.status : 200;
    this.ok = this.status >= 200 && this.status < 300;
    this.statusText = 'statusText' in options ? options.statusText : 'OK';
    this.headers = new Headers(options.headers);
    this.url = options.url || '';
    this._initBody(bodyInit);
  }

  Body.call(Response.prototype);

  Response.prototype.clone = function () {
    return new Response(this._bodyInit, {
      status: this.status,
      statusText: this.statusText,
      headers: new Headers(this.headers),
      url: this.url
    });
  };

  Response.error = function () {
    var response = new Response(null, { status: 0, statusText: '' });
    response.type = 'error';
    return response;
  };

  var redirectStatuses = [301, 302, 303, 307, 308];

  Response.redirect = function (url, status) {
    if (redirectStatuses.indexOf(status) === -1) {
      throw new RangeError('Invalid status code');
    }

    return new Response(null, { status: status, headers: { location: url } });
  };

  self.Headers = Headers;
  self.Request = Request;
  self.Response = Response;

  self.fetch = function (input, init) {
    return new Promise(function (resolve, reject) {
      var request = new Request(input, init);
      var xhr = new XMLHttpRequest();

      xhr.onload = function () {
        var options = {
          status: xhr.status,
          statusText: xhr.statusText,
          headers: parseHeaders(xhr.getAllResponseHeaders() || '')
        };
        options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL');
        var body = 'response' in xhr ? xhr.response : xhr.responseText;
        resolve(new Response(body, options));
      };

      xhr.onerror = function () {
        reject(new TypeError('Network request failed'));
      };

      xhr.ontimeout = function () {
        reject(new TypeError('Network request failed'));
      };

      xhr.open(request.method, request.url, true);

      if (request.credentials === 'include') {
        xhr.withCredentials = true;
      }

      if ('responseType' in xhr && support.blob) {
        xhr.responseType = 'blob';
      }

      request.headers.forEach(function (value, name) {
        xhr.setRequestHeader(name, value);
      });

      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit);
    });
  };
  self.fetch.polyfill = true;
})(typeof self !== 'undefined' ? self : undefined);

;var svgLibrary = {
  ai: '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="34" height="32" viewBox="0 0 34 32"><path fill="#444444" d="M21.66 10.97c0.695 0 1.264-0.563 1.264-1.253s-0.569-1.253-1.264-1.253c-0.695 0-1.264 0.563-1.264 1.253 0 0.695 0.563 1.253 1.264 1.253z"></path><path fill="#444444" d="M20.425 12.067h2.442v9.183h-2.442v-9.183z"></path><path fill="#444444" d="M12.655 18.171h3.304l0.893 3.076h2.501l-3.632-12.066h-3.036v1.191l-3.185 10.875h2.262l0.893-3.076zM14.292 11.328l1.221 4.733h-2.441l1.22-4.733z"></path><path fill="#444444" d="M3.002 2.316v27.007h27.582v-27.007h-27.582zM28.516 27.197h-23.406v-22.755h23.406l-0 22.755z"></path></svg>',
  bootstrap: '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="32" height="32" viewBox="0 0 32 32"><path fill="#444444" d="M8.171 4.999c-0.562 0.083-1.237 0.347-1.716 0.675-0.313 0.207-0.717 0.596-0.95 0.901-0.26 0.343-0.577 1.003-0.702 1.456l-0.106 0.377v15.727l0.106 0.377c0.124 0.453 0.441 1.113 0.702 1.456 0.49 0.641 1.245 1.181 2.003 1.426 0.626 0.2 0.313 0.192 8.486 0.192 8.177 0 7.864 0.008 8.486-0.196 0.762-0.245 1.516-0.781 2.003-1.422 0.26-0.347 0.581-1.007 0.705-1.456l0.102-0.377v-15.727l-0.106-0.377c-0.124-0.452-0.441-1.113-0.701-1.456-0.234-0.306-0.637-0.694-0.95-0.901-0.336-0.23-0.883-0.479-1.305-0.596l-0.37-0.102-7.732-0.004c-4.251-0.004-7.834 0.008-7.954 0.026zM18.709 9.159c1.192 0.196 2.006 0.588 2.538 1.222 0.226 0.268 0.49 0.8 0.6 1.196 0.068 0.26 0.079 0.407 0.083 1.056 0.004 0.683-0.004 0.784-0.083 1.052-0.23 0.8-0.732 1.414-1.543 1.89l-0.279 0.162 0.2 0.064c0.305 0.102 0.815 0.366 1.075 0.562 0.649 0.49 1.101 1.252 1.282 2.161 0.087 0.453 0.087 1.422-0.004 1.837-0.358 1.633-1.622 2.768-3.523 3.149-0.728 0.147-0.916 0.155-4.824 0.155h-3.82v-14.6l3.953 0.015c3.538 0.011 3.99 0.019 4.345 0.079zM13.655 13.277v1.72l1.822-0.015c1.709-0.019 1.837-0.023 2.112-0.098 0.86-0.234 1.233-0.728 1.233-1.633 0-0.694-0.245-1.143-0.777-1.407-0.471-0.234-0.981-0.283-2.983-0.287h-1.407v1.72zM13.655 19.176v2.003l1.991-0.015c2.237-0.015 2.312-0.023 2.863-0.29 0.634-0.309 0.916-0.815 0.916-1.641 0-1.063-0.422-1.652-1.395-1.946-0.275-0.087-0.328-0.087-2.327-0.102l-2.048-0.011v2.003z"></path></svg>',
  jQuery: '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="32" height="32" viewBox="0 0 32 32"><path fill="#444444" d="M16.232 24.047c-0.15-0.034-0.295-0.081-0.441-0.124-0.037-0.011-0.074-0.022-0.11-0.033-0.143-0.044-0.284-0.090-0.425-0.139-0.019-0.007-0.039-0.014-0.058-0.021-0.126-0.045-0.251-0.091-0.375-0.139-0.035-0.014-0.070-0.027-0.105-0.041-0.136-0.054-0.271-0.11-0.405-0.168-0.027-0.012-0.054-0.024-0.081-0.036-0.115-0.052-0.228-0.105-0.341-0.159-0.033-0.016-0.065-0.031-0.099-0.047-0.089-0.043-0.177-0.090-0.264-0.134-0.059-0.031-0.118-0.060-0.176-0.092-0.107-0.058-0.212-0.117-0.317-0.178-0.035-0.020-0.071-0.038-0.107-0.059-0.139-0.081-0.277-0.166-0.412-0.252-0.037-0.024-0.074-0.050-0.111-0.074-0.099-0.063-0.197-0.128-0.293-0.195-0.032-0.021-0.063-0.045-0.094-0.066-0.093-0.066-0.186-0.132-0.277-0.2-0.042-0.031-0.082-0.062-0.123-0.093-0.084-0.064-0.168-0.129-0.25-0.196-0.037-0.030-0.075-0.060-0.112-0.090-0.105-0.087-0.209-0.173-0.312-0.263-0.011-0.009-0.023-0.018-0.034-0.028-0.111-0.097-0.22-0.197-0.328-0.298-0.031-0.030-0.062-0.059-0.092-0.088-0.080-0.076-0.158-0.153-0.235-0.231-0.031-0.031-0.062-0.061-0.092-0.092-0.098-0.101-0.194-0.203-0.289-0.306-0.005-0.005-0.010-0.010-0.014-0.015-0.1-0.109-0.197-0.221-0.293-0.334-0.026-0.031-0.051-0.060-0.077-0.091-0.071-0.086-0.142-0.173-0.211-0.261-0.026-0.031-0.052-0.064-0.077-0.096-0.083-0.108-0.164-0.215-0.243-0.324-2.197-2.996-2.986-7.129-1.23-10.523l-1.556 1.974c-1.994 2.866-1.746 6.595-0.223 9.64 0.036 0.073 0.074 0.145 0.112 0.217 0.024 0.045 0.046 0.092 0.071 0.137 0.014 0.027 0.030 0.053 0.044 0.079 0.026 0.049 0.053 0.095 0.079 0.142 0.047 0.083 0.096 0.166 0.145 0.249 0.027 0.045 0.055 0.091 0.083 0.136 0.055 0.089 0.111 0.176 0.169 0.264 0.024 0.037 0.047 0.075 0.072 0.111 0.080 0.118 0.161 0.236 0.244 0.353 0.002 0.003 0.005 0.006 0.007 0.009 0.013 0.018 0.028 0.037 0.041 0.056 0.072 0.1 0.147 0.199 0.223 0.296 0.028 0.036 0.056 0.072 0.084 0.107 0.067 0.085 0.136 0.169 0.206 0.253 0.026 0.031 0.052 0.063 0.079 0.094 0.094 0.11 0.189 0.22 0.287 0.328 0.002 0.002 0.004 0.004 0.006 0.005 0.004 0.005 0.008 0.008 0.011 0.013 0.095 0.104 0.193 0.206 0.291 0.307 0.031 0.032 0.062 0.063 0.093 0.094 0.076 0.077 0.154 0.153 0.233 0.228 0.032 0.030 0.063 0.061 0.095 0.091 0.105 0.099 0.211 0.196 0.319 0.291 0.002 0.001 0.003 0.003 0.005 0.004 0.018 0.016 0.038 0.032 0.056 0.047 0.095 0.082 0.192 0.164 0.29 0.245 0.040 0.032 0.080 0.064 0.12 0.096 0.080 0.064 0.16 0.127 0.241 0.189 0.043 0.033 0.086 0.066 0.129 0.098 0.089 0.066 0.18 0.131 0.271 0.194 0.033 0.024 0.065 0.047 0.099 0.070 0.009 0.006 0.018 0.013 0.027 0.019 0.086 0.060 0.175 0.116 0.263 0.174 0.038 0.025 0.075 0.051 0.114 0.076 0.136 0.086 0.273 0.171 0.412 0.253 0.038 0.022 0.076 0.043 0.114 0.064 0.102 0.059 0.205 0.117 0.309 0.174 0.056 0.030 0.114 0.059 0.171 0.088 0.073 0.038 0.147 0.078 0.221 0.115 0.017 0.009 0.035 0.017 0.051 0.025 0.030 0.014 0.060 0.028 0.091 0.044 0.116 0.055 0.233 0.11 0.351 0.163 0.025 0.011 0.049 0.022 0.074 0.033 0.135 0.059 0.271 0.116 0.409 0.17 0.033 0.014 0.066 0.026 0.1 0.039 0.127 0.049 0.256 0.098 0.386 0.143 0.016 0.006 0.032 0.012 0.049 0.017 0.142 0.050 0.286 0.096 0.43 0.141 0.034 0.010 0.069 0.021 0.104 0.031 0.147 0.044 0.293 0.097 0.445 0.125 9.643 1.759 12.444-5.795 12.444-5.795-2.352 3.065-6.528 3.873-10.485 2.974zM12.758 16.231c0.216 0.31 0.456 0.678 0.742 0.927 0.104 0.114 0.213 0.226 0.324 0.336 0.028 0.029 0.057 0.056 0.085 0.084 0.108 0.105 0.217 0.207 0.33 0.307 0.005 0.003 0.009 0.008 0.014 0.012 0.001 0.001 0.002 0.002 0.003 0.003 0.125 0.11 0.255 0.216 0.386 0.319 0.029 0.022 0.058 0.046 0.088 0.069 0.132 0.101 0.266 0.2 0.404 0.295 0.004 0.003 0.008 0.006 0.012 0.009 0.061 0.042 0.123 0.081 0.184 0.122 0.030 0.019 0.058 0.040 0.088 0.058 0.098 0.063 0.198 0.125 0.299 0.183 0.014 0.009 0.028 0.016 0.042 0.024 0.087 0.051 0.176 0.1 0.265 0.148 0.031 0.018 0.063 0.033 0.094 0.049 0.061 0.032 0.123 0.064 0.185 0.096 0.009 0.004 0.019 0.009 0.028 0.012 0.127 0.063 0.255 0.123 0.386 0.18 0.028 0.012 0.057 0.023 0.085 0.035 0.105 0.045 0.21 0.088 0.316 0.129 0.045 0.017 0.091 0.033 0.135 0.050 0.097 0.036 0.193 0.069 0.291 0.101 0.044 0.014 0.087 0.028 0.131 0.042 0.139 0.043 0.276 0.098 0.42 0.122 7.445 1.233 9.164-4.499 9.164-4.499-1.549 2.232-4.55 3.296-7.752 2.465-0.142-0.038-0.282-0.078-0.422-0.122-0.043-0.013-0.084-0.027-0.127-0.041-0.099-0.032-0.197-0.066-0.295-0.102-0.045-0.017-0.089-0.033-0.133-0.050-0.107-0.041-0.213-0.084-0.317-0.128-0.029-0.013-0.058-0.024-0.086-0.036-0.131-0.057-0.261-0.117-0.389-0.18-0.066-0.032-0.13-0.066-0.195-0.099-0.037-0.019-0.075-0.038-0.112-0.058-0.083-0.045-0.165-0.092-0.246-0.139-0.019-0.011-0.040-0.022-0.059-0.033-0.101-0.059-0.2-0.12-0.299-0.182-0.030-0.019-0.060-0.040-0.090-0.060-0.065-0.042-0.13-0.085-0.193-0.128-0.137-0.095-0.271-0.194-0.402-0.294-0.030-0.024-0.061-0.047-0.091-0.071-1.401-1.107-2.512-2.619-3.041-4.334-0.554-1.778-0.434-3.775 0.525-5.395l-1.178 1.663c-1.442 2.075-1.364 4.853-0.239 7.048 0.189 0.368 0.401 0.725 0.638 1.065zM20.606 13.664c0.061 0.023 0.123 0.043 0.185 0.064 0.027 0.008 0.054 0.018 0.082 0.026 0.088 0.027 0.175 0.060 0.265 0.076 4.111 0.794 5.226-2.11 5.523-2.537-0.977 1.406-2.618 1.744-4.632 1.255-0.159-0.039-0.334-0.096-0.488-0.151-0.197-0.070-0.39-0.15-0.579-0.24-0.358-0.172-0.699-0.38-1.015-0.619-1.802-1.367-2.922-3.976-1.746-6.101l-0.637 0.877c-0.85 1.251-0.933 2.805-0.344 4.186 0.622 1.467 1.897 2.617 3.384 3.163z"></path></svg>',
  jQueryUI: '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="32" height="32" viewBox="0 0 32 32"><path fill="#444444" d="M24.81 6.334h-17.621c-1.391 0-2.517 1.114-2.517 2.488v7.464c0 5.495 4.508 9.951 10.069 9.951h2.518c5.561 0 10.069-4.456 10.069-9.951v-7.464c0-1.374-1.127-2.488-2.517-2.488zM16 22.506c-4.171 0-7.552-3.342-7.552-7.464v-3.732h3.776v3.732c0 2.061 1.69 3.732 3.776 3.732s3.775-1.671 3.775-3.732h3.776c0 4.122-3.381 7.464-7.552 7.464zM23.489 13.798l-3.65-0.933 0.881-3.608 3.713 0.933-0.944 3.607z"></path></svg>',
  js: '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="32" height="32" viewBox="0 0 32 32"><path fill="#444444" d="M9.633 7.968h3.751v10.514c0 4.738-2.271 6.392-5.899 6.392-0.888 0-2.024-0.148-2.764-0.395l0.42-3.036c0.518 0.173 1.185 0.296 1.925 0.296 1.58 0 2.567-0.716 2.567-3.282v-10.489zM16.641 20.753c0.987 0.518 2.567 1.037 4.171 1.037 1.728 0 2.641-0.716 2.641-1.826 0-1.012-0.79-1.629-2.789-2.32-2.764-0.987-4.59-2.517-4.59-4.961 0-2.838 2.394-4.985 6.293-4.985 1.9 0 3.258 0.37 4.245 0.839l-0.839 3.011c-0.642-0.321-1.851-0.79-3.455-0.79-1.629 0-2.419 0.765-2.419 1.604 0 1.061 0.913 1.53 3.085 2.369 2.937 1.086 4.294 2.616 4.294 4.985 0 2.789-2.122 5.158-6.688 5.158-1.9 0-3.776-0.518-4.714-1.037l0.765-3.085z"></path></svg>',
  phaser: '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="621.264px" height="415.883px" viewBox="0 0 621.264 415.883" enable-background="new 0 0 621.264 415.883" xml:space="preserve"><polygon fill="#FFFFFF" points="537.006,306.328 537.105,307.277 550.001,306.328 537.006,306.328 "/><path fill="none" stroke="#FFFFFF" stroke-width="0.05" stroke-miterlimit="10" d="M150.411,52.229l-0.7-0.9 M152.21,54.578l-0.8-1.05"/><path d="M618.573,157.437l-0.649-0.65c-21.991-24.24-45.282-44.532-69.923-60.926l-3.148-2.149l-1.549,8.247c-27.439-12.795-54.828-23.74-82.268-32.887h-0.1c-0.15-0.05-0.35-0.1-0.5-0.1c-0.05-0.05-0.05-0.05-0.1-0.05c-45.532-10.646-91.014-17.343-136.546-19.992l-2.598-0.15l-1.05,51.129c0,0.15,0,0.25,0.05,0.4l6.647,48.131l15.794,9.796l-19.892-0.25l-49.63-103.809l-61.525,10.046l-8.146,37.235l-18.643-31.238c-0.3-0.55-0.75-0.899-1.3-1.1c-0.55-0.2-1.149-0.2-1.699,0c-19.742,7.247-39.234,15.844-58.477,25.89c-0.05,0-0.05,0-0.1,0.05h-0.05c-14.744,7.697-29.338,16.193-43.782,25.49l-0.1,0.05l-0.05,0.05C53.7,137.045,28.61,156.038,4.02,177.579l-0.75,0.65l-0.1,1.049c-2.849,39.834,2.749,79.668,16.693,119.503c0.15,0.35,0.35,0.699,0.7,0.999c0.3,0.25,0.65,0.45,1.05,0.6l62.925,15.844l23.99-26.64c0.25-0.35,0.45-0.699,0.6-1.099c0.1-0.4,0.1-0.8,0-1.2l-5.598-21.591l36.735,22.391l36.785-9.496l0.1-0.05l35.636-9.246l43.732-6.897c0.5-0.101,0.95-0.3,1.299-0.65c0.35-0.35,0.6-0.749,0.75-1.199l13.794-53.429l13.594,44.282l35.686-8.796v4.698l99.409,5.098l76.37,14.594c0.149,0.051,0.35,0.051,0.5,0.101l29.188,5.548l8.247-9.797l3.998,41.784l28.389-2.1c0.15,0,0.351-0.05,0.55-0.1l37.585-11.246l-10.046-63.774l16.344-13.045c0.399-0.35,0.7-0.749,0.85-1.299c4.498-17.543,6.348-35.786,5.548-54.729V157.437L618.573,157.437z M608.377,211.015l-1.449,1.149l-11.995,9.547l-2.799-17.344l-5.498-3.049l4.049,25.29v0.2l9.596,60.826l-31.438,9.396l-1.749,0.55l-1.249,0.101l-21.941,1.599l-4.049-41.783l20.692-24.44l2.748-3.248l0.2-0.25c0.1-0.15,0.2-0.25,0.3-0.4l-4.748-2.099l-1.35,1.649l-22.341,26.39l-0.05,0.05l-10.146,12.045l-23.041-4.398l22.99-40.233l0.351-0.65c0.1-0.249,0.199-0.499,0.249-0.749v-0.05l0.301-1.45l6.847-36.035c0.05-0.1,0.05-0.2,0.101-0.3c0.05-0.2,0.05-0.4,0.05-0.6l14.594-76.669v-0.05c0-0.05,0-0.1,0.05-0.15l0.7-3.749c22.94,15.644,44.682,34.736,65.273,57.327c0.65,17.343-0.999,34.086-4.948,50.28C608.577,210.166,608.478,210.566,608.377,211.015L608.377,211.015z M181.599,74.52l2.049,3.499l18.243,30.588l-17.543,80.717l-2.149,9.996l-6.047,27.689l-0.05,0.25c-0.05,0.35-0.05,0.749,0.05,1.149c0,0.05,0,0.149,0.05,0.199c0.1,0.25,0.25,0.55,0.45,0.8l0.45,0.5l30.638,35.536l-30.688,7.946l-36.335-30.638l-1.649-1.399l0.05,1c0.05,0.649-0.15,1.249-0.6,1.799c-0.45,0.55-1,0.85-1.699,0.9c-0.65,0.05-1.25-0.15-1.799-0.601l0.25,0.25l35.886,30.238l-30.088,7.797l-40.234-24.49c-0.05-0.05-0.05-0.05-0.05-0.05h-0.05l-1.35-0.85l-2.449-1.5c-0.05-0.25-0.15-0.499-0.2-0.749c-0.8-3.749-1.549-7.497-2.299-11.146l-0.05-0.101c0-0.05,0-0.1-0.05-0.149c0-0.05,0-0.101,0-0.101c-2.799-13.844-5.048-27.539-6.797-41.083c-3.449-26.59-4.898-52.729-4.398-78.419c12.845-8.247,25.79-15.844,38.934-22.791l1.799,43.433l4.998-1.899L126.97,98.76c17.743-9.196,35.686-17.193,53.929-23.94C181.099,74.72,181.349,74.62,181.599,74.52L181.599,74.52z M8.118,180.627c22.891-19.992,46.231-37.735,69.972-53.278c-0.35,24.69,1.15,49.78,4.398,75.27c0.05,0.15,0.05,0.35,0.1,0.55c0.05,0.35,0.1,0.7,0.15,1.1c0.05,0.5,0.1,1.05,0.2,1.6c1.5,11.245,3.349,22.541,5.548,33.887L55.249,222.71l-2.799-1.449l0.2,0.1c0.25,0.2,0.5,0.45,0.7,0.75c0.15,0.25,0.25,0.55,0.3,0.85c0.1,0.55,0.05,1.1-0.2,1.6c-0.05,0.1-0.15,0.2-0.2,0.3c-0.4,0.55-0.95,0.85-1.6,1h-0.05c-0.65,0.1-1.25-0.051-1.799-0.4l-0.2-0.149c0.15,0.149,0.3,0.25,0.45,0.35l3.299,1.699l36.385,18.692c0.8,3.948,1.649,7.896,2.499,11.896c0.05,0.35,0.2,0.649,0.45,0.899c0.15,0.25,0.4,0.5,0.7,0.7l3.999,2.398l6.547,25.29l-21.092,23.391L26.96,296.582l-2.849-0.75c-0.1-0.25-0.2-0.55-0.25-0.8C10.817,256.897,5.569,218.762,8.118,180.627L8.118,180.627z M252.12,143.942c-0.05,0-0.05,0-0.05-0.05l-2.349,7.397l19.592,47.73l-15.194,58.677l-0.75,0.1l-40.134,6.348l-30.888-35.785l-1.1-1.25v-0.05l0.35-1.6l25.39-116.753v-0.1l8.747-39.984l54.528-8.896l48.431,101.31l1.899,33.486l0.2,3.049l0.85,14.994v24.89l-32.287,7.947l-11.295-37.136l-0.45-1.449l-0.05-0.1c0-0.05,0-0.101-0.05-0.15l-0.4-1.149l-2.799-7.396l-0.05-0.051c0-0.05,0-0.05,0-0.1l-0.05-0.05L252.12,143.942L252.12,143.942zM325.841,104.708l-0.65-4.498l-0.05-0.4l0.949-45.732c43.833,2.699,87.615,9.146,131.397,19.292l4.948,1.449c26.64,8.997,53.278,19.742,79.918,32.187l-7.597,39.984l-0.949,4.998l-5.248,27.588l-0.95,4.948l-6.497,34.187l-0.2,1.05l-1.05,1.799l-22.99,40.234L425.7,248.25l26.939-34.286c0.3-0.4,0.45-0.85,0.5-1.35l0.25-3.648l0.199-3.049l2.899-43.033c0.05-0.35,0-0.699-0.15-1.049c-0.149-0.351-0.3-0.601-0.55-0.85l-0.149-0.2l-12.945-13.445l15.394-32.437l-2.898-0.7h-0.05l-14.645,30.838l-2.349,4.748l13.295,13.844l-3.199,47.281l-0.05,0.55l-1.899,2.449l-26.289,33.437l-93.363-4.798v-28.639v-1.5c0-0.05,0-0.1,0-0.149l-0.05-1.35l-2.799-47.931l69.372,0.949l-5.197-5.048l-35.636-0.5l-20.842-12.944L325.841,104.708L325.841,104.708z"/><polygon fill="#FFFFFF" points="563.295,229.808 560.546,233.056 565.845,297.681 567.094,297.581 568.843,297.031 563.295,229.808 "/><polygon fill="#444444" points="565.845,297.681 560.547,233.056 539.854,257.497 543.903,299.28 565.845,297.681 "/><polygon fill="#757575" points="557.697,228.708 525.11,222.561 502.12,262.794 525.16,267.193 535.307,255.148 535.356,255.098 557.697,228.708 "/><polygon fill="#757575" points="592.134,204.368 594.933,221.711 606.928,212.165 592.134,204.368 "/><path fill="#FFFFFF" d="M606.928,212.165l1.449-1.149c0.101-0.449,0.2-0.85,0.3-1.299l-18.892-10.097l-3.799-1.898l0.649,3.598l5.498,3.049L606.928,212.165L606.928,212.165z"/><path fill="#FFFFFF" d="M525.71,221.162c-0.05,0.25-0.149,0.5-0.25,0.749l-0.35,0.65l32.587,6.147l1.35-1.649l-0.05-1.149l-32.986-6.248l-0.301,1.45V221.162L525.71,221.162z"/><path fill="#444444" d="M590.484,176.829v-5.947l-34.586-23.241l3.099,78.269l0.05,1.149l4.748,2.099l0.3-1.349c0-0.051,0-0.051,0-0.101l-2.799-70.421L590.484,176.829L590.484,176.829z"/><path fill="#CECECE" d="M590.484,170.881v5.947l-29.188-19.542l2.799,70.421c0,0.05,0,0.05,0,0.101l-0.3,1.349c-0.1,0.15-0.2,0.25-0.3,0.4l-0.2,0.25l5.548,67.223l31.438-9.396l-9.596-60.825v-0.2l-4.049-25.29l-0.649-3.598l3.799,1.898l18.892,10.097c3.949-16.194,5.598-32.938,4.948-50.28c-20.592-22.591-42.333-41.683-65.273-57.327l-0.7,3.749c-0.05,0.05-0.05,0.1-0.05,0.15v0.05l-14.594,76.669c0,0.199,0,0.399-0.051,0.6c-0.05,0.1-0.05,0.2-0.1,0.3l-6.847,36.035l32.986,6.248l-3.099-78.269L590.484,170.881L590.484,170.881z"/><path fill="#EDEDED" d="M183.648,78.019l-2.049-3.499c-0.25,0.1-0.5,0.2-0.7,0.3c-3.149,39.134-2.699,80.618,1.299,124.5l2.149-9.996C181.249,150.29,180.999,113.205,183.648,78.019L183.648,78.019z"/><path fill="#444444" d="M201.891,108.606l-18.243-30.588c-2.649,35.186-2.399,72.271,0.7,111.305L201.891,108.606L201.891,108.606z"/><polygon fill="#757575" points="207.738,265.444 177.101,229.908 140.715,242.752 177.05,273.39 207.738,265.444 "/><path fill="#FFFFFF" d="M96.933,255.847l2.449,1.5l35.886-12.646l-0.25-0.25c-0.35-0.3-0.6-0.649-0.75-1.049c-0.05-0.2-0.1-0.4-0.15-0.601v-0.05l-0.05-0.85l-37.335,13.195C96.783,255.348,96.882,255.597,96.933,255.847L96.933,255.847z"/><path fill="#757575" d="M100.781,258.197c0,0,0,0,0.05,0.05l40.234,24.49l30.088-7.797l-35.886-30.238l-35.886,12.646l1.35,0.85H100.781L100.781,258.197z"/><path fill="#444444" d="M134.067,182.727l-4.898,1.898l4.898,57.277l0.05,0.85v0.05c0.05,0.2,0.1,0.4,0.15,0.601c0.15,0.399,0.4,0.749,0.75,1.049c0.55,0.45,1.149,0.65,1.799,0.601c0.7-0.051,1.25-0.351,1.699-0.9c0.45-0.55,0.65-1.149,0.6-1.799l-0.05-1l-0.1-1.199L134.067,182.727L134.067,182.727z"/><path fill="#FFFFFF" d="M176.151,228.409c-0.1-0.4-0.1-0.8-0.05-1.149l0.05-0.25l-37.185,13.145l0.1,1.199l1.649,1.399l36.386-12.845l-0.45-0.5c-0.2-0.25-0.35-0.55-0.45-0.8C176.151,228.558,176.151,228.458,176.151,228.409L176.151,228.409z"/><path fill="#CECECE" d="M128.87,142.843l-4.998,1.899l-1.799-43.433c-13.145,6.947-26.089,14.544-38.934,22.791c-0.5,25.69,0.949,51.829,4.398,78.419c1.75,13.544,3.999,27.239,6.797,41.083c0,0,0,0.051,0,0.101c0.05,0.05,0.05,0.1,0.05,0.149l0.05,0.101c0.75,3.648,1.499,7.396,2.299,11.146l37.335-13.195l-4.898-57.276l4.898-1.899l4.898,57.427l37.185-13.145l6.047-27.689c-3.999-43.882-4.448-85.366-1.299-124.5c-18.243,6.748-36.186,14.744-53.929,23.94L128.87,142.843L128.87,142.843z"/><path fill="#FFFFFF" d="M82.938,205.868c-0.1-0.55-0.15-1.1-0.2-1.6c-0.05-0.399-0.1-0.75-0.15-1.1c-0.05-0.2-0.05-0.399-0.1-0.55L52.2,221.061l0.25,0.2l2.799,1.449L82.938,205.868L82.938,205.868z"/><path fill="#757575" d="M88.486,239.754c-2.199-11.346-4.048-22.642-5.548-33.887L55.249,222.71L88.486,239.754L88.486,239.754z"/><path fill="#CECECE" d="M78.09,127.349c-23.74,15.543-47.081,33.286-69.972,53.278c-2.549,38.135,2.699,76.27,15.744,114.404l33.736-22.841l-7.547-46.531c-0.15-0.1-0.3-0.2-0.45-0.35l-25.84-17.943l29.088-19.042l0.55,5.498l-20.692,13.694L52.2,221.061l30.288-18.442C79.24,177.129,77.74,152.039,78.09,127.349L78.09,127.349z"/><path fill="#444444" d="M53.35,222.111c-0.2-0.3-0.45-0.55-0.7-0.75l-0.2-0.1l-0.25-0.2l-19.492-13.544L53.4,193.823l-0.55-5.498l-29.088,19.042l25.84,17.943l0.2,0.149c0.55,0.35,1.149,0.5,1.799,0.4h0.05c0.65-0.15,1.2-0.45,1.6-1c0.05-0.1,0.15-0.2,0.2-0.3c0.25-0.5,0.3-1.05,0.2-1.6C53.6,222.661,53.5,222.361,53.35,222.111L53.35,222.111z"/><path fill="#FFFFFF" d="M53.35,227.359l-3.299-1.699l7.547,46.531l-33.736,22.841c0.05,0.25,0.15,0.55,0.25,0.8l2.849,0.75l32.487-22.042l0.6-0.399c0.25-0.15,0.4-0.399,0.55-0.649c0-0.051,0-0.101,0.05-0.15c0.05-0.25,0.1-0.449,0.05-0.699l-0.15-0.9L53.35,227.359L53.35,227.359z"/><path fill="#444444" d="M92.234,257.947c-0.85-3.999-1.699-7.947-2.499-11.896L53.35,227.359l7.197,44.382l43.383,15.494l-6.547-25.29l-3.999-2.398c-0.3-0.2-0.55-0.45-0.7-0.7C92.434,258.596,92.284,258.296,92.234,257.947L92.234,257.947z"/><polygon fill="#757575" points="82.838,310.625 103.93,287.235 59.447,274.54 26.96,296.582 82.838,310.625 "/><path fill="#BCBCBC" d="M60.547,271.741l0.15,0.9c0.05,0.25,0,0.449-0.05,0.699c-0.05,0.05-0.05,0.1-0.05,0.15c-0.15,0.25-0.3,0.499-0.55,0.649l-0.6,0.399l44.482,12.695L60.547,271.741L60.547,271.741z"/><path fill="#FFFFFF" d="M320.793,197.571l-0.2-3.049l-43.482,10.896l0.4,1.149c0.05,0.05,0.05,0.101,0.05,0.15l0.05,0.1l0.45,1.449L320.793,197.571L320.793,197.571z"/><polygon fill="#757575" points="321.643,212.565 320.793,197.571 278.06,208.266 289.355,245.402 321.643,237.455 321.643,212.565 "/><path d="M247.372,145.691h0.05l-0.1-0.25C247.322,145.492,247.322,145.592,247.372,145.691L247.372,145.691z"/><polygon fill="#CECECE" points="233.628,214.314 233.978,214.114 233.778,213.764 233.628,214.314 "/><path fill="#FFFFFF" d="M249.721,151.29l-1.949-4.648l-16.793,66.073l-49.38,12.745l-0.35,1.6v0.05l1.1,1.25l49.081-12.695l1.149-0.3c0.1-0.05,0.2-0.05,0.3-0.1c0.15-0.101,0.25-0.2,0.35-0.301c0.2-0.199,0.35-0.399,0.4-0.649l0.15-0.55L249.721,151.29L249.721,151.29z"/><path fill="#BCBCBC" d="M233.978,214.114l-0.35,0.2c-0.05,0.25-0.2,0.45-0.4,0.649c-0.1,0.101-0.2,0.2-0.35,0.301c-0.1,0.05-0.2,0.05-0.3,0.1l-1.149,0.3l21.941,42.133l0.75-0.1L233.978,214.114L233.978,214.114z"/><polygon fill="#444444" points="233.778,213.764 233.978,214.114 254.12,257.697 269.313,199.02 249.721,151.29 233.778,213.764 "/><polygon fill="#757575" points="231.429,215.664 182.348,228.359 213.236,264.144 253.37,257.796 231.429,215.664 "/><path fill="#444444" d="M283.158,124.4l-1.799-4.698l-39.934,7.847l5.897,17.893l0.1,0.25h-0.05c0.05,0.05,0.05,0.1,0.1,0.15l0.3,0.8l1.949,4.648l2.349-7.397c0,0.05,0,0.05,0.05,0.05c-0.05-0.05-0.05-0.05-0.05-0.05l-4.148-12.545L283.158,124.4L283.158,124.4z"/><path fill="#CECECE" d="M281.359,119.702l1.799,4.698l-35.236,6.947l4.148,12.545c0,0,0,0,0.05,0.05l22.091,53.878l0.05,0.05c0,0.05,0,0.05,0,0.1l0.05,0.051l2.799,7.396l43.482-10.896l-1.899-33.486l-48.431-101.31l-54.528,8.896l-8.747,39.984v0.1l-25.39,116.753l49.38-12.745l16.793-66.073l-0.3-0.8c-0.05-0.05-0.05-0.1-0.1-0.15c-0.05-0.1-0.05-0.2-0.05-0.25l-5.897-17.893L281.359,119.702L281.359,119.702z"/><polygon fill="#FFFFFF" points="519.862,221.561 520.912,219.762 521.112,218.712 453.589,205.917 453.39,208.966 519.862,221.561"/><path fill="#757575" d="M496.872,261.795l22.99-40.234l-66.473-12.595l-0.25,3.648c-0.05,0.5-0.2,0.949-0.5,1.35L425.7,248.25L496.872,261.795L496.872,261.795z"/><path fill="#FFFFFF" d="M448.191,211.465l0.05-0.55H326.59l0.05,1.35c0,0.05,0,0.1,0,0.149v1.5h119.652L448.191,211.465L448.191,211.465z"/><polygon fill="#757575" points="420.003,247.351 446.292,213.915 326.64,213.915 326.64,242.553 420.003,247.351 "/><polygon fill="#444444" points="402.06,105.008 402.109,105.008 402.06,105.008 "/><path fill="#FFFFFF" d="M394.413,100.81v3.398l7.646,0.8l53.079,9.146c-0.25-0.4-0.35-0.85-0.3-1.3l0.149-1.749l-57.477-9.896L394.413,100.81L394.413,100.81z"/><polygon fill="#444444" points="402.109,105.008 402.06,105.008 394.413,104.208 438.146,149.79 440.494,145.042 402.109,105.008"/><polygon fill="#757575" points="331.488,145.442 352.33,158.386 387.966,158.886 325.841,104.708 331.488,145.442 "/><path fill="#CECECE" d="M394.413,104.208v-3.398l3.099,0.4l57.477,9.896l2.499-37.735c-43.782-10.146-87.564-16.593-131.397-19.292l-0.949,45.732l0.05,0.4l68.023,59.276l-0.051,4.448l-69.372-0.949l2.799,47.931h121.651l3.199-47.281l-13.295-13.844L394.413,104.208L394.413,104.208z"/><polygon fill="#FFFFFF" points="325.19,100.21 325.841,104.708 387.966,158.886 393.163,163.934 393.214,159.486 325.19,100.21 "/><polygon fill="#444444" points="494.673,131.047 494.673,136.295 533.808,151.989 534.757,146.991 494.673,131.047 "/><polygon fill="#444444" points="492.724,170.032 492.724,175.28 527.609,184.526 528.56,179.578 492.724,170.032 "/><path fill="#CECECE" d="M455.639,160.786l0.149,0.2c0.25,0.249,0.4,0.499,0.55,0.85c0.15,0.35,0.2,0.699,0.15,1.049l-2.899,43.033l67.523,12.795l6.497-34.187l-34.886-9.246v-5.248l35.836,9.546l5.248-27.588l-39.135-15.694v-5.248l40.084,15.944l7.597-39.984c-26.64-12.445-53.278-23.19-79.918-32.187l-3.698,40.284L455.639,160.786L455.639,160.786z"/><polygon fill="#757575" points="455.139,114.204 455.139,114.154 402.06,105.008 402.109,105.008 440.494,145.042 455.139,114.204 "/><path fill="#444444" d="M462.436,74.82l-4.948-1.449l-2.499,37.735l-0.149,1.749c-0.05,0.45,0.05,0.9,0.3,1.3v0.05h0.05l2.898,0.7l-15.394,32.437l12.945,13.445l3.099-45.682L462.436,74.82L462.436,74.82z"/><line fill="none" stroke="#4D4D4D" stroke-width="0.05" stroke-linecap="square" stroke-miterlimit="10" x1="402.06" y1="105.008" x2="402.109" y2="105.008"/><path fill="#B2B2B2" d="M344.533,60.476c-4.549-0.4-9.047-0.75-13.545-1.049l-0.8,38.534l8.847,7.697l25.34-43.183C357.728,61.725,351.13,61.025,344.533,60.476L344.533,60.476z"/><path fill="#B2B2B2" d="M300.751,135.146l-27.539,47.031l5.648,13.744c0.05,0.1,0.05,0.2,0.1,0.3l1.25,3.249l4.499-1.1l25.49-43.483L300.751,135.146L300.751,135.146z"/><path fill="#B2B2B2" d="M384.717,145.492l9.946,8.646c0.749,0.25,1.449,0.65,2.049,1.299c0.45,0.45,0.8,0.9,1.05,1.399c0.8,0.85,1.249,1.9,1.35,3.149c0.1,1.249-0.2,2.349-0.95,3.299v0.699c-0.05,1.35-0.55,2.55-1.499,3.549c-1,0.95-2.199,1.449-3.599,1.399l-21.941-0.3l-21.891,37.285h42.033l35.585-60.676l-26.089-27.189L384.717,145.492L384.717,145.492z"/><path fill="#B2B2B2" d="M452.239,77.319c-8.196-1.849-16.393-3.599-24.54-5.198L412.156,98.66l38.134,6.598h0.051v-0.15L452.239,77.319L452.239,77.319z"/><path fill="#B2B2B2" d="M28.41,170.032c-5.148,4.198-10.296,8.547-15.443,12.995c-0.25,4.748-0.4,9.446-0.45,14.145L28.41,170.032L28.41,170.032z"/><path fill="#B2B2B2" d="M211.937,109.356c-0.05,0.15-0.05,0.25-0.05,0.4l-12.895,59.176l60.026-102.309l-39.134,6.397L211.937,109.356L211.937,109.356z"/><path fill="#B2B2B2" d="M171.902,223.21l5.248-24.19c-1.849-20.142-2.899-39.834-3.199-58.976l-33.637,57.376l3.049,35.886L171.902,223.21L171.902,223.21z"/><path fill="#B2B2B2" d="M99.231,242.603c-0.05-0.05-0.05-0.101-0.05-0.15s0-0.05,0-0.1c-0.05-0.05-0.05-0.05-0.05-0.05c-0.05-0.15-0.05-0.25-0.1-0.351L99.231,242.603L99.231,242.603z"/><polygon fill="#B2B2B2" points="127.17,219.812 112.976,244.002 128.77,238.455 127.17,219.812 "/><path fill="#B2B2B2" d="M22.912,274.99c1.1,4.049,2.299,8.097,3.599,12.195l25.64-17.394l-5.648-35.086L22.912,274.99L22.912,274.99z"/><path fill="#B2B2B2" d="M61.097,209.816l16.043-9.796c-0.6-4.948-1.149-9.896-1.599-14.845L61.097,209.816L61.097,209.816z"/><polygon fill="#B2B2B2" points="423.201,205.917 443.593,205.917 446.192,166.683 423.201,205.917 "/><path fill="#B2B2B2" d="M569.543,150.74l10.346-17.643c-9.146-8.147-18.543-15.644-28.089-22.491l-13.794,72.571c-0.051,0.45-0.101,0.95-0.2,1.399c-0.05,0.05-0.05,0.05-0.05,0.101c-0.05,0.1-0.05,0.199-0.101,0.35l-5.647,29.738l20.192-34.437l-1.3-32.487c-0.05-1.3,0.3-2.449,1.149-3.399c0.85-1,1.899-1.599,3.148-1.749c1.25-0.2,2.449,0.05,3.499,0.8L569.543,150.74L569.543,150.74z"/><path fill="#B2B2B2" d="M552.55,106.757c0-0.05,0-0.15,0.05-0.2l-0.05,0.25V106.757L552.55,106.757z"/><path fill="#B2B2B2" d="M596.632,148.89l-8.446,14.395l5.098,3.448c1.149,0.75,1.85,1.8,2.1,3.149c0.25,1.349,0,2.648-0.75,3.798l-2.799,4.148c-0.75,1.149-1.8,1.85-3.148,2.1c-1.35,0.25-2.649,0-3.799-0.75l-4.298-2.949l-12.646,21.592c0.35,21.991,0.5,33.087,0.45,33.236l4.897,59.427l21.342-6.397l-8.896-56.527c-0.05-0.2-0.05-0.4-0.05-0.6l-3.999-24.841c-0.35-1.999-0.499-3.898-0.449-5.697c0.05-0.85,0.25-1.55,0.6-2.05c0.25-0.399,0.75-0.799,1.449-1.149c0.6-0.35,1.25-0.499,1.899-0.449c0.35,0,0.899,0.1,1.649,0.3c0.999,0.2,2.749,0.899,5.298,2.099l1.35,0.75c0.3,0.1,0.6,0.25,0.899,0.5l10.846,5.798c2.699-13.195,3.849-26.789,3.448-40.734C604.679,157.137,600.681,152.938,596.632,148.89L596.632,148.89z"/><path fill="#B2B2B2" d="M462.086,139.594l-1.35,19.842l-1.85,42.433l58.228,11.046l4.697-24.79l-30.888-8.446c-1.349-0.351-2.349-1.1-2.998-2.3c-0.7-1.149-0.85-2.448-0.5-3.798l0.1-4.849c0.351-1.349,1.1-2.349,2.3-3.049c1.149-0.699,2.448-0.85,3.798-0.499l31.038,8.196l3.448-18.243l-35.336-14.194c-0.649-0.25-1.3-1.25-2.049-2.999c-0.75-1.7-0.95-2.849-0.7-3.499l0.25-4.648c0.5-1.25,1.399-2.199,2.649-2.749c0.649-0.25,1.599-0.4,2.749-0.45c1.149,0,2.049,0.15,2.698,0.4l32.637,13.095l5.698-30.188c-15.244-7.047-30.538-13.544-45.832-19.442L462.086,139.594L462.086,139.594z"/><path fill="#B2B2B2" d="M175.051,87.065c0.05-1.599,0.15-3.199,0.3-4.798c-14.594,5.698-28.988,12.195-43.233,19.492l1.75,40.883c0.05,1.35-0.35,2.549-1.299,3.599c-0.95,1-2.149,1.549-3.499,1.6l-4.998,1.399c-1.399,0.05-2.599-0.35-3.549-1.3c-1.049-0.949-1.599-2.099-1.649-3.448l-1.299-31.088l-28.739,49.081c0.7,12.995,1.899,26.14,3.649,39.384c0.85,6.897,1.899,13.845,3.049,20.792L175.051,87.065L175.051,87.065z"/><path fill="#CECECE" d="M249.271,256.647c-3.249,7.247-2.949,14.295,0.95,21.142c3.898,6.848,10.246,11.546,18.992,14.045c8.847,2.448,17.543,2.049,26.09-1.3c8.546-3.349,14.444-8.597,17.743-15.794c3.299-7.247,2.999-14.294-0.899-21.142c-3.898-6.847-10.246-11.545-19.042-14.044s-17.443-2.1-25.99,1.249S252.62,249.4,249.271,256.647L249.271,256.647z"/><path fill="none" stroke="#000000" stroke-width="4.998" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M250.221,277.789c3.898,6.848,10.246,11.546,18.992,14.045c8.847,2.448,17.543,2.049,26.09-1.3c8.546-3.349,14.444-8.597,17.743-15.794c3.299-7.247,2.999-14.294-0.899-21.142c-3.898-6.847-10.246-11.545-19.042-14.044s-17.443-2.1-25.99,1.249c-8.546,3.349-14.494,8.597-17.843,15.844C246.023,263.894,246.323,270.942,250.221,277.789L250.221,277.789z"/><path fill="#A1A1A1" d="M259.917,260.545c-2.399,5.348-2.149,10.546,0.7,15.594c2.849,5.048,7.547,8.547,13.995,10.396c6.547,1.799,12.945,1.449,19.242-1s10.646-6.298,13.095-11.646c2.449-5.348,2.25-10.546-0.649-15.594c-2.849-5.048-7.547-8.496-14.044-10.346c-6.498-1.85-12.895-1.55-19.192,0.899S262.366,255.198,259.917,260.545L259.917,260.545z"/><path fill="#CECECE" d="M280.109,249.8c0.65,1.149,1.649,1.898,3.099,2.349c1.449,0.399,2.899,0.3,4.298-0.25c1.449-0.55,2.399-1.399,2.949-2.599c0.55-1.149,0.5-2.299-0.15-3.449c-0.65-1.149-1.699-1.898-3.149-2.349c-1.449-0.399-2.849-0.35-4.248,0.2c-1.45,0.55-2.399,1.449-2.949,2.648C279.409,247.5,279.459,248.65,280.109,249.8L280.109,249.8z"/><path fill="#979797" d="M361.626,281.887c-15.544-4.248-30.388-5.148-44.532-2.699c10.446,7.697,20.792,16.594,31.038,26.689L361.626,281.887L361.626,281.887z"/><path fill="#FFFFFF" d="M329.688,336.765c9.347-7.597,15.494-17.893,18.443-30.888c-10.246-10.096-20.592-18.992-31.038-26.689c-33.187-24.44-67.323-36.885-102.459-37.285c3.699,36.936,28.539,72.571,74.52,106.957C305.699,349.31,319.193,345.312,329.688,336.765L329.688,336.765z"/><path fill="#7D7D7D" d="M346.532,305.627l10.096-17.942c-11.596-3.149-22.69-3.799-33.236-2C331.139,291.433,338.885,298.081,346.532,305.627L346.532,305.627z"/><path d="M211.787,239.304l0.4,2.849c3.648,37.535,28.788,73.771,75.47,108.707l0.649,0.499h0.8c17.193,0.5,31.238-3.698,42.183-12.645c9.646-7.847,16.044-18.492,19.192-31.888l14.944-26.539l-3.149-0.8c-15.543-4.248-30.388-5.197-44.582-2.948c-33.386-24.391-67.723-36.785-103.009-37.136L211.787,239.304L211.787,239.304zM322.042,281.038c11.445-1.399,23.39-0.6,35.835,2.449l-10.846,19.242C338.735,294.682,330.389,287.485,322.042,281.038L322.042,281.038z M315.645,281.237l0.85,0.601c0,0,3.698,2.849,11.145,8.496c8.146,6.447,14.194,11.495,18.043,15.244c-2.849,12.295-8.696,22.041-17.543,29.238c-9.946,7.997-22.641,11.845-38.134,11.596c-43.683-32.837-67.873-66.823-72.521-101.96C251.071,245.501,283.808,257.796,315.645,281.237L315.645,281.237z"/><path fill="#979797" d="M328.64,330.868c15.443-0.15,26.639-2.149,33.486-5.998c-14.444-14.444-35.436-24.24-62.975-29.488C301.65,303.228,311.497,315.024,328.64,330.868L328.64,330.868z"/><path fill="#7D7D7D" d="M326.04,330.618c13.045,0,22.591-1.5,28.589-4.498c-11.346-11.496-28.539-19.442-51.479-23.791C304.849,308.577,312.496,317.972,326.04,330.618L326.04,330.618z"/><path d="M295.653,292.183l1.899,4.198c3.848,8.646,13.395,20.092,28.588,34.236l2.549,2.749c15.993-0.15,27.539-2.249,34.686-6.298l2.999-1.6l-2.449-2.349c-14.744-14.794-36.135-24.84-64.273-30.188L295.653,292.183L295.653,292.183z M328.64,328.369h-0.45c-13.594-12.646-22.291-22.591-26.039-29.838c23.69,4.947,42.232,13.494,55.627,25.64C351.08,326.819,341.384,328.218,328.64,328.369L328.64,328.369z"/><path fill="#979797" d="M269.613,352.359c5.648-4.349,10.846-11.646,15.544-21.991l-29.538-24.49C253.62,321.971,258.268,337.465,269.613,352.359L269.613,352.359z"/><path fill="#7D7D7D" d="M285.707,329.068l-24.09-18.692c-1.25,13.745,2.799,26.539,12.195,38.385C278.21,344.712,282.158,338.165,285.707,329.068L285.707,329.068z"/><path d="M253.82,302.429l-0.6,2.998c-2.149,16.844,2.649,32.987,14.395,48.481l1.549,2.049l1.999-1.6c5.948-4.548,11.496-12.445,16.644-23.69L253.82,302.429L253.82,302.429z M282.558,330.118c-3.849,8.247-8.047,14.444-12.495,18.593c-8.996-12.595-13.095-25.64-12.295-39.085L282.558,330.118L282.558,330.118z"/></svg>',
  php: '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="32" height="32" viewBox="0 0 32 32"><path fill="#444444" d="M10.372 13.069h-3.967l-1.715 8.684h2.037l0.429-2.251h1.93c1.822 0.107 3.86-1.394 3.86-3.967 0-1.501-0.858-2.359-2.573-2.466zM8.871 17.894h-1.287l0.536-3.216h1.394c0.75 0 1.287 0.322 1.287 0.965-0.107 1.823-0.965 2.144-1.93 2.251zM17.555 13.069h-1.93l0.429-2.251h-2.037l-1.715 8.684h2.037l0.965-4.824h1.608c0.751 0 0.751 0.322 0.643 0.858l-0.75 3.967h2.144l0.75-4.396c0.214-1.072-0.429-1.93-2.144-2.037zM24.738 13.069h-3.967l-1.715 8.684h2.037l0.429-2.251h1.93c1.823 0.107 3.86-1.394 3.86-3.967 0-1.501-0.858-2.359-2.573-2.466zM23.237 17.894h-1.287l0.536-3.216h1.394c0.751 0 1.287 0.322 1.287 0.965-0.107 1.823-0.965 2.144-1.93 2.251z"></path></svg>',
  wordpress: '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="32" height="32" viewBox="0 0 32 32"><path fill="#444444" d="M4.681 16.27c0 4.473 2.6 8.342 6.371 10.171l-5.391-14.773c-0.628 1.407-0.98 2.962-0.98 4.602zM23.616 15.699c0-1.397-0.503-2.365-0.932-3.118-0.573-0.932-1.109-1.719-1.109-2.652 0-1.039 0.785-2.006 1.898-2.006 0.048 0 0.097 0.007 0.145 0.010-2.010-1.842-4.689-2.968-7.632-2.968-3.95 0-7.424 2.027-9.444 5.096 0.266 0.008 0.515 0.014 0.727 0.014 1.183 0 3.013-0.145 3.013-0.145 0.608-0.034 0.68 0.859 0.071 0.932 0 0-0.611 0.071-1.293 0.108l4.117 12.243 2.474-7.418-1.762-4.825c-0.609-0.037-1.185-0.108-1.185-0.108-0.61-0.037-0.537-0.966 0.073-0.932 0 0 1.865 0.145 2.976 0.145 1.182 0 3.014-0.145 3.014-0.145 0.607-0.034 0.679 0.859 0.070 0.932 0 0-0.611 0.071-1.292 0.108l4.085 12.15 1.128-3.766c0.573-1.47 0.861-2.686 0.861-3.655zM16.184 17.259l-3.393 9.856c1.012 0.297 2.082 0.459 3.194 0.459 1.315 0 2.579-0.228 3.754-0.642-0.030-0.048-0.058-0.099-0.081-0.154l-3.474-9.519zM25.904 10.846c0.050 0.361 0.078 0.747 0.078 1.164 0 1.146-0.215 2.435-0.861 4.049l-3.453 9.981c3.36-1.958 5.619-5.598 5.619-9.769 0-1.967-0.502-3.814-1.384-5.425z"></path></svg>',
  react: '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="34" height="32" viewBox="0 0 34 32"><path fill="#444444" d="M19.314 15.987c0 1.321-1.071 2.392-2.392 2.392s-2.392-1.071-2.392-2.392c0-1.321 1.071-2.392 2.392-2.392s2.392 1.071 2.392 2.392z"></path><path fill="#444444" d="M16.922 24.783c1.878 1.826 3.729 2.906 5.221 2.906 0.489 0 0.952-0.103 1.337-0.334 1.337-0.772 1.826-2.701 1.363-5.453-0.077-0.489-0.18-0.977-0.309-1.492 0.514-0.154 0.977-0.309 1.44-0.463 2.598-1.003 4.038-2.392 4.038-3.909 0-1.543-1.44-2.932-4.038-3.909-0.463-0.18-0.926-0.334-1.44-0.463 0.129-0.514 0.232-1.003 0.309-1.492 0.437-2.803-0.051-4.758-1.389-5.53-0.386-0.231-0.849-0.334-1.337-0.334-1.466 0-3.344 1.080-5.221 2.906-1.852-1.826-3.704-2.906-5.195-2.906-0.489 0-0.952 0.103-1.337 0.334-1.337 0.772-1.826 2.701-1.363 5.453 0.077 0.489 0.18 0.977 0.309 1.492-0.514 0.154-0.977 0.309-1.44 0.463-2.598 1.003-4.038 2.392-4.038 3.909 0 1.543 1.44 2.932 4.038 3.909 0.463 0.18 0.926 0.334 1.44 0.463-0.129 0.514-0.232 1.003-0.309 1.492-0.437 2.752 0.051 4.707 1.363 5.453 0.386 0.232 0.849 0.334 1.337 0.334 1.492 0.051 3.344-1.029 5.221-2.829v0zM15.481 21.311c0.463 0.026 0.952 0.026 1.44 0.026s0.977 0 1.44-0.026c-0.463 0.617-0.952 1.183-1.44 1.723-0.489-0.54-0.977-1.106-1.44-1.723zM12.292 18.662c0.257 0.437 0.489 0.849 0.772 1.26-0.797-0.103-1.543-0.232-2.263-0.386 0.232-0.694 0.489-1.415 0.797-2.135 0.206 0.411 0.437 0.849 0.694 1.26zM10.8 12.463c0.72-0.154 1.466-0.283 2.263-0.386-0.257 0.412-0.514 0.823-0.772 1.26s-0.489 0.849-0.694 1.286c-0.334-0.746-0.592-1.466-0.797-2.161zM12.215 15.987c0.334-0.694 0.694-1.389 1.106-2.083 0.386-0.669 0.823-1.337 1.26-2.006 0.772-0.051 1.543-0.077 2.341-0.077 0.823 0 1.595 0.026 2.341 0.077 0.463 0.669 0.874 1.337 1.26 2.006 0.412 0.694 0.772 1.389 1.106 2.083-0.334 0.694-0.694 1.389-1.106 2.083-0.386 0.669-0.823 1.337-1.26 2.006-0.772 0.051-1.543 0.077-2.341 0.077-0.823 0-1.595-0.026-2.341-0.077-0.463-0.669-0.874-1.337-1.26-2.006-0.412-0.695-0.772-1.389-1.106-2.083v0zM22.272 14.598l-0.694-1.286c-0.257-0.437-0.489-0.849-0.772-1.26 0.797 0.103 1.543 0.232 2.263 0.386-0.231 0.72-0.489 1.44-0.797 2.161v0zM22.272 17.376c0.309 0.72 0.566 1.44 0.797 2.135-0.72 0.154-1.466 0.283-2.263 0.386 0.257-0.412 0.514-0.823 0.772-1.26 0.232-0.386 0.463-0.823 0.694-1.26v0zM22.863 26.301c-0.206 0.129-0.463 0.18-0.746 0.18-1.26 0-2.829-1.029-4.372-2.572 0.746-0.797 1.466-1.698 2.186-2.701 1.209-0.103 2.366-0.283 3.447-0.54 0.129 0.463 0.206 0.926 0.283 1.389 0.36 2.186 0.077 3.755-0.797 4.244zM24.201 12.746c2.881 0.823 4.604 2.083 4.604 3.241 0 1.003-1.183 2.006-3.266 2.804-0.412 0.154-0.874 0.309-1.337 0.437-0.334-1.055-0.746-2.135-1.26-3.241 0.514-1.106 0.952-2.186 1.26-3.241v0zM22.143 5.493c0.283 0 0.514 0.051 0.746 0.18 0.849 0.489 1.157 2.032 0.797 4.244-0.077 0.437-0.18 0.9-0.283 1.389-1.080-0.232-2.238-0.412-3.447-0.54-0.694-1.003-1.44-1.903-2.186-2.701 1.543-1.518 3.112-2.572 4.372-2.572zM18.362 10.663c-0.463-0.026-0.952-0.026-1.44-0.026s-0.977 0-1.44 0.026c0.463-0.617 0.952-1.183 1.44-1.723 0.489 0.54 0.977 1.132 1.44 1.723v0zM10.98 5.673c0.206-0.129 0.463-0.18 0.746-0.18 1.26 0 2.829 1.029 4.372 2.572-0.746 0.797-1.466 1.697-2.186 2.701-1.209 0.103-2.366 0.283-3.447 0.54-0.129-0.463-0.206-0.926-0.283-1.389-0.36-2.186-0.077-3.729 0.797-4.244v0zM9.643 19.228c-2.881-0.823-4.604-2.083-4.604-3.241 0-1.003 1.183-2.006 3.266-2.803 0.412-0.154 0.874-0.309 1.337-0.437 0.334 1.055 0.746 2.135 1.26 3.241-0.514 1.106-0.952 2.212-1.26 3.241zM10.183 22.057c0.077-0.437 0.18-0.9 0.283-1.389 1.080 0.232 2.238 0.412 3.447 0.54 0.694 1.003 1.44 1.903 2.186 2.701-1.543 1.517-3.112 2.572-4.372 2.572-0.283 0-0.514-0.051-0.746-0.18-0.875-0.489-1.157-2.058-0.797-4.244z"></path></svg>',
  sketch: '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="30px" height="28px" viewBox="0 0 494 447" enable-background="new 0 0 494 447" xml:space="preserve"><g id="Page-1"><g id="Sketch-Flat-Logo" transform="translate(-9.000000, -28.000000)"><g id="Group" transform="translate(9.000000, 28.000000)"><g id="Base"><polygon id="Polygon" fill="#B3B3B3" points="247,447 0,160 107,15 247,0 387,15 494,160"/></g><g id="Bottom-Back" transform="translate(0.000000, 160.000000)"><polygon id="Polygon_1_" fill="#878787" points="247,287 0,0 494,0"/></g><g id="Bottom-Mid" transform="translate(100.000000, 160.000000)"><polygon id="Polygon_2_" fill="#B3B3B3" points="147,287 0,0 294,0"/></g><g id="Top-Mid" transform="translate(100.000000, 0.000000)"><polygon id="Polygon_3_" fill="#EDEDED" points="147,0 0,160 294,160"/></g><g id="Top-Side-Left" transform="translate(0.000000, 15.000000)"><polygon id="Polygon_4_" fill="#B3B3B3" points="107,0 52,73 0,145 101,145"/></g><g id="Top-Side-Right" transform="translate(440.500000, 87.500000) scale(-1, 1) translate(-440.500000, -87.500000) translate(387.000000, 15.000000)"><polygon id="Polygon_5_" fill="#B3B3B3" points="107,0 52,73 0,145 101,145"/></g><g id="Top-Left" transform="translate(100.000000, 0.000000)"><polygon id="Polygon_6_" fill="#C9C9C9" points="7,15 0,160 147,0"/></g><g id="Top-Right" transform="translate(247.000000, 0.000000)"><polygon id="Polygon_7_" fill="#C9C9C9" points="140,15 147,160 0,0"/></g></g></g></g></svg>'
};

;(function (global) {
  var backgroundFallback = document.querySelector('img.fallback');

  var md = new MobileDetect(window.navigator.userAgent);

  if (md.mobile()) {
    backgroundFallback.classList.add('show');
  }

  // if user resizes browser refresh browsers so mobile / desktop button are reloaded

  window.addEventListener('resize', function (e) {
    if (window.innerWidth > 767 && !md.mobile()) {
      // prevent reloading on mobile devices
      console.log('resize');
      clearTimeout(resizeTimeout);
      var resizeTimeout = setTimeout(function () {
        location.reload();
      }, 1500);
    }
  });

  // utility functions	

  function arrayFromObject(object, key) {
    var array = [];
    if (key) {
      for (var key in object) {
        array.push(_defineProperty({}, key, object[key]));
      }
    } else {
      for (var key in object) {
        array.push(object[key]);
      }
    }
    return array;
  }

  // smooth scroll 
  function jump(target, options) {
    var start = window.pageYOffset;
    var opt = {
      duration: options.duration,
      offset: options.offset || 0,
      callback: options.callback,
      easing: options.easing || easeInOutQuad
    };

    var distance = typeof target === 'string' ? opt.offset + document.querySelector(target).getBoundingClientRect().top : target;

    var duration = typeof opt.duration === 'function' ? opt.duration(distance) : opt.duration;

    var timeStart = null,
        timeElapsed;

    requestAnimationFrame(function (time) {
      timeStart = time;loop(time);
    });

    // Robert Penner's easeInOutQuad - http://robertpenner.com/easing/
    function easeInOutQuad(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t + b;
      t--;
      return -c / 2 * (t * (t - 2) - 1) + b;
    }

    function loop(time) {
      if (timeStart === null) timeStart = time;

      timeElapsed = time - timeStart;

      window.scrollTo(0, opt.easing(timeElapsed, start, distance, duration));

      if (timeElapsed < duration) requestAnimationFrame(loop);else end();
    }

    function end() {
      window.scrollTo(0, start + distance);
      console.log('end');
      typeof opt.callback === 'function' && opt.callback();
      timeStart = null;
    }
  }

  var pageUrl = location.hash ? stripHash(location.href) : location.href;

  function stripHash(url) {
    return url.slice(0, url.lastIndexOf('#'));
  }

  function isInPageLink(n) {
    if (n.tagName.toLowerCase() === 'svg' || n.tagName.toLowerCase() === 'path') {
      return true;
    } else {
      return n.tagName.toLowerCase() === 'a' && n.hash.length > 0 && stripHash(n.href) === pageUrl;
    }
  }

  function onClick(e) {
    console.dir(e.target);
    if (!isInPageLink(e.target)) {
      // console.log(e.target)
      return;
    } else {
      e.stopPropagation();
      e.preventDefault();

      if (e.target.tagName.toLowerCase() === 'path') {
        if (e.target.parentNode.parentNode.hash) {
          jump(e.target.parentNode.parentNode.hash, {
            duration: 500
          });
        }
      } else if (e.target.tagName.toLowerCase() === 'svg') {
        if (e.target.parentNode.hash) {
          jump(e.target.parentNode.hash, {
            duration: 500
          });
        }
      } else {
        jump(e.target.hash, {
          duration: 500
        });
      }
    }
  }

  document.body.addEventListener('click', onClick, false); // Smooth scroll link eventListener


  function loadContent(e, selection, mobile) {

    var item = parseInt(e.target.dataset.array);

    fetch('../data/siteData.json').then(function (response) {
      return response.json();
    }).then(function (json) {
      console.log(json[selection]);

      var data1 = arrayFromObject(json[selection])[item];
      var data2 = !mobile ? arrayFromObject(json[selection])[item + 1] : null;

      console.log(data1.title);

      update[selection](data1, data2, e.target);
    });
  }

  var update = function updater() {
    var appButtons = document.querySelectorAll('.webapps .title button');
    var siteButtons = document.querySelectorAll('.websites .title button');
    var links = document.querySelectorAll('.container .left-col a');
    var titles = document.querySelectorAll('.container .right-col h3');
    var images = document.querySelectorAll('.container .left-col img');
    var descriptions = document.querySelectorAll('.container .right-col p');
    var techBadges = document.querySelectorAll('.container .right-col .tech-list');

    function webApps(data1, data2, btn) {
      links[0].href = data1.url;
      titles[0].textContent = data1.title;
      images[0].src = data1.img;
      images[0].alt = data1.title;

      images[0].addEventListener('load', function (e) {// do we need ?
      });

      descriptions[0].textContent = data1.blurb;

      techBadges[0].innerHTML = "";
      techBadges[1].innerHTML = "";

      data1.badges.forEach(function (badge) {
        var listItem = document.createElement('li');
        listItem.innerHTML = svgLibrary[badge];
        techBadges[0].appendChild(listItem);
      });

      if (data2) {
        // if data 2 is null we are updating mobile and ignore this
        links[1].href = data2.url;
        titles[1].textContent = data2.title;
        images[1].src = data2.img;
        images[1].alt = data2.title;
        descriptions[1].textContent = data2.blurb;

        data2.badges.forEach(function (badge) {
          var listItem = document.createElement('li');
          listItem.innerHTML = svgLibrary[badge];
          techBadges[1].appendChild(listItem);
        });
      }
      appButtons.forEach(function (btn) {
        return btn.classList.remove('active');
      });
      btn.classList.add('active');
    }

    function webSites(data1, data2, btn) {
      links[2].href = data1.url;
      titles[2].textContent = data1.title;
      images[2].src = data1.img;
      images[2].alt = data1.title;
      descriptions[2].textContent = data1.blurb;

      techBadges[2].innerHTML = "";

      data1.badges.forEach(function (badge) {
        var listItem = document.createElement('li');
        listItem.innerHTML = svgLibrary[badge];
        techBadges[2].appendChild(listItem);
      });

      if (data2) {
        // if data 2 is null we are updating mobile and ignore this
        links[3].href = data2.url;
        titles[3].textContent = data2.title;
        images[3].src = data2.img;
        images[3].alt = data2.title;
        descriptions[3].textContent = data2.blurb;

        techBadges[3].innerHTML = "";

        data2.badges.forEach(function (badge) {
          var listItem = document.createElement('li');
          listItem.innerHTML = svgLibrary[badge];
          techBadges[3].appendChild(listItem);
        });
      }

      siteButtons.forEach(function (btn) {
        return btn.classList.remove('active');
      });
      btn.classList.add('active');
    }

    return {
      Webapps: webApps,
      Websites: webSites
    };
  }();

  var title = document.querySelectorAll('.container .right-col h3');

  var slidingPanelButton = document.querySelector('.sliding-panel-button');

  var slidingPanelClose = document.querySelector('.sliding-panel-close');
  var slidingPanelContent = document.querySelector('.off-canvas-menu');

  var navMenuItems = Array.from(document.querySelectorAll('.off-canvas-menu ul li a'));

  var emailButton = document.querySelector('.email-btn');
  var phoneButton = document.querySelector('.phone-btn');
  var githubButton = Array.from(document.querySelectorAll('.github-btn'));
  var instagramButton = document.querySelector('.instagram-btn');

  slidingPanelButton.addEventListener('click', function (e) {
    slidingPanelButton.classList.toggle('open');
    slidingPanelContent.classList.toggle('is-visible');
  });

  var spans = Array.from(document.querySelectorAll('.sliding-panel-button span'));

  console.log(navMenuItems);

  navMenuItems.forEach(function (item) {
    item.addEventListener('click', function (e) {
      console.log('open!');
      slidingPanelButton.classList.toggle('open');
      slidingPanelContent.classList.toggle('is-visible');
    });
  });

  instagramButton.addEventListener('click', function (e) {
    e.preventDefault();
    window.location.href = "https://www.instagram.com/motbollox/";
  });

  emailButton.addEventListener('click', function (e) {
    e.preventDefault();
    window.location.href = "mailto:talk@tbullock.net";
  });

  phoneButton.addEventListener('click', function (e) {
    e.preventDefault();
    window.location.href = "tel:0403703950";
  });

  githubButton.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      window.location.href = "https://github.com/ThomasBullock";
    });
  });

  var deskAppButtons = Array.from(document.querySelectorAll('.webapps .title .desktop-buttons button'));
  var deskSiteButtons = Array.from(document.querySelectorAll('.websites .title .desktop-buttons button'));

  deskAppButtons.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      loadContent(e, "Webapps");
    }, false);
  });

  deskSiteButtons.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      loadContent(e, "Websites");
    }, false);
  });

  /// Mobile ////

  var mobAppButtons = Array.from(document.querySelectorAll('.webapps .title .mob-buttons button'));
  var mobSiteButtons = Array.from(document.querySelectorAll('.websites .title .mob-buttons button'));

  mobAppButtons.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      loadContent(e, "Webapps", true);
    }, false);

    btn.addEventListener('touchstart', function (e) {
      loadContent(e, "Webapps", true);
    }, false);
  });

  mobSiteButtons.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      loadContent(e, "Websites", true);
    }, false);
    btn.addEventListener('touchstart', function (e) {
      loadContent(e, "Websites", true);
    }, false);
  });
})(window);

//# sourceMappingURL=app.js.map