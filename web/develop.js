document.getElementById("container").innerHTML = "<h1>Catatan Pembelajaran Saya</h1>";
document.getElementById("containerB").innerHTML = "Copyright 2022";
const mediaQuery = window.matchMedia('(max-width: 768px)');
const img = "<img class='sertifikat-img' src= '"
let skillHtml = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEioQqurj_U9nI_WmZGnd-LHWkUVZCPqk3xbSQdER5ACDK9pKmIveaOh7HcCYUlktsk4N81VOfenrjGsDgvfSVB_oCAaZ6mcUGiyZiPChC30o0TzKZ5l_G9zkuJtRxgt4yLoTr5FF1Hz7rhdUcITNXsw6P79L2t3nTf6rCQFtIj1mS9IfsNfMLcZkIDoHA/s320/HTML_certificate%20%281%29.jpg"
let skillCss = ""
if (mediaQuery.matches) {
  document.querySelector('#imagesHtml-mobile').innerHTML = img + skillHtml + "'>" + "<p>HTML Dasar </p>"
}
else {
  document.querySelector('#imagesHtml').innerHTML = img + skillHtml + "'>" + "<p>HTML Dasar </p>"
  document.querySelector('#imagesCss').innerHTML = img + skillCss + "'>" + "<p>HTML Dasar </p>"
}
