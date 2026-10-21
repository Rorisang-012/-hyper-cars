const cars = [
  {
    id: 'sf90',
    name: 'SF90 Stradale',
    brand: 'Ferrari',
    category: 'supercar',
    label: 'Supercar',
    power: '986 hp',
    speed: '211+ mph',
    image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ef/Ferrari_SF90_Stradale_Mayfair.jpg/1280px-Ferrari_SF90_Stradale_Mayfair.jpg',
    alt: 'Red Ferrari SF90 Stradale parked on a Mayfair street',
    imageCredit: 'Calreyn88 · CC BY 4.0',
    imageSource: 'https://commons.wikimedia.org/wiki/File:Ferrari_SF90_Stradale_Mayfair.jpg',
    story: 'Ferrari’s first series-production plug-in hybrid supercar turned its V8 flagship into a three-motor experiment. Its name nods to Scuderia Ferrari’s 90th anniversary.',
    detail: 'A plug-in hybrid supercar combining a twin-turbo V8 with three electric motors. Ferrari quotes a combined 1,000 cv and a top speed above 340 km/h.',
    character: 'Hybrid V8',
    source: 'https://www.ferrari.com/en-EN/auto/sf90-stradale',
    sourceName: 'Ferrari SF90 Stradale'
  },
  {
    id: 'revuelto',
    name: 'Revuelto',
    brand: 'Lamborghini',
    category: 'hypercar',
    label: 'Hypercar',
    power: '1,001 hp',
    speed: '217 mph',
    image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0a/Lamborghini_Revuelto_DSC_6987.jpg/1280px-Lamborghini_Revuelto_DSC_6987.jpg',
    alt: 'White Lamborghini Revuelto at Motorworld Region Stuttgart',
    imageCredit: 'Alexander Migl · CC BY-SA 4.0',
    imageSource: 'https://commons.wikimedia.org/wiki/File:Lamborghini_Revuelto_DSC_6987.jpg',
    story: 'Named for a fighting bull, the Revuelto carries Lamborghini’s V12 into a new hybrid era. Three electric motors add instant torque without muting the drama.',
    detail: 'Lamborghini’s V12 hybrid flagship pairs a naturally aspirated 6.5-litre engine with three electric motors. Manufacturer output is 1,015 CV, equivalent to approximately 1,001 hp.',
    character: 'V12 hybrid',
    source: 'https://www.lamborghini.com/en-en/models/revuelto',
    sourceName: 'Lamborghini Revuelto'
  },
  {
    id: '750s',
    name: '750S',
    brand: 'McLaren',
    category: 'supercar',
    label: 'Supercar',
    power: '740 hp',
    speed: '206 mph',
    image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fd/2023_McLaren_750S_Yellow.jpg/1280px-2023_McLaren_750S_Yellow.jpg',
    alt: 'Yellow 2023 McLaren 750S at the Goodwood Festival of Speed',
    imageCredit: 'MrWalkr · CC BY-SA 4.0',
    imageSource: 'https://commons.wikimedia.org/wiki/File:2023_McLaren_750S_Yellow.jpg',
    story: 'McLaren’s lightness-first philosophy keeps the 750S focused on steering feel and low mass. It evolves the 720S rather than starting from a blank sheet.',
    detail: 'The 750S is a lightweight, rear-wheel-drive supercar powered by a 4.0-litre twin-turbo V8. McLaren lists 750 PS (740 bhp) and a 206 mph maximum speed.',
    character: 'Twin-turbo V8',
    source: 'https://cars.mclaren.com/en/750s',
    sourceName: 'McLaren 750S'
  },
  {
    id: 'chiron',
    name: 'Chiron',
    brand: 'Bugatti',
    category: 'hypercar',
    label: 'Hypercar',
    power: '1,479 hp',
    speed: '261 mph',
    image: 'https://images.unsplash.com/photo-1769122717148-80056a2f1978?auto=format&fit=crop&w=1100&q=80',
    alt: 'Black Bugatti Chiron with orange accents',
    story: 'The Chiron was built around the rare idea that grand-touring comfort and 1,500 PS could coexist. Its quad-turbo W16 makes that ambition tangible.',
    detail: 'The standard Chiron uses an 8.0-litre quad-turbocharged W16. Bugatti quotes 1,500 PS (1,479 hp) and a limited top speed of 420 km/h (261 mph).',
    character: 'Quad-turbo W16',
    source: 'https://www.bugatti.com/the-bugatti-models/chiron-models/chiron/',
    sourceName: 'Bugatti Chiron'
  },
  {
    id: 'jesko',
    name: 'Jesko',
    brand: 'Koenigsegg',
    category: 'hypercar',
    label: 'Hypercar',
    power: '1,280 hp*',
    speed: 'Not verified',
    image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f7/Koenigsegg_Jesko_Auto_Zuerich_2023_1X7A1382.jpg/1280px-Koenigsegg_Jesko_Auto_Zuerich_2023_1X7A1382.jpg',
    alt: 'Koenigsegg Jesko at Auto Zürich 2023',
    imageCredit: 'Alexander-93 · CC BY-SA 4.0',
    imageSource: 'https://commons.wikimedia.org/wiki/File:Koenigsegg_Jesko_Auto_Zuerich_2023_1X7A1382.jpg',
    story: 'Christian von Koenigsegg named the Jesko for his father, an early supporter of the company. Its E85-capable V8 and advanced aero split into Attack and Absolut forms.',
    detail: 'Koenigsegg specifies up to 1,280 hp on gasoline or 1,600 hp on E85 for the Jesko. A production-car top-speed record has not been verified, so no top-speed figure is stated here.',
    character: 'Twin-turbo V8',
    source: 'https://www.koenigsegg.com/model/jesko-attack',
    sourceName: 'Koenigsegg Jesko'
  },
  {
    id: 'gt3rs',
    name: '911 GT3 RS',
    brand: 'Porsche',
    category: 'track',
    label: 'Track',
    power: '518 hp',
    speed: '184 mph',
    image: 'https://images.unsplash.com/photo-1693149351428-15a4961d698d?auto=format&fit=crop&w=1100&q=80',
    alt: 'White Porsche 911 GT3 RS on a city street',
    story: 'The RS badge marks the most circuit-oriented road 911 in its family. Its naturally aspirated flat-six and active aero make lap time the design brief.',
    detail: 'A naturally aspirated, track-focused 911 with 518 hp and a 296 km/h (184 mph) top speed in Porsche’s published specification.',
    character: 'Naturally aspirated flat-six',
    source: 'https://www.porsche.com/usa/models/911/911-gt3-rs/911-gt3-rs/',
    sourceName: 'Porsche 911 GT3 RS'
  },
  {
    id: '296gtb',
    name: '296 GTB',
    brand: 'Ferrari',
    category: 'supercar',
    label: 'Supercar',
    power: '819 hp',
    speed: 'Not listed',
    image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/51/Ferrari_296_GTB_1X7A6377.jpg/1280px-Ferrari_296_GTB_1X7A6377.jpg',
    alt: 'Yellow Ferrari 296 GTB at Motorworld Region Stuttgart',
    imageCredit: 'Alexander-93 · CC BY-SA 4.0',
    imageSource: 'https://commons.wikimedia.org/wiki/File:Ferrari_296_GTB_1X7A6377.jpg',
    story: 'Ferrari brought back a six-cylinder for its mid-engine berlinetta and paired it with electric boost. The 296 name combines 2.9 litres with six cylinders.',
    detail: 'A 120-degree twin-turbo V6 works with a plug-in electric motor. Ferrari quotes 830 CV combined output, approximately 819 hp.',
    character: 'Plug-in hybrid V6',
    source: 'https://www.ferrari.com/en-EN/auto/296-gtb',
    sourceName: 'Ferrari 296 GTB'
  },
  {
    id: 'huracansto',
    name: 'Huracán STO',
    brand: 'Lamborghini',
    category: 'track',
    label: 'Track',
    power: '631 hp',
    speed: '193 mph',
    image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/2/22/Lamborghini_Huracan_STO_1X7A7216.jpg/1280px-Lamborghini_Huracan_STO_1X7A7216.jpg',
    alt: 'Lamborghini Huracán STO at Motorworld Region Stuttgart',
    imageCredit: 'Alexander-93 · CC BY-SA 4.0',
    imageSource: 'https://commons.wikimedia.org/wiki/File:Lamborghini_Huracan_STO_1X7A7216.jpg',
    story: 'STO means Super Trofeo Omologata: race-car thinking adapted for the road. Lamborghini shaped it around lightweight construction, track aero, and its most powerful V10.',
    detail: 'The road-legal, track-focused Huracán STO uses a naturally aspirated 5.2-litre V10. Lamborghini lists 640 CV (about 631 hp) and a 310 km/h (193 mph) top speed.',
    character: 'Naturally aspirated V10',
    source: 'https://www.lamborghini.com/en-en/models/huracan/huracan-sto',
    sourceName: 'Lamborghini Huracán STO'
  },
  {
    id: 'p1',
    name: 'P1',
    brand: 'McLaren',
    category: 'hypercar',
    label: 'Hypercar',
    power: '903 hp',
    speed: '217 mph',
    image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/42/2014_McLaren_P1_3.8.jpg/1280px-2014_McLaren_P1_3.8.jpg',
    alt: '2014 McLaren P1 at Hampton Court Concours d’Elegance',
    imageCredit: 'Chelsea Jay · CC BY-SA 4.0',
    imageSource: 'https://commons.wikimedia.org/wiki/File:2014_McLaren_P1_3.8.jpg',
    story: 'The P1 became McLaren’s first hybrid road hypercar, pairing a twin-turbo V8 with electric torque-fill. It helped define a new generation of electrified performance flagships.',
    detail: 'A twin-turbocharged V8 and electric motor combine for 903 bhp. McLaren quotes a 217 mph maximum speed for the limited-production P1.',
    character: 'Hybrid twin-turbo V8',
    source: 'https://www.mclaren.com/cars/',
    sourceName: 'McLaren official car site'
  },
  {
    id: 'valkyrie',
    name: 'Valkyrie',
    brand: 'Aston Martin',
    category: 'hypercar',
    label: 'Hypercar',
    power: '1,155 hp',
    speed: 'Not listed',
    image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c6/Aston_Martin_Valkyrie%2C_BAS_24%2C_Brussels_%28P1170224-RR%29.jpg/1280px-Aston_Martin_Valkyrie%2C_BAS_24%2C_Brussels_%28P1170224-RR%29.jpg',
    alt: 'Aston Martin Valkyrie at Brussels Auto Show 2024',
    imageCredit: 'Matti Blume · CC BY-SA 4.0',
    imageSource: 'https://commons.wikimedia.org/wiki/File:Aston_Martin_Valkyrie,_BAS_24,_Brussels_(P1170224-RR).jpg',
    story: 'Aston Martin and Red Bull Advanced Technologies set out to bring Formula One thinking to a road car. Its naturally aspirated V12 and extreme aerodynamic package make that brief unmistakable.',
    detail: 'A road-going, track-focused hypercar developed with Red Bull Advanced Technologies. Aston Martin lists 1,155 bhp; no top-speed figure is shown here.',
    character: 'Hybrid V12',
    source: 'https://www.astonmartin.com/en/models/valkyrie',
    sourceName: 'Aston Martin Valkyrie'
  },
  {
    id: 'nevera',
    name: 'Nevera',
    brand: 'Rimac',
    category: 'hypercar',
    label: 'Hypercar',
    power: '1,914 hp',
    speed: '258 mph',
    image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0b/Rimac_-_Nevera_01.jpg/1280px-Rimac_-_Nevera_01.jpg',
    alt: 'Rimac Nevera electric hypercar',
    imageCredit: 'Miroslav.vajdic · CC BY-SA 4.0',
    imageSource: 'https://commons.wikimedia.org/wiki/File:Rimac_-_Nevera_01.jpg',
    story: 'Named for a sudden Adriatic storm, the Nevera reflects its Croatian roots. Four independently driven motors turn torque vectoring into its defining engineering idea.',
    detail: 'Four electric motors provide all-wheel drive and torque vectoring. Rimac lists 1,914 hp and a 412 km/h (258 mph) top speed for the Nevera.',
    character: 'Four-motor electric',
    source: 'https://www.rimac-automobili.com/nevera/',
    sourceName: 'Rimac Nevera'
  },
  {
    id: '918spyder',
    name: '918 Spyder',
    brand: 'Porsche',
    category: 'hypercar',
    label: 'Hypercar',
    power: '887 hp',
    speed: '214 mph',
    image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/9/91/Porsche_918_Spyder_IAA_2013.jpg/1280px-Porsche_918_Spyder_IAA_2013.jpg',
    alt: 'Porsche 918 Spyder at the Frankfurt Motor Show',
    imageCredit: 'Thomas Wolf · CC BY-SA 3.0 DE',
    imageSource: 'https://commons.wikimedia.org/wiki/File:Porsche_918_Spyder_IAA_2013.jpg',
    story: 'Porsche made plug-in hybrid power a performance tool in the 918 Spyder. Its Nürburgring run helped reset expectations for production-car lap times.',
    detail: 'A naturally aspirated V8 and two electric motors combine for 887 hp. Porsche quotes a 214 mph top speed with the optional Weissach package.',
    character: 'Plug-in hybrid V8',
    source: 'https://www.porsche.com/stories/innovation/porsche-918-spyder/',
    sourceName: 'Porsche 918 Spyder'
  }
];

