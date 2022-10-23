let domain = "https://www.dupancode.my.id/"

let database = [
  {
    data: {
      artikel: "Apa Itu Internet",
      link: "apa-itu-internet.html",
      postOn: "2020/01/"
    }
  },
  {
    data: {
      artikel: "Domain dan DNS Server",
      link: 'val2'
    }
  }
];


let dataArtikel = database
for (var i = 0; i < dataArtikel.length; i++) {
  var obj = dataArtikel[i]
  document.getElementById("docHtml" + i).setAttribute("href", domain + database[i].data.postOn + database[i].data.link,);
}
