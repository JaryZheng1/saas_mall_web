# Vue2 项目国际化 (i18n) 集成指南

## 1. 安装依赖

首先安装 `vue-i18n` 依赖（兼容 Vue2 的版本）：

```bash
npm install vue-i18n@^8.27.0 --save
# 或
yarn add vue-i18n@^8.27.0
```

> **注意**: 由于本项目使用 Vue 2.6.10，需要安装 vue-i18n v8.x 版本，而不是 v9.x（v9.x 仅支持 Vue 3）。

## 2. 文件结构说明

已创建以下文件：

```
src/
├── lang/
│   ├── index.js        # i18n 核心配置
│   ├── zh.js           # 中文语言包
│   ├── en.js           # 英文语言包
│   └── es.js           # 西班牙语语言包
├── components/
│   └── LangSwitch.vue  # 语言切换组件
├── views/
│   └── ExampleI18n.vue # 国际化示例页面
├── utils/
│   └── request.js      # 已添加 Accept-Language 请求头
└── main.js             # 已集成 i18n
```

## 3. 功能特性

- ✅ 支持三种语言：中文 (zh-CN)、英文 (en-US)、西班牙语 (es-ES)
- ✅ 语言切换后自动保存到 localStorage 和 Cookies
- ✅ 切换语言时页面**不刷新**（动态更新）
- ✅ Element UI 组件语言自动跟随切换
- ✅ axios 请求拦截器自动在请求头添加 `Accept-Language`
- ✅ 提供标准的语言切换组件 `LangSwitch.vue`

## 4. 使用方法

### 4.1 在模板中使用

```vue
<template>
  <div>
    <!-- 简单文本 -->
    <h1>{{ $t('common.title') }}</h1>
    
    <!-- 带插值的文本 -->
    <p>{{ $t('example.interpolationExample', { name: userName }) }}</p>
    
    <!-- Element UI 按钮 -->
    <el-button>{{ $t('common.confirm') }}</el-button>
  </div>
</template>
```

### 4.2 在 JavaScript 中使用

```javascript
export default {
  methods: {
    showMessage() {
      // 成功消息
      this.$message.success(this.$t('message.saveSuccess'))
      
      // 确认对话框
      this.$confirm(
        this.$t('message.deleteConfirm'),
        this.$t('common.confirm'),
        {
          confirmButtonText: this.$t('common.confirm'),
          cancelButtonText: this.$t('common.cancel'),
          type: 'warning'
        }
      )
    }
  }
}
```

### 4.3 在计算属性中使用

```javascript
export default {
  computed: {
    localizedData() {
      return {
        title: this.$t('common.title'),
        status: this.$t('common.status')
      }
    }
  }
}
```

### 4.4 使用语言切换组件

在导航栏或其他位置引入 `LangSwitch` 组件：

```vue
<template>
  <div class="navbar">
    <!-- 其他导航内容 -->
    <LangSwitch @language-change="handleLanguageChange" />
  </div>
</template>

<script>
import LangSwitch from '@/components/LangSwitch'

export default {
  components: {
    LangSwitch
  },
  methods: {
    handleLanguageChange(lang) {
      console.log('当前语言已切换为:', lang)
    }
  }
}
</script>
```

### 4.5 编程式切换语言

```javascript
import { setLanguage } from '@/lang'

// 切换为英文
setLanguage('en-US')

// 切换为中文
setLanguage('zh-CN')

// 切换为西班牙语
setLanguage('es-ES')
```

## 5. 添加新的语言包

1. 在 `src/lang/` 目录下创建新的语言文件，如 `fr.js`（法语）
2. 复制现有语言文件的结构并翻译内容
3. 在 `src/lang/index.js` 中导入并注册新语言：

```javascript
import elementLocaleFR from 'element-ui/lib/locale/lang/fr'
import fr from './fr'

const messages = {
  // ... 其他语言
  'fr-FR': {
    ...fr,
    ...elementLocaleFR
  }
}
```

4. 在 `LangSwitch.vue` 组件中添加新语言选项

## 6. 示例页面访问

访问 `/example-i18n` 路由（需要在 router 中配置）查看国际化示例页面。

## 7. 注意事项

1. **语言键命名规范**: 使用点分隔的嵌套结构，如 `common.title`、`navbar.dashboard`
2. **插值语法**: 使用 `{variable}` 占位符，在调用时传入对象 `{ name: 'John' }`
3. **Element UI 集成**: 已自动集成 Element UI 的多语言支持
4. **持久化**: 语言设置会同时保存到 localStorage 和 Cookies

## 8. 常见问题

### Q: 切换语言后某些文本没有更新？
A: 确保使用了 `$t()` 函数而不是硬编码文本，对于动态数据请使用计算属性。

### Q: 如何获取当前语言？
A: 使用 `this.$i18n.locale` 或从 localStorage 读取。

### Q: 如何在新窗口打开时保持语言设置？
A: 语言已保存到 localStorage 和 Cookies，新窗口会自动读取。
