/* ===== Data ===== */
const TAB_DATA = {
  eng: {
    featured: [
      { name: "IIT Bombay", meta: "Mumbai" },
      { name: "IIT Delhi", meta: "Delhi" },
      { name: "BITS Pilani", meta: "Rajasthan" },
      { name: "Chandigarh University", meta: "Mohali" },
      { name: "Lovely Professional University", meta: "Jalandhar" },
      { name: "VIT Vellore", meta: "Tamil Nadu" },
      { name: "Manipal Institute", meta: "Karnataka" }
    ],
    exams: [
      { name: "JEE Main 2026", meta: "Apr 4" },
      { name: "JEE Advanced", meta: "May 17" },
      { name: "VITEEE", meta: "Apr 22" },
      { name: "BITSAT 2026", meta: "May 21" },
      { name: "GATE 2026", meta: "Feb 1-9" }
    ],
    courses: [
      { name: "B.Tech CSE", meta: "4 yrs" },
      { name: "B.Tech Mechanical", meta: "4 yrs" },
      { name: "B.Tech Electronics", meta: "4 yrs" },
      { name: "B.Tech Civil", meta: "4 yrs" },
      { name: "M.Tech", meta: "2 yrs" },
      { name: "B.Tech AI & ML", meta: "4 yrs" }
    ]
  },
  mgmt: {
    featured: [
      { name: "IIM Ahmedabad", meta: "Gujarat" },
      { name: "IIM Bangalore", meta: "Karnataka" },
      { name: "IIM Calcutta", meta: "West Bengal" },
      { name: "XLRI Jamshedpur", meta: "Jharkhand" },
      { name: "FMS Delhi", meta: "Delhi" },
      { name: "MDI Gurgaon", meta: "Haryana" }
    ],
    exams: [
      { name: "CAT 2026", meta: "Nov 30" },
      { name: "XAT", meta: "Jan 4" },
      { name: "NMAT", meta: "Oct-Dec" },
      { name: "SNAP", meta: "Dec 21" },
      { name: "CMAT", meta: "Apr 2026" }
    ],
    courses: [
      { name: "MBA / PGDM", meta: "2 yrs" },
      { name: "BBA", meta: "3 yrs" },
      { name: "Executive MBA", meta: "1 yr" },
      { name: "MBA Marketing", meta: "2 yrs" },
      { name: "MBA HR", meta: "2 yrs" }
    ]
  },
  comm: {
    featured: [
      { name: "Shri Ram College of Commerce", meta: "Delhi" },
      { name: "Hindu College", meta: "Delhi" },
      { name: "Loyola College", meta: "Chennai" },
      { name: "Christ University", meta: "Bangalore" },
      { name: "St. Xavier's", meta: "Mumbai" }
    ],
    exams: [
      { name: "CUET UG", meta: "May 15" },
      { name: "IPU CET", meta: "Apr 2026" },
      { name: "CA Foundation", meta: "Quarterly" }
    ],
    courses: [
      { name: "B.Com (Hons)", meta: "3 yrs" },
      { name: "BBA", meta: "3 yrs" },
      { name: "CA Integrated", meta: "5 yrs" },
      { name: "M.Com", meta: "2 yrs" },
      { name: "CFA", meta: "Modular" }
    ]
  },
  med: {
    featured: [
      { name: "AIIMS New Delhi", meta: "Delhi" },
      { name: "JIPMER Puducherry", meta: "Puducherry" },
      { name: "Maulana Azad Medical College", meta: "Delhi" },
      { name: "CMC Vellore", meta: "Tamil Nadu" },
      { name: "AFMC Pune", meta: "Maharashtra" }
    ],
    exams: [
      { name: "NEET-UG 2026", meta: "May 4" },
      { name: "NEET-PG", meta: "Jun 2026" },
      { name: "FMGE", meta: "Jun & Dec" },
      { name: "INI-CET", meta: "Quarterly" }
    ],
    courses: [
      { name: "MBBS", meta: "5.5 yrs" },
      { name: "BDS", meta: "5 yrs" },
      { name: "BAMS", meta: "5.5 yrs" },
      { name: "B.Pharm", meta: "4 yrs" },
      { name: "B.Sc Nursing", meta: "4 yrs" }
    ]
  },
  sci: {
    featured: [
      { name: "St. Stephen's College", meta: "Delhi" },
      { name: "Miranda House", meta: "Delhi" },
      { name: "Hansraj College", meta: "Delhi" },
      { name: "Presidency College", meta: "Kolkata" },
      { name: "IISc Bangalore", meta: "Karnataka" }
    ],
    exams: [
      { name: "CUET UG", meta: "May 15" },
      { name: "IISER Aptitude", meta: "Jun 2026" },
      { name: "JAM", meta: "Feb 2026" },
      { name: "JEST", meta: "Feb 2026" }
    ],
    courses: [
      { name: "B.Sc Physics", meta: "3 yrs" },
      { name: "B.Sc Chemistry", meta: "3 yrs" },
      { name: "B.Sc Mathematics", meta: "3 yrs" },
      { name: "M.Sc Data Science", meta: "2 yrs" },
      { name: "B.Sc Biotech", meta: "3 yrs" }
    ]
  },
  hosp: {
    featured: [
      { name: "IHM Pusa", meta: "Delhi" },
      { name: "IHM Mumbai", meta: "Maharashtra" },
      { name: "Welcomgroup Graduate School", meta: "Manipal" },
      { name: "Christ University HM", meta: "Bangalore" }
    ],
    exams: [
      { name: "NCHMCT JEE", meta: "Apr 2026" },
      { name: "IIHM eCHAT", meta: "Apr 2026" }
    ],
    courses: [
      { name: "BHM", meta: "4 yrs" },
      { name: "B.Sc Hospitality", meta: "3 yrs" },
      { name: "Culinary Arts", meta: "3 yrs" }
    ]
  },
  it: {
    featured: [
      { name: "IIIT Hyderabad", meta: "Telangana" },
      { name: "IIIT Bangalore", meta: "Karnataka" },
      { name: "DAIICT Gandhinagar", meta: "Gujarat" },
      { name: "IIIT Delhi", meta: "Delhi" }
    ],
    exams: [
      { name: "JEE Main", meta: "Apr 4" },
      { name: "BITSAT", meta: "May 21" },
      { name: "VITEEE", meta: "Apr 22" }
    ],
    courses: [
      { name: "B.Tech CSE", meta: "4 yrs" },
      { name: "BCA", meta: "3 yrs" },
      { name: "B.Sc IT", meta: "3 yrs" },
      { name: "MCA", meta: "2 yrs" }
    ]
  },
  arts: {
    featured: [
      { name: "Lady Shri Ram College", meta: "Delhi" },
      { name: "Loreto College", meta: "Kolkata" },
      { name: "St. Xavier's College", meta: "Mumbai" },
      { name: "JNU New Delhi", meta: "Delhi" }
    ],
    exams: [
      { name: "CUET UG", meta: "May 15" },
      { name: "CUET PG", meta: "Jun 2026" }
    ],
    courses: [
      { name: "BA English", meta: "3 yrs" },
      { name: "BA Psychology", meta: "3 yrs" },
      { name: "BA Economics", meta: "3 yrs" },
      { name: "MA Sociology", meta: "2 yrs" }
    ]
  }
};
const TOP_STATES = ["Maharashtra", "Tamil Nadu", "Uttar Pradesh", "Karnataka", "Rajasthan", "Punjab"];

