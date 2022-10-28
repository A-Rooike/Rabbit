import { createStore } from 'vuex'

import user from './moudules/user'
import category from './moudules/category'
import home from './moudules/home'

export default createStore({

  modules: {
    user,
    category,
    home

  }
})
