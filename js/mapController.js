function init() {

    initMap();
    renderPlaces();
}


function initMap(lat, lng) {
    if (!lat) lat = 32.0749831;
    if (!lng) lng = 34.9120554;
    var elMap = document.getElementById('map');
    var map = new google.maps.Map(
        elMap,
        {
            center: { lat: 29.55805, lng: 34.94821 },
            zoom: 10
        }
    );

    google.maps.event.addListener(map, 'click', function (event) {
        var name = prompt('Place name?')
        var place = {name: name, lat: event.latLng.lat(), lan: event.latLng.lng()} 
        addPlace(place);
        setPlaceToLocalStorage(place);
        renderPlaces();
        console.log("Place: ", place);
    });
}


function renderPlaces () {
    var places = getPlaces();

    console.log(places);
    //render by flax-box

}