const carGrid = document.querySelector('#car-grid');
const filterButtons = [...document.querySelectorAll('.filter-button')];
const filterCount = document.querySelector('.filter-count');
const dialog = document.querySelector('#car-dialog');
const dialogClose = document.querySelector('.dialog-close');
const menuToggle = document.querySelector('.menu-toggle');
const primaryNav = document.querySelector('#primary-nav');
const contactForm = document.querySelector('#contact-form');
const formStatus = document.querySelector('#form-status');

function escapeHTML(value) {
  return value.replace(/[&<>"']/g, (character) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  })[character]);
}

function renderCars(filter = 'all') {
  const visibleCars = filter === 'all' ? cars : cars.filter((car) => car.category === filter);
  carGrid.innerHTML = visibleCars.map((car, index) => `
    <article class="car-card">
      <div class="car-photo">
        <img src="${car.image}" alt="${escapeHTML(car.alt)}" loading="lazy" />
        <span class="car-category">${car.label}</span>
        ${car.imageCredit ? `<a class="photo-credit" href="${car.imageSource}" target="_blank" rel="noreferrer" aria-label="Photo by ${car.imageCredit}; view license and source (opens in a new tab)">${car.imageCredit}</a>` : ''}
        <span class="car-number">${String(index + 1).padStart(2, '0')} / ${String(cars.length).padStart(2, '0')}</span>
      </div>
      <div class="car-info">
        <p class="car-brand">${car.brand}</p>
        <h3 class="car-name">${car.name}</h3>
        <div class="car-stats">
          <div><span class="car-stat-label">Power</span><span class="car-stat-value">${car.power}</span></div>
          <div><span class="car-stat-label">Top speed</span><span class="car-stat-value">${car.speed}</span></div>
        </div>
        <p class="car-story">${escapeHTML(car.story)}</p>
        <button class="car-detail" type="button" data-car-id="${car.id}" aria-label="View details for ${car.brand} ${car.name}">View details <span aria-hidden="true">↗</span></button>
      </div>
    </article>
  `).join('');
  filterCount.textContent = `Showing ${String(visibleCars.length).padStart(2, '0')} ${visibleCars.length === 1 ? 'machine' : 'machines'}`;
}

function openCarDetails(carId) {
  const car = cars.find((item) => item.id === carId);
  if (!car) return;
  document.querySelector('#dialog-brand').textContent = car.brand;
  document.querySelector('#dialog-title').textContent = car.name;
  document.querySelector('#dialog-description').textContent = car.detail;
  document.querySelector('#dialog-story').textContent = car.story;
  document.querySelector('#dialog-power').textContent = car.power.replace('*', '');
  document.querySelector('#dialog-speed').textContent = car.speed;
  document.querySelector('#dialog-class').textContent = car.character;
  const dialogImage = document.querySelector('#dialog-image');
  dialogImage.src = car.image;
  dialogImage.alt = car.alt;
  const photoCredit = document.querySelector('#dialog-photo-credit');
  photoCredit.hidden = !car.imageCredit;
  if (car.imageCredit) {
    photoCredit.href = car.imageSource;
    photoCredit.textContent = car.imageCredit;
    photoCredit.setAttribute('aria-label', `Photo by ${car.imageCredit}; view license and source (opens in a new tab)`);
  }
  const source = document.querySelector('#dialog-source');
  source.href = car.source;
  source.setAttribute('aria-label', `${car.sourceName} manufacturer specifications (opens in a new tab)`);
  dialog.showModal();
}

carGrid.addEventListener('click', (event) => {
  const button = event.target.closest('[data-car-id]');
  if (button) openCarDetails(button.dataset.carId);
});

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    filterButtons.forEach((item) => {
      const active = item === button;
      item.classList.toggle('is-active', active);
      item.setAttribute('aria-pressed', String(active));
    });
    renderCars(button.dataset.filter);
  });
});