const COLLEGES = [
  { id: 1, name: "IIT Bombay", logo: "IIT", location: "Mumbai, Maharashtra", category: "engineering", rank: 1, rating: 4.9, reviews: "12.4K", fees: "₹8.5 L", placement: "₹21.8 LPA", tags: ["Govt.", "NIRF #1", "Tier-1"], img: "assets/colleges/iit-bombay.jpg", offers: ["B.Tech CSE", "B.Tech Mechanical", "B.Tech Electronics", "B.Tech Civil", "M.Tech", "B.Tech AI & ML"] },
  { id: 2, name: "IIM Ahmedabad", logo: "IIM", location: "Ahmedabad, Gujarat", category: "management", rank: 1, rating: 4.9, reviews: "8.7K", fees: "₹25.6 L", placement: "₹34.2 LPA", tags: ["Govt.", "PGP", "Top-3 IIM"], img: "assets/colleges/iim-ahmedabad.jpg", offers: ["MBA / PGDM", "Executive MBA", "MBA Marketing", "MBA HR", "BBA"] },
  { id: 3, name: "AIIMS New Delhi", logo: "AIIMS", location: "New Delhi", category: "medical", rank: 1, rating: 4.8, reviews: "9.1K", fees: "₹1,628", placement: "₹14 LPA", tags: ["Govt.", "MBBS", "Research"], img: "assets/colleges/aiims.jpg", offers: ["MBBS", "BDS", "B.Sc Nursing", "B.Pharm", "BAMS"] },
  { id: 4, name: "BITS Pilani", logo: "BITS", location: "Pilani, Rajasthan", category: "engineering", rank: 4, rating: 4.7, reviews: "9.6K", fees: "₹19.5 L", placement: "₹18.4 LPA", tags: ["Private", "Deemed", "B.Tech"], img: "assets/colleges/bits-pilani.jpg", offers: ["B.Tech CSE", "B.Tech Mechanical", "B.Tech Electronics", "M.Tech", "MBA / PGDM"] },
  { id: 5, name: "NLSIU Bangalore", logo: "NLS", location: "Bangalore, Karnataka", category: "law", rank: 1, rating: 4.8, reviews: "5.2K", fees: "₹3.2 L/yr", placement: "₹18.5 LPA", tags: ["Govt.", "Top Law", "5-year LLB"], img: "assets/colleges/nlsiu.jpg", offers: ["BA LLB", "LLM", "BBA LLB"] },
  { id: 6, name: "Christ University", logo: "CU", location: "Bangalore, Karnataka", category: "arts", rank: 12, rating: 4.6, reviews: "14.8K", fees: "₹3.5 L", placement: "₹7.2 LPA", tags: ["Private", "Deemed", "Multi-stream"], img: "assets/colleges/christ.jpg", offers: ["BA English", "BA Psychology", "BA Economics", "B.Com (Hons)", "BBA", "MBA / PGDM"] },
  { id: 7, name: "IIM Bangalore", logo: "IIM", location: "Bangalore, Karnataka", category: "management", rank: 2, rating: 4.9, reviews: "7.8K", fees: "₹24.5 L", placement: "₹33.8 LPA", tags: ["Govt.", "PGP", "Top-3 IIM"], img: "assets/colleges/iim-bangalore.jpg", offers: ["MBA / PGDM", "Executive MBA", "MBA Marketing"] },
  { id: 8, name: "Delhi University", logo: "DU", location: "New Delhi", category: "arts", rank: 3, rating: 4.7, reviews: "22.1K", fees: "₹50,000", placement: "₹8.5 LPA", tags: ["Govt.", "Central", "70+ Colleges"], img: "assets/colleges/bits-pilani.jpg", offers: ["BA English", "BA Psychology", "BA Economics", "B.Com (Hons)", "B.Sc Physics", "B.Sc Chemistry"] },
  { id: 9, name: "Manipal University", logo: "MAHE", location: "Manipal, Karnataka", category: "engineering", rank: 8, rating: 4.6, reviews: "13.5K", fees: "₹15.6 L", placement: "₹11.4 LPA", tags: ["Private", "Deemed", "Global"], img: "assets/colleges/manipal.jpg", offers: ["B.Tech CSE", "B.Tech Mechanical", "MBBS", "BDS", "MBA / PGDM"] }
];

// Stream → typical courses (used when a featured-list college isn't in COLLEGES)
const STREAM_TO_COURSES = {
  eng: ["B.Tech CSE", "B.Tech Mechanical", "B.Tech Electronics", "B.Tech Civil", "M.Tech", "B.Tech AI & ML"],
  mgmt: ["MBA / PGDM", "BBA", "Executive MBA", "MBA Marketing", "MBA HR"],
  comm: ["B.Com (Hons)", "BBA", "CA Integrated", "M.Com"],
  med: ["MBBS", "BDS", "BAMS", "B.Pharm", "B.Sc Nursing"],
  sci: ["B.Sc Physics", "B.Sc Chemistry", "B.Sc Mathematics", "M.Sc Data Science", "B.Sc Biotech"],
  hosp: ["BHM", "B.Sc Hospitality", "Culinary Arts"],
  it: ["B.Tech CSE", "BCA", "B.Sc IT", "MCA"],
  arts: ["BA English", "BA Psychology", "BA Economics", "MA Sociology"]
};

const EXAMS = [
  { id: 'jee-main', icon: "target", name: "JEE Main 2026", level: "Undergraduate · National", status: "live", statusText: "Live", date: "Apr 4, 2026", apply: "Open", takers: "13.6L" },
  { id: 'neet', icon: "stethoscope", name: "NEET-UG 2026", level: "Undergraduate · National", status: "live", statusText: "Live", date: "May 4, 2026", apply: "Open", takers: "24.2L" },
  { id: 'cuet', icon: "book-open", name: "CUET UG 2026", level: "Undergraduate · National", status: "live", statusText: "Live", date: "May 15, 2026", apply: "Open", takers: "14.9L" },
  { id: 'cat', icon: "briefcase", name: "CAT 2026", level: "Postgraduate · National", status: "soon", statusText: "Soon", date: "Nov 30, 2026", apply: "Aug 1", takers: "3.3L" },
  { id: 'jee-adv', icon: "flask-conical", name: "JEE Advanced", level: "Undergraduate · National", status: "soon", statusText: "Soon", date: "May 17, 2026", apply: "May 1", takers: "2.5L" },
  { id: 'clat', icon: "scale", name: "CLAT 2026", level: "UG & PG · National", status: "soon", statusText: "Soon", date: "Dec 7, 2026", apply: "Jul 15", takers: "75K" },
  { id: 'bitsat', icon: "cpu", name: "BITSAT 2026", level: "Undergraduate · Private", status: "soon", statusText: "Soon", date: "May 21, 2026", apply: "Mar 1", takers: "3.1L" },
  { id: 'gate', icon: "graduation-cap", name: "GATE 2026", level: "Postgraduate · National", status: "closed", statusText: "Closed", date: "Feb 1-9", apply: "Closed", takers: "9.2L" }
];

