/*Name this external file gallery.js*/

function upDate(previewPic){
    document.getElementById('image').style.backgroundImage = "url('+ previewPic.src +')";
    document.getElementById('image').backgroundColor = "#A8A8A8";
    document.getElementById('image').innerHTML = previewPic.alt;
}

function unDo(){
    document.getElementById('image').style.backgroundImage = "url('')";
    document.getElementById('image').innerHTML = "Hover over an image below to display here";

}