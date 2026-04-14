<template>
  <el-dropdown trigger="click" @command="handleLanguageChange">
    <div class="language-trigger">
      <i class="el-icon-translation"></i>
      <span class="language-label">{{ currentLanguageLabel }}</span>
    </div>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item
        v-for="lang in languageList"
        :key="lang.value"
        :command="lang.value"
        :disabled="currentLang === lang.value"
      >
        <i :class="lang.icon"></i>
        <span>{{ lang.label }}</span>
      </el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
import { setLanguage } from '@/lang'

export default {
  name: 'LangSwitch',
  data() {
    return {
      // 支持的语言列表
      languageList: [
        { value: 'zh-CN', label: '简体中文', icon: 'el-icon-document' },
        { value: 'en-US', label: 'English', icon: 'el-icon-document' },
        { value: 'es-ES', label: 'Español', icon: 'el-icon-document' }
      ],
      currentLang: ''
    }
  },
  computed: {
    // 当前语言的显示标签
    currentLanguageLabel() {
      const lang = this.languageList.find(item => item.value === this.currentLang)
      return lang ? lang.label : '简体中文'
    }
  },
  created() {
    // 初始化当前语言
    this.currentLang = this.$i18n.locale || localStorage.getItem('language') || 'zh-CN'
  },
  methods: {
    /**
     * 切换语言
     * @param {string} lang - 语言代码
     */
    handleLanguageChange(lang) {
      if (this.currentLang === lang) {
        return
      }
      this.currentLang = lang
      setLanguage(lang)
      
      // 触发语言切换成功提示
      this.$message.success(this.$t('common.success'))
      
      // 触发自定义事件，供父组件监听
      this.$emit('language-change', lang)
    }
  }
}
</script>

<style lang="scss" scoped>
.language-trigger {
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 0 12px;
  height: 50px;
  transition: background-color 0.3s;

  &:hover {
    background-color: rgba(0, 0, 0, 0.025);
  }

  i {
    font-size: 16px;
    margin-right: 6px;
  }

  .language-label {
    font-size: 14px;
    color: #606266;
  }
}

::v-deep .el-dropdown-menu__item {
  display: flex;
  align-items: center;

  i {
    margin-right: 8px;
    font-size: 14px;
  }

  &.is-disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
}
</style>
