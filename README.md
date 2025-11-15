# 🎉 Happy Birthday Aurola Putri Sir - Interactive Website

Website birthday interaktif dengan tema Netflix untuk merayakan ulang tahun ke-22 Aurola Putri Sir pada 15 November.

## ✨ Fitur

### 1. **Tombol Nakal** 🎯
- Tombol yang susah diklik karena akan berpindah-pindah posisi saat mouse mendekat
- Harus diklik 10x untuk bisa masuk ke konten utama
- Memberikan pesan lucu setiap kali gagal diklik

### 2. **Opening Netflix** 📺
- Animasi intro ala Netflix yang keren
- Dengan efek suara (opsional)
- Transisi smooth ke konten utama

### 3. **Card Book System** 📖
- 6 halaman card yang bisa di-slide seperti buku
- Setiap card berisi:
  - Foto placeholder
  - Judul chapter
  - Deskripsi ucapan ulang tahun yang personal
- Navigasi dengan tombol atau keyboard (arrow keys)
- Animasi flip yang smooth

### 4. **Background Music** 🎵
- Musik birthday yang kalem (placeholder URL)
- Tombol kontrol musik (play/pause)
- Auto-play setelah Netflix intro

### 5. **Confetti Effect** 🎊
- Animasi confetti otomatis muncul di halaman terakhir
- Warna-warna ceria yang meriah

## 🎨 Design

- **Tema Warna**: Hitam & Merah (Netflix theme)
  - Background: `#141414` (hitam)
  - Accent: `#E50914` (merah Netflix)
- **Typography**: Modern dan bold
- **Animations**: Smooth transitions dan efek interaktif
- **Responsive**: Mobile-friendly

## 🚀 Cara Menggunakan

1. Buka file `index.html` di browser
2. Coba klik tombol yang nakal (10x) 😄
3. Nikmati opening Netflix
4. Jelajahi card-card ulang tahun dengan tombol navigasi
5. Gunakan arrow keys (←→) untuk navigasi cepat
6. Kontrol musik dengan tombol di pojok kanan atas

## 📁 Struktur File

```
birthday-aurola/
│
├── index.html          # Struktur HTML utama
├── style.css           # Styling dengan tema Netflix
├── script.js           # Logic interaktif dan animasi
└── README.md          # Dokumentasi
```

## 🎵 Catatan Musik

Link musik yang digunakan adalah placeholder. Untuk hasil terbaik, ganti dengan:
- **Background Music**: Link ke lagu "Happy Birthday" versi kalem dari hosting musik online
- **Netflix Sound**: Sound effect Netflix intro (opsional)

Rekomendasi sumber musik gratis:
- Bensound.com
- YouTube Audio Library
- Free Music Archive

## 🎨 Customization

### Mengganti Foto
Ganti URL placeholder di `index.html`:
```html
<img src="YOUR_IMAGE_URL_HERE" alt="Description">
```

### Mengganti Musik
Update URL di `index.html`:
```html
<audio id="bg-music" loop>
    <source src="YOUR_MUSIC_URL_HERE" type="audio/mpeg">
</audio>
```

### Mengubah Jumlah Klik Tombol
Edit di `script.js`:
```javascript
const maxClicks = 10; // Ubah angka sesuai keinginan
```

## 🌐 Browser Support

- Chrome ✅
- Firefox ✅
- Safari ✅
- Edge ✅

## 📝 Credits

Dibuat dengan ❤️ untuk Aurola Putri Sir

**Happy 22nd Birthday! 🎂🎉**

---

© 2024 - Birthday Special Project
