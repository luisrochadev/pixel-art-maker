var body = document.getElementsByTagName("section")[0];
body.style.margin = "0";
body.style.position = "fixed";
body.style.top = "0";

var grid = 0;

while (grid < 108) {
    var pixel = document.createElement("pixel");
    pixel.className = "pixel";
    pixel.style.width = "5vw";
    pixel.style.height = "5vw";
    pixel.style.float = "left";
    pixel.style.borderStyle = "solid";
    pixel.style.borderWidth = "1px";
    pixel.style.backgroundColor = "white";
    document.body.appendChild(pixel);
    grid++;
}



var paintbrush = "black";






$(".pixel").on("click", function () {
    $(this).css("background", paintbrush);
});


$(".brush").on("click", function () {
    paintbrush = this.style.backgroundColor;
});