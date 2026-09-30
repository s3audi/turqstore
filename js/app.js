/**
 * Turqstore Global Export Portal - Interactive App Engine
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Language Localization Engine
  let currentLang = localStorage.getItem('turqstore_lang') || 'tr';

  function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('turqstore_lang', lang);

    const langBtnText = document.getElementById('currentLangLabel');
    if (langBtnText) {
      langBtnText.textContent = lang === 'tr' ? 'EN' : 'TR';
    }

    const dict = translations[lang] || translations['tr'];

    // Update text content for elements with data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) {
        el.innerHTML = dict[key];
      }
    });

    // Update placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (dict[key]) {
        el.setAttribute('placeholder', dict[key]);
      }
    });

    // Update document title & html lang attribute
    document.documentElement.lang = lang;
    document.title = lang === 'tr' 
      ? 'Turqstore | Türk Markaları İçin Yeni Nesil Küresel İhracat Tünelleri'
      : 'Turqstore | Next-Gen Global E-Commerce Export Tunnels for Turkish Brands';

    // Recalculate simulator with updated currency labels
    updateCalculator();
  }

  const langToggleBtn = document.getElementById('langToggleBtn');
  if (langToggleBtn) {
    langToggleBtn.addEventListener('click', () => {
      const nextLang = currentLang === 'tr' ? 'en' : 'tr';
      applyLanguage(nextLang);
      showToast(nextLang === 'tr' ? 'Dil Türkçe olarak ayarlandı' : 'Language set to English');
    });
  }

  // 2. Mobile Menu Toggle
  const mobileNavToggle = document.getElementById('mobileNavToggle');
  const navLinks = document.getElementById('navLinks');
  if (mobileNavToggle && navLinks) {
    mobileNavToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });

    // Close when clicking a link
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
      });
    });
  }

  // 3. Countdown Timer (Target: 42 Days from today)
  function initCountdown() {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 42);
    targetDate.setHours(12, 0, 0, 0);

    function updateTimer() {
      const now = new Date().getTime();
      const difference = targetDate.getTime() - now;

      if (difference <= 0) return;

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      const dEl = document.getElementById('countDays');
      const hEl = document.getElementById('countHours');
      const mEl = document.getElementById('countMinutes');
      const sEl = document.getElementById('countSeconds');

      if (dEl) dEl.textContent = String(days).padStart(2, '0');
      if (hEl) hEl.textContent = String(hours).padStart(2, '0');
      if (mEl) mEl.textContent = String(minutes).padStart(2, '0');
      if (sEl) sEl.textContent = String(seconds).padStart(2, '0');
    }

    updateTimer();
    setInterval(updateTimer, 1000);
  }
  initCountdown();

  // 4. Interactive Export Potential Calculator
  const categoryPrices = {
    textile: 45,    // $45 avg order / item
    leather: 95,    // $95 avg item
    gourmet: 35,    // $35 avg item
    kitchen: 60,    // $60 avg item
    cosmetics: 32   // $32 avg item
  };

  const marketMultipliers = {
    all: 1.25,
    uk: 1.15,
    usa: 1.35,
    mena: 1.20,
    africa: 0.95
  };

  const calcCategory = document.getElementById('calcCategory');
  const calcVolume = document.getElementById('calcVolume');
  const calcVolumeDisplay = document.getElementById('calcVolumeDisplay');
  const calcMarket = document.getElementById('calcMarket');
  const calcMonthlyRevenue = document.getElementById('calcMonthlyRevenue');
  const calcMonthlyReach = document.getElementById('calcMonthlyReach');
  const calcApplyBtn = document.getElementById('calcApplyBtn');

  function updateCalculator() {
    if (!calcVolume || !calcCategory || !calcMarket) return;

    const volume = parseInt(calcVolume.value, 10);
    const category = calcCategory.value;
    const market = calcMarket.value;

    if (calcVolumeDisplay) {
      calcVolumeDisplay.textContent = volume.toLocaleString() + ' ' + (currentLang === 'tr' ? 'Adet/Ay' : 'Units/Mo');
    }

    const basePrice = categoryPrices[category] || 45;
    const marketMult = marketMultipliers[market] || 1.1;

    // Projected Monthly Revenue
    const monthlyGross = Math.round(volume * basePrice * marketMult);
    // Estimated Unique Reach
    const estimatedShoppers = Math.round(volume * 18.5);

    if (calcMonthlyRevenue) {
      calcMonthlyRevenue.textContent = '$' + monthlyGross.toLocaleString();
    }
    if (calcMonthlyReach) {
      calcMonthlyReach.textContent = estimatedShoppers.toLocaleString() + '+';
    }
  }

  if (calcVolume) calcVolume.addEventListener('input', updateCalculator);
  if (calcCategory) calcCategory.addEventListener('change', updateCalculator);
  if (calcMarket) calcMarket.addEventListener('change', updateCalculator);

  if (calcApplyBtn) {
    calcApplyBtn.addEventListener('click', () => {
      openModal();
      // Pre-fill form from calculator selection
      const formCat = document.getElementById('partnerCategory');
      const formMarket = document.getElementById('partnerTargetMarket');
      const formVol = document.getElementById('partnerVolume');
      if (formCat && calcCategory) formCat.value = calcCategory.value;
      if (formMarket && calcMarket) formMarket.value = calcMarket.value;
      if (formVol && calcVolume) formVol.value = calcVolume.value + ' Adet/Ay';
    });
  }

  // 5. Brand Partnership Modal & Confetti
  const partnerModal = document.getElementById('partnerModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const openModalBtns = document.querySelectorAll('.open-partner-modal');
  const partnerForm = document.getElementById('partnerForm');
  const formSuccessState = document.getElementById('formSuccessState');
  const successCloseBtn = document.getElementById('successCloseBtn');
  const ticketRefSpan = document.getElementById('ticketRefCode');

  function openModal() {
    if (!partnerModal) return;
    partnerModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    if (!partnerModal) return;
    partnerModal.classList.remove('active');
    document.body.style.overflow = '';
    // Reset form after delay
    setTimeout(() => {
      if (partnerForm) {
        partnerForm.style.display = 'block';
        partnerForm.reset();
      }
      if (formSuccessState) {
        formSuccessState.style.display = 'none';
      }
    }, 400);
  }

  openModalBtns.forEach(btn => btn.addEventListener('click', openModal));
  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
  if (successCloseBtn) successCloseBtn.addEventListener('click', closeModal);

  if (partnerModal) {
    partnerModal.addEventListener('click', (e) => {
      if (e.target === partnerModal) closeModal();
    });
  }

  // Form Submit
  if (partnerForm) {
    partnerForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const submitBtn = partnerForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = `<span>${currentLang === 'tr' ? 'Gönderiliyor...' : 'Submitting...'}</span>`;

      const randomRef = 'TRQ-' + Math.floor(100000 + Math.random() * 900000);
      
      // Extract Form Data
      const formData = {
        refCode: randomRef,
        brandName: document.getElementById('brandName')?.value || 'Belirtilmedi',
        contactName: document.getElementById('contactName')?.value || 'Belirtilmedi',
        email: document.getElementById('partnerEmail')?.value || '',
        phone: document.getElementById('partnerPhone')?.value || '',
        category: document.getElementById('partnerCategory')?.value || 'textile',
        targetMarket: document.getElementById('partnerTargetMarket')?.value || 'all',
        website: document.getElementById('partnerWebsite')?.value || '',
        volume: document.getElementById('partnerVolume')?.value || '',
        notes: document.getElementById('partnerNotes')?.value || '',
        status: 'Yeni',
        timestamp: new Date().toISOString()
      };

      // Save to localStorage simulation
      const submissions = JSON.parse(localStorage.getItem('turqstore_leads') || '[]');
      submissions.unshift(formData);
      localStorage.setItem('turqstore_leads', JSON.stringify(submissions));

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;

        partnerForm.style.display = 'none';
        if (formSuccessState) {
          formSuccessState.style.display = 'block';
        }

        if (ticketRefSpan) ticketRefSpan.textContent = randomRef;

        launchConfetti();
        showToast(currentLang === 'tr' ? 'Başvurunuz başarıyla kaydedildi!' : 'Application registered successfully!');
      }, 700);
    });
  }

  // 6. Early Access Newsletter
  const newsletterForm = document.getElementById('newsletterForm');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = newsletterForm.querySelector('input[type="email"]');
      if (input && input.value) {
        showToast(currentLang === 'tr' 
          ? '🎉 E-posta adresiniz öncelikli listeye kaydedildi!' 
          : '🎉 Your email was added to the VIP priority list!');
        input.value = '';
      }
    });
  }

  // 7. Toast System
  function showToast(message) {
    let container = document.getElementById('toastContainer');
    if (!container) {
      container = document.createElement('div');
      container.id = 'toastContainer';
      container.className = 'toast-container';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2dd4bf" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
        <polyline points="22 4 12 14.01 9 11.01"></polyline>
      </svg>
      <span>${message}</span>
    `;

    container.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 3500);
  }

  // 8. Canvas Interactive Particle Trade Network
  function initHeroCanvas() {
    const canvas = document.getElementById('heroRouteCanvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let width = canvas.width = canvas.offsetWidth;
    let height = canvas.height = canvas.offsetHeight;

    window.addEventListener('resize', () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    });

    // Strategic Trade Nodes (relative coordinates [0..1] aligned with the globe visual)
    const nodes = [
      { id: 'istanbul', name: 'İstanbul (Hub)', x: 0.58, y: 0.36, isHub: true, color: '#2dd4bf' },
      { id: 'london', name: 'Londra (UK)', x: 0.47, y: 0.31, isHub: false, color: '#38bdf8' },
      { id: 'newyork', name: 'New York (USA)', x: 0.23, y: 0.40, isHub: false, color: '#38bdf8' },
      { id: 'riyadh', name: 'Riyad (Körfez)', x: 0.65, y: 0.49, isHub: false, color: '#fbbf24' },
      { id: 'lagos', name: 'Lagos / Afrika', x: 0.48, y: 0.59, isHub: false, color: '#2dd4bf' },
      { id: 'capetown', name: 'Cape Town', x: 0.54, y: 0.84, isHub: false, color: '#2dd4bf' }
    ];

    // Corridors from Istanbul to destinations
    const routes = [
      { from: 0, to: 1, particles: [] },
      { from: 0, to: 2, particles: [] },
      { from: 0, to: 3, particles: [] },
      { from: 0, to: 4, particles: [] },
      { from: 4, to: 5, particles: [] }
    ];

    // Initialize particles along routes
    routes.forEach(route => {
      const count = 5;
      for (let i = 0; i < count; i++) {
        route.particles.push({
          progress: Math.random(),
          speed: 0.003 + Math.random() * 0.003,
          size: 2 + Math.random() * 2.5
        });
      }
    });

    let pulseStep = 0;

    function render() {
      ctx.clearRect(0, 0, width, height);
      pulseStep += 0.03;

      // Draw Arcs & Corridors
      routes.forEach(route => {
        const p1 = nodes[route.from];
        const p2 = nodes[route.to];

        const x1 = p1.x * width;
        const y1 = p1.y * height;
        const x2 = p2.x * width;
        const y2 = p2.y * height;

        // Quadratic Bezier Arc Curve
        const midX = (x1 + x2) / 2;
        const midY = (y1 + y2) / 2 - Math.abs(x2 - x1) * 0.18;

        // Trace line
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.quadraticCurveTo(midX, midY, x2, y2);
        ctx.strokeStyle = 'rgba(6, 182, 212, 0.22)';
        ctx.lineWidth = 1.5;
        ctx.setLineDash([4, 4]);
        ctx.stroke();
        ctx.setLineDash([]);

        // Animated light cargo packets / particles
        route.particles.forEach(pt => {
          pt.progress += pt.speed;
          if (pt.progress > 1) pt.progress = 0;

          const t = pt.progress;
          // Bezier calculation
          const px = (1 - t) * (1 - t) * x1 + 2 * (1 - t) * t * midX + t * t * x2;
          const py = (1 - t) * (1 - t) * y1 + 2 * (1 - t) * t * midY + t * t * y2;

          // Glowing particle
          ctx.beginPath();
          ctx.arc(px, py, pt.size, 0, Math.PI * 2);
          ctx.fillStyle = '#38bdf8';
          ctx.shadowColor = '#06b6d4';
          ctx.shadowBlur = 8;
          ctx.fill();
          ctx.shadowBlur = 0;
        });
      });

      // Draw Nodes
      nodes.forEach((node, idx) => {
        const nx = node.x * width;
        const ny = node.y * height;

        // Outer pulsing ring
        const ringSize = (node.isHub ? 14 : 9) + Math.sin(pulseStep + idx) * 3;
        ctx.beginPath();
        ctx.arc(nx, ny, ringSize, 0, Math.PI * 2);
        ctx.strokeStyle = node.isHub ? 'rgba(45, 212, 191, 0.5)' : 'rgba(56, 189, 248, 0.35)';
        ctx.lineWidth = 1.5;
        ctx.stroke();

        // Inner solid node
        ctx.beginPath();
        ctx.arc(nx, ny, node.isHub ? 6 : 4, 0, Math.PI * 2);
        ctx.fillStyle = node.color;
        ctx.shadowColor = node.color;
        ctx.shadowBlur = 12;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      requestAnimationFrame(render);
    }

    render();
  }
  initHeroCanvas();

  // 9. Confetti Celebration
  function launchConfetti() {
    const canvas = document.createElement('canvas');
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100vw';
    canvas.style.height = '100vh';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '999';
    document.body.appendChild(canvas);

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const colors = ['#2dd4bf', '#38bdf8', '#fbbf24', '#0d9488', '#ffffff'];
    const particles = [];

    for (let i = 0; i < 90; i++) {
      particles.push({
        x: canvas.width / 2,
        y: canvas.height / 2,
        vx: (Math.random() - 0.5) * 16,
        vy: (Math.random() - 0.7) * 16,
        size: Math.random() * 7 + 4,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * 360,
        rSpeed: (Math.random() - 0.5) * 10,
        alpha: 1
      });
    }

    let frame = 0;
    function anim() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.25; // gravity
        p.rotation += p.rSpeed;
        p.alpha -= 0.012;

        ctx.save();
        ctx.globalAlpha = Math.max(0, p.alpha);
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
        ctx.restore();
      });

      frame++;
      if (frame < 100) {
        requestAnimationFrame(anim);
      } else {
        canvas.remove();
      }
    }
    anim();
  }

  // Initialize initial state
  applyLanguage(currentLang);
  updateCalculator();
});
