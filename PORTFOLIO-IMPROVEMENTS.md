# Saran Perbaikan Portfolio untuk HRD

Hasil analisis konten dan kode portfolio (`en.json`, `DekstopHome.tsx`, `index.html`). Penilaian visual (warna, spacing) belum termasuk.

## Kesimpulan

Fondasi sudah bagus: layout rapi, ada bahasa EN/ID, ada tombol resume, ada pengalaman di Taiwan Mobile dan BPJS. Namun dalam 10–30 detik pertama, HRD belum mendapat jawaban atas: siapa Anda, apa dampaknya, dan bagaimana menghubungi Anda.

## Urutan perbaikan

- [x] **1. Perbaikan cepat**: label "Internal application" pada kartu project internal, typo, judul tab, favicon, Open Graph (preview link) + gambar preview.
- [ ] **2. Tulis ulang bullet pengalaman dengan angka dan dampak.**
- [ ] **3. Tambah ringkasan di atas**, plus section pendidikan, sertifikasi, dan bahasa.
- [ ] **4. Pilih project unggulan** dan beri label "Internal application" pada project yang tidak bisa dibuka.
- [ ] **5. Rapikan skill** menjadi daftar yang lebih fokus.

## Prioritas tinggi

1. **Tidak ada angka atau dampak.** Bullet pengalaman berisi tugas ("Developed and maintained…", "Conducted unit testing…"), bukan hasil. Contoh yang diinginkan HRD: "menurunkan waktu response API 40%", "melayani X ribu user", "memecah monolith menjadi N microservice".
2. **Tidak ada ringkasan di bagian atas.** Tagline masih generik. Contoh yang lebih konkret: "6+ tahun Full Stack Developer · Next.js, Node, FastAPI · saat ini di Taiwan Mobile". Total pengalaman sejak 2019 adalah nilai jual tetapi belum tertulis.
3. **Penanganan project internal belum jelas bagi pengunjung.**
   - AI Training Partner, Admin Dashboard, JWORKS, dan EPROC memang aplikasi internal sehingga tidak bisa dipublikasikan, jadi `link: "#"` itu disengaja, bukan link rusak.
   - Masalahnya ada di tampilan: kartu terlihat bisa diklik, dan klik memunculkan `alert()` "URL not available". Pengunjung tidak tahu bahwa itu karena aplikasi internal.
   - Saran: tampilkan label "Internal application" di kartu, hilangkan efek hover dan kursor pointer, dan hapus `alert()`.
   - ~~CCOD memakai link `r3store.co`~~ — sudah diperbaiki menjadi `https://ccod.synergics.digital`.
4. **Preview link saat dibagikan belum ada.** SEO untuk peringkat Google tidak diperlukan, karena HRD datang lewat link di CV, LinkedIn, atau WhatsApp. Yang perlu hanya agar link tampil baik saat dibagikan: `index.html` baru punya `<title>KHOIRUL HUDA</title>`, tanpa meta description, Open Graph, atau gambar preview, sehingga kartu preview di WhatsApp atau LinkedIn tampil kosong. Perbaiki juga judul tab (mis. "M. Khoirul Huda – Full Stack Developer") dan favicon yang masih `vite.svg` bawaan. Sitemap, robots.txt, dan structured data tidak perlu.
5. **Tidak ada section pendidikan, sertifikasi, atau bahasa.** HRD hampir selalu mencarinya. Kemampuan bahasa Inggris juga relevan karena bekerja di perusahaan Taiwan.

## Prioritas menengah

- **Typo di skill:** `Kubenetes` → Kubernetes, `Jenskin` → Jenkins, "Programing" → Programming.
- **Daftar skill muncul dua kali** (About dan Skills), dan 18 item tanpa tingkat kemahiran terlihat seperti keyword dump. Pilih 6–8 skill utama beserta konteks pemakaiannya.
- **11 project terlalu banyak dan setara.** Tandai 3–4 project unggulan, lipat sisanya.
- **Peran tidak konsisten.** Profil menulis "Full Stack Developer", deskripsi JWORKS menulis "Backend Developer". Selaraskan atau jelaskan.
- **Tidak ada foto profesional.** Membantu membangun kepercayaan, terutama untuk HRD Indonesia.
- **Tidak ada CTA yang jelas.** Tambahkan status "Open to work" dan pertimbangkan resume versi Indonesia.
- **Nomor telepon terpampang publik.** Pertimbangkan hanya email dan LinkedIn untuk menghindari spam.
- **Link sosial kurang relevan.** Instagram dan Twitter/X tidak membantu penilaian profesional. Utamakan GitHub dan LinkedIn, dan pastikan GitHub berisi repo yang layak dilihat.

## Orisinalitas dan teknis

- Layout dan kalimat footer sangat mirip template Brittany Chiang v4 (sidebar sticky kiri, konten scroll kanan, "Loosely designed in Figma and coded in Visual Studio Code…"). Tambahkan sentuhan khas sendiri, dan beri kredit atau ubah kalimat footer.
- Halaman hanya mode gelap (`class="dark"` terkunci), tanpa fallback terang.
- Belum ada bukti kualitas: link GitHub per project, Lighthouse score, atau testimoni dari rekan atau atasan.

## Catatan

Angka dampak pada langkah 2 harus berasal dari pengalaman nyata dan tidak boleh dikarang. Siapkan datanya (metrik performa, jumlah user, ukuran tim, dll.) sebelum menulis ulang bullet.
