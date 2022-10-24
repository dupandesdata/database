let domain = "https://masdupan.com/"
let database = [
  {
    data: {
      id: "doc0",
      artikel: "",
      link: "",
    }
  },
  {
    data: {
      id: "doc1",
      artikel: "Apa Itu Internet",
      link: "apa-itu-internet.html",
      folder: "1-html/1-"
    }
  },
  {
    data: {
      id: "doc2",
      artikel: "Domain dan DNS Server",
      link: "domain-dan-dns-server.html",
      folder: "1-html/2-"
    }
  },
  {
    data: {
      id: "doc3",
      artikel: "Pengenalan Web Hosting",
      link: "pengenalan-web-hosting.html",
      folder: "1-html/3-"
    }
  }
];
let artikel = "";
// buat artikel 
for (let i = 1; i < database.length; i++) {
  artikel += "<a id='" + database[i].data.id + "'>" + database[i].data.artikel + "</a>"+ "<br>";
}
document.getElementById("doc0").innerHTML = artikel;
// buat link artikel 
for (var i = 1; i < database.length; i++) {
  document.getElementById("doc" + i).setAttribute("href", domain +  database[i].data.folder+  database[i].data.link,);
};
