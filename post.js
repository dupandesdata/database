let domain = "https://dupancode.my.id/"
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
    }
  },
  {
    data: {
      id: "html5",
      artikel: "Jenis Atribut HTML",
      folder: "materi/",
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
  },
  {
    data: {
      id: "html14",
      artikel: "Element Form",
      folder: "materi/",
    }
  },
  {
    data: {
      id: "html15",
      artikel: "Form Input Validasi",
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
      artikel: "Box Model",
      folder: "materi/"
    }
  },
  {
    data: {
      id: "css4",
      artikel: "Properti Display Default",
      folder: "materi/"
    }
  },
  {
    data: {
      id: "css5",
      artikel: "Background Color",
      folder: "materi/"
    }
  },
  {
    data: {
      id: "css6",
      artikel: "Font Properti",
      folder: "materi/"
    }
  },
  {
    data: {
      id: "css7",
      artikel: "Typography",
      folder: "materi/"
    }
  },
  {
    data: {
      id: "css8",
      artikel: "Border Properti",
      folder: "materi/"
    }
  },
  {
    data: {
      id: "css9",
      artikel: "Height dan Width",
      folder: "materi/"
    }
  },
  {
    data: {
      id: "css10",
      artikel: "Text Alignment",
      folder: "materi/"
    }
  },
  {
    data: {
      id: "css11",
      artikel: "Text Decoration",
      folder: "materi/"
    }
  },
  {
    data: {
      id: "css12",
      artikel: "Text Transformation",
      folder: "materi/"
    }
  },
  {
    data: {
      id: "css13",
      artikel: "CSS Style Link",
      folder: "materi/"
    }
  },
  {
    data: {
      id: "css14",
      artikel: "CSS Style List",
      folder: "materi/"
    }
  },
  {
    data: {
      id: "css15",
      artikel: "CSS Style Table",
      folder: "materi/"
    }
  },
  {
    data: {
      id: "css16",
      artikel: "CSS Position",
      folder: "materi/"
    }
  },
  {
    data: {
      id: "css17",
      artikel: "Z-index",
      folder: "materi/"
    }
  },
  {
    data: {
      id: "css18",
      artikel: "Overflow",
      folder: "materi/"
    }
  },
  {
    data: {
      id: "css19",
      artikel: "Float",
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
for (let i = 1; i < databaseCss.length; i++) {
  artikelCss += "<a id='" + databaseCss[i].data.id + "'>" + databaseCss[i].data.artikel + "</a>" + "<br>";
}
for (let i = 1; i < databaseHtml.length; i++) {
  artikelHtml += "<a id='" + databaseHtml[i].data.id + "'>" + databaseHtml[i].data.artikel + "</a>" + "<br>";
}
for (let i = 1; i < databaseJs.length; i++) {
  artikelJs += "<a id='" + databaseJs[i].data.id + "'>" + databaseJs[i].data.artikel + "</a>" + "<br>";
}

// buat link artikel
const body = document.body;
body.onload = myFunction;
function myFunction() {
  if (materiHtml !== null) {
    materiHtml.innerHTML = artikelHtml;
    for (var i = 1; i < databaseHtml.length; i++) {
      document.getElementById("html" + i).setAttribute("href", domain + databaseHtml[i].data.folder + databaseHtml[i].data.id);
    }
  } else if (materiHtml === null && materiCss !== null) {
    materiCss.innerHTML = artikelCss;
    for (var i = 1; i < databaseCss.length; i++) {
      document.getElementById("css" + i).setAttribute("href", domain + databaseCss[i].data.folder + databaseCss[i].data.id);
    }
  } else if (materiCss === null && materiCss === null && materiJs !== null) {
    materiJs.innerHTML = artikelJs;
    for (var i = 1; i < databaseJs.length; i++) {
      document.getElementById("javascript" + i).setAttribute("href", domain + databaseJs[i].data.folder + databaseJs[i].data.id);
    }
  }
// Box Output 
let window = document.querySelectorAll(".window");
for (var i = 0; i < window.length; i++) { 
window[i].innerHTML = '<div class="tab">Output</div><div class="window"><i class="fa-solid fa-house"></i><i class="fa-solid fa-rotate-right"></i><span class="url-out">localhost:8080/dupancode</span></div>';
}
}



