function lanjut() {
  document.getElementById('introBox').style.display = 'none';
  document.getElementById('mainContent').style.display = 'block';

  document.getElementById("backgroundMusic").play();

  let teks = [
    "<h2>👾 Selamat Datang di Eskul Informatika!</h2>",
    "Kamu suka teknologi, komputer, atau pengen bisa coding kayak hacker di film?",
    "Di sini kamu bisa belajar hal-hal seru seperti membuat website, desain, animasi, robotik, bahkan AI 🤖",
    "Tenang, semua dimulai dari dasar — bareng teman-teman dan kakak kelas yang siap bantuin!",
    "Gak harus jago dulu, yang penting kamu penasaran dan mau belajar 💡",
    "Yuk jadi bagian dari generasi digital di sekolahmu!"
  ];

  let instance = new TypeIt(".messageC", {
    speed: 50,
    waitUntilVisible: true,
    lifeLike: true,
    cursor: true,
    afterComplete: function () {
      document.getElementById("btnShowModal").style.display = "inline-block";
    }
  });

  teks.forEach((t, i) => {
    instance.type(t).pause(600).break();
  });

  instance.go();
}

function showModal() {
  document.getElementById("modalOverlay").style.display = "flex";
}

function goToWhatsApp(jawaban) {
  let phone = "6282280204824";
  let pesan = jawaban === "Iya"
    ? "Saya tertarik gabung Eskul Informatika. Gimana caranya ya?"
    : "Terima kasih infonya! Saya pikir-pikir dulu yaa 😅";

  window.location.href = `https://wa.me/${phone}?text=${encodeURIComponent(pesan)}`;
}