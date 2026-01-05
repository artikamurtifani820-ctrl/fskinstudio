document.addEventListener("DOMContentLoaded", function () {

  // Waktu Footer
  function tampilWaktu() {
    const el = document.getElementById("waktu");
    if (!el) return;

    const sekarang = new Date();
    el.innerHTML = "Waktu: " + sekarang.toLocaleString("id-ID");
  }
  tampilWaktu();
  setInterval(tampilWaktu, 1000);

  // Booking form
  const bookingForm = document.querySelector("form");
  if (bookingForm) {
    bookingForm.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Terima kasih! Booking Anda berhasil.");
    });
  }

  // Gallery Zoom
  const images = document.querySelectorAll(".gallery .box img");
  if (images.length > 0) {
    images.forEach(img => {
      img.addEventListener("click", () => {
        const overlay = document.createElement("div");
        overlay.id = "gallery-overlay";
        overlay.innerHTML = `
          <img src="${img.src}" alt="${img.alt}">
          <span id="close-overlay">&times;</span>
        `;
        document.body.appendChild(overlay);

        document.getElementById("close-overlay")
          .addEventListener("click", () => overlay.remove());

        overlay.addEventListener("click", e => {
          if (e.target === overlay) overlay.remove();
        });
      });
    });
  }

});