const RANKINGS = [
  { rank: 1, name: "IIT Madras", score: 89.5, trend: "+1" },
  { rank: 2, name: "IIT Delhi", score: 88.1, trend: "0" },
  { rank: 3, name: "IIT Bombay", score: 87.4, trend: "-1" },
  { rank: 4, name: "IIT Kanpur", score: 84.6, trend: "+2" },
  { rank: 5, name: "IIT Kharagpur", score: 81.9, trend: "0" },
  { rank: 6, name: "IIT Roorkee", score: 79.5, trend: "+1" },
  { rank: 7, name: "IIT Guwahati", score: 76.2, trend: "-1" },
  { rank: 8, name: "NIT Trichy", score: 71.8, trend: "+3" }
];

const NEWS = {
  media: [
    { title: "Gurgaon-based CollegeKaksha raises $8 million Series B", source: "The Economic Times", date: "12 Apr 2026", img: "assets/news/news-1.jpg", tag: "Funding" },
    { title: "CollegeKaksha helps 20K students secure 2026 admissions", source: "The Indian Express", date: "5 Mar 2026", img: "assets/hero-bg.jpg", tag: "Impact" },
    { title: "How AI is changing Indian college counselling forever", source: "BW Education", date: "18 Feb 2026", img: "assets/news/news-2.jpg", tag: "Feature" }
  ],
  articles: [
    { title: "How to choose the right engineering branch in 2026", source: "Editorial Team", date: "10 Apr 2026", img: "assets/news/news-3.jpg", tag: "Guide" },
    { title: "MBA vs PGDM: The complete 2026 comparison guide", source: "Career Desk", date: "2 Apr 2026", img: "assets/news/news-4.jpg", tag: "Career" },
    { title: "Top 10 highest-paying career paths after 12th science", source: "Career Desk", date: "28 Mar 2026", img: "assets/news/news-5.jpg", tag: "Career" }
  ],
  news: [
    { title: "JEE Main 2026 Session 2 application window opens", source: "NTA Update", date: "11 Apr 2026", img: "assets/news/news-6.jpg", tag: "Exam" },
    { title: "CUET 2026 syllabus released — major changes announced", source: "UGC", date: "5 Apr 2026", img: "assets/news/news-7.jpg", tag: "Update" },
    { title: "NEET-UG 2026 counselling schedule officially released", source: "MCC", date: "1 Apr 2026", img: "assets/news/news-8.jpg", tag: "Counselling" }
  ],
  boards: [
    { title: "CBSE Class 12 Compartment Exam date sheet released", source: "CBSE", date: "9 Apr 2026", img: "assets/news/news-9.jpg", tag: "CBSE" },
    { title: "ICSE Class 10 results expected by May 15, 2026", source: "CISCE", date: "4 Apr 2026", img: "assets/news/news-10.jpg", tag: "ICSE" },
    { title: "State Boards 2026 results timeline & key dates", source: "State Boards", date: "Mar 2026", img: "assets/news/news-11.jpg", tag: "State" }
  ],
  partner: [
    { title: "Chitkara University records 100% placement in CSE", source: "Featured Partner", date: "Sponsored", img: "assets/colleges/bits-pilani.jpg", tag: "Partner" },
    { title: "LPU admissions 2026 — applications now open", source: "Featured Partner", date: "Sponsored", img: "assets/colleges/christ.jpg", tag: "Partner" },
    { title: "K.R. Mangalam University introduces new AI courses", source: "Featured Partner", date: "Sponsored", img: "assets/colleges/iit-bombay.jpg", tag: "Partner" }
  ]
};

const TESTIMONIALS = [
  { name: "Priya Sharma", role: "B.Tech CSE @ IIT Bombay", text: "CollegeKaksha's AI predictor matched me with 5 colleges I hadn't even considered. I'm now studying at my dream branch and saved ₹40k in scholarship aid. The counsellors actually call back!", img: "assets/avatars/student-1.jpg" },
  { name: "Aarav Mehta", role: "MBBS @ Maulana Azad Medical College", text: "The NEET counselling sessions were a lifesaver — clear, jargon-free and timely. Way better than the random WhatsApp groups I used to depend on for advice.", img: "assets/avatars/student-2.jpg" },
  { name: "Sneha Reddy", role: "MBA Aspirant · CAT 2026", text: "One application, 18 B-schools applied to. The deadline tracker alone is worth it. Customer support replied at 11pm — I almost cried (in a good way).", img: "assets/avatars/student-3.jpg" }
];

const COURSE_KEYWORDS = {
  eng: ['engineering','b.tech','btech','m.tech','mtech','engineer','mechanical','civil','electronics','aerospace'],
  mgmt: ['management','mba','pgdm','bba','executive mba','marketing','hr'],
  comm: ['commerce','b.com','bcom','ca ','chartered','cfa','banking'],
  med: ['medical','mbbs','bds','bams','pharm','nursing','medicine','doctor','neet'],
  sci: ['science','physics','chemistry','mathematics','biotech','b.sc','bsc'],
  hosp: ['hotel','hospitality','culinary','tourism','bhm'],
  it: ['it','computer','cse','bca','mca','software','programming'],
  arts: ['arts','psychology','sociology','english','humanities','economics']
};

