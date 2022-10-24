let domain = "https://masdupan.com/"
let database = [
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
let artikel = "";
// buat artikel 
for (let i = 1; i < database.length; i++) {
  artikel += "<a id='" + database[i].data.id + "'>" + database[i].data.artikel + "</a>"+ "<br>";
}
document.getElementById("css0").innerHTML = artikel;
// buat link artikel 
for (var i = 1; i < database.length; i++) {
  document.getElementById("css" + i).setAttribute("href", domain +  database[i].data.folder+  database[i].data.link,);
};
