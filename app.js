function genQr() {
    var gapi = "https://chart.googleapis.com/chart?chf=bg,s,65432100&cht=qr&chs=";
    var myimg = document.getElementById("img");
    var text = document.getElementById("text").value;
    var size = document.getElementById("size").value;

    if (text !== "" && size == "100") {
        myimg.src = gapi + "100x100" + "&chl=" + text;
    }
    else if (text !== "" && size == "150") {
        myimg.src = gapi + "150x150" + "&chl=" + text;
    }
    else if (text !== "" && size == "200") {
        myimg.src = gapi + "200x200" + "&chl=" + text;
    }
    else if (text !== "" && size == "250") {
        myimg.src = gapi + "250x250" + "&chl=" + text;
    }
    else if (text !== "" && size == "300") {
        myimg.src = gapi + "300x300" + "&chl=" + text;
    }
    else if (text !== "" && size == "400") {
        myimg.src = gapi + "400x400" + "&chl=" + text;}
    else {
        alert("Please enter the text");
    }
}