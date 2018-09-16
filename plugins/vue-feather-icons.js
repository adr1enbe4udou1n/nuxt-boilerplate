import Vue from 'vue'

import {
  HeartIcon,
  CodeIcon
} from 'vue-feather-icons'

let icons = {
  HeartIcon,
  CodeIcon
}

const VuePlugin = {
  install: function (Vue) {
    /**
     * Chargement des icônes SVG
     */
    for (let name in icons) {
      Vue.component(name, icons[name])
    }
  }
}

Vue.use(VuePlugin)
