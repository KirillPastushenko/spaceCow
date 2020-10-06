import './scss/main.scss';
import Vue from 'vue';
//window.Vue = require('vue');
 
const app = new Vue({
    el: "#app",
    data(){
        return {
            formula: null,
            sex: null,
            css: null,
            age: null,
            rasa: null,
            weight: null,
            krMgdl:null,
            krMkml:null,
            focus: 'mgdl' 
        }
    },
    methods: {
        focusMkml: function(){
            this.focus = 'mkml'
        },
        focusMgdl: function(){
            this.focus = 'mgdl'
        },
        calcMgdl: function(){
            if(this.focus == 'mkml'){
                this.krMgdl = Number((this.krMkml / 88.4).toFixed(2));
            }
        },
        calcMkml: function(){
            if(this.focus == 'mgdl'){
               this.krMkml = Number((this.krMgdl * 88.4).toFixed(2));
            }
        }
    },
    computed: {
        skf: function(){
            let result = 0;
            let rasaK = 1;
            let sexK = 1;
            switch(this.formula){
                case 'ckdepi-2009':
                    if(this.rasa === 'negro') rasaK = 1.159;
                    if(this.sex === 'woman'){
                        if(this.krMgdl <= 0.7){
                             result = 144 *  ((this.krMgdl/0.7)**-0.329) * (0.993**this.age) * rasaK;
                        } else {
                             result = 144 *  ((this.krMgdl/0.7)**-1.209) * (0.993**this.age) * rasaK;
                        }
                    } else {
                        if(this.krMgdl<=0.9){
                              result = 141 *  ((this.krMgdl/0.9)**-0.411) * (0.993**this.age) * rasaK;
                        } else {
                             result = 141 *  ((this.krMgdl/0.9)**-1.209) * (0.993**this.age) * rasaK;
                        }
                    }
                break;
                case 'ckdepi-2012': 
                    if(this.sex === 'woman') sexK = 0.932;
                    if(this.krMgdl <= 0.8){
                        result = 133 * ((this.css/0.8)**-0.499) * (0.996**this.age) * sexK;
                    } else {
                        result = 133 * ((this.css/0.8)**-1.328) * (0.996**this.age) * sexK;
                    }
                break;
                case 'ckdepi-2012-ck':
                    if(this.rasa === 'negro') rasaK = 1.08;
                    if(this.sex === 'woman'){
                        if(this.krMgdl <= 0.7){
                            if(this.css <= 0.8){
                                result = 130 * ((this.krMgdl/0.7)**-0.248) * ((this.css/0.8)**-0.375) * (0.995**this.age) * rasaK;
                            } else {
                                result = 130 * ((this.krMgdl/0.7)**-0.248) * ((this.css/0.8)**-0.711) * (0.995**this.age) * rasaK;
                            }
                        } else {
                            if(this.css <= 0.8){
                                result = 130 * ((this.krMgdl/0.7)**-0.601) * ((this.css/0.8)**-0.375) * (0.995**this.age) * rasaK;
                            } else {
                                result = 130 * ((this.krMgdl/0.7)**-0.601) * ((this.css/0.8)**-0.711) * (0.995**this.age) * rasaK;
                            }
                        }
                    } else {
                        if(this.krMgdl <= 0.9){
                            if(this.css <= 0.8){
                                result = 135 * ((this.krMgdl/0.9)**-0.207) * ((this.css/0.8)**-0.375) * (0.995**this.age) * rasaK;
                            } else {
                                result = 135 * ((this.krMgdl/0.9)**-0.207) * ((this.css/0.8)**-0.711) * (0.995**this.age) * rasaK;
                            }
                        } else {
                            if(this.css<=0.8){
                                result = 135 * ((this.krMgdl/0.9)**-0.601) * ((this.css/0.8)**-0.375) * (0.995**this.age) * rasaK;
                            } else {
                                result = 135 * ((this.krMgdl/0.9)**-0.601) * ((this.css/0.8)**-0.711) * (0.995**this.age) * rasaK;
                            }
                        }
                    }
                
                break;
                case 'mdrd':
                    if(this.rasa === 'negro') rasaK = 1.212;
                    if(this.sex === 'woman') sexK = 0.742;
                    result = 175 * (this.krMgdl**-1.154) * (this.age**-0.203) * rasaK * sexK;
                  
                break;
                case 'kokrofta-golta':
                    if(this.sex === 'woman') sexK = 0.85;
                    result = (((140 - this.age) * this.weight)/(72 * this.krMgdl)) * sexK;
                break;
            }
            return result
        }
    },
    watch: {
        krMgdl: function(){
            this.calcMkml();
        },

        krMkml: function(){
            this.calcMgdl();
        }

    }
})







