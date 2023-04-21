export const usePlacesStore = defineStore('PlacesStore', {
    state: () => {
        places: []
    },
    actions: {
        updatePlaces(placesList) {
            this.places = placesList;
        }
    },
});
