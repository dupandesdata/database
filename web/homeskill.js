let domain = "https://dupancode.my.id/";

let databaseHtml = [
  {
    data: {
      id: "html0",
      artikel: "",
      link: "",
    }
  },
  {
    data: {
      id: "html1",
      artikel: "Apa Itu Internet",
      link: "html1.html",
      folder: "materi/"
    }
  },
  {
    data: {
      id: "html2",
      artikel: "Domain dan DNS Server",
      link: "html2.html",
      folder: "materi/"
    }
  },
  {
    data: {
      id: "html3",
      artikel: "Pengenalan Web Hosting",
      link: "html3.html",
      folder: "materi/"
    }
  }
];

let databaseCss = [
  {
    data: {
      id: "css0",
      artikel: "",
      link: "",
    }
  },
  {
    data: {
      id: "css1",
      artikel: "Pengertian Struktur Dasar",
      link: "css1.html",
      folder: "materi/"
    }
  },
  {
    data: {
      id: "css2",
      artikel: "Pengertian Selector Dasar",
      link: "css2.html",
      folder: "materi/"
    }
  },
  {
    data: {
      id: "css3",
      artikel: "mengenal Property dan Value",
      link: "css3.html",
      folder: "materi/"
    }
  }
];

let databaseJs = [
  {
    data: {
      id: "js0",
      artikel: "",
      link: "",
    }
  },
  {
    data: {
      id: "js1",
      artikel: "Sejarah dan Perkembangan JavaScript",
      link: "javascript1.html",
      folder: "materi/"
    }
  },
  {
    data: {
      id: "js2",
      artikel: "Type data JavaScript",
      link: "javascript2.html",
      folder: "materi/"
    }
  },
  {
    data: {
      id: "js3",
      artikel: " JavaScript Type Number",
      link: "javascript3.html",
      folder: "materi/-"
    }
  }
];

// variabel
let materiHtml = document.getElementById("html0");
let materiCss = document.getElementById("css0");
let materiJs = document.getElementById("js0");
let artikelHtml = "";
let artikelJs = "";

let artikelHtml = "";
// buat artikel
for (let i = 1; i < databaseCss.length; i++) {
  artikelCss += "<a id='" + databaseCss[i].data.id + "'>" + databaseCss[i].data.artikel + "</a>" + "<br>";
};
for (let i = 1; i < databaseHtml.length; i++) {
  artikelHtml += "<a id='" + databaseHtml[i].data.id + "'>" + databaseHtml[i].data.artikel + "</a>" + "<br>";
};
for (let i = 1; i < databaseJs.length; i++) {
  artikelHtml += "<a id='" + databaseHtml[i].data.id + "'>" + databaseHtml[i].data.artikel + "</a>" + "<br>";
};

// buat link artikel

const body = document.body;
body.onload = myFunction;
function myFunction() {
  if (materiHtml !== null && materiCss !== null) {
    materiHtml.innerHTML = artikelHtml;
    materiCss.innerHTML = artikelCss;
    materiJs.innerHTML = artikelJs;
    for (var i = 1; i < databaseHtml.length; i++) {
      document.getElementById("html" + i).setAttribute("href", domain + databaseHtml[i].data.folder + databaseHtml[i].data.link);
    }
    for (var i = 1; i < databaseCss.length; i++) {
      document.getElementById("css" + i).setAttribute("href", domain + databaseCss[i].data.folder + databaseCss[i].data.link);
    }
    for (var i = 1; i < databaseJs.length; i++) {
      document.getElementById("js" + i).setAttribute("href", domain + databaseJs[i].data.folder + databaseJs[i].data.link);
    }
  }
}
const button = document.querySelector("#menu-sidebar");
button.onclick = function (myTap) {
  var target = myTap.target;
  if (target.id === "btn-html") {
    materiHtml.style.display = "block";
    materiCss.style.display = "none";
    materiJs.style.display = "none";
  } else if (target.id === "btn-css") {
    materiCss.style.display = "block";
    materiHtml.style.display = "none";
    materiJs.style.display = "none";
  } else if (target.id === "btn-css") {
    materiJs.style.display = "block";
    materiHtml.style.display = "none";
    materiCss.style.display = "none";
  }
};
