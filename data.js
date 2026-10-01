/* =====================================================================
   ePitch Master สนามแห่งเซียน — DATA FILE (แก้ไขรายสัปดาห์ที่ไฟล์นี้ไฟล์เดียว)
   ---------------------------------------------------------------------
   วิธีอัปเดตทุกสัปดาห์:
   1) แก้ meta.lastUpdated / meta.weekLabel / meta.gameVersion
   2) เพิ่มข่าวใหม่ไว้ "บนสุด" ของอาร์เรย์ news (ใส่ date รูปแบบ YYYY-MM-DD + แหล่งที่มา)
   3) แก้ metaNotes (มุมมองเมตาประจำสัปดาห์)
   4) ถ้าปุ่มควบคุมเปลี่ยนหลังแพตช์ ให้แก้ใน consoleControls / mobileControls
   โทเคนปุ่ม: [X]=✕ [O]=○ [T]=△ [S]=□  [L1][L2][R1][R2][LS][RS]
               Xbox: [A][B][Y][XX]=ปุ่ม X ของ Xbox [LB][LT][RB][RT]
   ===================================================================== */
window.EPM = {
  meta: {
    lastUpdated: "2026-10-02",
    weekLabel: "อัปเดตรายวัน · 2 ต.ค. 2026 (หลังเมนเต 1 ต.ค.)",
    gameVersion: "eFootball™ v6.0.0 (ฤดูกาล 2026/27 — ชุมชนเรียก “eFootball 2027”)",
    nextVersion: "v6.1.0 — Konami ประกาศว่าจะมาในเดือน ต.ค. 2026 (ยังไม่ระบุวัน)"
  },

  /* ---------------- 7) ข่าว & อีเวนต์ (ใหม่สุดอยู่บน) ---------------- */
  news: [
    {
      date: "2026-10-01", tag: "แพ็ก Epic", hot: true,
      title: "เมนเต 1 ต.ค. — Epic เนเธอร์แลนด์: Van Basten / Gullit / Rijkaard",
      body: "หลังเมนเตประจำวันพฤหัส กล่อง Epic Special Player List 150 ใบ เปิดตำนานทีมชาติเนเธอร์แลนด์ 3 คน: Marco van Basten (Fox in the Box — Momentum Dribbling, Bullet Header, Low Screamer), Ruud Gullit (Hole Player — Magnetic Feet, Snap Strike), Frank Rijkaard (Build Up CB — Fortress, Long-Reach Tackle) — ตรวจในเกมก่อนซื้อ",
      sources: [
        { name: "GamingonPhone (สรุปข่าว)", url: "https://gamingonphone.com/news/efootball-2027-october-2026-maintenance-update-netherlands-epic-pack-new-managers-account-bans-and-more/" },
        { name: "WISTERIA (เมนเตเปิด 1 ต.ค.)", url: "https://wisteria33wepes.net/20261001-mainte/" }
      ]
    },
    {
      date: "2026-10-01", tag: "ผู้จัดการ",
      title: "ผู้จัดการใหม่ 2 คน — R. Rodríguez และ Makino Tomoaki (750 เหรียญ/แพ็ก)",
      body: "R. Rodríguez (อิง Ricardo Rodríguez / Kashiwa Reysol): Possession Game 88, Link-up Over-the-Top Pass A + Breakthrough Pass A — Makino Tomoaki (Fujieda MYFC): Over-the-Top Pass C + 1-2 Cut-in B, ถนัด Overload — ซื้อผ่านแพ็กผู้จัดการคนละ 750 eFootball Coins",
      sources: [
        { name: "GamingonPhone (สรุปข่าว)", url: "https://gamingonphone.com/news/efootball-2027-october-2026-maintenance-update-netherlands-epic-pack-new-managers-account-bans-and-more/" }
      ]
    },
    {
      date: "2026-10-01", tag: "อีเวนต์",
      title: "POTW Worldwide + Tour / VS AI + สัปดาห์สุดท้าย International Match Campaign",
      body: "หลังเมนเตมี POTW Worldwide ชุดตัวแทนชาติ (UEFA Nations League สัปดาห์แรก), Tour Event และ VS AI ใหม่, แพ็ก Show Time: International Match — สัปดาห์สุดท้ายของแคมเปญ International Match (ถึงประมาณ 8 ต.ค.) และมีรายงานว่า Top 100,000 อันดับ PvP ได้ Show Time Calafiori — ตรวจ Notices ในเกม",
      sources: [
        { name: "SportsDunia (เมนเต 1 ต.ค.)", url: "https://www.sportsdunia.com/esports/efootball-schedule-maintenance-today-1-october-2026" },
        { name: "WISTERIA (เมนเตเปิด)", url: "https://wisteria33wepes.net/20261001-mainte/" },
        { name: "X @we_konami (ทางการ JP — ใบ้ POTW)", url: "https://x.com/we_konami" }
      ]
    },
    {
      date: "2026-10-01", tag: "PS5 / ร้านค้า",
      title: "PS Store บางประเทศหยุดซื้อคอนเทนต์ eFootball ชั่วคราว 5–8 ต.ค.",
      body: "ผู้ใช้ PlayStation ในซาอุดีอาระเบีย / สหรัฐอาหรับเอมิเรตส์ / โคลอมเบีย / ชิลี จะซื้อคอนเทนต์เพิ่มผ่าน PlayStation Store ไม่ได้ชั่วคราวช่วง 5–8 ต.ค. 2026 (ไทยไม่ได้อยู่ในรายการนี้) — ถ้าบัญชี PS ผูกภูมิภาคเหล่านั้นให้วางแผนซื้อก่อน",
      sources: [
        { name: "GamingonPhone (อ้างประกาศ Konami)", url: "https://gamingonphone.com/news/efootball-2027-october-2026-maintenance-update-netherlands-epic-pack-new-managers-account-bans-and-more/" }
      ]
    },
    {
      date: "2026-10-01", tag: "ประกาศ",
      title: "อัปเดตการ์ด Messi (Show Time Welcome) ในเมนเต 8 ต.ค. + แบนบัญชีมาโคร",
      body: "Konami ยืนยันว่าการ์ด Lionel Messi จาก Show Time: Welcome to eFootball จะถูกอัปเดตในเมนเต 8 ต.ค. — พร้อมประกาศระงับบัญชีที่ใช้เครื่องมืออัตโนมัติ / มาโคร / โปรแกรมช่วยเล่น และเตือนว่าจะลงโทษต่อ — สื่อรายงานอีเวนต์ถัดไปโฟกัสลีกบราซิล (Show Time Ranking: Calleri, Murilo) และ Epic จันทร์หน้า Kaká / Guti / Edgar Davids (ตามรายงาน GamingonPhone)",
      sources: [
        { name: "GamingonPhone (สรุปข่าว)", url: "https://gamingonphone.com/news/efootball-2027-october-2026-maintenance-update-netherlands-epic-pack-new-managers-account-bans-and-more/" },
        { name: "WISTERIA (เรื่อง Messi Welcome)", url: "https://wisteria33wepes.net/20261001-mainte/" }
      ]
    },
    {
      date: "2026-09-28", tag: "ประกาศอัปเดต",
      title: "v6.1.0 จะเพิ่ม Select Skill Token และ Select Position Token",
      body: "บัญชี X ทางการ @play_eFootball ประกาศว่า v6.1.0 มีกำหนดปล่อยในเดือนตุลาคม 2026 — ใช้ Select Skill Token 100 อันเพื่อสอนสกิลที่ ‘เลือกเอง’ ให้นักเตะ และ Select Position Token 100 อันเพื่อฝึก Position Proficiency ตำแหน่งที่เลือก สื่อรายงานเพิ่มว่า Advanced Skill Token จะถูกถอดออก และแปลงเป็น Select Skill Token อัตรา 1 : 20",
      sources: [
        { name: "X @play_eFootball (ทางการ)", url: "https://x.com/play_eFootball" },
        { name: "SoccerGaming (สรุปข่าว)", url: "https://soccergaming.com/efootball-v6-1-0-update-introduces-new-token-system/" }
      ]
    },
    {
      date: "2026-09-24", tag: "Switch 2",
      title: "eFootball™ Kick-Off! v1.2.0 — โหมด Leagues + รองรับภาษาไทย",
      body: "ภาคแยกบน Nintendo Switch 2 ได้โหมด Leagues เลือกสโมสรจาก 25 ลีก เล่นคนเดียวหรือ Co-op สูงสุด 4 คน, อัปเดตข้อมูลฤดูกาล 2026–2027, เพิ่มนักเตะตำนาน 13 คนใน World Tour และเพิ่ม ‘ภาษาไทย’ ในตัวเลือกข้อความ (เป็นคนละเกมกับ eFootball™ หลักบน PS/Xbox/PC/มือถือ)",
      sources: [
        { name: "KONAMI (ทางการ)", url: "https://www.konami.com/efootball/kick-off/us/en-us/news/update_120" }
      ]
    },
    {
      date: "2026-09-17", tag: "แคมเปญ",
      title: "International Match Campaign (17 ก.ย. – 8 ต.ค. 2026)",
      body: "Campaign Hub แบบ Choose Your Path (เล่น PvP หรือ VS AI เพื่อรับ Map Moves), Campaign Objectives เพิ่มรอบใหม่วันที่ 24 ก.ย. และ 1 ต.ค. รางวัลรวมถึง Chance Deal ของ Epic: Eric Cantona สูงสุด 50 ใบ และ Selection Contract ‘Show Time: International Match’ — ตรวจรายละเอียดจริงที่หน้า Notices ในเกม",
      sources: [
        { name: "GamingonPhone (สรุปข่าว)", url: "https://gamingonphone.com/news/efootball-2027-international-match-campaign-celebrates-national-epics-with-free-chance-deals-and-a-selection-contract-on-offer/" }
      ]
    },
    {
      date: "2026-08-13", tag: "เวอร์ชันใหญ่",
      title: "v6.0.0 เปิดฤดูกาลใหม่: Custom Tournament, Fluid Formation, Overload, Dynamic Volley",
      body: "เพิ่ม Custom Tournament (น็อกเอาต์สูงสุด 8 คน), Game Plan แบบ Fluid Formation (แผนรุก/รับแยกกัน), Team Playstyle ใหม่ ‘Overload’, แยก Playing Style เป็นฝั่งรุกและฝั่งรับ, คำสั่ง Dynamic Volley (ใส่คำสั่ง Stunning Shot กับบอลกลางอากาศ), ผู้จัดการที่มี Link-up Play 2 แบบ, ถอด Individual Instructions ‘Attacking’ และ ‘Deep Line’, ปรับ Position Training และมินิเกม Daily Game ใหม่ร่วมกับ PlatinumGames",
      sources: [
        { name: "Version Info v6.0.0 (ทางการ)", url: "https://www.konami.com/efootball/en/page/v6/versioninfo_v6-00" },
        { name: "KONAMI Press (ทางการ)", url: "https://www.konami.com/games/us/en/topics/3344/" }
      ]
    },
    {
      date: "2026-08-13", tag: "จบแล้ว",
      title: "New Season Campaign (13 ส.ค. – 3 ก.ย. 2026)",
      body: "แคมเปญเปิดฤดูกาล: ล็อกอินรับ Special Player Contract เลือกนักเตะจาก FC Barcelona / Manchester United และไอเท็มพัฒนานักเตะ, GP, EXP — สิ้นสุดแล้ว",
      sources: [
        { name: "KONAMI Press (ทางการ)", url: "https://www.konami.com/games/us/en/topics/3344/" }
      ]
    }
  ],

  /* ---------- มุมมองเมตาประจำสัปดาห์ (อิงแพตช์ทางการ + ความเห็นบรรณาธิการ) ---------- */
  metaNotes: [
    { icon: "🌀", title: "Overload คือของใหม่ที่ต้องลอง", text: "v6.0.0 เพิ่ม Overload: รุมฝั่งที่บอลอยู่ ส่งสั้นในที่แคบ ไลน์สูง + เพรสสูง เหมาะกับกองกลางที่ครองบอลในพื้นที่แคบเก่ง และควรใช้ผู้จัดการที่ถนัด Overload", src: "ทางการ v6.0.0" },
    { icon: "🏃", title: "Dash Dribble ช้าลงเล็กน้อย", text: "แพตช์ v6.0.0 ลดความเร็วสูงสุดของ Dash Dribble ลงเล็กน้อย → การวิ่งเลี้ยงตรงๆ ได้ผลน้อยลง ใช้จังหวะ ช้า–เร็ว และ Sharp Touch แทน", src: "ทางการ v6.0.0" },
    { icon: "🛡️", title: "Match-up หยุดตามที่สั่งได้ง่ายขึ้น", text: "ผู้เล่นที่ใช้ Match-up จะหยุดตามอินพุตของเราได้ง่ายขึ้น ขณะที่ AI ข้างๆ จะตอบสนองต่างกันตามค่า Defensive Awareness — ฝีมือคนคุมสำคัญขึ้น", src: "ทางการ v6.0.0" },
    { icon: "🎯", title: "บอลทะลุช่อง/ครอสจากแดนลึกได้ผลขึ้น", text: "Konami ปรับการประกบตัว ให้ทะลุช่องและครอสจากตำแหน่งลึกสำเร็จง่ายขึ้นถ้าจังหวะและความแม่นดี — ฝั่งรับต้องระวังไลน์สูง", src: "ทางการ v6.0.0" },
    { icon: "🔋", title: "Long Ball Counter เปลืองแรงตามจริงแล้ว", text: "ก่อนหน้านี้ LBC ใช้สตามิน่าตอนสวนกลับน้อยกว่าสไตล์อื่น v6.0.0 แก้ให้เหมาะสม — วางแผนเปลี่ยนตัวช่วงท้ายเกม", src: "ทางการ v6.0.0" },
    { icon: "🧩", title: "เตรียมโทเคนไว้รอ v6.1.0", text: "ถ้าคิดจะใช้ Advanced Skill Token อยู่แล้ว ใช้ก่อนอัปเดตได้ ไม่เช่นนั้นจะถูกแปลงเป็น Select Skill Token อัตโนมัติ (ตามที่สื่อรายงาน)", src: "ประกาศ X ทางการ + สื่อ" }
  ],

  officialLinks: [
    { icon: "🌐", name: "eFootball™ Official Site (KONAMI)", url: "https://www.konami.com/efootball/en/" },
    { icon: "📄", name: "Version Info v6.0.0", url: "https://www.konami.com/efootball/en/page/v6/versioninfo_v6-00" },
    { icon: "𝕏", name: "X ทางการ @play_eFootball", url: "https://x.com/play_eFootball" },
    { icon: "📶", name: "การเชื่อมต่อออนไลน์ PvP (ทางการ)", url: "https://www.konami.com/efootball/en-us/page/online_match" },
    { icon: "🎮", name: "PS Remote Play (PlayStation)", url: "https://www.playstation.com/en-us/remote-play/" }
  ],

  /* ---------------- 1) หน้าแรก: แพลตฟอร์ม / โหมด ---------------- */
  platforms: [
    { icon: "🎮", name: "PS5 / PS4", note: "คอนโทรลเลอร์ DualSense / DUALSHOCK 4" },
    { icon: "🟩", name: "Xbox Series X|S / One", note: "รวม Xbox on PC (Windows)" },
    { icon: "🖥️", name: "PC (Steam)", note: "แนะนำให้เล่นด้วยจอย" },
    { icon: "📱", name: "iOS / Android", note: "ระบบสัมผัส หรือจอย Bluetooth" }
  ],
  crossplay: [
    "ตั้งแต่ v4.4.0 คอนโซลและ PC (PS5, PS4, Steam, Xbox Series X|S, Xbox One, Xbox on PC) เล่นออนไลน์ข้ามแพลตฟอร์มกันได้ — eFootball™ League และ Ranking Event ใช้อันดับรวม รวมถึง Friend Match และ Co-op กับเพื่อนต่างแพลตฟอร์ม",
    "เปิด/ปิดบน PlayStation / Steam: [Extras] > [Game Settings] > [Cross-Platform] — ส่วน Xbox ตั้งที่ Privacy & online safety > ‘You can join cross-network play’",
    "มือถือ (iOS/Android) ไม่อยู่ในรายการ cross-play ของประกาศทางการข้างต้น — สื่อส่วนใหญ่รายงานว่ามือถือจับคู่กับมือถือด้วยกัน",
    "เล่น PS5 ผ่าน PS Remote Play บนมือถือ = คุณกำลังเล่น ‘เวอร์ชัน PS5’ → ใช้ปุ่มแบบคอนโซล และจับคู่ในพูลคอนโซล/PC ไม่ใช่พูลมือถือ"
  ],
  modes: [
    { icon: "🏆", name: "Dream Team", text: "สร้างทีมจากการเซ็นนักเตะ พัฒนา Level/Progression แล้วลงแข่งโหมดต่างๆ" },
    { icon: "📈", name: "eFootball™ League", text: "โหมดจัดอันดับออนไลน์แบบดิวิชัน มีหมวด VS AI (เพิ่มใน v4.4.0) สำหรับคนไม่ชอบ PvP" },
    { icon: "🎟️", name: "Events", text: "Tour / Challenge / Ranking / Themed Event — แหล่งรางวัลหลักประจำสัปดาห์" },
    { icon: "🤝", name: "Friend Match & Co-op", text: "ห้อง 1v1 และ Co-op กับเพื่อน (คอนโซล/PC ข้ามแพลตฟอร์มได้)" },
    { icon: "🛠️", name: "Custom Tournament", text: "ใหม่ใน v6.0.0 — สร้าง/เข้าร่วมทัวร์น็อกเอาต์สูงสุด 8 คน กำหนดกติกาเองได้" },
    { icon: "⚡", name: "Quick Match / Strike Arena", text: "อยู่ในรายการโหมดออนไลน์ทางการ (Quick Match ใช้ P2P)" },
    { icon: "🎲", name: "Daily Game", text: "มินิเกมรับรางวัลรายวัน มี Daily Super Play ที่ร่วมทำกับ PlatinumGames" },
    { icon: "🏟️", name: "Local Match / Training", text: "เล่นออฟไลน์/ฝึกซ้อม ใช้ทดสอบปุ่มและท่าก่อนลงแข่งจริง" }
  ],

  /* ---------------- 2) ปุ่มคอนโซล (ค่าเริ่มต้น) ---------------- */
  consoleControls: {
    attack: [
      { action: "เคลื่อนที่ / เลี้ยงบอล", ps: "[LS]", xb: "[LS]", note: "โยกเบาๆ เพื่อแตะบอลใกล้เท้า (Ball Touch Control)" },
      { action: "ส่งบอลเรียด (Low Pass)", ps: "[X]", xb: "[A]", note: "กดค้างนานขึ้น = แรงขึ้น" },
      { action: "บอลทะลุช่อง (Through Ball)", ps: "[T]", xb: "[Y]", note: "ส่งเข้าพื้นที่ว่างหน้าตัวรับ" },
      { action: "บอลโด่ง / ครอส (Lofted Pass / Cross)", ps: "[O]", xb: "[B]", note: "เปลี่ยนฝั่งเกม หรือเปิดเข้ากรอบ" },
      { action: "ยิง (Shoot)", ps: "[S]", xb: "[XX]", note: "เกจพลังขึ้นตามเวลากด" },
      { action: "ยิงบังคับทิศ (Controlled Shot ≈ Finesse)", ps: "[R1] + [S]", xb: "[RB] + [XX]", note: "เน้นความแม่น/โค้งเข้ามุม แลกกับพลัง" },
      { action: "ชิพ (Chip Shot)", ps: "[L1] + [S]", xb: "[LB] + [XX]", note: "ค่าที่แพร่หลาย* — ใช้ตอนผู้รักษาประตูพุ่งออกมา", flag: true },
      { action: "Stunning Kick (ส่ง/ครอส/ยิงแบบคม)", ps: "กด [R2] สุด + ปุ่มเตะ", xb: "กด [RT] สุด + ปุ่มเตะ", note: "เกจเป็นสีน้ำเงิน ใช้เวลาง้างนานกว่า ต้องมีพื้นที่" },
      { action: "Knuckle Shot (ลูกส่าย)", ps: "[R2] + [S] (~ครึ่งเกจ)", xb: "[RT] + [XX]", note: "ต้องมีสกิล Knuckle Shot · Stunning Shot เท้าถนัด พลังกลางๆ (มีรายงานช่วง ~50–65%)*", flag: true },
      { action: "Dynamic Volley", ps: "[R2] + [S] ใส่บอลกลางอากาศ", xb: "[RT] + [XX]", note: "ใหม่ใน v6.0.0" },
      { action: "วิ่งเร็ว (Dash)", ps: "[R2] + [LS]", xb: "[RT] + [LS]", note: "อย่ากดค้างตลอด เสียการควบคุมบอล" },
      { action: "Sharp Touch (ดันบอลยาวเร่ง)", ps: "กด [R2] สุดแล้วปล่อย + [LS]", xb: "กด [RT] สุดแล้วปล่อย", note: "เลี้ยงช้าๆ แล้วระเบิดออกไป" },
      { action: "Body Feint / Scissors (ท่าหลอก)", ps: "[RS]", xb: "[RS]", note: "ท่าสกิลเฉพาะ (Double Touch, Marseille ฯลฯ) ขึ้นกับสกิลนักเตะ — ดู Command List" },
      { action: "Kick Feint (หลอกเตะ)", ps: "ปุ่มเตะ (ยกเว้น [X]) → กด [X] ทันที", xb: "ปุ่มเตะ → กด [A] ทันที", note: "หลอกตัวรับที่เข้าบล็อก" },
      { action: "Pass-and-run (Cross Over)", ps: "[R1] + ปุ่มส่ง", xb: "[RB] + ปุ่มส่ง", note: "คนส่งวิ่งตัดทแยงหลังส่ง" },
      { action: "1-2 Pass (ส่งเรียกคืน)", ps: "[L1] + [X]", xb: "[LB] + [A]", note: "ค่าที่แพร่หลาย* — ตรวจใน Command List", flag: true },
      { action: "Super Cancel (ยกเลิกท่า)", ps: "[R1] + [R2]", xb: "[RB] + [RT]", note: "หยุดการวิ่งอัตโนมัติไปหาบอล" }
    ],
    defence: [
      { action: "Pressure (เข้าเพรส)", ps: "[X] (ค้าง)", xb: "[A]", note: "เข้าหาคนครองบอลเร็ว เสี่ยงโดนหลบ" },
      { action: "Match-up (ยืนคุมหน้าตัว)", ps: "[L2] + [LS]", xb: "[LT] + [LS]", note: "อาวุธหลัก! ยืนกั้นระหว่างคู่แข่งกับประตู บล็อกส่ง/ยิงอัตโนมัติ" },
      { action: "Call for Pressure (ตัวที่ 2 ช่วยเพรส)", ps: "[R1]", xb: "[RB]", note: "เรียกเพื่อนเข้าช่วย (ลูกศรสีน้ำเงิน) — กดเป็นช่วงสั้นๆ" },
      { action: "แท็กเกิลเอง (Manual Tackle)", ps: "[X][X] หรือ [L2][L2]", xb: "[A][A] หรือ [LT][LT]", note: "กดสองครั้งตามจังหวะ" },
      { action: "Shoulder Charge (กระแทกไหล่)", ps: "[S]", xb: "[XX]", note: "ใช้ตอนวิ่งประกบข้างตัว ระวังฟาวล์จากด้านหลัง" },
      { action: "สไลด์ (Sliding Tackle)", ps: "[O]", xb: "[B]", note: "ทางเลือกสุดท้าย เสี่ยงใบเหลือง/จุดโทษ" },
      { action: "เปลี่ยนตัว (Cursor Change)", ps: "[L1]", xb: "[LB]", note: "สลับไปตัวที่ใกล้บอล" },
      { action: "เปลี่ยนตัวแบบเลือกทิศ", ps: "สะบัด [RS]", xb: "สะบัด [RS]", note: "เลือกตัวตามทิศที่สะบัด" },
      { action: "วิ่งเร็ว (Dash)", ps: "[R2]", xb: "[RT]", note: "ใช้ไล่กลับ ไม่ใช่พุ่งเข้าหาคนครองบอล" }
    ],
    gk: [
      { action: "เรียกผู้รักษาประตูออก (Bring out GK)", ps: "[T] (ค้าง)", xb: "[Y]", note: "ใช้ตอน 1 ต่อ 1 จังหวะสำคัญมาก" },
      { action: "ผู้รักษาประตู: โยน/ส่งสั้น", ps: "[X]", xb: "[A]", note: "เริ่มเกมจากด้านหลัง" },
      { action: "ผู้รักษาประตู: เตะยาว", ps: "[O]", xb: "[B]", note: "หนีเพรสสูง" },
      { action: "จุดโทษ: เล็ง / ยิง", ps: "[LS] / [S]", xb: "[LS] / [XX]", note: "ผู้รักษาประตูเลือกทิศพุ่งด้วย [LS]" }
    ],
    footnote: "ตารางนี้อิงคู่มือ PS5 ทางการของ KONAMI (โครงปุ่มมาตรฐาน) + คู่มือรวมปุ่มฤดูกาลปัจจุบัน รายการที่มี * คือค่าที่เอกสารชุมชนระบุตรงกันแต่ไม่พบในคู่มือทางการ · ปุ่มปรับแต่งได้ที่ [Extras] > [Game Settings] > [Controller] และตรวจของจริงได้ที่ Pause Menu > Command List ระหว่างแข่ง"
  },

  /* ---------------- 3) ปุ่มมือถือ ---------------- */
  mobileControls: {
    classic: {
      title: "Classic (ปุ่มเสมือน / Virtual Pad)",
      desc: "จอยซ้าย + ปุ่มขวา เหมาะกับมือใหม่ และคนที่คุ้นกับจอย ทุกปุ่ม ‘แตะ’ และ ‘สะบัด’ ได้ต่างกัน",
      rows: [
        { g: "แตะ Pass", a: "ส่งเรียด" },
        { g: "สะบัด Pass ขึ้น/ลง", a: "บอลโด่ง / ครอส" },
        { g: "สะบัด Pass ซ้าย", a: "Stunning Low Pass / Stunning Low Cross" },
        { g: "สะบัด Pass ขวา", a: "Stunning Lofted Pass / Stunning Cross" },
        { g: "แตะ Through", a: "บอลทะลุช่อง" },
        { g: "สะบัด Through ขึ้น/ลง", a: "ทะลุช่องโด่ง (Chipped Through)" },
        { g: "สะบัด Through ซ้าย / ขวา", a: "Stunning Through / Stunning Chipped Through" },
        { g: "แตะ Shoot", a: "ยิง (ค้างเพื่อเพิ่มพลัง)" },
        { g: "สะบัด Shoot ซ้าย/ขวา", a: "Stunning Shot" },
        { g: "สะบัดจอยซ้าย ขณะกด Dash", a: "Sharp Touch" },
        { g: "แตะฝั่งซ้ายสองครั้ง ขณะกด Dash", a: "Shield (บังบอล)" },
        { g: "หลังส่ง ดึงแล้วสะบัดฝั่งซ้าย", a: "Pass-and-run (Cross Over)" },
        { g: "แตะฝั่งซ้ายสองครั้ง (ตอนรับบอล)", a: "Quick Stop / หันหน้าเข้าประตู" },
        { g: "สไลด์ปุ่ม Pressure ซ้าย/ขวา", a: "🛡️ Match-up" },
        { g: "สไลด์ปุ่ม Pressure ขึ้น", a: "🛡️ Call for Pressure" },
        { g: "แตะฝั่งซ้ายสองครั้ง (ตอนรับ)", a: "🛡️ Shoulder Charge" }
      ]
    },
    flick: {
      title: "Touch & Flick (เดิมชื่อ Advanced — บางคนเรียก ‘Stroke’)",
      desc: "ไม่มีปุ่ม ใช้แตะ–ลาก–สะบัดบนจอล้วน ยืดหยุ่นกว่าแต่ต้องฝึกนาน KONAMI เปลี่ยนชื่อจาก Advanced เป็น Touch & Flick ตั้งแต่ eFootball™ 2022",
      rows: [
        { g: "แตะที่ตัวเพื่อน", a: "ส่งบอลไปยังคนนั้น*" },
        { g: "สะบัดไปยังพื้นที่ว่าง", a: "บอลทะลุช่อง*" },
        { g: "แตะซ้าย แล้วสั่งส่ง/ครอสทันที", a: "Stunning Pass / Stunning Cross" },
        { g: "แตะซ้าย → แตะขวาแล้วสะบัดไปทางยิง", a: "Stunning Shot" },
        { g: "แตะค้างขวา แล้วสะบัดฝั่งซ้าย", a: "Sharp Touch" },
        { g: "แตะค้างขวา + แตะซ้ายสองครั้ง", a: "Shield" },
        { g: "หลังส่ง ดึงแล้วสะบัดฝั่งซ้าย", a: "Pass-and-run" },
        { g: "แตะซ้ายสองครั้งตอนรับบอล", a: "Quick Stop" },
        { g: "แตะค้างฝั่งขวา", a: "🛡️ Pressure" },
        { g: "ค้างฝั่งซ้ายขณะเคลื่อนที่", a: "🛡️ Dash & Match-up" },
        { g: "สไลด์ฝั่งขวาขณะเพรส", a: "🛡️ Call for Pressure" },
        { g: "แตะฝั่งซ้ายสองครั้ง", a: "🛡️ Shoulder Charge" }
      ]
    },
    tips: [
      { icon: "🧠", t: "เลือกสไตล์เดียวแล้วฝึกยาว", d: "Classic ตอบสนองแน่นอนกว่า เหมาะเริ่มต้น; Touch & Flick เด่นเรื่องเลี้ยง/ทิศทางอิสระ แต่ต้องใช้เวลานาน" },
      { icon: "🤖", t: "Smart Assist", d: "เปิด/ปิดที่ [Extras] > [Game Settings] > [Play Settings] > [Smart Assist] — ช่วยพลังยิง/ทิศเลี้ยง บัญชีใหม่เปิดไว้เป็นค่าเริ่มต้น" },
      { icon: "📐", t: "จัดตำแหน่ง/ขนาดปุ่ม", d: "ย้ายปุ่มให้นิ้วโป้งเอื้อมถึงโดยไม่บังสนาม และไม่ทับขอบจอโค้ง" },
      { icon: "🎮", t: "ต่อจอยกับมือถือ", d: "รองรับคอนโทรลเลอร์ Bluetooth ที่เข้ากันได้ (เช่น DualSense / DUALSHOCK 4 / Xbox) แต่การตั้งค่าและโหมดที่ใช้ได้อาจต่างจากคอนโซล" },
      { icon: "📶", t: "เน็ตนิ่งชนะเน็ตแรง", d: "ทางการแนะนำ: ปิดแอปเบื้องหลัง อยู่ใกล้เราเตอร์ ไม่ดาวน์โหลดหนักบน Wi-Fi เดียวกัน และดูไอคอนเสาสัญญาณระหว่างแข่ง" },
      { icon: "🔋", t: "ปิดโหมดประหยัดแบต", d: "โหมดประหยัดพลังงานมักลดเฟรมเรต/ทัชเรต ทำให้อินพุตหน่วง" }
    ],
    footnote: "ท่าทางอ้างอิงหน้าคำสั่งทางการของ KONAMI (eFootball™ 2022) — แพตช์ต่อมาอาจปรับบางท่า รายการที่มี * คือพื้นฐานที่แพร่หลายจากยุค PES ตรวจของจริงได้ที่ Command List / Commands Tutorial ในเกม"
  },

  /* ---------------- PS Remote Play (PS5 → Android) ---------------- */
  remotePlay: {
    reqs: [
      { k: "Android (จอสัมผัส)", v: "Android 9 ขึ้นไป" },
      { k: "DUALSHOCK 4 บน Android", v: "Android 10 ขึ้นไป (Bluetooth)" },
      { k: "DualSense บน Android", v: "Android 12 ขึ้นไป" },
      { k: "ความเร็วเน็ต", v: "ขั้นต่ำ 5 Mbps · แนะนำ 15 Mbps ขึ้นไป" },
      { k: "แอป", v: "PS Remote Play (ฟรี) + บัญชี PlayStation เดียวกับ PS5" }
    ],
    steps: [
      { t: "เปิด Remote Play บน PS5", d: "Settings > System > Remote Play > เปิด Enable Remote Play" },
      { t: "ให้ PS5 ตื่นจาก Rest Mode ได้", d: "Settings > System > Power Saving > Features Available in Rest Mode → เปิด Stay Connected to the Internet และ Enable Turning On PS5 from Network" },
      { t: "ต่อจอยกับมือถือ", d: "กดปุ่ม PS + Create (DualSense) ค้างจนไฟกะพริบ → Bluetooth ของมือถือ > จับคู่ ‘Wireless Controller’ · กลับไปใช้กับ PS5 ให้เสียบสาย USB เข้าเครื่องแล้วกดปุ่ม PS" },
      { t: "ตั้งคุณภาพวิดีโอ", d: "ในแอป: Settings > Video Quality for Remote Play — ถ้าภาพกระตุก ลดความละเอียดลงก่อน แล้วค่อยเพิ่ม" }
    ],
    latency: [
      { icon: "🔌", t: "PS5 ต่อสาย LAN", d: "ทั้ง KONAMI และ PlayStation แนะนำต่อสายสำหรับคอนโซล ลดจุดหน่วงไปครึ่งทาง" },
      { icon: "📡", t: "มือถือใช้ Wi-Fi 5GHz", d: "5GHz รบกวนน้อยกว่า 2.4GHz อยู่ห้องเดียวกับเราเตอร์ถ้าทำได้ หรือใช้ Wi-Fi 6/6E" },
      { icon: "🚫", t: "เลี่ยงเน็ตมือถือตอนแข่งจัดอันดับ", d: "ใช้ได้แต่กินดาต้าและความหน่วงแกว่ง เก็บไว้เล่น VS AI / Event สบายๆ" },
      { icon: "🎧", t: "ไม่ใช้หูฟัง Bluetooth", d: "เสียง BT หน่วงและแย่งแบนด์วิดท์ Bluetooth กับจอย ใช้หูฟังสายหรือ USB-C" },
      { icon: "🧹", t: "ปิดแอปเบื้องหลัง / ประหยัดแบต", d: "เปิด Game Mode ของมือถือ ปิดการซิงก์/อัปโหลดรูป และห้ามดาวน์โหลดบนเครือข่ายเดียวกัน" },
      { icon: "📊", t: "ดูไอคอนเสาใน eFootball", d: "ไอคอนเสาสัญญาณแสดงคุณภาพกับเซิร์ฟเวอร์เกม (ส่วนของ PS5) — ถ้าเสาเต็มแต่ภาพยังหน่วง ปัญหาอยู่ช่วง PS5 → มือถือ" }
    ],
    compare: {
      touch: { title: "ปุ่มสัมผัสของ Remote Play", pros: ["ไม่ต้องพกจอย", "ใช้เล่นเมนู/จัดทีม/เก็บรางวัลได้สบาย"], cons: ["เป็นการจำลองปุ่ม DualSense ไม่ใช่ระบบสัมผัสของ eFootball มือถือ", "คอมโบอย่าง [R2] + [LS], [L2] + [LS] กดยากมาก", "นิ้วบังจอ ไม่มีแรงต้านปุ่ม"] },
      pad: { title: "จอย Bluetooth (DualSense / DS4) หรือจอยหนีบมือถือ", pros: ["ใช้ปุ่มคอนโซลครบ ตรงตามตารางด้านบน", "Match-up / Dash / Stunning ทำได้แม่นยำ", "เหมาะกับการแข่งจริง"], cons: ["ต้องจับคู่ใหม่เมื่อสลับกลับ PS5", "ฟีเจอร์ DualSense บางอย่าง (เช่น haptics/เสียงในจอย) อาจใช้ไม่ได้บน Android"] }
    },
    note: "ข้อสำคัญ: ผ่าน Remote Play คุณเล่นเวอร์ชัน PS5 → ใช้ ‘ปุ่มคอนโซล’ (ส่วนที่ 2) ไม่ใช่ปุ่มมือถือ (ส่วนที่ 3) และความหน่วงรวม = PS5↔เซิร์ฟเวอร์เกม + PS5↔มือถือ"
  },

  /* ---------------- 4) เทคนิครุก / รับ ---------------- */
  techniques: {
    attack: [
      { icon: "🔁", t: "สร้างเกมด้วยส่งสั้น + เปลี่ยนจังหวะ", d: "ส่งเรียดหาคนว่าง ดึงคู่แข่งให้ขยับ แล้วค่อยเร่ง อย่าเลี้ยงชนคน", console: "[X] สั้นๆ + [R1] + [X] (Pass-and-run) เพื่อให้คนส่งวิ่งต่อ", mobile: "Classic: แตะ Pass · Touch & Flick: แตะที่ตัวเพื่อน — หลังส่งดึงแล้วสะบัดฝั่งซ้ายเพื่อวิ่งตัด" },
      { icon: "💨", t: "Sharp Touch หนีตัวประกบ", d: "เลี้ยงช้า หลอกจังหวะ แล้วดันบอลยาวเข้าพื้นที่ว่าง (v6 ลดความเร็ว Dash Dribble จึงต้องใช้จังหวะมากขึ้น)", console: "กด [R2] ให้สุดแล้วปล่อย พร้อมโยก [LS]", mobile: "Classic: สะบัดจอยขณะกด Dash · Touch & Flick: ค้างขวาแล้วสะบัดซ้าย" },
      { icon: "🎯", t: "Controlled Shot ยิงเข้ามุมไกล", d: "ในกรอบเขตโทษเมื่อมีมุม ใช้ความแม่นมากกว่าแรง", console: "[R1] + [S] พลังประมาณกลางเกจ", mobile: "ใช้คำสั่งยิงพิเศษตาม Command List ของสไตล์ที่ใช้ (ท่าอาจต่างตามเวอร์ชัน)" },
      { icon: "🪂", t: "Chip เมื่อผู้รักษาประตูพุ่งออก", d: "ได้ผลตอนนายด่านออกมาปิดมุมใกล้ๆ ถ้าเขายืนในเส้นมักไม่คุ้ม", console: "[L1] + [S] (ค่าที่แพร่หลาย)", mobile: "ดู Command List ของคุณ" },
      { icon: "⚡", t: "Stunning Kick เฉพาะตอนมีพื้นที่", d: "บอลคมและเร็วกว่า แต่ง้างนาน ถ้ามีคนประกบจะโดนบล็อก", console: "กด [R2] สุดพร้อมปุ่มเตะ (เกจสีน้ำเงิน)", mobile: "Classic: สะบัดปุ่มไปซ้าย/ขวา · Touch & Flick: แตะซ้ายก่อนสั่ง" },
      { icon: "🌀", t: "Kick Feint ทำลายการบล็อก", d: "ตัวรับที่พุ่งเข้าบล็อกจะเสียจังหวะ แล้วค่อยยิง/ส่งอีกครั้ง", console: "ปุ่มเตะ (ไม่ใช่ [X]) แล้วกด [X] ทันที", mobile: "ใช้คำสั่งยกเลิกการเตะตาม Command List" },
      { icon: "🚀", t: "Dynamic Volley (ใหม่ v6)", d: "บอลลอยมาไม่ว่าสูงแค่ไหน สั่ง Stunning Shot เพื่อวอลเลย์แรงๆ", console: "[R2] + [S] ตอนบอลอยู่กลางอากาศ", mobile: "คำสั่ง Stunning Shot ตามสไตล์ปุ่ม (Smart Assist อาจใส่ให้อัตโนมัติ)" },
      { icon: "🔂", t: "1-2 ทะลุแนวรับ", d: "ส่งแล้ววิ่งเรียกคืนทันทีเมื่อแนวรับยืนสูง", console: "[L1] + [X] (ค่าที่แพร่หลาย) แล้วส่งคืนด้วย [X] หรือ [T]", mobile: "Pass-and-run แล้วส่งคืน" }
    ],
    defence: [
      { icon: "🧱", t: "Match-up เป็นค่าเริ่มต้น ไม่ใช่ Pressure", d: "ยืนกั้นระหว่างคนครองบอลกับประตู ให้เกมช้าลงเพื่อให้เพื่อนกลับมาตั้งรูป บล็อกส่ง/ยิงอัตโนมัติ", console: "ค้าง [L2] + โยก [LS] เข้าหาทิศคู่แข่งเพื่อปิดระยะ", mobile: "Classic: สไลด์ปุ่ม Pressure ซ้าย/ขวา · Touch & Flick: ค้างฝั่งซ้ายขณะเคลื่อนที่" },
      { icon: "👥", t: "ตัวที่ 2 (Call for Pressure) แบบสั้นๆ", d: "เรียกเพื่อนประกบคู่เมื่อคนครองบอลหันหลังหรือติดเส้นข้าง ค้างนานเกินแผงหลังจะเสียรูป", console: "[R1] เป็นช่วงสั้น พร้อม [L2] คุมทางเข้า", mobile: "Classic: สไลด์ Pressure ขึ้น · Touch & Flick: สไลด์ฝั่งขวาขณะเพรส" },
      { icon: "🔄", t: "เปลี่ยนตัวให้ทันเกม", d: "คุมตัวที่ปิดช่องส่งสำคัญ ไม่จำเป็นต้องเป็นตัวใกล้บอลที่สุด", console: "[L1] ใกล้บอล · สะบัด [RS] เลือกตามทิศ", mobile: "ปุ่มเปลี่ยนตัว / ตั้ง Cursor Change ในเมนูการตั้งค่า" },
      { icon: "💪", t: "Shoulder Charge ตอนวิ่งคู่ขนาน", d: "ได้ผลเมื่อวิ่งเคียงข้างคนครองบอล ชาร์จจากด้านหลังเสี่ยงฟาวล์", console: "[S]", mobile: "แตะฝั่งซ้ายสองครั้ง" },
      { icon: "⏱️", t: "แท็กเกิลเองต้องมีจังหวะ", d: "รอให้บอลห่างเท้าคู่แข่ง (หลังเขาแตะบอลยาว) แล้วค่อยเข้า", console: "[X][X] หรือ [L2][L2]", mobile: "ใช้ Pressure/Match-up ให้ระบบแท็กเกิลอัตโนมัติเมื่อเข้าระยะ" },
      { icon: "🧤", t: "Bring out GK ต้องแม่นจังหวะ", d: "เรียกออกเมื่อบอลหลุดเท้ากองหน้าหรือ 1 ต่อ 1 ชัดเจน ออกเร็วเกินโดนชิพ", console: "ค้าง [T]", mobile: "ปุ่มเรียกผู้รักษาประตูตามสไตล์ปุ่ม" },
      { icon: "✂️", t: "ตัดทางส่งด้วยการยืนตำแหน่ง", d: "ขณะ Match-up ผู้เล่นจะพยายามสกัด/บล็อกการเตะของคู่แข่งเอง (ตามคู่มือทางการ) — ยืนให้ตัวเองอยู่บนเส้นทางส่ง แล้วระวัง Kick Feint", console: "[L2] + [LS] ยืนขวางทางส่ง ไม่ต้องกดแท็กเกิล", mobile: "Classic: สไลด์ Pressure ซ้าย/ขวา แล้วบังคับทิศให้ขวางทางส่ง" },
      { icon: "🛑", t: "สไลด์คือทางเลือกสุดท้าย", d: "หลีกเลี่ยงในกรอบเขตโทษ v6 ปรับการตัดสินฟาวล์จากสไลด์ที่ทำให้คู่แข่งเซ/ล้ม", console: "[O]", mobile: "ใช้เท่าที่จำเป็น" }
    ]
  },

  /* ---------------- 5) แผนการเล่น ---------------- */
  formations: [
    { name: "4-3-3", tag: "สมดุล / กว้าง",
      pos: [[50,92,"GK"],[14,72,"LB"],[37,77,"CB"],[63,77,"CB"],[86,72,"RB"],[50,60,"DMF"],[30,48,"CMF"],[70,48,"CMF"],[16,22,"LWF"],[50,15,"CF"],[84,22,"RWF"]],
      good: "ปีกกว้างยืดแนวรับ กองกลาง 3 คนคุมพื้นที่กลางได้ดี", bad: "ถ้าแบ็กขึ้นเกม ด้านข้างโล่งง่ายตอนโดนสวน", fit: "Possession Game, Out Wide, Quick Counter" },
    { name: "4-2-3-1", tag: "มั่นคงตรงกลาง",
      pos: [[50,92,"GK"],[14,72,"LB"],[37,77,"CB"],[63,77,"CB"],[86,72,"RB"],[37,58,"DMF"],[63,58,"DMF"],[18,36,"LMF"],[50,36,"AMF"],[82,36,"RMF"],[50,14,"CF"]],
      good: "DMF สองคนบังแผงหลัง AMF เป็นศูนย์กลางเกมรุก", bad: "CF ตัวเดียวอาจโดดเดี่ยวถ้าปีกไม่ดันขึ้น", fit: "Quick Counter, Long Ball Counter, Possession Game" },
    { name: "4-2-2-2", tag: "คู่หน้า + บุกเร็ว",
      pos: [[50,92,"GK"],[14,72,"LB"],[37,77,"CB"],[63,77,"CB"],[86,72,"RB"],[37,58,"DMF"],[63,58,"DMF"],[27,36,"AMF"],[73,36,"AMF"],[38,15,"CF"],[62,15,"CF"]],
      good: "กองหน้า 2 + AMF 2 สร้างตัวเลือกส่งเยอะใจกลางสนาม เหมาะเล่นสวนกลับ", bad: "ความกว้างมาจากแบ็กเป็นหลัก ริมเส้นเสี่ยงโดนเจาะ", fit: "Quick Counter, Long Ball Counter" },
    { name: "4-1-2-3", tag: "สมอเดี่ยว + ปีกสามตัว",
      pos: [[50,92,"GK"],[14,72,"LB"],[37,77,"CB"],[63,77,"CB"],[86,72,"RB"],[50,62,"DMF"],[32,44,"CMF"],[68,44,"CMF"],[16,20,"LWF"],[50,14,"CF"],[84,20,"RWF"]],
      good: "DMF ยืนคุมหน้าแผงหลัง CMF สองคนวิ่งเชื่อมเกม", bad: "DMF ตัวเดียวต้องเก่งเกมรับและอ่านเกม ถ้าโดนดึงออกจะมีรูหน้าแนวรับ", fit: "Possession Game, Overload, Out Wide" },
    { name: "3-4-3", tag: "สามเซ็นเตอร์ / กดดันสูง",
      pos: [[50,92,"GK"],[27,76,"CB"],[50,79,"CB"],[73,76,"CB"],[10,50,"LMF"],[38,55,"CMF"],[62,55,"CMF"],[90,50,"RMF"],[22,22,"LWF"],[50,14,"CF"],[78,22,"RWF"]],
      good: "เพิ่มคนในแดนบน กดดันสูงได้ดี LMF/RMF ให้ความกว้าง", bad: "ริมเส้นหลังโล่งถ้า LMF/RMF ขึ้นสูง ต้องการ CB ที่เร็ว", fit: "Overload, Quick Counter" },
    { name: "3-5-2", tag: "คุมกลาง + คู่หน้า",
      pos: [[50,92,"GK"],[27,76,"CB"],[50,79,"CB"],[73,76,"CB"],[50,60,"DMF"],[32,46,"CMF"],[68,46,"CMF"],[9,42,"LMF"],[91,42,"RMF"],[40,15,"CF"],[60,15,"CF"]],
      good: "กลางสนามแน่น 5 คน คู่หน้าทำงานร่วมกัน", bad: "LMF/RMF ต้องวิ่งหนักทั้งรุกและรับ สตามิน่าสำคัญ", fit: "Long Ball Counter, Long Ball, Possession Game" }
  ],
  fluidNote: "v6.0.0 เพิ่ม Fluid Formation ใน Game Plan — ตั้งแผนตอนรุกและตอนรับแยกกันได้ (เช่น รุก 3-2-5 / รับ 4-4-2) และ Auto-pick players จัดให้ได้ทั้งสองแผน",
  playstyles: [
    { name: "Possession Game", icon: "🧶", when: "ทีมมีกองกลางส่งบอล/เลี้ยงดี เจอคู่แข่งที่นั่งรับลึก", how: "ต่อบอลสั้น อดทน ผู้เล่นขยับมาเป็นทางส่งใกล้ๆ", watch: "ไม่เหมาะถ้ากองกลางไม่มีเทคนิค เสียบอลกลางสนามแล้วโดนสวนแรง" },
    { name: "Quick Counter", icon: "⚡", when: "มีกองหน้าเร็ว และอยากเพรสแย่งบอลแดนสูง", how: "แย่งได้แล้วบุกทันที ผู้เล่นวิ่งเข้าหลังแนวรับ ไลน์รับค่อนข้างสูง", watch: "ต้องการแผงหลังที่เร็วพอรับบอลยาวหลังไลน์" },
    { name: "Long Ball Counter", icon: "🏹", when: "อยากเล่นปลอดภัย รับลึก รอจังหวะสวน", how: "ตั้งแนวรับสองแถวแน่นตรงกลาง กองหน้ายืนรอรับบอลยาวทันทีที่แย่งได้", watch: "ครองบอลน้อย กองหน้าต้องจบสกอร์เองได้ (v6 ปรับสตามิน่าตอนสวนกลับแล้ว)" },
    { name: "Out Wide", icon: "↔️", when: "มีปีก/แบ็กดี และกองหน้าโหม่งเก่ง", how: "ยืดเกมกว้าง แยกแบ็กคู่แข่งออกมา ปั้นครอสเข้ากรอบ", watch: "ถ้าคุณภาพริมเส้นไม่ถึง สไตล์นี้แทบไม่มีประโยชน์" },
    { name: "Long Ball", icon: "🚀", when: "มี Target Man ตัวสูง และอยากข้ามเพรสสูงของคู่แข่ง", how: "เปิดตรงหาตัวเป้าเป็นทางหลัก ผู้เล่นกระจายเปิดช่องเปิดบอลยาว หาลูกสองกลางสนาม", watch: "พึ่ง CF คนเดียวมาก ต้องมีคนตามเก็บลูกสอง" },
    { name: "Overload", icon: "🌀", isNew: true, when: "มีกองกลาง/กองหน้าที่เล่นในที่แคบเก่ง ชอบเพรสสูง", how: "รุมฝั่งที่บอลอยู่ ส่งสั้นในพื้นที่แคบ ตอนรับบีบตัวแน่นและเข้าหาคนครองบอลเร็ว ดันไลน์สูงเมื่อครองบอลในแดนคู่แข่ง", watch: "ฝั่งตรงข้ามบอลโล่ง ระวังการเปลี่ยนฝั่งเกมยาว — ใช้ผู้จัดการที่ถนัด Overload" }
  ],
  instructions: [
    { side: "รุก", name: "Anchoring", d: "ให้ผู้เล่นยืนประจำตำแหน่ง ไม่ลอยออกด้านข้าง — เหมาะกับ AMF/CF ที่อยากให้อยู่กลาง" },
    { side: "รุก", name: "Defensive", d: "ลดการขึ้นเกม รักษารูปทีม — นิยมใช้กับแบ็กหรือ DMF" },
    { side: "รับ", name: "Counter Target", d: "กองหน้ายืนสูงไว้รอสวนกลับ ไม่ลงมาช่วยรับ (ประหยัดแรง)" },
    { side: "รับ", name: "Man Marking", d: "ให้ผู้เล่นคนหนึ่งตามประกบคู่แข่งที่กำหนด — ระวังช่องว่างด้านหลัง" },
    { side: "รับ", name: "Tight Marking", d: "ประกบใกล้ตัวที่กำหนดเข้มข้นขึ้น — อาจทำให้รูปทีมเปิด" }
  ],
  instructionsNote: "จำนวนคำสั่งต่อทีมมีจำกัด แบ่งเป็นฝั่งรุกและฝั่งรับ · v6.0.0 ถอด ‘Attacking’ และ ‘Deep Line’ ออกจาก Individual Instructions แล้ว",

  /* ---------------- 6) พัฒนานักเตะ ---------------- */
  progression: {
    categories: ["Shooting", "Passing", "Dribbling", "Dexterity", "Lower Body Strength", "Aerial Strength", "Defending", "GK 1", "GK 2", "GK 3"],
    categoriesNote: "Progression Points แจกลงได้ 10 หมวด แต่ละหมวดรวมค่าย่อยหลายตัว (เช่น Shooting รวม Finishing, Place Kicking, Curl)",
    byPosition: [
      { pos: "CF", main: "Shooting, Dexterity", sub: "Dribbling, Aerial Strength, Lower Body" },
      { pos: "SS", main: "Dribbling, Dexterity, Shooting", sub: "Lower Body, Passing" },
      { pos: "LWF / RWF", main: "Dribbling, Dexterity", sub: "Lower Body, Shooting, Passing" },
      { pos: "AMF", main: "Dribbling, Passing", sub: "Dexterity, Lower Body, Shooting" },
      { pos: "CMF", main: "Passing, Lower Body, Dribbling, Defending", sub: "Dexterity" },
      { pos: "DMF", main: "Defending, Lower Body", sub: "Passing, Dribbling, Aerial Strength" },
      { pos: "LMF / RMF", main: "Lower Body", sub: "Dexterity, Dribbling, Passing" },
      { pos: "CB", main: "Defending, Aerial Strength", sub: "Lower Body, Dexterity" },
      { pos: "LB / RB", main: "Lower Body, Dexterity, Defending", sub: "Passing, Dribbling, Aerial Strength" },
      { pos: "GK", main: "GK 1, GK 2, GK 3", sub: "Aerial Strength" }
    ],
    byPositionNote: "ตารางนี้เป็นแนวทางที่ชุมชนใช้กันทั่วไป (สรุปจาก GamingonPhone) ไม่ใช่สูตรตายตัว",
    principles: [
      { icon: "🎯", t: "เริ่มจากบทบาท ไม่ใช่ตัวเลข OVR", d: "ถามก่อนว่าจะให้นักเตะคนนี้ทำอะไร (วิ่งหลังไลน์ / พักบอล / โหม่ง) แล้วค่อยลงแต้ม OVR สูงกว่าไม่ได้แปลว่าเล่นดีกว่าในบทบาทของคุณ" },
      { icon: "🧍", t: "เคารพรูปร่างนักเตะ", d: "ตัวสูงใหญ่ลงเลี้ยงเยอะก็ยังอาจรู้สึก ‘แข็ง’ — ดันจุดแข็ง (เช่น Aerial) จะคุ้มกว่า" },
      { icon: "🧭", t: "สอดคล้องกับสไตล์ทีม", d: "CB ใน Quick Counter / ไลน์สูงต้องเน้น Speed/Acceleration (Lower Body, Dexterity) ส่วน CB ใน Long Ball Counter เน้น Aerial และร่างกาย" },
      { icon: "🔁", t: "ทดลองแล้วปรับ", d: "ลงแต้ม ลองเล่นหลายนัด ช้าไป → Lower Body · เสียบอลบ่อย → Dribbling · ยิงพลาด → Shooting (ตรวจเงื่อนไขการรีเซ็ตแต้มในหน้า Player Progression)" },
      { icon: "📊", t: "ดูค่าจาก Game Plan", d: "v6.0.0 แสดงค่าพลังตาม Game Plan ปัจจุบันระหว่างทำ Player Progression แล้ว ใช้ช่วยตัดสินใจ" }
    ],
    value: [
      { icon: "🆓", t: "เก็บของฟรีก่อนเติม", d: "แคมเปญ / Objectives / Selection Contract ให้นักเตะและไอเท็มพัฒนาเป็นประจำ เช็กหน้า Notices ทุกสัปดาห์" },
      { icon: "🧩", t: "เลือกตาม Playing Style", d: "นักเตะที่ Playing Style เข้ากับ Team Playstyle ของคุณคุ้มกว่าการ์ด OVR สูงที่ไม่เข้าระบบ (v6 แยก Playing Style รุก/รับ ด้วย)" },
      { icon: "👔", t: "ผู้จัดการสำคัญพอๆ กับนักเตะ", d: "ความถนัดสไตล์ทีมของผู้จัดการให้โบนัสค่าพลัง เลือกผู้จัดการให้ตรงกับสไตล์ที่ใช้จริง" },
      { icon: "🦶", t: "ดูสกิลและเท้าข้างที่ไม่ถนัด", d: "สกิลเช่น Knuckle Shot, Through Passing, Interception มีผลจริงในเกม · v6.1.0 จะให้เลือกสกิลเองได้ด้วย Select Skill Token" },
      { icon: "📍", t: "Position Training", d: "v6.0.0: ตำแหน่งที่ลงทะเบียนบนการ์ดจะไม่อยู่ในตัวเลือกให้ฝึกอีก ทำให้ฝึกตำแหน่งใหม่ง่ายขึ้น" },
      { icon: "🧾", t: "อย่าไล่ทุกแพ็ก", d: "ตั้งงบและเป้าหมาย (ตำแหน่งที่ขาด) ก่อนเปิดแพ็ก และปล่อย (Release) การ์ดซ้ำเพื่อรับ Level Training Program" }
    ]
  },

  /* ---------------- Footer: แหล่งข้อมูล ---------------- */
  sources: [
    { type: "เว็บไซต์", icon: "🌐", used: true, items: [
      { name: "KONAMI — คู่มือ PS5 (Manual_EN_PS5)", url: "https://img.konami.com/efootball/s/img/manual/manual_ps5_en.pdf" },
      { name: "KONAMI — eFootball™ Commands (มือถือ)", url: "https://www.konami.com/efootball/en/page/new_controls" },
      { name: "KONAMI — Version Info v6.0.0", url: "https://www.konami.com/efootball/en/page/v6/versioninfo_v6-00" },
      { name: "KONAMI — Version Info v4.4.0 (Cross-Platform)", url: "https://www.konami.com/efootball/en/page/v4/versioninfo_v4-40" },
      { name: "KONAMI — Online PvP Setup", url: "https://www.konami.com/efootball/en-us/page/online_match" },
      { name: "PlayStation — PS Remote Play", url: "https://www.playstation.com/en-us/remote-play/" },
      { name: "FIFPlay — eFootball 2027 Controls", url: "https://www.fifplay.com/efootball-2027-controls/" },
      { name: "GameMarket.gg — Team Playstyle Guide v6", url: "https://gamemarket.gg/news/efootball/efootball-v6-0-0-team-playstyle-guide-every-option-explained" },
      { name: "GamingonPhone — Progression Points", url: "https://gamingonphone.com/guides/efootball-2027-progression-points-guide-how-to-build-your-players-the-right-way/" },
      { name: "PES Mastery — Shooting Tutorial", url: "https://pesmastery.com/efootball-shooting-tutorial/" },
      { name: "kryk55 — Knuckle Shot", url: "https://kryk55.com/efootball/pl-en/sk14-en.html" },
      { name: "GameMarket.gg — Defending Guide", url: "https://gamemarket.gg/news/efootball/efootball-defending-guide-pressure-match-up-and-tackling" },
      { name: "KONAMI — Press: New Season v6.0.0", url: "https://www.konami.com/games/us/en/topics/3344/" },
      { name: "KONAMI — eFootball™ Kick-Off! v1.2.0", url: "https://www.konami.com/efootball/kick-off/us/en-us/news/update_120" },
      { name: "GamingonPhone — International Match Campaign", url: "https://gamingonphone.com/news/efootball-2027-international-match-campaign-celebrates-national-epics-with-free-chance-deals-and-a-selection-contract-on-offer/" },
      { name: "SoccerGaming — v6.1.0 Tokens", url: "https://soccergaming.com/efootball-v6-1-0-update-introduces-new-token-system/" }
    ]},
    { type: "X (Twitter)", icon: "𝕏", used: true, items: [
      { name: "@play_eFootball — บัญชีทางการ", url: "https://x.com/play_eFootball" }
    ]},
    { type: "YouTube", icon: "▶️", used: false, items: [
      { name: "ค้นหาคลิปสอน eFootball ล่าสุด", url: "https://www.youtube.com/results?search_query=eFootball+2027+tips" }
    ]},
    { type: "Discord", icon: "💬", used: false, items: [
      { name: "ชุมชน eFootball บน Discord (ใส่ลิงก์เชิญเซิร์ฟเวอร์ที่คุณใช้)", url: "https://discord.com/" }
    ]},
    { type: "Facebook", icon: "📘", used: false, items: [
      { name: "กลุ่ม/เพจ eFootball (ค้นหา)", url: "https://www.facebook.com/search/top?q=eFootball" }
    ]}
  ]
};