/* ===== Helpers ===== */
const $ = (s, r=document) => r.querySelector(s);
const $$ = (s, r=document) => [...r.querySelectorAll(s)];
const escapeHtml = (s) => String(s).replace(/[<>&"']/g, c => ({'<':'&lt;','>':'&gt;','&':'&amp;','"':'&quot;',"'":'&#39;'}[c]));
// Build a colored-initials badge inline (no external CDN)
function logoBadge(text, bg = '#0f1d4f') {
  const initials = text.split(/\s+|-/).filter(Boolean).map(w => w[0]).join('').toUpperCase().slice(0, 3);
  return `<span class="logo-badge" style="background:${bg}">${escapeHtml(initials)}</span>`;
}

/* ===== Wishlist (localStorage) ===== */
const WL_KEY = 'ck_wishlist';
const wishlist = new Set(JSON.parse(localStorage.getItem(WL_KEY) || '[]'));
const persistWishlist = () => {
  localStorage.setItem(WL_KEY, JSON.stringify([...wishlist]));
  updateWishlistBadge();
  renderWishlistDrawer();
};
function updateWishlistBadge() {
  const badge = $("#wlBadge");
  const btn = $("#wishlistBtn");
  if (!badge || !btn) return;
  if (wishlist.size > 0) {
    badge.textContent = wishlist.size;
    badge.hidden = false;
    btn.classList.add('has-items');
  } else {
    badge.hidden = true;
    btn.classList.remove('has-items');
  }
}

/* ===== Render ===== */
function renderTab(key) {
  const d = TAB_DATA[key] || TAB_DATA.eng;
  const row = (item, i) => `
    <li tabindex="0" role="button" aria-label="${escapeHtml(item.name)}">
      <span class="num">${String(i + 1).padStart(2, '0')}</span>
      <div class="info">
        <strong>${escapeHtml(item.name)}</strong>
        <span class="meta">${escapeHtml(item.meta)}</span>
      </div>
      <i data-lucide="arrow-up-right" class="arrow"></i>
    </li>
  `;
  // Trim lists so the three columns have similar visual height
  const featured = d.featured.slice(0, 6);
  const exams = d.exams.slice(0, 4);
  const courses = d.courses.slice(0, 6);
  const states = TOP_STATES.slice(0, 4);
  $("#featColleges").innerHTML = featured.map(row).join('');
  $("#featExams").innerHTML = exams.map(row).join('');
  $("#featCourses").innerHTML = courses.map(row).join('');
  $("#topStates").innerHTML = states.map(s => `<span class="state-chip" tabindex="0" role="button">${escapeHtml(s)}</span>`).join('');
  if (window.lucide) lucide.createIcons();
}

function renderColleges(filter='all', customList=null) {
  let list;
  if (customList) list = customList;
  else list = filter === 'all' ? COLLEGES : COLLEGES.filter(c => c.category === filter);

  if (list.length === 0) {
    $("#collegesGrid").innerHTML = `
      <div class="empty-state">
        <i data-lucide="search-x"></i>
        <h3>No colleges match your search</h3>
        <p>Try a different keyword, or browse all colleges instead.</p>
        <button class="btn btn-outline-orange" onclick="clearSearch()">View all colleges</button>
      </div>
    `;
  } else {
    $("#collegesGrid").innerHTML = list.map(c => `
      <article class="college-card reveal" data-id="${c.id}">
        <div class="cc-hero">
          <img src="${c.img}" alt="${escapeHtml(c.name)}" class="cc-bg" loading="lazy" />
          <div class="cc-rank-badge"><i data-lucide="trophy"></i> Rank <span>#${c.rank}</span></div>
          <button class="cc-fav ${wishlist.has(c.id) ? 'active' : ''}" aria-label="Save" data-cid="${c.id}"><i data-lucide="heart"></i></button>
          <div class="cc-logo">${logoBadge(c.logo)}</div>
        </div>
        <div class="cc-body">
          <h3 class="cc-name">${escapeHtml(c.name)}</h3>
          <div class="cc-loc"><i data-lucide="map-pin"></i> ${escapeHtml(c.location)}</div>
          <div class="cc-rating">
            <span class="score">★ ${c.rating}</span>
            <span class="reviews">${escapeHtml(c.reviews)} reviews</span>
          </div>
          <div class="cc-tags">${c.tags.map(t => `<span class="cc-tag">${escapeHtml(t)}</span>`).join('')}</div>
          <div class="cc-info">
            <div><span>Total Fees</span><strong>${escapeHtml(c.fees)}</strong></div>
            <div><span>Avg. Package</span><strong>${escapeHtml(c.placement)}</strong></div>
          </div>
          <div class="cc-actions">
            <button class="btn btn-orange cc-apply">Apply Now</button>
            <button class="btn btn-soft cc-brochure">Brochure</button>
          </div>
        </div>
      </article>
    `).join('');
  }
  bindCardEvents();
  if (window.lucide) lucide.createIcons();
  observeReveals();
}

function renderExams(customList=null) {
  const list = customList || EXAMS;
  if (list.length === 0) {
    $("#examsGrid").innerHTML = `
      <div class="empty-state">
        <i data-lucide="search-x"></i>
        <h3>No exams match your search</h3>
        <p>Try different keywords like "JEE", "NEET", or "CAT".</p>
        <button class="btn btn-outline-orange" onclick="clearSearch()">View all exams</button>
      </div>
    `;
  } else {
    $("#examsGrid").innerHTML = list.map(e => `
      <article class="exam-card reveal" data-eid="${e.id}">
        <span class="exam-status ${e.status}">${e.statusText}</span>
        <div class="exam-icon"><i data-lucide="${e.icon}"></i></div>
        <h4>${escapeHtml(e.name)}</h4>
        <p class="exam-level">${escapeHtml(e.level)}</p>
        <div class="exam-rows">
          <div class="exam-row"><span>Exam Date</span><span>${escapeHtml(e.date)}</span></div>
          <div class="exam-row"><span>Application</span><span>${escapeHtml(e.apply)}</span></div>
          <div class="exam-row"><span>Test Takers</span><span>${escapeHtml(e.takers)}</span></div>
        </div>
      </article>
    `).join('');
  }
  if (window.lucide) lucide.createIcons();
  observeReveals();
}

function renderRankings() {
  $("#rankBody").innerHTML = RANKINGS.map(r => {
    const n = parseInt(r.trend);
    const cls = n > 0 ? 'trend-up' : n < 0 ? 'trend-down' : 'trend-same';
    const icon = n > 0 ? '▲' : n < 0 ? '▼' : '—';
    return `<tr><td class="rank-num">${r.rank}</td><td>${escapeHtml(r.name)}</td><td class="rank-score">${r.score}</td><td class="${cls}">${icon} ${Math.abs(n) || ''}</td></tr>`;
  }).join('');
}

function renderNews(key) {
  const list = NEWS[key] || NEWS.media;
  $("#newsGrid").innerHTML = list.map(n => `
    <article class="news-card reveal">
      <div class="news-img">
        <img src="${n.img}" alt="${escapeHtml(n.title)}" loading="lazy" />
        <span class="news-tag-pill">${escapeHtml(n.tag)}</span>
      </div>
      <div class="news-body">
        <h4>${escapeHtml(n.title)}</h4>
        <p>Read more →</p>
        <div class="meta">
          <span>${escapeHtml(n.source)}</span>
          <span>${escapeHtml(n.date)}</span>
        </div>
      </div>
    </article>
  `).join('');
  if (window.lucide) lucide.createIcons();
  observeReveals();
}

function renderTestimonials() {
  $("#tGrid").innerHTML = TESTIMONIALS.map(t => `
    <div class="t-card reveal">
      <div class="t-quote">"</div>
      <div class="t-stars">★★★★★</div>
      <p>${escapeHtml(t.text)}</p>
      <div class="t-author">
        <div class="t-avatar"><img src="${t.img}" alt="${escapeHtml(t.name)}" loading="lazy" /></div>
        <div>
          <strong>${escapeHtml(t.name)}</strong>
          <span>${escapeHtml(t.role)}</span>
        </div>
      </div>
    </div>
  `).join('');
}

/* ===== Card events ===== */
function bindCardEvents() {
  $$(".cc-fav").forEach(b => b.addEventListener('click', e => {
    e.stopPropagation();
    const id = parseInt(b.dataset.cid);
    if (wishlist.has(id)) {
      wishlist.delete(id);
      b.classList.remove('active');
      showToast("Removed from wishlist");
    } else {
      wishlist.add(id);
      b.classList.add('active');
      const college = COLLEGES.find(c => c.id === id);
      showToast(`❤ ${college?.name || 'College'} saved to wishlist`);
    }
    persistWishlist();
  }));
  $$(".cc-apply").forEach(b => b.addEventListener('click', e => {
    e.stopPropagation();
    const card = b.closest('.college-card');
    const collegeName = card?.querySelector('.cc-name')?.textContent?.trim();
    window.openModal?.('apply', collegeName ? {
      title: `Apply to ${collegeName}`,
      subtitle: "Fill in your details below — we'll start your application and notify you within 30 minutes."
    } : {});
  }));
  $$(".cc-brochure").forEach(b => b.addEventListener('click', e => {
    e.stopPropagation();
    const card = b.closest('.college-card');
    const collegeName = card?.querySelector('.cc-name')?.textContent?.trim();
    window.openModal?.('brochure', collegeName ? {
      title: `${collegeName} — Brochure`,
      subtitle: "Enter your details to get the brochure on email + a callback from our counsellor."
    } : {});
  }));
}

/* ===== Counter animation ===== */
function animateCounters() {
  const counters = $$("[data-count]");
  const fmt = n => n >= 1_000_000 ? (n / 1_000_000).toFixed(0) + "M+" : n >= 1_000 ? Math.round(n / 1_000) + "K+" : n.toLocaleString() + "+";
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el = e.target, target = parseInt(el.dataset.count), start = performance.now(), duration = 1500;
      const tick = now => {
        const p = Math.min((now - start) / duration, 1);
        const v = Math.floor(target * (1 - Math.pow(1 - p, 3)));
        el.textContent = fmt(v);
        if (p < 1) requestAnimationFrame(tick); else el.textContent = fmt(target);
      };
      requestAnimationFrame(tick);
      io.unobserve(el);
    });
  }, { threshold: .3 });
  counters.forEach(c => io.observe(c));
}

