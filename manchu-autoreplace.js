var data = [{
    "title" : "ujui meyen, oron be toktobure arga",
    "content" : "oron be toktobure de, hashv erki ci ici erki baru tuwaha,\n ujui be hergen be emteli ton,\n jai hergen be juwei ton,\n ilaci hergen be tanggv j ton,\n duiici hergen be minggan j ton,\n sunjaci hergen be tumen j ton,\n aiibade tuwaha ci, dulenci ujui oron be araha. ton j hergen j fejergi de emu tongki gidefi, tereci ilan oron giyalafi,\n geli emu tongki dere, oron labdu oci gemu ilata oron giyalafi, emu tongki gidalambi.\n duiibuleci: << ilan jakvn ninggun juwe nadan emu sunja ilan ninggun duiin >> sere ton j oron be toktobure de, uju de araha hergen j fejilen emu tongki gidafi, ilan oron giyalafi geli emu tongki, geli ilan oron giyalafi, geli emu tongki gida. ere uju j tongki j dergingge emteli ton, jai tongki j dergingge tumen j ton, ilaci tongki j dergingge i j ton inu.\n ere faiidahangge << ilan tanggv jakvn ninggun i juwe minggan nadan tanggv uyunju emu tumen sunja minggan ilan tanggv ninju duiin >> sere ton inu:\n"
},{
    "title" : "cyi tshun",
    "content" : "kamcire arga, juwe ton be ishunde kamcihe bodoro de aiikabade cyi tshun j ton oci, oron toktobure koooli julergi kooli de adali akv.\n duiibuleci: emu cyi juwe tshun be, da tun j songkoi kamcire de, emu duiin, duiin sere ton bajinmbi. emu cyi juwe tshun juwe oron hergen tshun j ton. jai oron j hergen cyi i ton, ere emu cyi juwe tshun be da ton j songkoi kamcire de ujui oron j hergen jai oron j hergen gemu tshun j ton, ilaci oron j hergen teni cyi j ton ombi.\n jai turgun seci, juwe jijun j cyi tshun be ishunde kamcire bodoro, emu tob durbejengge dere banjinambi, banjinaha dere be emu tshun j tob durbejengge arbun emu tanggv de isinaha de teni emu cyi i tob durbejengge arbun ombi, emu cyi j tob durbejengge arbun emu tanggv de isinaha de teni emu jang ni tob durbejengge arbun ombi.\n geli duiibuleci: ninggun jang jakvn cyi sunja tshun be duiin jang sunja cyi nadan tshun j emgi kamcime bodoci, ilan emu ilan 0 duiin sunja sere ton bahambi, baha ton j ujui oron hergen j fejilen emu tongki gidafi, dereci emte oron giyalafi, emu tongki gida, ere ujui tongki j dele arahangge tshun j ton, jai tongki j dele araha cyi j ton, ilaci tongki j dele araha jang ni ton inu. cyi j bodofi, bahangge emte jang ni tob durbejengge arbun gvsin emu, emte cyi j tob durbejengge arbun gvsin, emu tshun j tob durbejengge arbun dehi inu. nikebumre faksalarame bodorongge ton j arbun be toktoburengge julergi kooli adali.\n cyi tshun i ton be da ton j songkoi kamcime bodofi, geli kamcime bodofi baha ton j oron be toktoburengge julergi de adali akv bimbi.\n duiibuleci: ninggun cyi juwe tshun be da ton j songkoi kamcime udu ombi seci, ninggun juwe be da ton j songkoi kamcime bodofi, baha ton be geli da ton j emgi kamcime bodofi, 0 baha juwe ilan jakvn ilan juwe jakvn sere ton j uju oron j hergen j fejergi de emu tongki gidafi, ereci amasi juwete oron giyalafi, emte tongki gida, erei ujui tongki de teiisulehe hergen tshun j ton, jai tongki de teiisulehe hergen cyi j ton inu, uttu oci bahangge emu cyi j ton durbejengge beyei arbun juwe tanggv gvsin jakvn, emte tshun j tob durbejengge beyei arbun ilan tanggv orin jakvn inu. aiinu uttu seci emu tshun tob durbejengge beye arbun emu minggan de isinaha de teni emu cyi j tob durbejengge arbun banjinara, emte cyi j tob durbejengge beyei arbun emu minggan de isinaha be teni emu jang ni tob durbejengge beyei arbun banjinara turgun kai.\n"
}];

