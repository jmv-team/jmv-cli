/**
 * @Author: Created By McChen
 * @Date: 2017/2/20
 * @Mail: chenjiahao@jd.com
 * @Version: V1.0.0
 */

import Vue from 'vue'
import Vuex from 'vuex'

// import createLogger from '../../../src/plugins/logger'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

// 导出store
export default new Vuex.Store({
    state: {},
    getters: {},
    mutations: {},
    actions: {},
    modules: {},
    strict: debug,
    // plugins: debug ? [createLogger()] : []
})