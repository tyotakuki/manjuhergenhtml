var xmlhttp = new XMLHttpRequest();
var url = "mydata.json";
var manjudata = [];

xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myArr = JSON.parse(this.responseText);

        var manjurules = [
            {
            "original": /a\*/ig,
            "manju":"ᠠ"},
            {
            "original": /a/ig,
            "manju":"ᠠ"},
            {
            "original": /e/ig,
            "manju":"ᡝ"},
            {
            "original": /e\*/ig,
            "manju":"ᡝ"},
            {"original": /\sj\s/ig,
            "manju":" ‍ᡳ "},
            {"original": /ii/ig,
            "manju":"‍ᡳ"},
            {"original": /i\*/ig,
            "manju":"‍ᡳ"},
            {"original": /i/ig,
            "manju":"‍ᡳ"},
            {"original": /o\*/ig,
            "manju":"ᠣ"},
            {"original": /o/ig,
            "manju":"ᠣ"},
            {"original": /u\*/ig,
            "manju":"ᡠ"},
            {"original": /u/ig,
            "manju":"ᡠ"},
            {"original": /v/ig,
            "manju":"ᡡ"},
            {"original": /ng/ig,
            "manju":"ᠩ"},
            {"original": /cy/ig,
            "manju":"ᡱ"},
            {"original": /j'/ig,
            "manju":"ᡷ"},
            {"original": /s'/ig,
            "manju":"ᡧ"},
            {"original": /k'/ig,
            "manju":"ᠺ"},
            {"original": /g'/ig,
            "manju":"ᡬ"},
            {"original": /h'/ig,
            "manju":"ᡭ"},
            {"original": /dz/ig,
            "manju":"ᡯ"},
            {"original": /zr/ig,
            "manju":"ᡰ"},
            {"original": /sy/ig,
            "manju":"ᠰᡟ"},
            {"original": /tshy/ig,
            "manju":"ᡮᡟ"},
            {"original": /tsh/ig,
            "manju":"ᡮ"},
            {"original": /n/ig,
            "manju":"ᠨ"},
            {"original": /k/ig,
            "manju":"ᡴ"},
            {"original": /g/ig,
            "manju":"ᡤ"},
            {"original": /h/ig,
            "manju":"ᡥ"},
            {"original": /b/ig,
            "manju":"ᠪ"},
            {"original": /p/ig,
            "manju":"ᡦ"},
            {"original": /s/ig,
            "manju":"ᠰ"},
            {"original": /x/ig,
            "manju":"ᡧ"},
            {"original": /t/ig,
            "manju":"ᡨ"},
            {"original": /d/ig,
            "manju":"ᡩ"},
            {"original": /l/ig,
            "manju":"ᠯ"},
            {"original": /m/ig,
            "manju":"ᠮ"},
            {"original": /c/ig,
            "manju":"ᠴ"},
            {"original": /q/ig,
            "manju":"ᠴ"},
            {"original": /j/ig,
            "manju":"ᠵ"},
            {"original": /y/ig,
            "manju":"ᠶ"},
            {"original": /r/ig,
            "manju":"ᡵ"},
            {"original": /f/ig,
            "manju":"ᡶ"},
            {"original": /w/ig,
            "manju":"ᠸ"},
            {"original": /\./ig,
            "manju":"᠉"},
            {"original": /,/ig,
            "manju":"᠈"}];



        jQuery(myArr.text).each(function(index, manjutext) {
                    var titletext = manjutext.title;
                    var contenttext = manjutext.content;
                    alert(titletext);
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

    }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();

function showcontent() {
            jQuery(manjudata).each(function(index,info) {
                document.getElementById(info["title-id"]).innerHTML = info["title-manju"];
                document.getElementById(info["content-id"]).innerHTML = info["content-manju"];
            });
};

