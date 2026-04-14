import Vue from 'vue'
import VueI18n from 'vue-i18n'
import Cookies from 'js-cookie'
import elementLocaleZH from 'element-ui/lib/locale/lang/zh-CN'
import elementLocaleEN from 'element-ui/lib/locale/lang/en'
import elementLocaleES from 'element-ui/lib/locale/lang/es'

import zh from './zh'
import en from './en'
import es from './es'

// 安装 VueI18n 插件
Vue.use(VueI18n)

// 定义支持的语言包
const messages = {
  'zh-CN': {
    ...zh,
    ...elementLocaleZH
  },
  'en-US': {
    ...en,
    ...elementLocaleEN
  },
  'es-ES': {
    ...es,
    ...elementLocaleES
  }
}

// 从 localStorage 或 Cookies 获取当前语言，默认为中文
const getLanguage = () => {
  const savedLang = localStorage.getItem('language') || Cookies.get('language')
  if (savedLang && ['zh-CN', 'en-US', 'es-ES'].includes(savedLang)) {
    return savedLang
  }
  return 'zh-CN'
}

// 创建 i18n 实例
const i18n = new VueI18n({
  locale: getLanguage(), // 设置默认语言
  fallbackLocale: 'zh-CN', // 设置备用语言
  messages // 设置语言包
})

/**
 * 切换语言
 * @param {string} lang - 语言代码：'zh-CN' | 'en-US' | 'es-ES'
 */
export const setLanguage = (lang) => {
  i18n.locale = lang
  localStorage.setItem('language', lang)
  Cookies.set('language', lang)
  document.querySelector('html').setAttribute('lang', lang)
}

// 初始化 HTML lang 属性
document.querySelector('html').setAttribute('lang', i18n.locale)

export default i18n
