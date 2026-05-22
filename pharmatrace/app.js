/* ============================================================
   PharmaTrace — AI-Powered Drug & Herbal Interaction Detector
   Complete Application JavaScript
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  // ──────────────────────────────────────────────
  // 1. DATA — Herbal Database
  // ──────────────────────────────────────────────
  const herbalDatabase = [
    {
      id: 1,
      name: 'Kunyit',
      latin: 'Curcuma longa',
      emoji: '🌾',
      description: 'Anti-inflamasi, antioksidan. Akar kunyit yang digunakan dalam jamu — obat herbal tradisional Indonesia.',
      categories: ['anti-inflammatory', 'antioxidant', 'digestive'],
      interactions: 8,
      image_gradient: 'linear-gradient(135deg, #f6d365 0%, #fda085 100%)'
    },
    {
      id: 2,
      name: 'Jahe',
      latin: 'Zingiber officinale',
      emoji: '🫚',
      description: 'Herbal penghangat untuk pencernaan dan mual. Bahan pokok dalam pengobatan herbal dan tradisi kuliner Indonesia.',
      categories: ['digestive', 'anti-inflammatory'],
      interactions: 6,
      image_gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    },
    {
      id: 3,
      name: 'Temulawak',
      latin: 'Curcuma xanthorrhiza',
      emoji: '🌿',
      description: 'Tonik hati. Banyak digunakan dalam pengobatan tradisional Jawa untuk mendukung kesehatan hati.',
      categories: ['digestive', 'metabolic'],
      interactions: 2,
      image_gradient: 'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)'
    },
    {
      id: 4,
      name: 'Sambiloto',
      latin: 'Andrographis paniculata',
      emoji: '🍃',
      description: 'Herbal pahit untuk sistem kekebalan tubuh. Dikenal sebagai "Raja Pahit" dalam pengobatan tradisional Asia Tenggara.',
      categories: ['immune', 'anti-inflammatory'],
      interactions: 2,
      image_gradient: 'linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%)'
    },
    {
      id: 5,
      name: 'Brotowali',
      latin: 'Tinospora crispa',
      emoji: '🌱',
      description: 'Tanaman rambat pahit untuk demam dan diabetes. Obat tradisional untuk mengelola gula darah dan mengurangi peradangan.',
      categories: ['metabolic', 'immune'],
      interactions: 1,
      image_gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
      id: 6,
      name: 'Kencur',
      latin: 'Kaempferia galanga',
      emoji: '🌺',
      description: 'Jahe aromatik untuk batuk dan energi. Bahan populer dalam jamu beras kencur, minuman energi tradisional.',
      categories: ['digestive', 'immune'],
      interactions: 0,
      image_gradient: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)'
    },
    {
      id: 7,
      name: 'Lengkuas',
      latin: 'Alpinia galanga',
      emoji: '🌿',
      description: 'Anti-jamur dan pencernaan. Digunakan baik sebagai rempah-rempah maupun obat di seluruh nusantara.',
      categories: ['anti-inflammatory', 'digestive'],
      interactions: 1,
      image_gradient: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)'
    },
    {
      id: 8,
      name: 'Mengkudu',
      latin: 'Morinda citrifolia',
      emoji: '🍈',
      description: 'Peningkat kekebalan tubuh. Dihormati dalam pengobatan tradisional Pasifik dan Asia Tenggara karena sifat penyembuhannya.',
      categories: ['immune', 'antioxidant'],
      interactions: 1,
      image_gradient: 'linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)'
    },
    {
      id: 9,
      name: 'Pegagan',
      latin: 'Centella asiatica',
      emoji: '☘️',
      description: 'Tonik otak. Secara tradisional digunakan untuk meningkatkan memori, kognisi, dan penyembuhan luka.',
      categories: ['antioxidant', 'metabolic'],
      interactions: 1,
      image_gradient: 'linear-gradient(135deg, #d4fc79 0%, #96e6a1 100%)'
    },
    {
      id: 10,
      name: 'Daun Sirsak',
      latin: 'Annona muricata',
      emoji: '🍃',
      description: 'Sifat anti-kanker. Dipelajari untuk efek sitotoksik dan senyawa pemodulasi imun.',
      categories: ['immune', 'antioxidant'],
      interactions: 0,
      image_gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
    },
    {
      id: 11,
      name: 'Kumis Kucing',
      latin: 'Orthosiphon aristatus',
      emoji: '🌸',
      description: 'Herbal ginjal. Banyak digunakan di Asia Tenggara untuk dukungan saluran kemih dan kesehatan ginjal.',
      categories: ['metabolic', 'anti-inflammatory'],
      interactions: 1,
      image_gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
    },
    {
      id: 12,
      name: 'Lidah Buaya',
      latin: 'Aloe vera',
      emoji: '🌵',
      description: 'Penyembuhan pencernaan dan kulit. Mengandung senyawa acemannan yang bermanfaat untuk lapisan usus dan perbaikan kulit.',
      categories: ['digestive', 'antioxidant'],
      interactions: 0,
      image_gradient: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)'
    }
  ];

  // ──────────────────────────────────────────────
  // 2. DATA — Drug Database
  // ──────────────────────────────────────────────
  const drugDatabase = [
    'Warfarin', 'Aspirin', 'Metformin', 'Paracetamol', 'Ibuprofen',
    'Amoxicillin', 'Simvastatin', 'Omeprazole', 'Lisinopril', 'Atorvastatin',
    'Metoprolol', 'Amlodipine', 'Clopidogrel', 'Diclofenac', 'Captopril',
    'Ciprofloxacin'
  ];

  // ──────────────────────────────────────────────
  // 3. DATA — Interaction Database
  // ──────────────────────────────────────────────
  const interactionDatabase = {
    // === Warfarin interactions ===
    'warfarin_kunyit': {
      severity: 'dangerous',
      summary: 'Kurkumin pada Kunyit secara signifikan meningkatkan efek antikoagulan Warfarin, meningkatkan risiko pendarahan yang tidak terkontrol secara drastis.',
      mechanism: 'Kurkumin menghambat agregasi trombosit dan mempotensiasi efek Warfarin dengan menghambat enzim CYP2C9 dan CYP3A4, mengurangi pembersihan Warfarin dan meningkatkan konsentrasinya dalam plasma.',
      recommendation: 'HINDARI kombinasi ini. Jika suplementasi Kunyit diinginkan, konsultasikan dengan dokter Anda untuk pemantauan INR dan potensi penyesuaian dosis Warfarin.'
    },
    'warfarin_jahe': {
      severity: 'warning',
      summary: 'Jahe dapat meningkatkan risiko pendarahan bila dikombinasikan dengan Warfarin karena sifat antiplatelet alaminya.',
      mechanism: 'Gingerol dan shogaol menghambat tromboksan sintase, mengurangi agregasi trombosit. Ini menambah kerja antikoagulan Warfarin, berpotensi menaikkan nilai INR.',
      recommendation: 'Gunakan dengan hati-hati. Batasi asupan Jahe dan pantau INR dengan cermat. Informasikan penyedia layanan kesehatan Anda tentang konsumsi Jahe.'
    },
    'warfarin_lengkuas': {
      severity: 'warning',
      summary: 'Lengkuas mungkin memiliki sifat antikoagulan ringan yang dapat berinteraksi dengan terapi Warfarin.',
      mechanism: 'Flavonoid tertentu dalam Alpinia galanga mungkin memiliki aktivitas antiplatelet ringan, yang berpotensi meningkatkan efek antikoagulan Warfarin.',
      recommendation: 'Berhati-hatilah. Pantau tanda-tanda pendarahan atau memar yang tidak biasa. Konsultasikan dengan dokter Anda jika menggunakan Lengkuas secara teratur.'
    },

    // === Aspirin interactions ===
    'aspirin_kunyit': {
      severity: 'warning',
      summary: 'Baik Aspirin maupun Kunyit menunjukkan sifat pengencer darah, dan kombinasinya dapat meningkatkan risiko pendarahan.',
      mechanism: 'Aspirin secara ireversibel menghambat fungsi trombosit COX-1, sedangkan kurkumin secara tambahan menghambat agregasi trombosit melalui jalur tromboksan dan ADP, menciptakan efek antiplatelet aditif.',
      recommendation: 'Gunakan dengan hati-hati. Hindari suplemen kurkumin dosis tinggi saat menjalani terapi Aspirin. Jumlah kunyit untuk bumbu masakan umumnya dianggap aman.'
    },
    'aspirin_jahe': {
      severity: 'warning',
      summary: 'Efek antiplatelet gabungan dari Aspirin dan Jahe dapat meningkatkan kecenderungan pendarahan.',
      mechanism: 'Kedua senyawa menghambat agregasi trombosit melalui jalur yang berbeda — Aspirin melalui COX-1 dan jahe melalui penghambatan tromboksan sintase — menghasilkan aktivitas antiplatelet aditif.',
      recommendation: 'Pantau adanya memar atau pendarahan berkepanjangan. Konsultasikan dengan penyedia layanan kesehatan Anda, terutama sebelum prosedur pembedahan.'
    },
    'aspirin_pegagan': {
      severity: 'safe',
      summary: 'Tidak diketahui adanya interaksi signifikan antara Aspirin dan Pegagan. Kombinasi ini tampaknya dapat ditoleransi dengan baik.',
      mechanism: 'Tidak ada mekanisme interaksi farmakologis yang didokumentasikan antara penghambatan COX aspirin dan senyawa triterpenoid Pegagan.',
      recommendation: 'Umumnya dianggap aman. Terus pantau kesehatan Anda secara keseluruhan dan laporkan gejala yang tidak biasa kepada penyedia layanan kesehatan Anda.'
    },

    // === Metformin interactions ===
    'metformin_sambiloto': {
      severity: 'warning',
      summary: 'Andrografolid dalam Sambiloto dapat meningkatkan efek hipoglikemik Metformin, meningkatkan risiko gula darah rendah.',
      mechanism: 'Andrografolid telah menunjukkan aktivitas penurun glukosa darah dengan meningkatkan serapan glukosa dan sensitivitas insulin, yang dapat mempotensiasi kerja antidiabetik Metformin melalui aktivasi AMPK aditif.',
      recommendation: 'Pantau kadar glukosa darah dengan cermat. Perhatikan gejala hipoglikemia (pusing, berkeringat, gemetar). Penyesuaian dosis mungkin diperlukan.'
    },
    'metformin_brotowali': {
      severity: 'warning',
      summary: 'Brotowali dapat mempotensiasi efek penurun gula darah Metformin, meningkatkan risiko hipoglikemia.',
      mechanism: 'Senyawa bioaktif dalam Tinospora crispa, termasuk alkaloid seperti berberin, dapat meningkatkan sekresi insulin dan pemanfaatan glukosa perifer, menambah mekanisme hipoglikemik Metformin.',
      recommendation: 'Pantau kadar gula darah dengan cermat. Waspadai gejala hipoglikemik. Konsultasikan dengan dokter Anda sebelum menggabungkan perawatan ini.'
    },
    'metformin_kunyit': {
      severity: 'safe',
      summary: 'Tidak ada interaksi merugikan yang signifikan. Kunyit sebenarnya dapat melengkapi Metformin dengan mendukung kesehatan metabolisme secara keseluruhan.',
      mechanism: 'Kurkumin telah menunjukkan sifat anti-inflamasi dan sensitisasi insulin yang dapat bekerja secara sinergis dengan Metformin tanpa gangguan farmakokinetik yang signifikan.',
      recommendation: 'Kombinasi ini umumnya dianggap aman. Lanjutkan rejimen Metformin yang diresepkan. Informasikan kepada dokter Anda tentang suplementasi kurkumin.'
    },
    'metformin_temulawak': {
      severity: 'safe',
      summary: 'Temulawak dapat melengkapi dukungan metabolik Metformin. Tidak ada interaksi merugikan yang signifikan yang didokumentasikan.',
      mechanism: 'Xanthorrhizol dan kurkuminoid dalam Temulawak mendukung fungsi hati dan metabolisme lipid tanpa mengganggu farmakokinetik Metformin secara langsung.',
      recommendation: 'Umumnya aman digunakan bersama. Temulawak mungkin memberikan dukungan metabolik tambahan. Lanjutkan pemantauan rutin dengan penyedia layanan kesehatan Anda.'
    },

    // === Paracetamol interactions ===
    'paracetamol_temulawak': {
      severity: 'safe',
      summary: 'Tidak diketahui adanya interaksi yang merugikan. Temulawak sebenarnya dapat mendukung fungsi hati, berpotensi melengkapi metabolisme hepatik Paracetamol.',
      mechanism: 'Xanthorrhizol hepatoprotektif Temulawak dapat mendukung kemampuan hati untuk memetabolisme Paracetamol dengan aman, tanpa mengubah kemanjuran terapeutiknya.',
      recommendation: 'Kombinasi aman pada dosis terapeutik normal. Namun, hindari dosis Paracetamol yang berlebihan. Temulawak mungkin menawarkan perlindungan hati tambahan.'
    },
    'paracetamol_kunyit': {
      severity: 'safe',
      summary: 'Kombinasi yang umumnya aman. Tidak ada interaksi klinis yang signifikan antara Paracetamol dan Kunyit yang telah didokumentasikan.',
      mechanism: 'Kurkumin tidak secara signifikan mempengaruhi jalur glukuronidasi dan sulfasi yang terutama bertanggung jawab untuk metabolisme Paracetamol pada tingkat makanan normal.',
      recommendation: 'Aman digunakan bersama pada dosis yang dianjurkan. Pertahankan pedoman pemberian dosis Paracetamol yang normal. Kurkumin dapat memberikan manfaat anti-inflamasi pelengkap.'
    },

    // === Ibuprofen interactions ===
    'ibuprofen_jahe': {
      severity: 'warning',
      summary: 'Baik Ibuprofen dan Jahe memiliki sifat anti-inflamasi, dan kombinasinya dapat meningkatkan risiko iritasi gastrointestinal.',
      mechanism: 'Ibuprofen menghambat COX-1 dan COX-2, mengurangi prostaglandin lambung pelindung. Gingerol pada jahe dapat memperparah stres mukosa lambung, meningkatkan risiko gastritis dan tukak lambung.',
      recommendation: 'Minum bersama makanan untuk meminimalkan iritasi saluran cerna. Hindari suplemen jahe dosis tinggi saat menggunakan Ibuprofen. Laporkan sakit perut atau tinja berwarna gelap ke dokter Anda.'
    },
    'ibuprofen_kunyit': {
      severity: 'warning',
      summary: 'Potensi efek aditif pada pengenceran darah dan iritasi saluran cerna bila Ibuprofen dikombinasikan dengan Kunyit dosis tinggi.',
      mechanism: 'Kedua senyawa tersebut mempengaruhi jalur enzim COX. Kurkumin dapat meningkatkan efek antiplatelet Ibuprofen dan berkontribusi pada penurunan perlindungan mukosa lambung.',
      recommendation: 'Gunakan dengan hati-hati. Hindari suplementasi kurkumin dosis tinggi saat menggunakan Ibuprofen. Kunyit untuk kuliner umumnya dapat diterima. Perhatikan ketidaknyamanan saluran cerna.'
    },

    // === Simvastatin interactions ===
    'simvastatin_kunyit': {
      severity: 'warning',
      summary: 'Kurkumin pada Kunyit dapat mempengaruhi metabolisme Simvastatin melalui modulasi enzim CYP3A4, yang berpotensi mengubah tingkat obat.',
      mechanism: 'Kurkumin dapat menghambat enzim CYP3A4 yang bertanggung jawab untuk metabolisme Simvastatin, berpotensi meningkatkan konsentrasi statin plasma dan meningkatkan risiko miopati atau rhabdomyolysis.',
      recommendation: 'Gunakan dengan hati-hati. Hindari suplemen kurkumin dosis tinggi. Pantau nyeri, nyeri tekan, atau kelemahan otot. Informasikan kepada dokter Anda tentang penggunaan kunyit.'
    },
    'simvastatin_mengkudu': {
      severity: 'dangerous',
      summary: 'Jus mengkudu dapat menyebabkan hepatotoksisitas bila dikombinasikan dengan Simvastatin, menciptakan beban berbahaya pada fungsi hati.',
      mechanism: 'Baik Simvastatin dan Morinda citrifolia dimetabolisme di hati. Jus mengkudu mengandung antrakuinon yang dapat menyebabkan cedera hati, memperparah efek hepatotoksik Simvastatin yang langka dan membebani kapasitas pembersihan hati.',
      recommendation: 'HINDARI kombinasi ini. Jangan mengkonsumsi produk Mengkudu saat menjalani terapi statin. Segera cari pertolongan medis jika mengalami kulit menguning, urin berwarna gelap, atau kelelahan parah.'
    },

    // === Omeprazole interactions ===
    'omeprazole_kunyit': {
      severity: 'safe',
      summary: 'Mungkin memiliki efek gastroprotektif sinergis. Kurkumin dan Omeprazole dapat saling melengkapi dalam melindungi mukosa lambung.',
      mechanism: 'Omeprazole mengurangi sekresi asam melalui penghambatan pompa proton, sementara kurkumin memberikan perlindungan anti-inflamasi dan antioksidan pada lapisan lambung melalui modulasi jalur NF-κB.',
      recommendation: 'Kombinasi ini dianggap aman dan berpotensi bermanfaat. Lanjutkan Omeprazole Anda seperti yang diresepkan. Kurkumin mungkin memberikan perlindungan perut tambahan.'
    },
    'omeprazole_jahe': {
      severity: 'safe',
      summary: 'Baik Omeprazole dan Jahe mendukung kesehatan pencernaan. Tidak ada interaksi merugikan yang didokumentasikan antara senyawa ini.',
      mechanism: 'Efek gastroprotektif jahe melalui jalur anti-inflamasi melengkapi penekanan asam Omeprazole tanpa gangguan farmakokinetik.',
      recommendation: 'Kombinasi yang aman. Jahe dapat memberikan kenyamanan pencernaan tambahan di samping terapi Omeprazole. Gunakan jahe dalam jumlah sedang.'
    },

    // === Lisinopril interactions ===
    'lisinopril_pegagan': {
      severity: 'safe',
      summary: 'Tidak ada interaksi signifikan yang diketahui antara Lisinopril dan Pegagan. Umumnya dianggap aman.',
      mechanism: 'Tidak ada interaksi farmakologis yang didokumentasikan. Saponin triterpenoid Pegagan (asiaticoside, madecassoside) bekerja melalui jalur yang berbeda dari penghambatan ACE.',
      recommendation: 'Kombinasi ini dianggap aman. Lanjutkan Lisinopril Anda seperti yang diresepkan. Informasikan kepada penyedia layanan kesehatan Anda tentang semua suplemen yang Anda gunakan.'
    },

    // === Amoxicillin interactions ===
    'amoxicillin_kunyit': {
      severity: 'safe',
      summary: 'Tidak diketahui adanya interaksi antara Amoxicillin dan Kunyit. Ini dapat digunakan secara bersamaan tanpa masalah yang berarti.',
      mechanism: 'Kurkumin tidak mengganggu mekanisme kerja beta-laktam Amoxicillin atau jalur penyerapan, distribusi, dan eliminasi ginjalnya.',
      recommendation: 'Aman digunakan bersama. Selesaikan seluruh rangkaian Amoxicillin Anda seperti yang diresepkan. Kunyit dapat memberikan manfaat anti-inflamasi tambahan selama pemulihan infeksi.'
    },
    'amoxicillin_sambiloto': {
      severity: 'safe',
      summary: 'Mungkin memiliki efek antimikroba pelengkap. Sifat perangsang kekebalan Sambiloto dapat mendukung terapi Amoxicillin.',
      mechanism: 'Efek imunomodulator Andrografolid dapat meningkatkan respons imun alami tubuh sementara Amoxicillin menargetkan sintesis dinding sel bakteri, menyediakan jalur pelengkap.',
      recommendation: 'Kombinasi ini dianggap aman. Sambiloto mungkin menawarkan manfaat kekebalan yang mendukung. Selalu selesaikan rangkaian antibiotik penuh seperti yang diresepkan.'
    },

    // === Clopidogrel interactions ===
    'clopidogrel_kunyit': {
      severity: 'dangerous',
      summary: 'Risiko pendarahan tinggi karena efek antiplatelet aditif. Kurkumin secara signifikan meningkatkan kerja pengencer darah Clopidogrel.',
      mechanism: 'Clopidogrel secara ireversibel memblokir reseptor ADP P2Y12 pada trombosit, sementara kurkumin secara independen menghambat agregasi trombosit melalui jalur tromboksan dan asam arakidonat, menciptakan efek antiplatelet aditif yang sangat berbahaya.',
      recommendation: 'HINDARI kombinasi ini. Suplemen kurkumin dosis tinggi dikontraindikasikan dengan Clopidogrel. Segera cari bantuan medis jika mengalami pendarahan yang tidak biasa, darah dalam tinja, atau mimisan terus-menerus.'
    },
    'clopidogrel_jahe': {
      severity: 'warning',
      summary: 'Potensi peningkatan risiko pendarahan bila Jahe dikombinasikan dengan obat antiplatelet Clopidogrel.',
      mechanism: 'Senyawa antiplatelet jahe (gingerol, shogaol) dapat menambah blokade reseptor ADP Clopidogrel, meningkatkan keseluruhan penghambatan fungsi trombosit.',
      recommendation: 'Gunakan dengan hati-hati. Batasi asupan jahe dan perhatikan tanda-tanda peningkatan pendarahan. Informasikan kepada dokter Anda tentang penggunaan jahe sebelum prosedur apa pun.'
    },

    // === Diclofenac interactions ===
    'diclofenac_jahe': {
      severity: 'warning',
      summary: 'Efek samping saluran cerna aditif bila Diclofenac dikombinasikan dengan Jahe. Peningkatan risiko iritasi lambung.',
      mechanism: 'Diclofenac adalah penghambat COX kuat yang mengurangi perlindungan mukosa lambung. Jahe dalam dosis tinggi dapat semakin mengiritasi lapisan pencernaan, memperparah risiko gastritis dan ulserasi.',
      recommendation: 'Hindari jahe dosis tinggi saat menggunakan Diclofenac. Konsumsi Diclofenac dengan makanan dan penghambat pompa proton jika diresepkan. Laporkan nyeri perut apa pun kepada dokter Anda.'
    },
    'diclofenac_kunyit': {
      severity: 'warning',
      summary: 'Baik Diclofenac maupun Kunyit memengaruhi enzim COX. Penggunaan bersamaan dapat meningkatkan risiko efek samping saluran cerna dan perubahan metabolisme obat.',
      mechanism: 'Kurkumin memodulasi ekspresi COX-2 dan dapat menghambat CYP2C9 yang terlibat dalam metabolisme Diclofenac, berpotensi meningkatkan kadar plasma Diclofenac dan risiko terkait saluran cerna dan kardiovaskularnya.',
      recommendation: 'Gunakan dengan hati-hati. Hindari suplementasi kurkumin dosis tinggi saat menggunakan Diclofenac. Pantau adanya sakit perut, mulas, atau pendarahan yang tidak biasa.'
    },

    // === Captopril interactions ===
    'captopril_kumiskucing': {
      severity: 'warning',
      summary: 'Baik Captopril dan Kumis Kucing memiliki efek diuretik dan hipotensi, yang berpotensi menyebabkan penurunan tekanan darah yang berlebihan.',
      mechanism: 'Captopril menurunkan tekanan darah melalui penghambatan ACE, sementara Kumis Kucing memiliki efek diuretik dan hipotensi ringan melalui mekanisme hemat kalium, menciptakan efek penurunan tekanan darah aditif.',
      recommendation: 'Pantau tekanan darah secara teratur. Perhatikan gejala hipotensi (pusing, sakit kepala ringan, pingsan). Konsultasikan dengan dokter Anda sebelum menggabungkan perawatan ini.'
    },

    // === Metoprolol interactions ===
    'metoprolol_jahe': {
      severity: 'safe',
      summary: 'Tidak ada interaksi signifikan antara Metoprolol dan Jahe. Kombinasi ini umumnya dapat ditoleransi dengan baik.',
      mechanism: 'Jahe tidak secara signifikan mempengaruhi enzim CYP2D6 yang terutama bertanggung jawab untuk metabolisme Metoprolol. Tidak ada interaksi farmakokinetik atau farmakodinamik yang relevan secara klinis.',
      recommendation: 'Aman digunakan bersama. Lanjutkan Metoprolol Anda seperti yang diresepkan. Konsumsi jahe dalam jumlah sedang tidak mungkin memengaruhi pengobatan Anda.'
    },

    // === Amlodipine interactions ===
    'amlodipine_kunyit': {
      severity: 'safe',
      summary: 'Umumnya dianggap aman. Tidak ada interaksi klinis yang signifikan antara Amlodipine dan Kunyit pada tingkat makanan normal.',
      mechanism: 'Meskipun kurkumin mungkin memiliki efek kecil pada CYP3A4, yang memetabolisme Amlodipine, interaksi ini tidak signifikan secara klinis pada dosis tambahan kuliner atau sedang yang khas.',
      recommendation: 'Kombinasi yang aman pada dosis normal. Lanjutkan Amlodipine seperti yang diresepkan. Hindari suplemen kurkumin dosis ekstra tanpa pengawasan medis.'
    },

    // === Atorvastatin interactions ===
    'atorvastatin_kunyit': {
      severity: 'warning',
      summary: 'Kurkumin dapat berinteraksi dengan enzim CYP yang terlibat dalam metabolisme Atorvastatin, berpotensi mengubah kemanjuran obat atau meningkatkan efek samping.',
      mechanism: 'Kurkumin menghambat enzim CYP3A4 dan CYP2C8 yang memetabolisme Atorvastatin, berpotensi meningkatkan kadar statin plasma dan risiko efek samping yang bergantung pada dosis seperti mialgia atau hepatotoksisitas.',
      recommendation: 'Gunakan dengan hati-hati. Laporkan adanya nyeri atau kelemahan otot. Hindari suplemen kurkumin dosis tinggi saat menggunakan Atorvastatin. Pemantauan fungsi hati rutin disarankan.'
    },

    // === Ciprofloxacin interactions ===
    'ciprofloxacin_kunyit': {
      severity: 'safe',
      summary: 'Tidak ada interaksi klinis yang signifikan antara Ciprofloxacin dan Kunyit. Ini umumnya dapat digunakan secara bersamaan.',
      mechanism: 'Kurkumin tidak secara signifikan mengganggu mekanisme kerja Ciprofloxacin (penghambatan DNA girase / topoisomerase IV) atau jalur eliminasi ginjalnya.',
      recommendation: 'Aman digunakan bersama. Catatan: hindari mengonsumsi Ciprofloxacin dengan produk susu atau suplemen mineral (kalsium, zat besi) karena dapat mengurangi penyerapan — tetapi kunyit tidak menyebabkan hal tersebut.'
    }
  };

  // Default response for unknown combinations
  const defaultInteraction = {
    severity: 'safe',
    summary: 'Tidak ada data interaksi signifikan yang tersedia untuk kombinasi ini. Berdasarkan pengetahuan saat ini, kombinasi ini tampaknya memiliki risiko interaksi yang rendah.',
    mechanism: 'Tidak ada mekanisme interaksi farmakologis yang didokumentasikan antara senyawa ini.',
    recommendation: 'Meskipun tidak ada interaksi yang didokumentasikan, selalu beri tahu penyedia layanan kesehatan Anda tentang semua suplemen dan obat herbal yang Anda konsumsi.'
  };

  // ──────────────────────────────────────────────
  // 4. STATE
  // ──────────────────────────────────────────────
  let scanHistory = [];
  let currentResult = null;
  let particles = [];
  let animFrameId = null;
  let activeFilterCategory = 'all';
  let activeSearchQuery = '';

  // ──────────────────────────────────────────────
  // 5. DOM REFERENCES
  // ──────────────────────────────────────────────
  const navbar = document.querySelector('.navbar');
  const navToggle = document.getElementById('nav-toggle');
  const navLinks = document.getElementById('nav-links');
  const particlesCanvas = document.getElementById('particles-canvas');
  const ctx = particlesCanvas ? particlesCanvas.getContext('2d') : null;

  const drugInput = document.getElementById('drug-input');
  const herbalInput = document.getElementById('herbal-input');
  const ageInput = document.getElementById('age-input');
  const diseaseInput = document.getElementById('disease-input');
  const drugSuggestions = document.getElementById('drug-suggestions');
  const herbalSuggestions = document.getElementById('herbal-suggestions');
  const analyzeBtn = document.getElementById('analyze-btn');
  const scannerAnim = document.getElementById('scanner-anim');
  const resultsSection = document.getElementById('results');

  const resultDrugName = document.getElementById('result-drug-name');
  const resultHerbalName = document.getElementById('result-herbal-name');
  const severityBadge = document.getElementById('severity-badge');
  const severityText = document.getElementById('severity-text');
  const severityFill = document.getElementById('severity-fill');
  const resultInteraction = document.getElementById('result-interaction');
  const resultMechanism = document.getElementById('result-mechanism');
  const resultRecommendation = document.getElementById('result-recommendation');
  
  const resultProfileSection = document.getElementById('result-profile-section');
  const profileAgeTag = document.getElementById('profile-age-tag');
  const profileDiseaseTag = document.getElementById('profile-disease-tag');
  const resultSideEffects = document.getElementById('result-side-effects');

  const saveReportBtn = document.getElementById('save-report-btn');
  const newAnalysisBtn = document.getElementById('new-analysis-btn');

  const herbalGrid = document.getElementById('herbal-grid');
  const herbalSearch = document.getElementById('herbal-search');
  const filterTags = document.querySelectorAll('.filter-tag');

  const statScans = document.getElementById('stat-scans');
  const statHerbs = document.getElementById('stat-herbs');
  const statDrugs = document.getElementById('stat-drugs');
  const statAlerts = document.getElementById('stat-alerts');
  const recentScans = document.getElementById('recent-scans');
  const emptyScans = document.getElementById('empty-scans');

  const chartArcSafe = document.getElementById('chart-arc-safe');
  const chartArcWarning = document.getElementById('chart-arc-warning');
  const chartArcDanger = document.getElementById('chart-arc-danger');
  const chartTotal = document.getElementById('chart-total');
  const legendSafe = document.getElementById('legend-safe');
  const legendWarning = document.getElementById('legend-warning');
  const legendDanger = document.getElementById('legend-danger');

  const exportBtn = document.getElementById('export-btn');
  const sidebarLinks = document.querySelectorAll('.sidebar-link');

  // ──────────────────────────────────────────────
  // 6. INIT
  // ──────────────────────────────────────────────
  function initApp() {
    loadScanHistory();
    initNavigation();
    initParticles();
    initScanner();
    renderHerbalDatabase();
    initDatabaseFilters();
    updateDashboard();
    initSidebar();
    initExport();
    initScrollAnimations();
  }

  // ──────────────────────────────────────────────
  // 7. NAVIGATION
  // ──────────────────────────────────────────────
  function initNavigation() {
    // Scrolled state for navbar
    window.addEventListener('scroll', () => {
      if (navbar) {
        if (window.scrollY > 50) {
          navbar.classList.add('scrolled');
        } else {
          navbar.classList.remove('scrolled');
        }
      }
      updateActiveNavLink();
    });

    // Mobile menu toggle
    if (navToggle && navLinks) {
      navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        navToggle.classList.toggle('active');
      });
    }

    // Smooth scroll on nav link click
    const links = document.querySelectorAll('.nav-link');
    links.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        // Close mobile menu
        if (navLinks) navLinks.classList.remove('active');
        if (navToggle) navToggle.classList.remove('active');
      });
    });
  }

  function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const scrollPos = window.scrollY + 120;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');
      const link = document.querySelector(`.nav-link[href="#${id}"]`);

      if (link) {
        if (scrollPos >= top && scrollPos < top + height) {
          document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
          link.classList.add('active');
        }
      }
    });
  }

  // ──────────────────────────────────────────────
  // 8. PARTICLE ANIMATION
  // ──────────────────────────────────────────────
  function initParticles() {
    if (!particlesCanvas || !ctx) return;

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    createParticles();
    animateParticles();
  }

  function resizeCanvas() {
    const hero = particlesCanvas.parentElement;
    if (hero) {
      particlesCanvas.width = hero.offsetWidth;
      particlesCanvas.height = hero.offsetHeight;
    }
  }

  function createParticles() {
    particles = [];
    const count = 70;
    const colors = [
      'rgba(0, 230, 138, 0.5)',    // neon green
      'rgba(0, 212, 255, 0.4)',    // electric cyan
      'rgba(123, 97, 255, 0.35)',  // violet
      'rgba(0, 255, 255, 0.3)',    // aqua
      'rgba(0, 230, 138, 0.2)',    // dim green
      'rgba(0, 180, 212, 0.25)'   // teal
    ];

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * particlesCanvas.width,
        y: Math.random() * particlesCanvas.height,
        radius: Math.random() * 2 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        speedY: -(Math.random() * 0.4 + 0.1),       // float upward
        speedX: (Math.random() - 0.5) * 0.3,         // slight horizontal drift
        opacity: Math.random() * 0.5 + 0.3
      });
    }
  }

  function animateParticles() {
    if (!ctx) return;
    ctx.clearRect(0, 0, particlesCanvas.width, particlesCanvas.height);

    // Update and draw particles
    particles.forEach(p => {
      p.x += p.speedX;
      p.y += p.speedY;

      // Wrap around
      if (p.y < -10) {
        p.y = particlesCanvas.height + 10;
        p.x = Math.random() * particlesCanvas.width;
      }
      if (p.x < -10) p.x = particlesCanvas.width + 10;
      if (p.x > particlesCanvas.width + 10) p.x = -10;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.fill();
    });

    // Draw connection lines between nearby particles
    const maxDist = 120;
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < maxDist) {
          const opacity = (1 - dist / maxDist) * 0.15;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(0, 230, 138, ${opacity})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }

    animFrameId = requestAnimationFrame(animateParticles);
  }

  // ──────────────────────────────────────────────
  // 9. SCANNER — Input Suggestions
  // ──────────────────────────────────────────────
  function initScanner() {
    // Drug input suggestions
    if (drugInput && drugSuggestions) {
      drugInput.addEventListener('input', () => {
        const query = drugInput.value.trim().toLowerCase();
        if (query.length === 0) {
          drugSuggestions.classList.remove('active');
          drugSuggestions.innerHTML = '';
          return;
        }
        const matches = drugDatabase.filter(d => d.toLowerCase().includes(query));
        renderSuggestions(drugSuggestions, matches, drugInput);
      });

      drugInput.addEventListener('focus', () => {
        if (drugInput.value.trim().length > 0) {
          drugInput.dispatchEvent(new Event('input'));
        }
      });
    }

    // Herbal input suggestions
    if (herbalInput && herbalSuggestions) {
      herbalInput.addEventListener('input', () => {
        const query = herbalInput.value.trim().toLowerCase();
        if (query.length === 0) {
          herbalSuggestions.classList.remove('active');
          herbalSuggestions.innerHTML = '';
          return;
        }
        const matches = herbalDatabase
          .filter(h => h.name.toLowerCase().includes(query) || h.latin.toLowerCase().includes(query))
          .map(h => h.name);
        renderSuggestions(herbalSuggestions, matches, herbalInput);
      });

      herbalInput.addEventListener('focus', () => {
        if (herbalInput.value.trim().length > 0) {
          herbalInput.dispatchEvent(new Event('input'));
        }
      });
    }

    // Click outside closes dropdowns
    document.addEventListener('click', (e) => {
      if (drugSuggestions && !drugInput.contains(e.target) && !drugSuggestions.contains(e.target)) {
        drugSuggestions.classList.remove('active');
      }
      if (herbalSuggestions && !herbalInput.contains(e.target) && !herbalSuggestions.contains(e.target)) {
        herbalSuggestions.classList.remove('active');
      }
    });

    // Analyze button
    if (analyzeBtn) {
      analyzeBtn.addEventListener('click', analyzeInteraction);
    }

    // Save & New buttons
    if (saveReportBtn) {
      saveReportBtn.addEventListener('click', saveReport);
    }
    if (newAnalysisBtn) {
      newAnalysisBtn.addEventListener('click', newAnalysis);
    }
  }

  function renderSuggestions(container, items, input) {
    container.innerHTML = '';
    if (items.length === 0) {
      container.classList.remove('active');
      return;
    }
    items.forEach(item => {
      const div = document.createElement('div');
      div.className = 'suggestion-item';
      div.textContent = item;
      div.addEventListener('click', () => {
        input.value = item;
        container.classList.remove('active');
        container.innerHTML = '';
      });
      container.appendChild(div);
    });
    container.classList.add('active');
  }

  // ──────────────────────────────────────────────
  // 9.5. CALCULATE SIDE EFFECTS (Rule-based)
  // ──────────────────────────────────────────────
  function calculateSideEffects(drug, herbal, age, disease, baseSeverity) {
    let notes = [];
    let d = drug.toLowerCase();
    let h = herbal.toLowerCase();

    // 1. AGE FACTOR
    if (age === 'lansia') {
      notes.push('<strong>Peringatan Lansia:</strong> Metabolisme obat cenderung melambat. Risiko akumulasi obat meningkat yang dapat memperparah efek samping. Pemantauan ketat disarankan.');
      if (d.includes('warfarin') || d.includes('aspirin') || d.includes('clopidogrel')) {
        notes.push('<span style="color: #FF4D6A;">Risiko pendarahan fatal sangat tinggi pada lansia jika dikombinasikan dengan herbal pengencer darah.</span>');
      }
    } else if (age === 'anak') {
      notes.push('<strong>Peringatan Anak-anak:</strong> Beberapa obat dan herbal tidak direkomendasikan untuk anak-anak karena sistem organ belum matang.');
    }

    // 2. DISEASE FACTOR
    switch (disease) {
      case 'hypertension':
        if (h.includes('jahe') || h.includes('kumis kucing') || d.includes('captopril') || d.includes('amlodipine')) {
          notes.push('<strong>Risiko Fluktuasi Tensi:</strong> Kombinasi ini dapat menyebabkan fluktuasi tekanan darah. Waspadai pusing mendadak atau sakit kepala ringan.');
        }
        break;
      case 'diabetes':
        if (h.includes('brotowali') || h.includes('sambiloto') || d.includes('metformin')) {
          notes.push('<strong>Risiko Hipoglikemia:</strong> Baik obat medis dan herbal ini dapat menurunkan gula darah. Berisiko hipoglikemia parah. Segera konsumsi gula jika lemas/berkeringat dingin.');
        }
        break;
      case 'gastric':
        if (d.includes('aspirin') || d.includes('diclofenac') || d.includes('ibuprofen') || h.includes('jahe')) {
          notes.push('<strong>Risiko Lambung:</strong> Kombinasi ini dapat memicu perdarahan saluran cerna atau memperburuk iritasi mukosa lambung Anda.');
        }
        break;
      case 'kidney':
        notes.push('<strong>Perhatian Fungsi Ginjal:</strong> Beban ekskresi obat melalui ginjal dapat meningkat. Waspadai penurunan fungsi ginjal.');
        break;
      case 'liver':
        notes.push('<strong>Perhatian Fungsi Hati:</strong> Metabolisme herbal dan obat terjadi di organ hati. Kombinasi ini berisiko hepatotoksisitas.');
        if (d.includes('paracetamol') || d.includes('atorvastatin') || d.includes('simvastatin')) {
          notes.push('<span style="color: #FF4D6A;">Kombinasi obat ini dengan kerusakan hati bawaan sangat berbahaya.</span>');
        }
        break;
    }

    if (notes.length === 0) {
      return 'Tidak ada efek samping spesifik yang terdeteksi untuk kombinasi profil medis ini. Namun tetap perhatikan anjuran dokter.';
    }

    return notes.join('<br><br>');
  }

  // ──────────────────────────────────────────────
  // 10. ANALYZE INTERACTION
  // ──────────────────────────────────────────────
  function analyzeInteraction() {
    const drugName = drugInput ? drugInput.value.trim() : '';
    const herbalName = herbalInput ? herbalInput.value.trim() : '';
    const ageVal = ageInput ? ageInput.value : 'dewasa';
    const diseaseVal = diseaseInput ? diseaseInput.value : 'none';

    // Validate
    if (!drugName || !herbalName) {
      showNotification('Harap masukkan nama obat modern dan nama herbal.', 'warning');
      if (!drugName && drugInput) drugInput.focus();
      else if (!herbalName && herbalInput) herbalInput.focus();
      return;
    }

    // Hide inputs area, show scanner animation
    const scannerInputs = document.querySelector('.scanner-inputs');
    if (scannerInputs) scannerInputs.style.display = 'none';
    if (scannerAnim) scannerAnim.classList.add('active');

    // Simulated AI analysis delay
    setTimeout(() => {
      // Hide scanner animation
      if (scannerAnim) scannerAnim.classList.remove('active');

      // Look up interaction
      const key = `${drugName.toLowerCase().replace(/\s+/g, '')}_${herbalName.toLowerCase().replace(/\s+/g, '')}`;
      const interaction = interactionDatabase[key] || { ...defaultInteraction };

      // Store current result
      currentResult = {
        drug: drugName,
        herbal: herbalName,
        age: ageVal,
        disease: diseaseVal,
        ...interaction,
        sideEffects: calculateSideEffects(drugName, herbalName, ageVal, diseaseVal, interaction.severity),
        date: new Date().toISOString()
      };

      // Show results
      displayResults(currentResult);

      // Auto-save to history
      saveScanToHistory(currentResult);

    }, 2500);
  }

  function displayResults(result) {
    // Populate result card
    if (resultDrugName) resultDrugName.textContent = result.drug;
    if (resultHerbalName) resultHerbalName.textContent = result.herbal;

    // Severity badge
    if (severityBadge) {
      severityBadge.className = 'severity-badge'; // reset
      severityBadge.classList.add(`severity-${result.severity}`);
    }
    if (severityText) severityText.textContent = result.severity === 'dangerous' ? 'BERBAHAYA' : (result.severity === 'warning' ? 'PERINGATAN' : 'AMAN');

    // Severity fill bar
    if (severityFill) {
      const widths = { safe: '30%', warning: '60%', dangerous: '90%' };
      const colors = {
        safe: 'linear-gradient(90deg, #00E68A, #00FFD0)',
        warning: 'linear-gradient(90deg, #FFB020, #FF8800)',
        dangerous: 'linear-gradient(90deg, #FF4D6A, #FF1744)'
      };
      severityFill.style.width = widths[result.severity] || '30%';
      severityFill.style.background = colors[result.severity] || colors.safe;
    }

    // Text content
    if (resultInteraction) resultInteraction.textContent = result.summary;
    if (resultMechanism) resultMechanism.textContent = result.mechanism;
    if (resultRecommendation) resultRecommendation.textContent = result.recommendation;

    // Profile Specific Section
    if (resultProfileSection && result.sideEffects) {
      resultProfileSection.style.display = 'block';
      
      if (profileAgeTag) {
        const ageLabels = { 'dewasa': 'Dewasa', 'anak': 'Anak-anak', 'lansia': 'Lansia' };
        profileAgeTag.textContent = `Umur: ${ageLabels[result.age] || 'Dewasa'}`;
      }
      
      if (profileDiseaseTag) {
        const diseaseLabels = {
          'none': 'Sehat', 'hypertension': 'Hipertensi', 'diabetes': 'Diabetes',
          'gastric': 'Gangguan Lambung', 'kidney': 'Penyakit Ginjal', 'liver': 'Gangguan Hati'
        };
        profileDiseaseTag.textContent = `Penyakit: ${diseaseLabels[result.disease] || 'Sehat'}`;
        profileDiseaseTag.style.display = result.disease === 'none' ? 'none' : 'inline-block';
      }
      
      if (resultSideEffects) {
        resultSideEffects.innerHTML = result.sideEffects;
      }
    } else if (resultProfileSection) {
      resultProfileSection.style.display = 'none';
    }

    // Show results section
    if (resultsSection) {
      resultsSection.style.display = 'block';
      setTimeout(() => {
        resultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  }

  // ──────────────────────────────────────────────
  // 11. SAVE REPORT & NEW ANALYSIS
  // ──────────────────────────────────────────────
  function saveReport() {
    if (!currentResult) return;

    // Check if already saved (avoid duplicates from auto-save)
    const isDuplicate = scanHistory.some(
      s => s.drug === currentResult.drug &&
           s.herbal === currentResult.herbal &&
           s.date === currentResult.date
    );

    if (!isDuplicate) {
      saveScanToHistory(currentResult);
    }

    showNotification('Laporan berhasil disimpan! 📋', 'success');
  }

  function newAnalysis() {
    // Hide results
    if (resultsSection) resultsSection.style.display = 'none';

    // Show scanner inputs
    const scannerInputs = document.querySelector('.scanner-inputs');
    if (scannerInputs) scannerInputs.style.display = '';

    // Clear inputs
    if (drugInput) drugInput.value = '';
    if (herbalInput) herbalInput.value = '';
    if (ageInput) ageInput.value = 'dewasa';
    if (diseaseInput) diseaseInput.value = 'none';

    // Reset current result
    currentResult = null;

    // Scroll to scanner
    const scannerSection = document.getElementById('scanner');
    if (scannerSection) {
      scannerSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  // ──────────────────────────────────────────────
  // 12. DATABASE RENDERING
  // ──────────────────────────────────────────────
  const cardGradients = [
    'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)',
    'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
    'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
    'linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)',
    'linear-gradient(135deg, #d4fc79 0%, #96e6a1 100%)',
    'linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%)',
    'linear-gradient(135deg, #30cfd0 0%, #330867 100%)'
  ];

  function renderHerbalDatabase() {
    if (!herbalGrid) return;
    herbalGrid.innerHTML = '';

    herbalDatabase.forEach((herb, index) => {
      const card = document.createElement('div');
      card.className = 'herbal-card glass-card';
      card.setAttribute('data-categories', herb.categories.join(','));

      const gradient = herb.image_gradient || cardGradients[index % cardGradients.length];

      card.innerHTML = `
        <div class="herbal-card-image" style="background: ${gradient}">
          <span class="herbal-emoji">${herb.emoji}</span>
        </div>
        <div class="herbal-card-content">
          <h3>${herb.name}</h3>
          <p class="herbal-latin">${herb.latin}</p>
          <p class="herbal-desc">${herb.description}</p>
          <div class="herbal-tags">
            ${herb.categories.map(cat => `<span class="herbal-tag">${cat}</span>`).join('')}
          </div>
          <p class="herbal-interactions">${herb.interactions} interaksi diketahui</p>
        </div>
      `;

      herbalGrid.appendChild(card);
    });
  }

  // ──────────────────────────────────────────────
  // 13. DATABASE SEARCH & FILTER
  // ──────────────────────────────────────────────
  function initDatabaseFilters() {
    // Search input
    if (herbalSearch) {
      herbalSearch.addEventListener('input', () => {
        activeSearchQuery = herbalSearch.value.trim().toLowerCase();
        applyDatabaseFilters();
      });
    }

    // Filter tags
    filterTags.forEach(tag => {
      tag.addEventListener('click', () => {
        // Update active tag
        filterTags.forEach(t => t.classList.remove('active'));
        tag.classList.add('active');
        activeFilterCategory = tag.getAttribute('data-category') || tag.dataset.filter || tag.textContent.trim().toLowerCase();
        // Normalize 'all'
        if (activeFilterCategory === 'all' || activeFilterCategory === '') {
          activeFilterCategory = 'all';
        }
        applyDatabaseFilters();
      });
    });
  }

  function applyDatabaseFilters() {
    const cards = document.querySelectorAll('.herbal-card');
    cards.forEach((card, index) => {
      const herb = herbalDatabase[index];
      if (!herb) return;

      const nameMatch = activeSearchQuery === '' ||
        herb.name.toLowerCase().includes(activeSearchQuery) ||
        herb.latin.toLowerCase().includes(activeSearchQuery);

      const categoryMatch = activeFilterCategory === 'all' ||
        herb.categories.includes(activeFilterCategory);

      if (nameMatch && categoryMatch) {
        card.style.display = '';
        card.style.opacity = '1';
        card.style.transform = '';
      } else {
        card.style.display = 'none';
      }
    });
  }

  // ──────────────────────────────────────────────
  // 14. DASHBOARD
  // ──────────────────────────────────────────────
  function loadScanHistory() {
    try {
      const data = localStorage.getItem('pharmatrace_scans');
      scanHistory = data ? JSON.parse(data) : [];
    } catch (e) {
      scanHistory = [];
    }
  }

  function saveScanHistory() {
    try {
      localStorage.setItem('pharmatrace_scans', JSON.stringify(scanHistory));
    } catch (e) {
      console.warn('Failed to save scan history:', e);
    }
  }

  function saveScanToHistory(result) {
    scanHistory.unshift({
      drug: result.drug,
      herbal: result.herbal,
      severity: result.severity,
      summary: result.summary,
      mechanism: result.mechanism,
      recommendation: result.recommendation,
      date: result.date || new Date().toISOString()
    });
    saveScanHistory();
    updateDashboard();
  }

  function updateDashboard() {
    // Update stat counters
    if (statScans) statScans.textContent = scanHistory.length;
    if (statHerbs) statHerbs.textContent = herbalDatabase.length;
    if (statDrugs) statDrugs.textContent = drugDatabase.length;

    // Count alerts (warning + dangerous)
    const alertCount = scanHistory.filter(s => s.severity === 'warning' || s.severity === 'dangerous').length;
    if (statAlerts) statAlerts.textContent = alertCount;

    // Render recent scans
    renderRecentScans();

    // Update chart
    updateChart();
  }

  function renderRecentScans() {
    if (!recentScans) return;

    // Clear existing scan items (but keep empty-scans element)
    const existingItems = recentScans.querySelectorAll('.scan-item');
    existingItems.forEach(item => item.remove());

    if (scanHistory.length === 0) {
      if (emptyScans) emptyScans.style.display = '';
      return;
    }

    if (emptyScans) emptyScans.style.display = 'none';

    // Show up to 10 recent scans
    const recentItems = scanHistory.slice(0, 10);
    recentItems.forEach(scan => {
      const item = document.createElement('div');
      item.className = 'scan-item';

      const dateStr = formatDate(scan.date);

      item.innerHTML = `
        <div class="scan-item-info">
          <span class="scan-item-drugs">${scan.drug} ⚡ ${scan.herbal}</span>
          <span class="scan-item-date">${dateStr}</span>
        </div>
        <span class="scan-item-badge severity-${scan.severity}">${scan.severity === 'dangerous' ? 'BERBAHAYA' : (scan.severity === 'warning' ? 'PERINGATAN' : 'AMAN')}</span>
      `;

      recentScans.appendChild(item);
    });
  }

  function formatDate(isoString) {
    try {
      const date = new Date(isoString);
      const now = new Date();
      const diff = now - date;
      const minutes = Math.floor(diff / 60000);
      const hours = Math.floor(diff / 3600000);
      const days = Math.floor(diff / 86400000);

      if (minutes < 1) return 'Baru saja';
      if (minutes < 60) return `${minutes}m yang lalu`;
      if (hours < 24) return `${hours}j yang lalu`;
      if (days < 7) return `${days}h yang lalu`;

      return date.toLocaleDateString('id-ID', {
        month: 'short',
        day: 'numeric',
        year: date.getFullYear() !== now.getFullYear() ? 'numeric' : undefined
      });
    } catch (e) {
      return 'Tanggal tidak diketahui';
    }
  }

  // ──────────────────────────────────────────────
  // 15. DONUT CHART (SVG)
  // ──────────────────────────────────────────────
  function updateChart() {
    const circumference = 2 * Math.PI * 80; // ~502.65

    if (scanHistory.length === 0) {
      // Empty state
      if (chartArcSafe) chartArcSafe.setAttribute('stroke-dasharray', `0 ${circumference}`);
      if (chartArcWarning) chartArcWarning.setAttribute('stroke-dasharray', `0 ${circumference}`);
      if (chartArcDanger) chartArcDanger.setAttribute('stroke-dasharray', `0 ${circumference}`);
      if (chartTotal) chartTotal.textContent = '0';
      if (legendSafe) legendSafe.textContent = '0';
      if (legendWarning) legendWarning.textContent = '0';
      if (legendDanger) legendDanger.textContent = '0';
      return;
    }

    const safeCount = scanHistory.filter(s => s.severity === 'safe').length;
    const warningCount = scanHistory.filter(s => s.severity === 'warning').length;
    const dangerCount = scanHistory.filter(s => s.severity === 'dangerous').length;
    const total = scanHistory.length;

    const safePct = safeCount / total;
    const warningPct = warningCount / total;
    const dangerPct = dangerCount / total;

    const safeArc = safePct * circumference;
    const warningArc = warningPct * circumference;
    const dangerArc = dangerPct * circumference;

    // Set arcs — each one is offset by the previous arcs
    // Safe arc starts at 0
    if (chartArcSafe) {
      chartArcSafe.setAttribute('stroke-dasharray', `${safeArc} ${circumference}`);
      chartArcSafe.setAttribute('stroke-dashoffset', '0');
    }

    // Warning arc starts after safe
    if (chartArcWarning) {
      chartArcWarning.setAttribute('stroke-dasharray', `${warningArc} ${circumference}`);
      chartArcWarning.setAttribute('stroke-dashoffset', `${-safeArc}`);
    }

    // Danger arc starts after safe + warning
    if (chartArcDanger) {
      chartArcDanger.setAttribute('stroke-dasharray', `${dangerArc} ${circumference}`);
      chartArcDanger.setAttribute('stroke-dashoffset', `${-(safeArc + warningArc)}`);
    }

    // Update text values
    if (chartTotal) chartTotal.textContent = total;
    if (legendSafe) legendSafe.textContent = safeCount;
    if (legendWarning) legendWarning.textContent = warningCount;
    if (legendDanger) legendDanger.textContent = dangerCount;
  }

  // ──────────────────────────────────────────────
  // 16. SIDEBAR NAVIGATION
  // ──────────────────────────────────────────────
  function initSidebar() {
    sidebarLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        sidebarLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
      });
    });
  }

  // ──────────────────────────────────────────────
  // 17. EXPORT
  // ──────────────────────────────────────────────
  function initExport() {
    if (exportBtn) {
      exportBtn.addEventListener('click', () => {
        if (scanHistory.length === 0) {
          showNotification('Tidak ada riwayat pindaian untuk diekspor.', 'warning');
          return;
        }

        const dataStr = JSON.stringify(scanHistory, null, 2);
        const blob = new Blob([dataStr], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `pharmatrace_export_${new Date().toISOString().slice(0, 10)}.json`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);

        showNotification('Riwayat pindaian berhasil diekspor! 📥', 'success');
      });
    }
  }

  // ──────────────────────────────────────────────
  // 18. SCROLL ANIMATIONS
  // ──────────────────────────────────────────────
  function initScrollAnimations() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          // Don't unobserve so that re-entering viewport works, but it's fine either way
        }
      });
    }, observerOptions);

    // Observe elements that should animate on scroll
    const animatedSelectors = [
      '.section-header',
      '.feature-card',
      '.scanner-container',
      '.herbal-card',
      '.stat-card'
    ];

    animatedSelectors.forEach(selector => {
      document.querySelectorAll(selector).forEach(el => {
        observer.observe(el);
      });
    });
  }

  // ──────────────────────────────────────────────
  // 19. NOTIFICATION HELPER
  // ──────────────────────────────────────────────
  function showNotification(message, type = 'info') {
    // Remove existing notification if any
    const existing = document.querySelector('.pt-notification');
    if (existing) existing.remove();

    const notification = document.createElement('div');
    notification.className = `pt-notification pt-notification-${type}`;
    notification.innerHTML = `
      <span class="pt-notification-text">${message}</span>
      <button class="pt-notification-close">&times;</button>
    `;

    // Styles
    Object.assign(notification.style, {
      position: 'fixed',
      top: '20px',
      right: '20px',
      zIndex: '10000',
      padding: '16px 24px',
      borderRadius: '12px',
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      fontFamily: 'inherit',
      fontSize: '14px',
      fontWeight: '500',
      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
      backdropFilter: 'blur(10px)',
      transform: 'translateX(120%)',
      transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
      maxWidth: '400px'
    });

    const typeStyles = {
      success: { background: 'rgba(0, 230, 138, 0.15)', border: '1px solid rgba(0, 230, 138, 0.3)', color: '#00E68A' },
      warning: { background: 'rgba(255, 176, 32, 0.15)', border: '1px solid rgba(255, 176, 32, 0.3)', color: '#FFB020' },
      info: { background: 'rgba(0, 212, 255, 0.15)', border: '1px solid rgba(0, 212, 255, 0.3)', color: '#00D4FF' },
      error: { background: 'rgba(255, 77, 106, 0.15)', border: '1px solid rgba(255, 77, 106, 0.3)', color: '#FF4D6A' }
    };

    const ts = typeStyles[type] || typeStyles.info;
    Object.assign(notification.style, ts);

    const closeBtn = notification.querySelector('.pt-notification-close');
    Object.assign(closeBtn.style, {
      background: 'none',
      border: 'none',
      color: 'inherit',
      fontSize: '20px',
      cursor: 'pointer',
      padding: '0',
      lineHeight: '1',
      opacity: '0.7'
    });

    closeBtn.addEventListener('click', () => {
      notification.style.transform = 'translateX(120%)';
      setTimeout(() => notification.remove(), 400);
    });

    document.body.appendChild(notification);

    // Animate in
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        notification.style.transform = 'translateX(0)';
      });
    });

    // Auto dismiss after 4 seconds
    setTimeout(() => {
      if (notification.parentElement) {
        notification.style.transform = 'translateX(120%)';
        setTimeout(() => notification.remove(), 400);
      }
    }, 4000);
  }

  // ──────────────────────────────────────────────
  // 20. KICK OFF
  // ──────────────────────────────────────────────
  initApp();

});
