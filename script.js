// Nomor WhatsApp tujuan
const WA_NUMBER = '6283839956072'; // ganti dengan nomor kamu

document.querySelectorAll('.order-btn').forEach(button => {
  button.addEventListener('click', () => {
    const paket = button.dataset.target;
    const pesan = encodeURIComponent(`Halo, saya mau order Bot WhatsApp paket ${paket}`);
    window.open(`https://wa.me/${WA_NUMBER}?text=${pesan}`, '_blank');
  });
});

document.getElementById('year').textContent = new Date().getFullYear();