dialogClose.addEventListener('click', () => dialog.close());
dialog.addEventListener('click', (event) => {
  if (event.target === dialog) dialog.close();
});
dialog.addEventListener('close', () => {
  const lastTrigger = document.querySelector(`[data-car-id="${dialog.dataset.lastCarId}"]`);
  lastTrigger?.focus();
});

carGrid.addEventListener('click', (event) => {
  const button = event.target.closest('[data-car-id]');
  if (button) dialog.dataset.lastCarId = button.dataset.carId;
});

menuToggle.addEventListener('click', () => {
  const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!expanded));
  menuToggle.setAttribute('aria-label', expanded ? 'Open navigation' : 'Close navigation');
  primaryNav.classList.toggle('is-open', !expanded);
});

primaryNav.addEventListener('click', (event) => {
  if (event.target.closest('a')) {
    primaryNav.classList.remove('is-open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Open navigation');
  }
});

document.querySelectorAll('img').forEach((image) => {
  image.addEventListener('error', () => {
    image.classList.add('image-unavailable');
    image.alt = image.alt ? `${image.alt} (image unavailable)` : 'Image unavailable';
  });
});

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!contactForm.reportValidity()) return;
  const name = new FormData(contactForm).get('name').trim();
  formStatus.textContent = `Thanks, ${name}. Your note passed validation. This demo does not transmit or save it.`;
  contactForm.reset();
});

renderCars();
