function initMap() {
    
    const myLatLng = { lat: -33.9152, lng: 18.5135 }; 

    
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: myLatLng,
    });

    
    new google.maps.Marker({
        position: myLatLng,
        map,
        title: "Rehab Clothing Store",
    });
}

const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('#navbar a');

window.addEventListener('scroll', () => {
    let currentId = '';

    for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];

        if (window.scrollY >= section.offsetTop) {
            currentId = section.getAttribute('id');
            // Prevent the URL from changing for these specific sections
            if (currentId === 'new-arrivals') {
                history.replaceState(null, null, '#featured-products');
            } else {
                 history.replaceState(null, null, `#${currentId}`);
            }
            break;
        }
    }

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.href.includes(currentId)) {
            link.classList.add('active');
        }
    });
});