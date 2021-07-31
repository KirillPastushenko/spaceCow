import './scss/main.scss';
import Vue from 'vue';
import { precacheAndRoute } from 'workbox-precaching';
import { setCatchHandler } from 'workbox-routing';
import * as VueGoogleMaps from 'vue2-google-maps';
import {
  formatUnixtime,
  gooAPIK,
  getFullTrack,
  getLastStates,
  getMonth,
  getWeek,
  getToday 
} from './components/fetch'

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('service-worker.js').then(registration => {
      console.log('SW registered: ', registration);
    }).catch(registrationError => {
      console.log('SW registration failed: ', registrationError);
    });
  });
}

precacheAndRoute(self.__WB_MANIFEST);

setCatchHandler(async ({ event }) => {
  if (event.request.destination === 'document') {
    return matchPrecache('offline.html')
  }

  return Response.error()
})

Vue.use(VueGoogleMaps, {
    load: {
      key: gooAPIK,
      libraries: 'places'
    },
    installComponents: true,
  });

  document.addEventListener('DOMContentLoaded', function() {
    Vue.component('google-map', VueGoogleMaps.Map);
    Vue.component('gmap-marker', VueGoogleMaps.Marker);

    new Vue({
      el: '#root',
      data() {
        return {
          place: 'Кумакский',
          mapTypeId: "satellite",
          activeButton: 'last',
          stat: {},
          icon: {
            path: "M-10,0a10,10 0 1,0 20,0a10,10 0 1,0 -20,0",
            fillColor: '#FF0000',
            fillOpacity: .4,
            strokeWeight: 0,
          },
          center: {
            lat: 51.079365,
            lng: 55.103577
          },
          infoContent: '',
          infoWindowPos: null,
          infoWinOpen: false,
          currentMidx: null,
          infoOptions: {
            pixelOffset: {
              width: 0,
              height: -10
            }
          },
        }
      },
      async created(){
        await this.getLastPosition();
      },
      methods: {
        async getLastPosition() {
          this.stat = await getLastStates();
          this.activeButton = 'last';
          this.infoWinOpen = false;
          this.center = {
            lat: this.stat.markers[0].position.lat,
            lng: this.stat.markers[0].position.lng
          }
        },
        async getFullTrack() {
          this.stat = await getFullTrack();
          this.activeButton = 'full';
          this.infoWinOpen = false;
        },
        async getMonth() {
          this.stat = await getMonth();
          this.activeButton = 'month';
          this.infoWinOpen = false;
        },
        async getWeek() {
          this.stat = await getWeek();
          this.activeButton = 'week';
          this.infoWinOpen = false;
        },
        async getToday() {
          this.stat = await getToday();
          this.activeButton = 'today';
          this.infoWinOpen = false;
        },
        getFormatedDate(unixtime) {
          return formatUnixtime(unixtime);
        },
        toggleInfoWindow (marker, idx) {
          this.infoWindowPos = marker.position;
          this.infoContent = marker.infoText;
          if (this.currentMidx == idx) {
            this.infoWinOpen = !this.infoWinOpen;
          }
          else {
            this.infoWinOpen = true;
            this.currentMidx = idx;

          }
        }
      }
    });
  });



