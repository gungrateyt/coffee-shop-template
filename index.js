export default {
  async fetch(request) {
    return new Response(getHtml(), {
      headers: { 'content-type': 'text/html;charset=UTF-8' },
    });
  },
};

function getHtml() {
  return `
  <!DOCTYPE html>
  <html lang="id">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Kekinian Coffee</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;800&display=swap" rel="stylesheet">
    <style>
      body {
        font-family: 'Poppins', sans-serif;
        background: #1f1b18;
        color: #f5f5f5;
      }
      .fade-in {
        opacity: 0;
        transform: translateY(20px);
        animation: fadeInUp 1s ease-out forwards;
      }
      @keyframes fadeInUp {
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
    </style>
  </head>
  <body class="overflow-x-hidden">

    <!-- HEADER -->
    <header class="bg-[#2e241e] shadow-lg sticky top-0 z-50">
      <div class="max-w-6xl mx-auto p-6 flex justify-between items-center">
        <h1 class="text-2xl font-bold text-[#d2a679]">Kekinian Coffee</h1>
        <nav class="space-x-6 text-sm md:text-base text-white">
          <a href="#menu" class="hover:text-[#d2a679] transition">Menu</a>
          <a href="#about" class="hover:text-[#d2a679] transition">Tentang</a>
          <a href="#contact" class="hover:text-[#d2a679] transition">Kontak</a>
        </nav>
      </div>
    </header>

    <!-- HERO -->
    <section class="text-center py-20 px-4 fade-in">
      <img src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1200&q=80" alt="coffee banner" class="w-full h-96 object-cover rounded-xl shadow-md mb-8">
      <h2 class="text-4xl md:text-5xl font-bold mb-4 text-[#d2a679]">Ngopi Dalam Gaya</h2>
      <p class="text-lg md:text-xl mb-6 text-gray-300">Nikmati suasana hangat dan elegan sambil menikmati kopi terbaik kami.</p>
      <a href="#menu" class="px-6 py-3 bg-[#d2a679] text-black rounded-full hover:bg-[#c59766] transition font-semibold">Lihat Menu</a>
    </section>

    <!-- MENU -->
    <section id="menu" class="max-w-6xl mx-auto px-4 mt-20 fade-in">
      <h3 class="text-3xl font-bold text-center text-[#d2a679] mb-10">Menu Spesial</h3>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        ${menuItem("Espresso", "Kopi hitam pekat dengan crema", "25.000", "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=500&q=80")}
        ${menuItem("Cappuccino", "Foam susu lembut dan rasa seimbang", "30.000", "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=500&q=80")}
        ${menuItem("Iced Caramel Latte", "Rasa karamel manis dan segar", "32.000", "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=500&q=80")}
      </div>
    </section>

    <!-- ABOUT -->
    <section id="about" class="max-w-4xl mx-auto mt-24 px-4 text-center fade-in">
      <h3 class="text-3xl font-bold text-[#d2a679] mb-6">Tentang Kami</h3>
      <p class="text-gray-300 leading-relaxed">Kekinian Coffee adalah tempat ngopi dengan nuansa hangat dan modern. Kami menggunakan biji kopi pilihan terbaik dari berbagai penjuru Nusantara dan dunia. Setiap cangkir kopi diracik oleh barista profesional untuk menghadirkan rasa dan aroma yang tak terlupakan.</p>
    </section>

    <!-- CONTACT -->
    <section id="contact" class="max-w-4xl mx-auto mt-24 px-4 mb-24 text-center fade-in">
      <h3 class="text-3xl font-bold text-[#d2a679] mb-6">Hubungi Kami</h3>
      <p class="text-gray-300 mb-4">📍 Jl. Kopi Elegan No. 12, Bandung<br>📞 0812-3456-7890<br>📧 kontak@kekiniancoffee.id</p>
      <div class="rounded-xl overflow-hidden shadow-lg border-4 border-[#2e241e]">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63353.65237514561!2d107.56075442805782!3d-6.914744370434871!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e62f23fd32f7%3A0x401e8f1fc28b440!2sBandung%2C%20Jawa%20Barat!5e0!3m2!1sen!2sid!4v1717717234101!5m2!1sen!2sid" 
          width="100%" height="350" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
        </iframe>
      </div>
    </section>

    <!-- FOOTER -->
    <footer class="bg-[#2e241e] text-white text-center p-4">
      <p>&copy; 2025 Kekinian Coffee. Hak cipta dilindungi.</p>
    </footer>

    <!-- SCROLL ANIMATION -->
    <script>
      const fadeElements = document.querySelectorAll(".fade-in");
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fadeIn");
          }
        });
      }, { threshold: 0.1 });

      fadeElements.forEach(el => observer.observe(el));
    </script>

  </body>
  </html>
  `;
}

function menuItem(title, desc, price, imageUrl) {
  return `
    <div class="bg-[#2e241e] rounded-xl shadow-lg overflow-hidden transform transition hover:scale-105">
      <img src="${imageUrl}" alt="${title}" class="w-full h-48 object-cover">
      <div class="p-4">
        <h4 class="text-xl font-semibold text-[#d2a679] mb-2">${title}</h4>
        <p class="text-gray-300 mb-2">${desc}</p>
        <span class="text-sm text-white bg-[#d2a679] px-3 py-1 rounded-full font-bold">${price}</span>
      </div>
    </div>
  `;
}
