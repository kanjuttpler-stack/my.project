// Animasi fade-in otomatis saat halaman load
document.addEventListener('DOMContentLoaded', function() {
  const container = document.querySelector('.container');
  container.style.opacity = '1'; // Memastikan animasi berjalan
});

// Fungsi untuk mencetak CV (menggunakan window.print)
document.getElementById('print-btn').addEventListener('click', function() {
  window.print();
});

// Opsional: Toggle untuk section (misalnya, sembunyikan/tampilkan section saat klik h2)
document.querySelectorAll('h2').forEach(function(header) {
  header.addEventListener('click', function() {
    const nextElement = header.nextElementSibling;
    if (nextElement && (nextElement.tagName === 'TABLE' || nextElement.tagName === 'UL')) {
      nextElement.style.display = nextElement.style.display === 'none' ? 'block' : 'none';
    }
  });
});