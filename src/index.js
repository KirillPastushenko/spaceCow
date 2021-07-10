import './scss/main.scss';
import Vue from 'vue';
import * as VueGoogleMaps from 'vue2-google-maps';
import { getTrack } from './components/fetch'

const googleAPIKey = 'AIzaSyC3c3CMpjbS_c43jYeSSm3Fu2CQnoNu6PY'
//const laststates = getDataFromServer('laststates');

 
 Vue.use(VueGoogleMaps, {
    load: {
      key: googleAPIKey,
      libraries: 'places'
    },
    installComponents: true,
  });

  document.addEventListener('DOMContentLoaded', function() {
    Vue.component('google-map', VueGoogleMaps.Map);
    Vue.component('google-marker', VueGoogleMaps.Marker);

    new Vue({
      el: '#root',
      data() {
        return {
          place: 'Соль-Илецк',
          center: {
            lat: 51.0669629,
            lng: 55.125332
          },
          markers: this.getTracks,
          shape: {
            coords: [10, 10, 10, 15, 15, 15, 15, 10],
            type: 'poly'
          },
        }
      },
      async created (){
        await this.getTracks()
      },
      methods: {
        updatePlace(what) {
          this.place = {
            lat: what.geometry.location.lat(),
            lng: what.geometry.location.lng()
          };
        },
        async getTracks() {
          this.markers = await getTrack();
        } 
      }
    });
  });




