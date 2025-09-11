const provinsi = document.getElementById("provinsi");
const kabupaten = document.getElementById("kabupaten");
const kecamatan = document.getElementById("kecamatan");
const kelurahan = document.getElementById("kelurahan");

// Load Provinsi
fetch("https://www.emsifa.com/api-wilayah-indonesia/api/provinces.json")
  .then(res => res.json())
  .then(data => {
    data.forEach(p => {
      const option = new Option(p.name, p.id);
      // Contoh disable selain Jawa Tengah dan DI Yogyakarta
      if (!(p.name === "JAWA TENGAH" || p.name === "DI YOGYAKARTA")) {
        option.disabled = true;
      }
      provinsi.add(option);
    });
  });

// Event Provinsi
provinsi.onchange = function() {
  kabupaten.length = 1; // reset
  kecamatan.length = 1;
  kelurahan.length = 1;

  if (this.value) {
    fetch(`https://www.emsifa.com/api-wilayah-indonesia/api/regencies/${this.value}.json`)
      .then(res => res.json())
      .then(data => {
        data.forEach(kab => {
          kabupaten.add(new Option(kab.name, kab.id));
        });
      });
  }
};

// Event Kabupaten
kabupaten.onchange = function() {
  kecamatan.length = 1;
  kelurahan.length = 1;

  if (this.value) {
    fetch(`https://www.emsifa.com/api-wilayah-indonesia/api/districts/${this.value}.json`)
      .then(res => res.json())
      .then(data => {
        data.forEach(kec => {
          kecamatan.add(new Option(kec.name, kec.id));
        });
      });
  }
};

// Event Kecamatan
kecamatan.onchange = function() {
  kelurahan.length = 1;

  if (this.value) {
    fetch(`https://www.emsifa.com/api-wilayah-indonesia/api/villages/${this.value}.json`)
      .then(res => res.json())
      .then(data => {
        data.forEach(ds => {
          kelurahan.add(new Option(ds.name, ds.id));
        });
      });
  }
};
