import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)
import zh_cn from './zh_cn.js';
import zh_tw from './zh_tw.js';
import en from './en.js';
import jp from "./jp.js";
import es from "./es.js";
import kr from "./kr.js";
import ar from "./ar.js";
import ru from "./ru.js";

const i18n = new VueI18n({
    locale: localStorage.getItem('lang') || 'es',
    messages: {
        zh_cn,
        zh_tw,
        en,
        jp,
        es,
        kr,
        ar,
        ru,
    }
})
export default i18n
