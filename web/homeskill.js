let domain = "https://dupancode.my.id/";
let databaseHtml = [
  {
    data: {
      id: "html0",
      artikel: "",
    }
  },
  {
    data: {
      id: "html1",
      artikel: "Apa Itu Internet",
      folder: "materi/"
    }
  },
  {
    data: {
      id: "html2",
      artikel: "Domain dan DNS Server",
      folder: "materi/"
    }
  },
  {
    data: {
      id: "html3",
      artikel: "Web Hosting",
      folder: "materi/"
    }
  },
  {
    data: {
      id: "html4",
      artikel: "Struktur Dokumen HTML Dasar",
      folder: "materi/",
      projectsName: "Dokumen HTML Dasar",
      projects: "projects/materi-"
    }
  },
  {
    data: {
      id: "html5",
      artikel: "Jenis Atribut HTML",
      folder: "materi/"
    }
  },
  {
    data: {
      id: "html6",
      artikel: "Element Container Dasar",
      folder: "materi/",
    }
  },
  {
    data: {
      id: "html7",
      artikel: "Element Heading",
      folder: "materi/",
    }
  },
  {
    data: {
      id: "html8",
      artikel: "Element Formating Teks",
      folder: "materi/",
    }
  },
  {
    data: {
      id: "html9",
      artikel: "Element Link",
      folder: "materi/",
    }
  },
  {
    data: {
      id: "html10",
      artikel: "Element List Item",
      folder: "materi/",
    }
  },
  {
    data: {
      id: "html11",
      artikel: "Element img",
      folder: "materi/",
    }
  },
  {
    data: {
      id: "html12",
      artikel: "Element Tabel",
      folder: "materi/",
    }
  },
  {
    data: {
      id: "html13",
      artikel: "Element Input",
      folder: "materi/",
    }
  }
];

let databaseCss = [
  {
    data: {
      id: "css0",
      artikel: "",
    }
  },
  {
    data: {
      id: "css1",
      artikel: "Struktur Dasar",
      folder: "materi/"
    }
  },
  {
    data: {
      id: "css2",
      artikel: "Selector Dasar",
      folder: "materi/"
    }
  },
  {
    data: {
      id: "css3",
      artikel: "Property dan Value",
      folder: "materi/"
    }
  },
  {
    data: {
      id: "css4",
      artikel: "Property Margin CSS",
      folder: "materi/"
    }
  }
];

let databaseJs = [
  {
    data: {
      id: "js0",
      artikel: "",
    }
  },
  {
    data: {
      id: "javascript1",
      artikel: "Sejarah dan Perkembangan JavaScript",
      folder: "materi/"
    }
  },
  {
    data: {
      id: "javascript2",
      artikel: "Struktur Dasar JavaScript",
      folder: "materi/"
    }
  },
  {
    data: {
      id: "javascript3",
      artikel: "Type data JavaScript",
      folder: "materi/"
    }
  },
  {
    data: {
      id: "javascript4",
      artikel: " JavaScript Type Number",
      folder: "materi/"
    }
  }
];

// variabel
let materiHtml = document.getElementById("html0");
let materiCss = document.getElementById("css0");
let materiJs = document.getElementById("js0");
let artikelHtml = "";
let artikelCss = "";
let artikelJs = "";

// buat artikel
for (let i = 1; i < databaseHtml.length; i++) {
  artikelHtml +=
    "<li><a id='" +
    databaseHtml[i].data.id +
    "'>" +
    databaseHtml[i].data.artikel +
    "</a></li>";
}
for (let i = 1; i < databaseCss.length; i++) {
  artikelCss +=
    "<li><a id='" +
    databaseCss[i].data.id +
    "'>" +
    databaseCss[i].data.artikel +
    "</a></li>";
}
for (let i = 1; i < databaseJs.length; i++) {
  artikelJs +=
    "</li><a id='" +
    databaseJs[i].data.id +
    "'>" +
    databaseJs[i].data.artikel +
    "</a></li>";
}
// buat link artikel
const body = document.body;
body.onload = myFunction;
function myFunction() {
  if (materiHtml !== null && materiCss !== null && materiJs !== null) {

    materiHtml.innerHTML = artikelHtml;
    materiCss.innerHTML = artikelCss;
    materiJs.innerHTML = artikelJs;

    for (var i = 1; i < databaseHtml.length; i++) {
      document.getElementById("html" + i).setAttribute("href", domain + databaseHtml[i].data.folder + databaseHtml[i].data.id);
    }
    for (var i = 1; i < databaseCss.length; i++) {
      document.getElementById("css" + i).setAttribute("href", domain + databaseCss[i].data.folder + databaseCss[i].data.id);
    }
    for (var i = 1; i < databaseJs.length; i++) {
      document.getElementById("javascript" + i).setAttribute("href", domain + databaseJs[i].data.folder + databaseJs[i].data.id);
    }
  }
}
