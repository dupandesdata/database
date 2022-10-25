let domain = "https://masdupan.com/"

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
      link: "domain-dan-dns-server.html",
      folder: "materi/"
    }
  },
  {
    data: {
      id: "html3",
      artikel: "Pengenalan Web Hosting",
      link: "pengenalan-web-hosting.html",
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
      link: "pengertian-struktur-dasar.html",
      folder: "materi/"
    }
  },
  {
    data: {
      id: "css2",
      artikel: "Pengertian Selector Dasar",
      link: "pengertian-selector-dasar.html",
      folder: "materi/"
    }
  },
  {
    data: {
      id: "css3",
      artikel: "mengenal Property dan Value",
      link: "mengenal-property-dan-value.html",
      folder: "materi/"
    }
  }
]
// variabel
let materiHtml = document.getElementById("html0");
let materiCss = document.getElementById("css0");
let materiJs = document.getElementById("js0");
let artikelHtml = "";
let artikelCss = "";

// buat artikel
for (let i = 1; i < databaseCss.length; i++) {
  artikelCss += "<a id='" + databaseCss[i].data.id + "'>" + databaseCss[i].data.artikel + "</a>" + "<br>";
}
for (let i = 1; i < databaseHtml.length; i++) {
  artikelHtml += "<a id='" + databaseHtml[i].data.id + "'>" + databaseHtml[i].data.artikel + "</a>" + "<br>";
}

// buat link artikel
const body = document.body;
body.onload = myFunction;
function myFunction() {
  if (materiHtml !== null) {
    document.getElementById("html0").innerHTML = artikelHtml;
    for (var i = 1; i < databaseHtml.length; i++) {
      document.getElementById("html" + i).setAttribute("href", domain + databaseHtml[i].data.folder + databaseHtml[i].data.link);
    }
  } else if (materiHtml === null && materiCss !== null) {
    document.getElementById("css0").innerHTML = artikelCss;
    for (var i = 1; i < databaseCss.length; i++) {
      document.getElementById("css" + i).setAttribute("href", domain + databaseCss[i].data.folder + databaseCss[i].data.link);
    }
  } else if (materiCss === null && materiCss === null && materiJs !== null) {
    console.log("js ada");
  }
}
