function simpanInput(event) {
    renderKhodam();
    event.preventDefault();

    const namaPengguna = document.getElementById('nama').value.trim();
    const storageKey = `khodam_${namaPengguna}`;

    if (namaPengguna === "") {
        document.getElementById("output").innerText = "Silakan masukkan nama terlebih dahulu.";
        return;
    }

    // Cek apakah sudah pernah disimpan
    const storedResult = localStorage.getItem(storageKey);
    if (storedResult) {
        document.getElementById("output").innerText = `Khodam anda sudah tersimpan dan tidak bisa diubah: ${storedResult}`;
        document.querySelector(".MemeImg").innerHTML = `<div class="mt-4"><img src="${localStorage.getItem(storageKey + '_image')}" class="rounded-lg shadow-lg w-60" /></div>`;
        return;
    }

    // Daftar Khodam + Gambar
    const list = [
        { nama: 'Ayanokouji 🥶', prob: 0.01, src: './img/Ayanokoji.jpeg' },
        { nama: 'Sigit Rendang 😂', prob: 0.1, src: './img/Sigit rendang.jpg' },
        { nama: 'Laba-laba Sunda 😂', prob: 0.1, src: './img/laba laba sunda.jpeg' },
        { nama: 'Putri Kecil Ayah 🤣', prob: 0.2, src: './img/putri kecil ayah.png' },
        { nama: 'Bahlil Flashbang 💥', prob: 0.2, src: './img/Bahlil flasbang.jpg'},

        // Via Link address
        { nama: 'Rehan Digital', prob: 0.3, src: 'https://i.pinimg.com/1200x/8e/b9/3b/8eb93b3fc2c2b04fdbd1655b7860aea9.jpg' },
        { nama: 'Raja Karbit 🤣', prob: 0.3, src: 'https://i.pinimg.com/736x/8f/5d/af/8f5dafda27c55f0da363cd23e21c990e.jpg' },
        { nama: 'Raja JMK 🤣', prob: 0.4, src: 'https://i.pinimg.com/736x/20/8d/ef/208def2cba089d7815b640ed77fae64f.jpg' },
        { nama: 'Raja Pedo 🫣', prob: 0.4, src: 'https://i.pinimg.com/736x/23/e0/36/23e036adb51c2cfb1d99e6d4556e7a5d.jpg' },
        { nama: 'Member JMK 😂', prob: 0.5, src: 'https://i.pinimg.com/1200x/ec/b6/d5/ecb6d506aa4fa5d83def21187a00e942.jpg' },
        { nama: 'Karbit Pemula 😂', prob: 0.5, src: 'https://i.pinimg.com/736x/05/c7/e6/05c7e6ebfea086c7229888193b5e835a.jpg' },
        { nama: 'Si Hitam Coklat 🤣', prob: 0.6, src: 'https://i.pinimg.com/736x/8f/b8/86/8fb8861f5694777b2b729ba57a7db6dd.jpg' },
        { nama: 'Si Putih Susu 🤣', prob: 0.6, src: 'https://i.pinimg.com/736x/ca/9c/70/ca9c7027ed2a55f6fc95c81996bb63e9.jpg' },
        { nama: 'Admin PSHT 🤣', prob: 0.7, src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSYTUYw8qNo0qFl2_BOLLenBlQpZRlmpYoSg&s' },
        { nama: 'Kapal Jetski Cilacap 😂', prob: 0.7, src: 'https://pbs.twimg.com/media/GzCwJzyWAAA56QI.jpg' },
        { nama: 'Ikan Pesut kali Ciliwung 🤣', prob: 0.8, src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCPJiS3t7m5hOp_S4BGPsUZmYTSpZ0NdUV2Q&s' },
        { nama: 'Ganjar Sigma 😂', prob: 0.8, src: 'https://i.pinimg.com/736x/53/bb/f8/53bbf88737261d9afae276c0dbfad69a.jpg'},
        { nama: 'Verrell Takos Animobulets 🤣', prob: 0.9, src: 'https://i.pinimg.com/736x/bf/4d/a3/bf4da332f78d3af3c90730b86566c9b8.jpg'},
        { nama: 'Vincent Dua Orang 🥶', prob: 0.9, src: 'https://i.pinimg.com/736x/a0/77/d8/a077d85e762f6ce88bea4b7df543ce6f.jpg'},
        { nama: 'Farhan Uget Uget 🤣', prob: 0.10, src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv9C9k_RbOXkWeRVE2Gj_ciA-sGlA-VKhY4Q&s'},
        { nama: 'Fajar Basikal 😋', prob: 0.10, src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-9mr322nESFgsxpfrNb_hQRcnaaUwnnuQSw&s'},
        { nama: 'Mas Amba 🥶', prob: 0.11, src: 'https://i.pinimg.com/736x/28/8f/23/288f230d1ac9d02e4923930ef0b63ab1.jpg'},
        { nama: 'Wowo Pecinta Sawit 😘', prob: 0.11, src: 'https://i.pinimg.com/736x/75/3b/3d/753b3d0b667226085221c28070722143.jpg'}
    ]

    const rand = Math.random();
    const totalProb = list.reduce((acc, item) => acc + item.prob, 0);
    let sum = 0;
    let result = "";
    let image = "";

    for (let i = 0; i < list.length; i++) {
        sum += list[i].prob / totalProb;
        if (rand < sum) {
            result = list[i].nama;
            image = list[i].src;
            break;
        }
    }

    localStorage.setItem(storageKey, result);
    localStorage.setItem(storageKey + '_image', image);
    document.getElementById("output").innerText = `Khodam anda : ${result}`;
    document.querySelector(".MemeImg").innerHTML = `
        <div class="mt-4">
            <img src="${image}" alt="${result}" class="rounded-lg shadow-lg w-60" />
        </div>
    `;

    console.log(`Random: ${rand}`);
    renderKhodam();
}

const hariIni = new Date();
const hari = hariIni.getDay(); 

if (hari === 0) {
    console.log("Hari ini Senin! Waktunya reset.");
    resetRandom();
    tampilkanSemuaKhodam();
}


function resetRandom() {
    const keysToDelete = [];
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key.startsWith("khodam_")) {
            keysToDelete.push(key);
        }
    }

    keysToDelete.forEach(key => localStorage.removeItem(key));
    localStorage.removeItem("last_khodam_user");
    document.getElementById("output").innerText ="Semua data khodam berhasil di-reset.";
    document.querySelector(".MemeImg").innerHTML = "";
    renderKhodam();
}

function tampilkanSemuaKhodam() {
    const container = document.getElementById("list-name");
    if (!container) return;

    let html = "";
    let found = false;

    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key.startsWith("khodam_") && !key.endsWith("_image")) {
            found = true;
            const name = key.replace("khodam_", "");
            const khodam = localStorage.getItem(key);
            const img = localStorage.getItem(key + "_image");
            html += `
                <div class="khodam-item">
                    <img src="${img}" alt="${khodam}">
                    <div>
                        <div class="khodam-name">${name}</div>
                        <div class="khodam-title">${khodam}</div>
                    </div>
                </div>
            `;
        }
    }

    container.innerHTML = found
        ? html
        : `<div class="text-gray-400 text-sm">Belum ada data tersimpan</div>`;
}

(function initKhodamList() {
    tampilkanSemuaKhodam();
})();

const renderKhodam = (() => {
    return function () {
        const container = document.getElementById("list-name");
        if (!container) return;

        let html = "";
        let found = false;

        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);

            if (key.startsWith("khodam_") && !key.endsWith("_image")) {
                found = true;

                const name = key.replace("khodam_", "");
                const khodam = localStorage.getItem(key);
                const img = localStorage.getItem(key + "_image");

                html += `
                    <div class="khodam-item">
                        <img src="${img}" alt="${khodam}">
                        <div>
                            <div class="khodam-name">${name}</div>
                            <div class="khodam-title">${khodam}</div>
                        </div>
                    </div>
                `;
            }
        }

        container.innerHTML = found
            ? html
            : `<div class="text-gray-400 text-sm">Belum ada data tersimpan</div>`;
    };
})();

