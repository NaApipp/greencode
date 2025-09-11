const myForm = document.getElementById('KelolaSampah');
const nameInput = document.getElementById('nama');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('telepon');

// Event listener untuk membersihkan input field nama secara real-time (hanya huruf dan spasi)
nameInput.addEventListener('input', function() {
  this.value = this.value.replace(/[^A-Za-z\s]+/g, '');
});

// Event listener untuk mengubah field email menjadi huruf kecil secara real-time
emailInput.addEventListener('input', function() {
  this.value = this.value.toLowerCase();
});

// Event listener untuk membersihkan field telepon secara real-time (hanya angka)
phoneInput.addEventListener('input', function() {
  this.value = this.value.replace(/[^0-9+\-]/g, '');
});

//Validasi No Telepon (+62, 62, 0)
form.addEventListener('submit', function(event) {
  const phone = phoneInput.value.trim();
  // Cek apakah nomor diawali +62, 62, atau 0
  if (!(/^(\+62|62|0)/.test(phone))) {
    event.preventDefault(); // cegah submit form
    alert('Nomor telepon harus diawali dengan +62, 62, atau 0');
  }
});

// Validasi saat form disubmit
myForm.addEventListener('submit', function(event) {
  const allName = nameInput.value.trim();
  const phoneNumber = phoneInput.value.trim();

  // Validasi panjang nama (minimal 5, maksimal 99 karakter)
  if (allName.length < 5 || allName.length > 99) {
    event.preventDefault();
    alert('Nama Lengkap minimal 5 karakter dan maksimal 99 karakter.');
    nameInput.focus();
    return;
  }

  // Validasi panjang nomor telepon (10 sampai 15 digit)
  if (phoneNumber.length < 10 || phoneNumber.length > 18) {
    event.preventDefault();
    alert('Nomor telepon harus memiliki antara 10 sampai 15 digit.');
    phoneInput.focus();
    return;
  }

});
