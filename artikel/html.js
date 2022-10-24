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
      folder: "materi-"
    }
  },
  {
    data: {
      id: "html2",
      artikel: "Domain dan DNS Server",
      link: "domain-dan-dns-server.html",
      folder: "1-html/2-"
    }
  },
  {
    data: {
      id: "html3",
      artikel: "Pengenalan Web Hosting",
      link: "pengenalan-web-hosting.html",
      folder: "1-html/3-"
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
      folder: "2-css/1-"
    }
  },
  {
    data: {
      id: "css2",
      artikel: "Pengertian Selector Dasar",
      link: "pengertian-selector-dasar.html",
      folder: "2-css/2-"
    }
  },
  {
    data: {
      id: "css3",
      artikel: "mengenal Property dan Value",
      link: "mengenal-property-dan-value.html",
      folder: "2-css/3-"
    }
  }
];

let artikelHtml = "";
let artikelCss = "";
// buat artikel 
for (let i = 1; i < databaseHtml.length; i++) {
  artikelHtml += "<a id='" + databaseHtml[i].data.id + "'>" + databaseHtml[i].data.artikel + "</a>"+ "<br>";
}
for (let i = 1; i < databaseCss.length; i++) {
  artikelCss += "<a id='" + databaseCss[i].data.id + "'>" + databaseCss[i].data.artikel + "</a>"+ "<br>";
}
document.getElementById("html0").innerHTML = artikelHtml;
document.getElementById("css0").innerHTML = artikelCss;
// buat link artikel 
for (var i = 1; i < databaseHtml.length; i++) {
  document.getElementById("html" + i).setAttribute("href", domain +  databaseHtml[i].data.folder+  databaseHtml[i].data.link,);
};
for (var i = 1; i < databaseCss.length; i++) {
  document.getElementById("css" + i).setAttribute("href", domain +  databaseCss[i].data.folder+  databaseCss[i].data.link,);
};
