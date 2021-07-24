import './scss/main.scss';
import Vue from 'vue';
import * as VueGoogleMaps from 'vue2-google-maps';
import {
  googleAPIKey,
  getFullTrack,
  getLastStates,
  getMonth,
  getWeek,
  getToday 
} from './components/fetch'

import { fromUnixTime, format  } from 'date-fns';
import  ruLocale from 'date-fns/locale/ru';

 
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
          place: 'Кумакский',
          mapTypeId: "satellite",
          stat: {},
          activeButton: 'last',
          icon: {
            path: "M-10,0a10,10 0 1,0 20,0a10,10 0 1,0 -20,0",
            fillColor: '#FF0000',
            fillOpacity: .4,
            strokeWeight: 0,
          },
          center: {
            lat: 51.0799629,
            lng: 55.095332
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
        },
        async getFullTrack() {
          this.stat = await getFullTrack();
          this.activeButton = 'full';
        },
        async getMonth() {
          this.stat = await getMonth();
          this.activeButton = 'month';
        },
        async getWeek() {
          this.stat = await getWeek();
          this.activeButton = 'week';
        },
        async getToday() {
          this.stat = await getToday();
          this.activeButton = 'today';
        },
        getFormatedDate(unixtime) {
          const date = fromUnixTime(unixtime);
          return format(date, 'd MMMM yyyy HH:mm', {
            locale: ruLocale
          });
        }
      }
    });
  });



