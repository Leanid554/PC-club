function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' 
    });
  }

  function scrollToClub() {
    const servicesDiv = document.getElementById('club');
    servicesDiv.scrollIntoView({ behavior: 'smooth' });
}
  function scrollToCennik() {
    const servicesDiv = document.getElementById('cennik');
    servicesDiv.scrollIntoView({ behavior: 'smooth' });
}
  function scrollToGry() {
    const servicesDiv = document.getElementById('gry');
    servicesDiv.scrollIntoView({ behavior: 'smooth' });
}
  function scrollToGry() {
    const servicesDiv = document.getElementById('gry');
    servicesDiv.scrollIntoView({ behavior: 'smooth' });
}
  function scrollToDevice() {
    const servicesDiv = document.getElementById('device');
    servicesDiv.scrollIntoView({ behavior: 'smooth' });
}
  function scrollToKontakty() {
    const servicesDiv = document.getElementById('kontakty');
    servicesDiv.scrollIntoView({ behavior: 'smooth' });
}

AOS.init({
    once: true
});
