const DATA = {
  profile: {
    name: "Fadel",
    avatar: "img/me.jpg",
    status: "Ayo Berkolaborasi",
    email: "fm5355138@email.com",
    github: "https://github.com/fm5355138-pixel",
    instagram: "https://instagram.com/fzxdellw/",
    linkedin: "",
    whatsapp: "https://wa.me/6289509394128"
  },

  themes: [
    { id: "light", icon: "sun", title: "Light" },
    { id: "dark", icon: "moon", title: "Dark" },
    { id: "dim", icon: "bolt", title: "Yellow" },
    { id: "contrast", icon: "half", title: "Ramadan" },
    { id: "focus", icon: "heart", title: "Valentine" }
  ],

  nav: [
    { id: "beranda", label: "Beranda", icon: "home" },
    { id: "tentang", label: "Tentang", icon: "user" },
    { id: "pencapaian", label: "Pencapaian", icon: "award" },
    { id: "proyek", label: "Proyek", icon: "folder" },
    { id: "kegunaan", label: "Kegunaan", icon: "monitor" },
    { id: "kontak", label: "Kontak", icon: "mail" },
    { id: "links", label: "Playlist", icon: "spotify" }
  ],

  hero: {
    title: "Hi, saya Fadel Muhammad",
    subtitle: "Web Developer & UI/UX Design.",
    meta: [
      { icon: "location", text: "Smk Taruna Bangsa, Kota Bekasi" },
      { icon: "briefcase", text: "Open to Collaboration" }
    ],
    p1: "Seorang Web Developer & UI/UX Design yang berdedikasi untuk membangun solusi digital yang berdampak. Saya spesialis dalam pengembangan platform web yang skalabel dan design tampilan yang user friendly menggunakan tech stack seperti PHP, TypeScript, Next.js, dan Figma.",
    p2: "Fokus saya adalah merancang arsitektur website yang terstruktur dengan baik, dan mudah dipelihara. Saya memadukan keahlian teknis dengan komunikasi proaktif dan kepemimpinan untuk memastikan setiap proyek memberikan kejelasan logis dan dampak nyata di dunia nyata."
  },

  skillTabs: [
    { id: "all", label: "Semua" },
    { id: "utama", label: "Utama" },
    { id: "frontend", label: "Front End" },
    { id: "backend", label: "Backend" },
    { id: "database", label: "Database" },
    { id: "tools", label: "Alat" }
  ],

  skills: [
    { name: "HTML", icon: "devicon-html5-plain colored", category: "utama" },
    { name: "CSS", icon: "devicon-css3-plain colored", category: "utama" },
    { name: "JavaScript", icon: "devicon-javascript-plain colored", category: "utama" },
    { name: "TailwindCSS", icon: "devicon-tailwindcss-plain colored", category: "frontend" },
    { name: "Bootstrap", icon: "devicon-bootstrap-plain colored", category: "frontend" },
    { name: "TypeScript", icon: "devicon-typescript-plain colored", category: "frontend" },
    { name: "PHP", icon: "devicon-php-plain colored", category: "backend" },
    { name: "Laravel", icon: "devicon-laravel-plain colored", category: "backend" },
    { name: "MySQL", icon: "devicon-mysql-plain colored", category: "database" },
    { name: "Git", icon: "devicon-git-plain colored", category: "tools" },
    { name: "GitHub", icon: "devicon-github-original colored", category: "tools" },
    { name: "Bun", icon: "devicon-bun-plain colored", category: "tools" }
  ],

  about: {
    paragraphs: [
      {
        id: "Saya adalah seorang pelajar yang punya semangat tinggi di dunia teknologi, khususnya dalam membangun pengalaman digital yang menarik. Sebagai seseorang yang mendalami Web Development sekaligus UI/UX Design, saya sangat menikmati proses mengubah ide mentah menjadi sebuah produk visual yang estetik dan fungsional. Bagi saya, coding bukan cuma soal baris perintah, tapi soal bagaimana menciptakan solusi yang bermanfaat bagi orang banyak.",
        en: "I am a student with a deep passion for technology, especially in building engaging digital experiences. As someone who studies Web Development alongside UI/UX Design, I really enjoy the process of turning raw ideas into aesthetic and functional visual products. For me, coding is not just about lines of commands — it's about creating solutions that benefit many people."
      },
      {
        id: "Dalam hal teknis, saya sehari-hari berkutat dengan PHP dan TypeScript untuk membangun sisi engine website yang tangguh dan interaktif. Namun, sebelum masuk ke bagian kode, saya biasanya menuangkan kreativitas saya di Figma terlebih dahulu. Di sana, saya merancang tampilan antarmuka yang modern dan memastikan pengalaman pengguna (user experience) terasa mulus dan nyaman saat digunakan.",
        en: "On the technical side, I spend my days working with PHP and TypeScript to build robust, interactive website engines. But before jumping into code, I usually pour my creativity into Figma first. There, I craft modern interfaces and make sure the user experience feels smooth and comfortable to use."
      },
      {
        id: "Meskipun masih berstatus pelajar, saya selalu haus akan tantangan baru dan terus mengikuti perkembangan teknologi terbaru. Fokus utama saya adalah terus belajar, bereksperimen dengan berbagai desain, dan menghasilkan proyek-proyek web yang tidak hanya keren dilihat, tapi juga efisien secara performa.",
        en: "Even though I'm still a student, I'm always hungry for new challenges and keep up with the latest tech trends. My main focus is to keep learning, experimenting with different designs, and producing web projects that not only look great but also perform efficiently."
      }
    ],
    signature: "Fadel",
    careers: [
      {
        role: { id: "University STAN", en: "University STAN" },
        company: { id: "NEXUS STAN", en: "NEXUS STAN" },
        period: { id: "", en: "" },
        detail: {
          id: "Menjadi salah satu anggota Tim Web Development untuk membangun website resmi event",
          en: "Become a member of the Web Development Team to build the official event website"
        },
        logo: "img/stan.webp"
      }
    ],
    education: [
      {
        name: { id: "Smk Taruna Bangsa", en: "Smk Taruna Bangsa" },
        meta: { id: "2024 - 2027 - Bekasi", en: "2024 - 2027 - Bekasi" },
        logo: "img/tb.webp"
      },
      {
        name: { id: "SMP IT Al-Manar", en: "SMP IT Al-Manar" },
        meta: { id: "2020 - 2023 - Bekasi", en: "2020 - 2023 - Bekasi" },
        logo: "img/almanar.webp"
      },
      {
        name: { id: "TK Odapusa", en: "TK Odapusa" },
        meta: { id: "2015 - 2019 - Bekasi", en: "2015 - 2019 - Bekasi" },
        logo: "img/tk.webp"
      }
    ]
  },

  projects: {
    typeTabs: [
      { key: "Semua", id: "Semua", en: "All" },
      { key: "Web", id: "Web", en: "Web" },
      { key: "Prototype", id: "Prototype", en: "Prototype" }
    ],
    categoryTabs: [
      { key: "Semua", id: "Semua", en: "All" },
      { key: "Proyek Pribadi", id: "Proyek Pribadi", en: "Personal Project" },
      { key: "Freelance", id: "Freelance", en: "Freelance" },
      { key: "Lomba", id: "Lomba", en: "Competition" }
    ],
    items: [
      {
        slug: "",
        github_raw: "fm5355138-pixel/Portofolio",
        title: "",
        desc: {
          id: "Website personal dan portfolio yang dibangun dari nol dengan fokus pada desain yang modern dan performa cepat.",
          en: "A personal website and portfolio built from scratch with a focus on modern design and fast performance."
        },
        image: "img/proyek/webprib.webp",
        tech: ["HTML", "CSS", "Javascript"],
        type: "Web",
        category: "Proyek Pribadi",
        featured: true,
        links: [
          { label: "Live", url: "#" },
          { label: "GitHub", url: "#" }
        ]
      },
      {
        slug: "truth-or-ledder",
        github_raw: "fm5355138-pixel/truth-or-ledder",
        title: "",
        desc: {
          id: "Game ular tangga berbasis web dengan tampilan simpel dan interaktif. Bisa dimainkan langsung di browser dengan pengalaman yang ringan dan seru.",
          en: "A web-based snakes & ladders game with a simple, interactive look. Playable directly in the browser with a light and fun experience."
        },
        image: "img/proyek/snake game.webp",
        tech: ["HTML", "CSS", "JavaScript"],
        type: "Web",
        category: "Proyek Pribadi",
        featured: false,
        links: [
          { label: "Demo", url: "https://permainanulartangga.vercel.app/" },
          { label: "Github", url: "" }
        ]
      },
      {
        slug: "smart-absensi",
        github_raw: "fm5355138-pixel/SmartAbsensi",
        title: "SmartAbsensi",
        desc: {
          id: "Sistem absensi kelas online dengan fitur pencatatan dan rekap kehadiran siswa. Fokus pada kemudahan penggunaan dan tampilan yang rapi.",
          en: "An online classroom attendance system with logging and recap features for student attendance. Focused on ease of use and a clean interface."
        },
        image: "img/proyek/smart-absensi.webp",
        tech: ["Typescript", "MySQL", "CSS"],
        type: "Web",
        category: "Lomba",
        featured: false,
        links: [
          { label: "Demo", url: "#" },
          { label: "Github", url: "#" }
        ]
      },
      {
        slug: "book-track",
        github_raw: "fm5355138-pixel/BookTrack",
        title: "BookTrack",
        desc: {
          id: "Website pencatatan buku dengan fitur input dan pengelolaan data yang mudah digunakan. Cocok untuk kebutuhan pribadi atau perpustakaan kecil.",
          en: "A book-tracking website with easy-to-use input and data-management features. A great fit for personal use or a small library."
        },
        image: "img/proyek/book-track.webp",
        tech: ["HTML", "CSS", "JavaScript"],
        type: "Web",
        category: "Proyek Pribadi",
        featured: false,
        links: [
          { label: "Demo", url: "#" },
          { label: "Github", url: "#" }
        ]
      },
      {
        slug: "landing-page-cafe",
        github_raw: "fm5355138-pixel/Landing-Page-Cafe",
        title: "Landing Page Cafe",
        desc: {
          id: "Desain landing page untuk cafe dengan tampilan yang menarik dan informatif. Menampilkan menu, Lokasi, dan kontak dengan desain yang rapi dan mudah dinavigasikan.",
          en: "A landing page design for a cafe with an engaging and informative look. Showcasing the menu, location, and contact info with a clean, easy-to-navigate design."
        },
        image: "img/proyek/landing-page-cafe.webp",
        tech: ["HTML", "CSS", "Javascript"],
        type: "Web",
        category: "Freelance",
        featured: false,
        links: [
          { label: "Live", url: "https://landing-cafe-five.vercel.app/" },
          { label: "Github", url: "#" }
        ]
      },
      {
        slug: "kasirku",
        github_raw: "fm5355138-pixel/KasirKu",
        title: "KasirKu",
        desc: {
          id: "Aplikasi kasir berbasis web dengan fitur pencatatan transaksi. Cocok untuk usaha kecil yang membutuhkan sistem kasir sederhana dan efisien.",
          en: "A web-based POS app with transaction logging features. Suitable for small businesses that need a simple and efficient cashier system."
        },
        image: "img/proyek/kasirku.webp",
        tech: ["TypeScript", "React", "Tailwind"],
        type: "Web",
        category: "Freelance",
        featured: false,
        links: [
          { label: "Live", url: "#" },
          { label: "Github", url: "https://github.com/fm5355138-pixel/KasirKu" }
        ]
      },
      {
        slug: "page-login",
        github_raw: "fm5355138-pixel/Page-Login",
        title: "Page Login",
        desc: {
          id: "Desain halaman login dengan tampilan modern dan user-friendly. Fokus pada kemudahan penggunaan dan estetika yang menarik untuk meningkatkan pengalaman pengguna.",
          en: "A login page design with a modern and user-friendly look. Focused on usability and attractive aesthetics to improve the user experience."
        },
        image: "img/proyek/page login.webp",
        tech: ["PHP", "CSS", "MySQL"],
        type: "Web",
        category: "Proyek Pribadi",
        featured: false,
        links: [
          { label: "Live", url: "#" },
          { label: "Github", url: "https://github.com/fm5355138-pixel/Page-Login" }
        ]
      },
      {
        slug: "website-pribadi-v1",
        github_raw: "fm5355138-pixel/Portofolio",
        title: "Website Pribadi V1",
        desc: {
          id: "Website pribadi versi pertama sebagai media untuk memperkenalkan diri, menampilkan karya, dan menunjukkan kemampuan di bidang pengembangan web.",
          en: "The first version of my personal website — a place to introduce myself, showcase my work, and demonstrate my web development skills."
        },
        image: "img/proyek/portofolio-v1.webp",
        tech: ["HTML", "CSS", "Javascript", "Bootstrap", "jQuery"],
        type: "Web",
        category: "Lomba",
        featured: false,
        links: [
          { label: "Live", url: "#" },
          { label: "Github", url: "#" }
        ]
      },
      {
        slug: "studyhub",
        github_raw: "fm5355138-pixel/Study-Hub",
        title: "StudyHub",
        desc: {
          id: "Study Hub merupakan aplikasi web yang dirancang sebagai pusat produktivitas belajar dengan berbagai fitur untuk membantu pengguna tetap fokus dan teratur.",
          en: "Study Hub is a web app designed as a learning productivity hub, packed with features to help users stay focused and organized."
        },
        image: "img/proyek/Study-Hub.webp",
        tech: ["HTML", "CSS", "Javascript", "Json"],
        type: "Web",
        category: "Proyek Pribadi",
        featured: false,
        links: [
          { label: "Live", url: "https://studyhub-tan.vercel.app/" },
          { label: "Github", url: "#" }
        ]
      },
      {
        slug: "kasir-pro",
        github_raw: null,
        title: "Kasir Pro",
        desc: {
          id: "Aplikasi Kasir yang dirancang untuk memudahkan proses transaksi di toko. Dengan fitur dua role yang memungkinkan admin dan kasir untuk mengelola produk, transaksi, dan laporan keuangan dengan mudah dan efisien.",
          en: "A POS app designed to simplify transactions in stores. With two-role support that lets admins and cashiers manage products, transactions, and financial reports easily and efficiently."
        },
        image: "img/proyek/kasirpro.webp",
        tech: ["PHP", "MySQL", "CSS"],
        type: "Web",
        category: "Freelance",
        featured: false,
        links: [
          { label: "Live", url: "#" },
          { label: "Github", url: "#" }
        ],

        detail: {
          id: `
          <h2>Tentang Proyek</h2>
          <p>
          KasirPro adalah aplikasi kasir berbasis web yang dikembangkan sebagai bagian dari 
          <strong>freelance project</strong>. Sistem ini dirancang untuk membantu operasional toko 
          dalam mengelola transaksi, stok barang, serta laporan keuangan secara terstruktur dan efisien.
          </p>

          <p>
          Aplikasi ini berfokus pada kemudahan penggunaan, tampilan yang informatif, serta 
          pengolahan data yang terintegrasi sehingga dapat digunakan oleh admin maupun kasir 
          dalam aktivitas sehari-hari.
          </p>

          <h2>Teknologi</h2>
          <ul>
            <li><strong>PHP</strong> — backend dan logika aplikasi</li>
            <li><strong>MySQL</strong> — manajemen database</li>
            <li><strong>HTML & CSS</strong> — tampilan antarmuka</li>
          </ul>

          <h2>Sistem & Keamanan</h2>
          <p>
          KasirPro menggunakan sistem autentikasi dengan dua role utama, yaitu <strong>Admin</strong> dan <strong>Kasir</strong>.
          </p>

          <ul>
            <li>Login multi-role (Admin & Kasir)</li>
            <li>Registrasi terbatas menggunakan <strong>kode rahasia toko</strong></li>
            <li>Kontrol akses berdasarkan peran pengguna</li>
          </ul>

          <p>
          Sistem ini memastikan bahwa tidak semua orang dapat membuat akun secara bebas, sehingga 
          keamanan data toko tetap terjaga.
          </p>

          <h2>Fitur Utama</h2>
          <ul>
            <li>Dashboard ringkasan data toko</li>
            <li>Tren omzet selama 7 hari</li>
            <li>Manajemen data barang</li>
            <li>Monitoring stok dan restock</li>
            <li>Pembuatan dan pencatatan nota</li>
            <li>Transaksi penjualan</li>
            <li>Riwayat penjualan</li>
            <li>Kas masuk dan kas keluar</li>
            <li>Laporan keuangan lengkap</li>
            <li>Ekspor data ke Excel (Google Spreadsheet) dan PDF</li>
          </ul>

          <h2>Dashboard</h2>
          <p>
          Dashboard menampilkan ringkasan kondisi toko secara real-time seperti total omzet, jumlah transaksi,
          jumlah produk, serta data barang yang perlu direstock. Terdapat juga visualisasi tren omzet selama 7 hari
          untuk membantu analisis sederhana.
          </p>

          <h2>Manajemen Produk</h2>
          <p>
          Admin dapat mengelola seluruh data barang yang dijual, termasuk menambahkan, mengedit, dan menghapus produk.
          Sistem juga memberikan informasi stok dan menandai barang yang perlu segera direstock.
          </p>

          <h2>Transaksi & Penjualan</h2>
          <p>
          Kasir dapat melakukan transaksi penjualan dengan mudah, menghasilkan nota secara otomatis,
          serta menyimpan seluruh riwayat transaksi ke dalam sistem untuk keperluan pelaporan.
          </p>

          <h2>Manajemen Keuangan</h2>
          <p>
          KasirPro menyediakan fitur pencatatan kas masuk dan kas keluar yang membantu pemilik toko 
          dalam memantau arus keuangan secara lebih transparan dan terorganisir.
          </p>

          <h2>Laporan & Ekspor Data</h2>
          <p>
          Sistem menyediakan laporan lengkap terkait penjualan dan keuangan yang dapat diekspor ke berbagai format:
          </p>
          <ul>
            <li>Google Spreadsheet (Excel)</li>
            <li>PDF</li>
          </ul>

          <h2>Konsep Sistem</h2>
          <p>
          KasirPro mengusung konsep <strong>simple, efisien, dan terintegrasi</strong> dengan tampilan yang clean
          serta fokus pada kebutuhan utama operasional toko tanpa kompleksitas berlebih.
          </p>

          <h2>Tampilan</h2>
          <img src="img/proyek/kasirpro.webp" alt="KasirPro Dashboard Preview" />

          <h2>Hasil untuk Klien</h2>
          <ul>
            <li>Mempermudah proses transaksi penjualan</li>
            <li>Meningkatkan efisiensi operasional toko</li>
            <li>Menyediakan laporan yang rapi dan mudah dipahami</li>
            <li>Mengurangi pencatatan manual</li>
          </ul>

          <h2>Catatan</h2>
          <blockquote>
          KasirPro merupakan proyek freelance yang dapat dikembangkan lebih lanjut sesuai kebutuhan, 
          seperti penambahan fitur analitik lanjutan, integrasi pembayaran, atau sistem multi-toko.
          </blockquote>
            `,

          en: `
          <h2>About the Project</h2>
          <p>
          KasirPro is a web-based cashier system built as part of a <strong>freelance project</strong>. 
          It’s designed to help store owners manage sales, products, and financial reports in a simple and efficient way.
          </p>

          <p>
          The main focus of this project is usability and clarity — making sure both admins and cashiers 
          can easily use the system without confusion, while still having access to all the important data they need.
          </p>

          <h2>Tech Stack</h2>
          <ul>
            <li><strong>PHP</strong> — backend logic</li>
            <li><strong>MySQL</strong> — database</li>
            <li><strong>HTML & CSS</strong> — user interface</li>
          </ul>

          <h2>System & Security</h2>
          <p>
          KasirPro uses a role-based authentication system with two main roles: <strong>Admin</strong> and <strong>Cashier</strong>.
          </p>

          <ul>
            <li>Multi-role login (Admin & Cashier)</li>
            <li>Restricted registration using a <strong>secret store code</strong></li>
            <li>Role-based access control</li>
          </ul>

          <p>
          New users can’t just sign up freely — they need a special code from the store. 
          This helps keep the system secure and prevents unauthorized access.
          </p>

          <h2>Main Features</h2>
          <ul>
            <li>Dashboard with store overview</li>
            <li>7-day revenue trend</li>
            <li>Product management</li>
            <li>Stock monitoring & restock alerts</li>
            <li>Receipt (invoice) generation</li>
            <li>Sales transactions</li>
            <li>Sales history tracking</li>
            <li>Cash in & cash out tracking</li>
            <li>Financial reports</li>
            <li>Export data to Excel (Google Sheets) and PDF</li>
          </ul>

          <h2>Dashboard</h2>
          <p>
          The dashboard gives a quick overview of the store’s performance, including total revenue, 
          number of transactions, total products, and items that need restocking.
          </p>

          <p>
          There’s also a simple 7-day revenue chart to help track short-term performance.
          </p>

          <h2>Product Management</h2>
          <p>
          Admins can manage all product data — adding, editing, and deleting items. 
          The system also helps track stock levels and highlights products that need to be restocked.
          </p>

          <h2>Sales & Transactions</h2>
          <p>
          Cashiers can create transactions quickly, generate receipts automatically, 
          and all sales data is saved for reporting and tracking purposes.
          </p>

          <h2>Financial Management</h2>
          <p>
          KasirPro includes basic financial tracking features like cash in and cash out, 
          making it easier to monitor the store’s cash flow.
          </p>

          <h2>Reports & Export</h2>
          <p>
          The system provides clear and structured reports that can be exported into:
          </p>
          <ul>
            <li>Google Sheets (Excel)</li>
            <li>PDF</li>
          </ul>

          <h2>Concept</h2>
          <p>
          KasirPro follows a <strong>simple, clean, and practical</strong> approach. 
          It focuses on the essential features a store actually needs without making things overly complicated.
          </p>

          <h2>Preview</h2>
          <img src="img/proyek/kasirpro.webp" alt="KasirPro Dashboard Preview" />

          <h2>Result for Client</h2>
          <ul>
            <li>Simplifies daily sales operations</li>
            <li>Improves efficiency in managing the store</li>
            <li>Provides clear and useful reports</li>
            <li>Reduces manual record keeping</li>
          </ul>

          <h2>Notes</h2>
          <blockquote>
          This project is built as a freelance solution and can be extended further depending on client needs, 
          such as adding advanced analytics, payment integration, or multi-store support.
          </blockquote>
              `
        }
      }
    ]
  },

  achievements: [
    {
      id: "ach-1",
      code: "N9ZON090DXG5",
      title: "Belajar Dasar Manajemen Proyek",
      org: "Dicoding Indonesia",
      type: "Course",
      category: "Analis Proyek",
      date: { id: "May 20, 2026", en: "May 20, 2026" },
      image: "img/sertifikat/analisdasar.webp",
      credentialUrl: "https://www.dicoding.com/certificates/N9ZON090DXG5"
    },
    {
      id: "ach-2",
      code: "07Z67Q39WPQR",
      title: "Spec-Driven Development dengan Kiro",
      org: "Dicoding Indonesia",
      type: "Course",
      category: "Developmenr dengan Kiro",
      date: { id: "May 21, 2026", en: "May 21, 2026" },
      image: "img/sertifikat/belajardengankiro.png",
      credentialUrl: "https://www.dicoding.com/certificates/07Z67Q39WPQR"
    },
  ],

  uses: [
    {
      group: { id: "Perangkat Keras", en: "Hardware" },
      items: [
        {
          name: { id: "Laptop Lenovo ideapad slim 3i", en: "Lenovo ideapad slim 3i" },
          desc: {
            id: "Perangkat portable dengan spesifikasi Intel i3-1215U, RAM 8GB, SSD 512GB yang memungkinkan saya untuk belajar dan mengerjakan tugas dimana saja",
            en: "A portable rig with Intel i3-1215U and 8GB RAM, SSD 512GB that lets me learn and do homework anywhere."
          }
        },
        {
          name: { id: "Mouse Logitech Wireless", en: "Logitech Wireless Mouse" },
          desc: {
            id: "Mouse wireless untuk kenyamanan tanpa adanya gangguan kabel, dibekali dengan desain yang ergonimis sehingga nyaman saat digunakan",
            en: "A wireless mouse for cable-free comfort, with an ergonomic design that's pleasant to use."
          }
        }
      ]
    },
    {
      group: { id: "Editor", en: "Editor" },
      items: [
        {
          name: { id: "VS Code", en: "VS Code" },
          desc: {
            id: "Editor code yang saya gunakan sebagai alat utama untuk pengembangan website dengan ekosistem ekstensi yang sangat lengkap",
            en: "The code editor I use as my main tool for web development, with a very rich extension ecosystem."
          }
        },
        {
          name: { id: "Android Studio", en: "Android Studio" },
          desc: {
            id: "Lingkungan Pengembangan Terintegrasi (IDE) khusus untuk membangun aplikasi android dengan struktur kode yang solid",
            en: "An IDE specifically for building Android apps with a solid code structure."
          }
        }
      ]
    },
    {
      group: { id: "Terminal", en: "Terminal" },
      items: [
        {
          name: { id: "Windows Terminal", en: "Windows Terminal" },
          desc: { id: "Terminal utama di Windows", en: "My main terminal on Windows." }
        },
        {
          name: { id: "Git Bash", en: "Git Bash" },
          desc: { id: "Terminal berbasis Git untuk workflow", en: "Git-based terminal for my workflow." }
        },
        {
          name: { id: "Claude Code", en: "Claude Code" },
          desc: { id: "AI coding assistant di terminal", en: "An AI coding assistant inside the terminal." }
        },
        {
          name: { id: "Bun", en: "Bun" },
          desc: { id: "Runtime & package manager JavaScript cepat", en: "A fast JavaScript runtime & package manager." }
        }
      ]
    },
    {
      group: { id: "Aplikasi", en: "Apps" },
      items: [
        {
          name: { id: "Figma", en: "Figma" },
          desc: {
            id: "Platform desain kolaboratif utama yang saya gunakan untuk merancang wireframe, prototipe interaktif, hingga mengelola sistem desain yang konsisten",
            en: "My main collaborative design platform for wireframing, interactive prototyping, and maintaining a consistent design system."
          }
        },
        {
          name: { id: "Google Stitch", en: "Google Stitch" },
          desc: {
            id: " Alat bantu untuk integrasi aset desain yang memastikan setiap elemen visual selaras dengan standar pengembangan produk digital modern",
            en: "A helper for design-asset integration that ensures every visual element aligns with modern digital product standards."
          }
        }
      ]
    },
    {
      group: { id: "Tech Stack", en: "Tech Stack" },
      items: [
        {
          name: { id: "TypeScript", en: "TypeScript" },
          desc: { id: "Bahasa utama untuk proyek besar", en: "Main language for large projects." }
        },
        {
          name: { id: "JavaScript", en: "JavaScript" },
          desc: { id: "Fondasi pengembangan web", en: "The foundation of web development." }
        },
        {
          name: { id: "PHP", en: "PHP" },
          desc: { id: "Backend web klasik", en: "Classic web backend." }
        },
        {
          name: { id: "MySQL", en: "MySQL" },
          desc: { id: "Database relasional utama", en: "Main relational database." }
        },
        {
          name: { id: "Laravel", en: "Laravel" },
          desc: { id: "Framework PHP favorit saya", en: "My favorite PHP framework." }
        }
      ]
    }
  ],

  contacts: [
    {
      title: { id: "Tetap Terhubung", en: "Stay Connected" },
      desc: {
        id: "Hubungi saya melalui email untuk pertanyaan atau kolaborasi.",
        en: "Reach me via email for questions or collaboration."
      },
      button: { id: "Pergi ke Gmail", en: "Open Gmail" },
      icon: "mail",
      theme: "theme-red",
      full: true,
      url: "mailto:fm5355138@email.com"
    },
    {
      title: { id: "Sisi Lain Saya", en: "My Other Side" },
      desc: {
        id: "Berbagi cerita, hobi, dan keluh kesah saat ngoding.",
        en: "Sharing stories, hobbies, and complaints while coding."
      },
      button: { id: "Pergi ke Instagram", en: "Open Instagram" },
      icon: "instagram",
      theme: "theme-pink",
      url: "https://instagram.com/fzxdellw"
    },
    {
      title: { id: "Mari Terhubung", en: "Let's Connect" },
      desc: {
        id: "Terhubung dengan saya secara profesional.",
        en: "Connect with me professionally."
      },
      button: { id: "Pergi ke Linkedin", en: "Open LinkedIn" },
      icon: "linkedin",
      theme: "theme-blue",
      url: ""
    },
    {
      title: { id: "Bergabung dalam Keseruan", en: "Join the Fun" },
      desc: {
        id: "Tonton konten yang menarik dan menyenangkan.",
        en: "Watch fun and engaging content."
      },
      button: { id: "Pergi ke Tiktok", en: "Open TikTok" },
      icon: "music",
      theme: "theme-gray",
      url: "https://tiktok.com/@username719277"
    },
    {
      title: { id: "Jelajahi Kode", en: "Explore the Code" },
      desc: {
        id: "Jelajahi karya sumber terbuka saya.",
        en: "Explore my open-source work."
      },
      button: { id: "Pergi ke Github", en: "Open GitHub" },
      icon: "github",
      theme: "theme-navy",
      url: "https://github.com/fm5355138-pixel"
    }
  ],

  links: [
    {
      title: { id: "GitHub", en: "GitHub" },
      desc: {
        id: "Koleksi source code dan eksperimen project pribadi.",
        en: "A collection of source code and personal project experiments."
      },
      url: "https://github.com/fm5355138-pixel"
    },
    {
      title: { id: "Instagram", en: "Instagram" },
      desc: {
        id: "Update aktivitas dan proses belajar harian.",
        en: "Daily updates on my activities and learning process."
      },
      url: "https://instagram.com/fzxdellw"
    },
    {
      title: { id: "Email", en: "Email" },
      desc: {
        id: "Kontak langsung untuk project dan kolaborasi.",
        en: "Direct contact for projects and collaboration."
      },
      url: "mailto:fm5355138@email.com"
    }
  ],
};