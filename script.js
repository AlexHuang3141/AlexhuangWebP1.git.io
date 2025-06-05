function showPage(pageId) {
  const pages = document.querySelectorAll('.page');
  pages.forEach(p => p.classList.remove('active'));
  document.getElementById(pageId).classList.add('active');
  setTimeout(() => handleScroll(), 100);
}
function handleScroll() {
  const sections = document.querySelectorAll('.fullscreen-section');
  const trigger = window.innerHeight * 0.8;

  sections.forEach(section => {
    const boxTop = section.getBoundingClientRect().top;
    if (boxTop < trigger) {
      section.classList.add('visible');
    } else {
      section.classList.remove('visible');
    }
  });
}

window.addEventListener('scroll', handleScroll);
window.addEventListener('load', handleScroll);

const sliderImages = [
  './Images/mali-gdp.png',
  './Images/mali-gdp-per-capita.png',
  './Images/inflation-Rate.png',
  './Images/LifeExp.png',
  './Images/Infant.png',
  './Images/Top-Products-Imported-by-Mali.jpg',
  './Images/img.png'
];

let currentSlide = 0;

function changeSlide(direction) {
  currentSlide = (currentSlide + direction + sliderImages.length) % sliderImages.length;
  const imageEl = document.getElementById('slider-image');
  const captionEl = document.getElementById('caption');

  imageEl.src = sliderImages[currentSlide];

  if (sliderImages[currentSlide].includes('mali-gdp.png')) {
    captionEl.style.display = 'block';
    captionEl.textContent = 'From 2015 to 2024, Mali GDP grew from $15.5 billion to $26.3 billion, with growth rates at 6.2% in 2015 and 5.2% in 2023 after a -1.2% dip in 2020. Inflation spiked to 8.8% in 2021 but is expected to stabilize around 2% in 2024.';
  } else if (sliderImages[currentSlide].includes('mali-gdp-per-capita.png')){
  captionEl.style.display = 'block';
  captionEl.textContent ='Mali’s GDP per capita went from about $818 in 2015 to $897 in 2023, showing slow but steady growth over the years. In 2024, it rose again by nearly 8%, meaning people on average produced more value than in past years.'
  } else if (sliderImages[currentSlide].includes('inflation-Rate.png')){
  captionEl.style.display = 'block';
    captionEl.textContent = 'Mali’s inflation rate was very high in the 1980s and 1990s, peaking at over 24.7% in 1994, but became more stable in the 2000s and 2010s, usually staying below 10%. After a spike to 9.7% in 2022, it is expected to stay low and steady around 2% through 2030.'
  }else if (sliderImages[currentSlide].includes('LifeExp.png')){
     captionEl.style.display = 'block';
       captionEl.textContent = 'From 2012 to 2022, life expectancy at birth gradually increased from approximately 57.08 years in 2012 to 59.42 years in 2022. During this period, life expectancy for women rose from 58.08 years to 60.83 years, while for men, it increased from 56.10 years to 58.07 years .'
   } else if (sliderImages[currentSlide].includes('Infant.png')){
   captionEl.style.display = 'block';
   captionEl.textContent = 'Between 2012 and 2022, infant mortality rate decreased from approximately 80.6 to 60 deaths per 1,000 live births, reflecting a 25% decline over the decade. Despite this progress, rate remains significantly higher than the global average of 19 deaths per 1,000 live births .'
   } else if (sliderImages[currentSlide].includes('Top-Products-Imported-by-Mali.jpg')){
        captionEl.style.display = 'block';
        captionEl.textContent = ' Top imports includes refined petroleum, cement, and broadcasting equipment. These products are essential for the country’s energy, construction, and communication sectors.'
        }else if (sliderImages[currentSlide].includes('img.png')){
                 captionEl.style.display = 'block';
                 captionEl.textContent = ' In 2023, Mali’s exports $6.64 billion, with gold accounting for 94.6% of this value, followed by raw cotton at 0.8%, and other oily seeds at 0.6% . The United Arab Emirates was the largest destination for these exports, receiving 72.7% of Mali’s total exports, primarily in gold '
                 }
  else {
    captionEl.style.display = 'none';
  }
}