/* ===== Toast ===== */
let toastTimer;
function showToast(msg) {
  const t = $("#toast");
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 2600);
}
window.showToast = showToast;

/* ===== SEARCH ENGINE ===== */
const SUGGEST_DATA = [
  ...COLLEGES.map(c => ({ icon: "school", title: c.name, sub: c.location, tag: "College", type: "college", id: c.id })),
  ...EXAMS.map(e => ({ icon: e.icon, title: e.name, sub: e.level, tag: "Exam", type: "exam", id: e.id })),
  { icon: "book-open", title: "B.Tech CSE", sub: "Engineering · 4 years", tag: "Course", type: "course", stream: "eng" },
  { icon: "book-open", title: "B.Tech Mechanical", sub: "Engineering · 4 years", tag: "Course", type: "course", stream: "eng" },
  { icon: "book-open", title: "MBA / PGDM", sub: "Management · 2 years", tag: "Course", type: "course", stream: "mgmt" },
  { icon: "book-open", title: "MBBS", sub: "Medical · 5.5 years", tag: "Course", type: "course", stream: "med" },
  { icon: "book-open", title: "BA LLB", sub: "Law · 5 years", tag: "Course", type: "course", stream: "arts" },
  { icon: "book-open", title: "B.Com (Hons)", sub: "Commerce · 3 years", tag: "Course", type: "course", stream: "comm" },
  { icon: "book-open", title: "BCA", sub: "IT · 3 years", tag: "Course", type: "course", stream: "it" }
];

function scrollToSection(selector) {
  const el = typeof selector === 'string' ? $(selector) : selector;
  if (!el) return;
  const offset = 92;
  const top = el.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top, behavior: 'smooth' });
}

function showSearchBanner(sectionSel, query, count, type) {
  removeSearchBanner(sectionSel);
  const section = $(sectionSel);
  if (!section) return;
  const banner = document.createElement('div');
  banner.className = 'search-banner-wrap';
  banner.dataset.banner = sectionSel;
  banner.innerHTML = `
    <div class="search-banner">
      <i data-lucide="search"></i>
      Showing <strong>${count}</strong> ${count === 1 ? type.slice(0, -1) : type} for "${escapeHtml(query)}"
      <button class="clear-btn" data-clear="${sectionSel}"><i data-lucide="x"></i> Clear</button>
    </div>
  `;
  const head = section.querySelector('.sec-head');
  if (head && head.parentNode) head.parentNode.insertBefore(banner, head.nextSibling);
  if (window.lucide) lucide.createIcons();
  banner.querySelector('.clear-btn').addEventListener('click', clearSearch);
}

function removeSearchBanner(sectionSel) {
  $$(`.search-banner-wrap[data-banner="${sectionSel}"]`).forEach(b => b.remove());
}

function clearSearch() {
  $$(".search-banner-wrap").forEach(b => b.remove());
  $$(".filter").forEach(x => x.classList.remove('active'));
  $$(".filter").find?.(x => x.dataset.f === 'all')?.classList.add('active');
  const allBtn = $$(".filter").find(x => x.dataset.f === 'all');
  if (allBtn) allBtn.classList.add('active');
  renderColleges();
  renderExams();
  $("#heroSearch").value = '';
  showToast("Search cleared");
}
window.clearSearch = clearSearch;

function activateCourseTab(stream) {
  $$(".exp-tab").forEach(t => t.classList.toggle('active', t.dataset.extab === stream));
  renderTab(stream);
}

function highlightCard(selector, id, attr) {
  setTimeout(() => {
    const el = $(`${selector}[${attr}="${id}"]`);
    if (!el) return;
    el.classList.add('highlight');
    el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    setTimeout(() => el.classList.remove('highlight'), 2400);
  }, 700);
}

function performSearch(query) {
  if (!query || !query.trim()) {
    showToast("Type something to search");
    return;
  }
  const q = query.trim().toLowerCase();

  // 1) Try colleges (name, location, category, tags)
  const collegeMatches = COLLEGES.filter(c =>
    c.name.toLowerCase().includes(q) ||
    c.location.toLowerCase().includes(q) ||
    c.category.toLowerCase().includes(q) ||
    c.tags.some(t => t.toLowerCase().includes(q))
  );

  // 2) Try exams (name, level)
  const examMatches = EXAMS.filter(e =>
    e.name.toLowerCase().includes(q) ||
    e.level.toLowerCase().includes(q) ||
    e.id.toLowerCase().includes(q)
  );

  // 3) Try course streams (keywords map)
  let courseStream = null;
  for (const [stream, keywords] of Object.entries(COURSE_KEYWORDS)) {
    if (keywords.some(k => q.includes(k) || k.includes(q))) { courseStream = stream; break; }
  }

  if (collegeMatches.length > 0) {
    renderColleges('all', collegeMatches);
    showSearchBanner('#colleges', query, collegeMatches.length, 'colleges');
    scrollToSection('#colleges');
    if (collegeMatches.length === 1) {
      highlightCard('.college-card', collegeMatches[0].id, 'data-id');
    }
    showToast(`Found ${collegeMatches.length} college${collegeMatches.length === 1 ? '' : 's'}`);
  } else if (examMatches.length > 0) {
    renderExams(examMatches);
    showSearchBanner('#exams', query, examMatches.length, 'exams');
    scrollToSection('#exams');
    if (examMatches.length === 1) highlightCard('.exam-card', examMatches[0].id, 'data-eid');
    showToast(`Found ${examMatches.length} exam${examMatches.length === 1 ? '' : 's'}`);
  } else if (courseStream) {
    activateCourseTab(courseStream);
    scrollToSection('#courses');
    showSearchBanner('#courses', query, 1, 'streams');
    showToast(`Showing ${courseStream === 'eng' ? 'Engineering' : courseStream === 'mgmt' ? 'Management' : courseStream} courses`);
  } else {
    showToast(`No matches found for "${query}"`);
  }
}
window.performSearch = performSearch;