var xmlhttp = new XMLHttpRequest();
var url = "mydata.json";





var manjudata = [];

var manjurules = [
    {
    "original": /a\*/ig,
    "manju":"???"},
    {
    "original": /a/ig,
    "manju":"???"},
    {
    "original": /e/ig,
    "manju":"???"},
    {
    "original": /e\*/ig,
    "manju":"???"},
    {"original": /\sj\s/ig,
    "manju":" ?????? "},
    {"original": /ii/ig,
    "manju":"??????"},
    {"original": /i\*/ig,
    "manju":"???"},
    {"original": /i/ig,
    "manju":"???"},
    {"original": /o\*/ig,
    "manju":"???"},
    {"original": /o/ig,
    "manju":"???"},
    {"original": /u\*/ig,
    "manju":"???"},
    {"original": /u/ig,
    "manju":"???"},
    {"original": /v/ig,
    "manju":"???"},
    {"original": /ng/ig,
    "manju":"???"},
    {"original": /cy/ig,
    "manju":"???"},
    {"original": /j'/ig,
    "manju":"???"},
    {"original": /s'/ig,
    "manju":"???"},
    {"original": /k'/ig,
    "manju":"???"},
    {"original": /g'/ig,
    "manju":"???"},
    {"original": /h'/ig,
    "manju":"???"},
    {"original": /dz/ig,
    "manju":"???"},
    {"original": /zr/ig,
    "manju":"???"},
    {"original": /sy/ig,
    "manju":"??????"},
    {"original": /tshy/ig,
    "manju":"??????"},
    {"original": /tsh/ig,
    "manju":"???"},
    {"original": /n/ig,
    "manju":"???"},
    {"original": /k/ig,
    "manju":"???"},
    {"original": /g/ig,
    "manju":"???"},
    {"original": /h/ig,
    "manju":"???"},
    {"original": /b/ig,
    "manju":"???"},
    {"original": /p/ig,
    "manju":"???"},
    {"original": /s/ig,
    "manju":"???"},
    {"original": /x/ig,
    "manju":"???"},
    {"original": /t/ig,
    "manju":"???"},
    {"original": /d/ig,
    "manju":"???"},
    {"original": /l/ig,
    "manju":"???"},
    {"original": /m/ig,
    "manju":"???"},
    {"original": /c/ig,
    "manju":"???"},
    {"original": /q/ig,
    "manju":"???"},
    {"original": /j/ig,
    "manju":"???"},
    {"original": /y/ig,
    "manju":"???"},
    {"original": /r/ig,
    "manju":"???"},
    {"original": /f/ig,
    "manju":"???"},
    {"original": /w/ig,
    "manju":"???"},
    {"original": /\./ig,
    "manju":"???"},
    {"original": /,/ig,
    "manju":"???"}];

var selecttitle = document.querySelectorAll("[id^=titletext]");
var selectcontent= document.querySelectorAll("[id^=content]");

var currenttitle = "";
var currentcontent = "";


jQuery(data).each(function(index, manjutext) {
            var titletext = manjutext["title"];
            var contenttext = manjutext["content"];
            jQuery(manjurules).each(function(index,rules) {
                var regexoriginal = rules["original"];
                var manjureplaced = rules["manju"];
                titletext = titletext.replace(regexoriginal,manjureplaced);
                contenttext = contenttext.replace(regexoriginal,manjureplaced);
            });
            var idtitle = "titletext" + index.toString();
            var idcontent = "contenttext" + index.toString();
            var finalentry = {
                "title-manju": titletext,
                "title-id": idtitle,
                "content-manju": contenttext,
                "content-id": idcontent
            };
            manjudata.push(finalentry);
        });


function showcontent() {
    jQuery(manjudata).each(function(index,info) {
        document.getElementById(info["title-id"]).innerHTML = info["title-manju"];
        document.getElementById(info["content-id"]).innerHTML = info["content-manju"];
    });
};