/* ===== Search bar setup ===== */
function setupSearch() {
  const input = $("#heroSearch");
  const sug = $("#suggest");
  const box = $(".hs-box");
  let activeIdx = -1;

  // Move suggest out of the hero-search backdrop-filter stacking context.
  // backdrop-filter creates a new stacking context that traps fixed children.
  document.body.appendChild(sug);

  function positionSuggest() {
    if (sug.hidden) return;
    const r = box.getBoundingClientRect();
    sug.style.left = r.left + 'px';
    sug.style.top = (r.bottom + 6) + 'px';
    sug.style.width = r.width + 'px';
  }

  function refreshSuggest() {
    const q = input.value.trim().toLowerCase();
    activeIdx = -1;
    if (!q) { sug.hidden = true; return; }
    const filtered = SUGGEST_DATA
      .filter(s => s.title.toLowerCase().includes(q) || s.sub.toLowerCase().includes(q))
      .slice(0, 7);

    if (!filtered.length) {
      sug.innerHTML = `
        <div class="suggest-list">
          <div class="s-item-empty">
            <i data-lucide="search-x"></i>
            <strong>No matches found</strong>
            <span>Try "IIT", "MBA", "Bangalore" or "CUET"</span>
          </div>
        </div>
      `;
    } else {
      sug.innerHTML = `<div class="suggest-list">${filtered.map((s, i) => `
        <div class="s-item s-${s.type}" data-idx="${i}">
          <div class="s-ic"><i data-lucide="${s.icon}"></i></div>
          <div class="s-body">
            <strong>${escapeHtml(s.title)}</strong>
            <span class="s-sub">${escapeHtml(s.sub)}</span>
          </div>
          <span class="s-tag">${s.tag}</span>
        </div>
      `).join('')}</div>`;
      $$(".s-item", sug).forEach((el, i) => el.addEventListener('click', () => {
        const item = filtered[i];
        input.value = item.title;
        sug.hidden = true;
        if (item.type === 'course' && item.stream) {
          filterCollegesByCourse(item.title);
        } else {
          performSearch(item.title);
        }
      }));
    }
    if (window.lucide) lucide.createIcons();
    sug.hidden = false;
    positionSuggest();
  }

  function updateActiveItem() {
    const items = $$(".s-item", sug);
    items.forEach((it, i) => it.classList.toggle('active', i === activeIdx));
    if (activeIdx >= 0 && items[activeIdx]) {
      items[activeIdx].scrollIntoView({ block: 'nearest' });
    }
  }

  $$(".hs-tab").forEach(t => t.addEventListener('click', () => {
    $$(".hs-tab").forEach(x => x.classList.remove('active'));
    t.classList.add('active');
    const tab = t.dataset.stab;
    input.placeholder = tab === "colleges" ? "Search IIT Delhi, BITS Pilani…" : tab === "courses" ? "Search B.Tech, MBA, MBBS…" : "Search JEE, NEET, CAT, CUET…";
    input.focus();
  }));

  input.addEventListener('input', refreshSuggest);
  input.addEventListener('focus', () => { if (input.value.trim()) refreshSuggest(); });

  input.addEventListener('keydown', e => {
    const items = $$(".s-item", sug);
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (sug.hidden) refreshSuggest();
      activeIdx = Math.min(activeIdx + 1, items.length - 1);
      updateActiveItem();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      activeIdx = Math.max(activeIdx - 1, -1);
      updateActiveItem();
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (activeIdx >= 0 && items[activeIdx]) {
        items[activeIdx].click();
      } else {
        sug.hidden = true;
        performSearch(input.value);
      }
    } else if (e.key === 'Escape') {
      sug.hidden = true;
      input.blur();
    }
  });

  document.addEventListener('click', e => {
    if (!e.target.closest('.hs-box') && !e.target.closest('.suggest')) sug.hidden = true;
  });
  window.addEventListener('scroll', positionSuggest, { passive: true });
  window.addEventListener('resize', positionSuggest);

  $$(".chip").forEach(c => c.addEventListener('click', () => {
    input.value = c.textContent;
    performSearch(c.textContent);
  }));

  $(".hs-go").addEventListener('click', e => {
    e.preventDefault();
    sug.hidden = true;
    performSearch(input.value);
  });
}

/* ===== Filters ===== */
function setupFilters() {
  $$(".filter").forEach(f => f.addEventListener('click', () => {
    $$(".filter").forEach(x => x.classList.remove('active'));
    f.classList.add('active');
    $$(".search-banner-wrap[data-banner='#colleges']").forEach(b => b.remove());
    renderColleges(f.dataset.f);
  }));
}

/* ===== Tabs ===== */
function setupExploreTabs() {
  $$(".exp-tab").forEach(t => t.addEventListener('click', () => {
    $$(".exp-tab").forEach(x => x.classList.remove('active'));
    t.classList.add('active');
    renderTab(t.dataset.extab);
    $$(".search-banner-wrap[data-banner='#courses']").forEach(b => b.remove());
  }));
}

/* ===== Filter colleges by a course (everyone offering it) ===== */
function filterCollegesByCourse(courseName) {
  const q = courseName.toLowerCase();
  const matches = COLLEGES.filter(c =>
    (c.offers || []).some(o => o.toLowerCase() === q || o.toLowerCase().includes(q) || q.includes(o.toLowerCase()))
  );

  if (matches.length === 0) {
    // Fallback: route by stream keyword
    for (const [stream, keywords] of Object.entries(COURSE_KEYWORDS)) {
      if (keywords.some(k => q.includes(k) || k.includes(q))) {
        activateCourseTab(stream);
        scrollToSection('#courses');
        showSearchBanner('#courses', courseName, 1, 'streams');
        showToast(`No exact matches — showing ${stream === 'eng' ? 'Engineering' : stream} colleges`);
        return;
      }
    }
    showToast(`No colleges currently offer "${courseName}"`);
    return;
  }

  renderColleges('all', matches);
  showSearchBanner('#colleges', courseName, matches.length, 'colleges');
  scrollToSection('#colleges');
  showToast(`Found ${matches.length} college${matches.length === 1 ? '' : 's'} offering ${courseName}`);
}

/* ===== Explore click delegation — routes based on which column ===== */
function setupExploreClicks() {
  const grid = $('.exp-grid');
  if (!grid) return;

  grid.addEventListener('click', e => {
    const chip = e.target.closest('.state-chip');
    if (chip) {
      const state = chip.textContent.trim();
      $("#heroSearch").value = state;
      performSearch(state);
      return;
    }

    const li = e.target.closest('.exp-list li');
    if (!li) return;
    const title = li.querySelector('.info strong')?.textContent?.trim();
    if (!title) return;

    const col = li.closest('.exp-col');
    $("#heroSearch").value = title;
    if (col?.classList.contains('exp-col-3')) {
      // Related Courses → show all colleges offering that course
      filterCollegesByCourse(title);
    } else {
      // Featured Colleges OR Exams → filter main grid + scroll + highlight
      performSearch(title);
    }
  });

  // Keyboard activation
  grid.addEventListener('keydown', e => {
    if (e.key !== 'Enter' && e.key !== ' ') return;
    if (e.target.matches('.exp-list li, .state-chip')) {
      e.preventDefault();
      e.target.click();
    }
  });
}
function setupNewsTabs() {
  $$(".news-tab").forEach(t => t.addEventListener('click', () => {
    $$(".news-tab").forEach(x => x.classList.remove('active'));
    t.classList.add('active');
    renderNews(t.dataset.newstab);
  }));
}

/* ===== Theme ===== */
function setupTheme() {
  const stored = localStorage.getItem('theme');
  if (stored === 'dark') document.documentElement.setAttribute('data-theme', 'dark');
  $("#themeToggle")?.addEventListener('click', () => {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    if (isDark) { document.documentElement.removeAttribute('data-theme'); localStorage.setItem('theme', 'light'); }
    else { document.documentElement.setAttribute('data-theme', 'dark'); localStorage.setItem('theme', 'dark'); }
  });
}

/* ===== Nav & mobile menu ===== */
function setupNav() {
  const nav = $("#nav");
  window.addEventListener('scroll', () => nav.classList.toggle('scrolled', window.scrollY > 6), { passive: true });

  // mobile drawer
  const menu = $(".menu");
  let backdrop;

  function ensureMenuChrome() {
    // Inject header (brand + close) once
    if (!menu.querySelector('.mm-head')) {
      const head = document.createElement('div');
      head.className = 'mm-head';
      head.innerHTML = `
        <div class="mm-brand">
          <div class="brand-mark"><i data-lucide="graduation-cap"></i></div>
          <div>
            <strong>College<span>Kaksha</span></strong>
            <em>Right Guidance · Bright Future</em>
          </div>
        </div>
        <button class="mm-close" aria-label="Close menu"><i data-lucide="x"></i></button>
      `;
      menu.insertBefore(head, menu.firstChild);
      head.querySelector('.mm-close').addEventListener('click', closeMenu);
    }
    // Inject footer (CTA + contact) once
    if (!menu.querySelector('.mm-foot')) {
      const foot = document.createElement('div');
      foot.className = 'mm-foot';
      foot.innerHTML = `
        <button class="btn btn-orange" data-modal="default">
          <i data-lucide="headset"></i> Talk to Expert
        </button>
        <div class="mm-contact">
          <a href="tel:18005729877"><i data-lucide="phone"></i> 1800-572-9877</a>
          <a href="mailto:hello@collegekaksha.com"><i data-lucide="mail"></i> Email us</a>
        </div>
      `;
      menu.appendChild(foot);
    }
    if (window.lucide) lucide.createIcons();
  }

  $("#hamburger")?.addEventListener('click', () => {
    if (menu.classList.contains('mobile-open')) closeMenu();
    else openMenu();
  });

  function openMenu() {
    ensureMenuChrome();
    menu.classList.add('mobile-open');
    backdrop = document.createElement('div');
    backdrop.className = 'menu-backdrop show';
    backdrop.addEventListener('click', closeMenu);
    document.body.appendChild(backdrop);
    document.body.classList.add('menu-open');
    document.body.style.overflow = 'hidden';
  }
  function closeMenu() {
    menu.classList.remove('mobile-open');
    backdrop?.remove();
    document.body.classList.remove('menu-open');
    document.body.style.overflow = '';
  }
  // Close drawer when an anchor link (in body) is tapped — but NOT the close button or modal trigger
  menu.addEventListener('click', e => {
    const link = e.target.closest('a[href^="#"]');
    if (link) closeMenu();
  });
  // Close on Escape
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && menu.classList.contains('mobile-open')) closeMenu();
  });

}

/* ===== Modal ===== */
const MODAL_PRESETS = {
  default: {
    pill: "FREE",
    title: "Get Free Counselling",
    subtitle: "Talk to our IIT/IIM-trained counsellors. We'll call within 30 minutes — no spam, just guidance.",
    formTitle: "Request a callback",
    cta: "Get Free Callback"
  },
  apply: {
    pill: "1 FORM",
    title: "Start Your Application",
    subtitle: "Apply to 2000+ colleges with a single form. Auto-filled, signed, submitted in under 2 minutes.",
    formTitle: "Begin your application",
    cta: "Submit Application"
  },
  login: {
    pill: "MEMBER",
    title: "Welcome Back!",
    subtitle: "Sign in to track applications, save colleges, manage your shortlist and access expert chat.",
    formTitle: "Sign in to continue",
    cta: "Sign In"
  },
  career: {
    pill: "AI POWERED",
    title: "Get Career Recommendations",
    subtitle: "Take our 5-minute AI quiz to discover careers personalised to your skills, interests and personality.",
    formTitle: "Start your Career Compass",
    cta: "Start Quiz"
  },
  jobready: {
    pill: "PREMIUM",
    title: "Apply to Job Ready Degrees",
    subtitle: "Industry-led curriculum, internships with 500+ brands, 250+ hiring partners. Get eligibility callback.",
    formTitle: "Check eligibility",
    cta: "Check Eligibility"
  },
  brochure: {
    pill: "INSTANT",
    title: "Download College Brochure",
    subtitle: "Enter your details to instantly receive the brochure on email + a quick call from our counsellor.",
    formTitle: "Get the brochure",
    cta: "Send Me Brochure"
  }
};

function setupModal() {
  const modal = $("#ckModal");
  if (!modal) return;
  const form = $("#modalForm");
  const submit = $("#modalSubmit");

  function open(preset = 'default', overrides = {}) {
    const cfg = { ...MODAL_PRESETS[preset] || MODAL_PRESETS.default, ...overrides };
    $("#modalPill").innerHTML = `<i data-lucide="sparkles"></i> ${escapeHtml(cfg.pill)}`;
    $("#modalTitle").textContent = cfg.title;
    $("#modalSubtitle").textContent = cfg.subtitle;
    $("#modalFormTitle").textContent = cfg.formTitle;
    $("#modalCtaLabel").textContent = cfg.cta;
    submit.classList.remove('loading', 'success');
    modal.classList.add('show');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    if (window.lucide) lucide.createIcons();
    setTimeout(() => $('input[name="name"]', form)?.focus(), 350);
  }

  function close() {
    modal.classList.remove('show');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    setTimeout(() => {
      if (!submit.classList.contains('success')) form.reset();
      submit.classList.remove('loading', 'success');
    }, 350);
  }

  window.openModal = open;
  window.closeModal = close;

  modal.querySelectorAll('[data-close]').forEach(el => el.addEventListener('click', close));
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && modal.classList.contains('show')) close();
  });

  form.addEventListener('submit', e => {
    e.preventDefault();
    const fd = new FormData(form);
    const mobile = (fd.get('mobile') || '').toString().replace(/\D/g, '');
    if (mobile.length < 10) {
      $('input[name="mobile"]', form).focus();
      showToast("Please enter a valid 10-digit mobile number");
      return;
    }
    submit.classList.add('loading');
    if (window.lucide) lucide.createIcons();
    setTimeout(() => {
      submit.classList.remove('loading');
      submit.classList.add('success');
      if (window.lucide) lucide.createIcons();
      setTimeout(() => {
        close();
        showToast("Request received — our counsellor will call you within 30 minutes ✓");
      }, 1100);
    }, 900);
  });

  // Wire all elements with data-modal attribute
  document.addEventListener('click', e => {
    const trigger = e.target.closest('[data-modal]');
    if (!trigger) return;
    e.preventDefault();
    const preset = trigger.dataset.modal || 'default';
    const overrides = {};
    if (trigger.dataset.modalTitle) overrides.title = trigger.dataset.modalTitle;
    if (trigger.dataset.modalSubtitle) overrides.subtitle = trigger.dataset.modalSubtitle;
    open(preset, overrides);
  });
}

/* ===== Scroll spy ===== */
function setupScrollSpy() {
  const links = $$('.menu > ul a[href^="#"]');
  const map = new Map();
  links.forEach(l => {
    const id = l.getAttribute('href');
    const sec = id !== '#' ? $(id) : null;
    if (sec) map.set(sec, l);
  });
  if (map.size === 0) return;
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      const link = map.get(e.target);
      if (!link) return;
      if (e.isIntersecting) {
        links.forEach(l => l.classList.remove('active-section'));
        link.classList.add('active-section');
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px' });
  map.forEach((_, sec) => io.observe(sec));
}

/* ===== Reading progress + back to top ===== */
function setupProgress() {
  const fill = $("#progressFill");
  const top = $("#backTop");
  function update() {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const pct = max > 0 ? (window.scrollY / max) * 100 : 0;
    fill.style.width = pct + '%';
    top.classList.toggle('show', window.scrollY > 600);
  }
  window.addEventListener('scroll', update, { passive: true });
  update();
  top.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

/* ===== Contact form ===== */
function setupContact() {
  $("#contactForm")?.addEventListener('submit', e => {
    e.preventDefault();
    showToast("Request received — our counsellor will call you within 30 minutes ✓");
    e.target.reset();
  });
}

/* ===== CTAs ===== */
function presetForLabel(label) {
  label = label.toLowerCase();
  if (/sign in|login|welcome/.test(label)) return 'login';
  if (/career compass|career match|recommendation|career rec/.test(label)) return 'career';
  if (/job ready|job-ready/.test(label)) return 'jobready';
  if (/brochure/.test(label)) return 'brochure';
  if (/apply now|application|start your application|begin/.test(label)) return 'apply';
  if (/counsel|callback|talk to|expert|find your college|free counselling|book a call/.test(label)) return 'default';
  return null;
}

function setupCTAs() {
  $$(".btn-orange, .btn-blue, .btn-white, .btn-outline-orange, .btn-glass, .btn-soft").forEach(b => {
    if (b.closest('form') ||
        b.id === 'loadMore' ||
        b.classList.contains('hs-go') ||
        b.classList.contains('clear-btn') ||
        b.classList.contains('filter') ||
        b.hasAttribute('data-modal') ||
        b.hasAttribute('data-close')) return;

    b.addEventListener('click', e => {
      const href = b.getAttribute('href');
      if (href?.startsWith('#') && href.length > 1) return;
      const label = b.textContent.trim();
      const preset = presetForLabel(label);
      if (!preset) {
        if (/watch/i.test(label)) { e.preventDefault(); showToast("Loading video player…"); }
        return;
      }
      e.preventDefault();
      openModal(preset);
    });
  });

  $("#loadMore")?.addEventListener('click', () => showToast("All available colleges loaded"));
}

/* ===== Smooth scroll for anchor links ===== */
function setupSmoothScroll() {
  $$('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const id = a.getAttribute('href');
      if (id === '#' || id.length < 2) return;
      const target = $(id);
      if (!target) return;
      e.preventDefault();
      scrollToSection(target);
    });
  });
}

/* ===== Wishlist drawer ===== */
function renderWishlistDrawer() {
  const body = $("#wlBody");
  const foot = $("#wlFoot");
  const subtitle = $("#wlSubtitle");
  if (!body) return;

  const items = [...wishlist].map(id => COLLEGES.find(c => c.id === id)).filter(Boolean);

  if (items.length === 0) {
    body.innerHTML = `
      <div class="wl-empty">
        <div class="wl-empty-ic"><i data-lucide="heart"></i></div>
        <h4>Your wishlist is empty</h4>
        <p>Tap the heart on any college card to save it here. Compare and apply to all your shortlisted colleges later.</p>
        <button class="btn btn-orange" id="wlBrowse"><i data-lucide="search"></i> Browse Colleges</button>
      </div>
    `;
    foot.hidden = true;
    subtitle.textContent = "No colleges saved yet";
    if (window.lucide) lucide.createIcons();
    $("#wlBrowse")?.addEventListener('click', () => {
      closeWishlist();
      scrollToSection('#colleges');
    });
    return;
  }

  subtitle.textContent = `${items.length} college${items.length === 1 ? '' : 's'} saved`;
  body.innerHTML = items.map(c => `
    <div class="wl-item" data-id="${c.id}">
      <div class="wl-item-img"><img src="${c.img}" alt="${escapeHtml(c.name)}" loading="lazy" /></div>
      <div class="wl-item-info">
        <strong>${escapeHtml(c.name)}</strong>
        <span>${escapeHtml(c.location)}</span>
        <div class="meta-row">
          <span class="score">★ ${c.rating}</span>
          <span>${escapeHtml(c.fees)}</span>
          <span>${escapeHtml(c.placement)}</span>
        </div>
      </div>
      <button class="wl-item-remove" data-remove="${c.id}" aria-label="Remove"><i data-lucide="x"></i></button>
    </div>
  `).join('');
  foot.hidden = false;
  if (window.lucide) lucide.createIcons();

  // Item click → close drawer and scroll to that college in main grid
  body.querySelectorAll('.wl-item').forEach(el => {
    el.addEventListener('click', e => {
      if (e.target.closest('.wl-item-remove')) return;
      const id = parseInt(el.dataset.id);
      const college = COLLEGES.find(c => c.id === id);
      if (!college) return;
      closeWishlist();
      performSearch(college.name);
    });
  });
  body.querySelectorAll('[data-remove]').forEach(b => b.addEventListener('click', e => {
    e.stopPropagation();
    const id = parseInt(b.dataset.remove);
    wishlist.delete(id);
    persistWishlist();
    renderColleges($(".filter.active")?.dataset.f || 'all');
    showToast("Removed from wishlist");
  }));
}

function openWishlist() {
  $("#wlDrawer")?.classList.add('open');
  $("#wlBackdrop")?.classList.add('show');
  $("#wlDrawer")?.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  renderWishlistDrawer();
}

function closeWishlist() {
  $("#wlDrawer")?.classList.remove('open');
  $("#wlBackdrop")?.classList.remove('show');
  $("#wlDrawer")?.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

function setupWishlist() {
  updateWishlistBadge();
  $("#wishlistBtn")?.addEventListener('click', openWishlist);
  $("#wlClose")?.addEventListener('click', closeWishlist);
  $("#wlBackdrop")?.addEventListener('click', closeWishlist);
  $("#wlClear")?.addEventListener('click', () => {
    if (wishlist.size === 0) return;
    wishlist.clear();
    persistWishlist();
    renderColleges($(".filter.active")?.dataset.f || 'all');
    showToast("Wishlist cleared");
  });
  $("#wlApplyAll")?.addEventListener('click', () => {
    closeWishlist();
    setTimeout(() => window.openModal?.('apply', {
      title: `Apply to ${wishlist.size} colleges`,
      subtitle: `Submit one form and we'll process applications for all your shortlisted colleges.`
    }), 250);
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && $("#wlDrawer")?.classList.contains('open')) closeWishlist();
  });
}

/* ===== Reveal ===== */
function observeReveals() {
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { threshold: .08, rootMargin: '0px 0px -40px 0px' });
  $$(".reveal:not(.in)").forEach(el => io.observe(el));
}

/* ===== Init ===== */
document.addEventListener('DOMContentLoaded', () => {
  renderTab('eng');
  renderColleges();
  renderExams();
  renderRankings();
  renderNews('media');
  renderTestimonials();
  setupSearch();
  setupFilters();
  setupExploreTabs();
  setupExploreClicks();
  setupNewsTabs();
  setupTheme();
  setupNav();
  setupScrollSpy();
  setupProgress();
  setupContact();
  setupModal();
  setupWishlist();
  setupCTAs();
  setupSmoothScroll();
  observeReveals();
  animateCounters();
  if (window.lucide) lucide.createIcons();
});
