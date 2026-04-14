<template>
  <div class="i18n-example-container">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>{{ $t('example.title') }}</span>
      </div>
      
      <!-- 欢迎信息 -->
      <div class="example-section">
        <h3>{{ $t('example.welcomeMessage') }}</h3>
        <p>{{ $t('example.description') }}</p>
      </div>

      <!-- 语言切换区域 -->
      <div class="example-section">
        <h4>{{ $t('example.switchLanguage') }}:</h4>
        <div class="language-buttons">
          <el-button 
            :type="currentLang === 'zh-CN' ? 'primary' : ''" 
            @click="switchLanguage('zh-CN')"
          >
            简体中文
          </el-button>
          <el-button 
            :type="currentLang === 'en-US' ? 'primary' : ''" 
            @click="switchLanguage('en-US')"
          >
            English
          </el-button>
          <el-button 
            :type="currentLang === 'es-ES' ? 'primary' : ''" 
            @click="switchLanguage('es-ES')"
          >
            Español
          </el-button>
        </div>
        <p class="current-lang-info">
          {{ $t('example.currentLanguage') }}: <strong>{{ currentLang }}</strong>
        </p>
      </div>

      <!-- 使用方法说明 -->
      <div class="example-section">
        <h4>{{ $t('example.usageTitle') }}:</h4>
        <el-code>
          {{ $t('example.usageCode') }}
        </el-code>
        <div class="code-examples">
          <p><strong>模板中使用:</strong></p>
          <pre><code>{{ `{{ $t('common.title') }}` }}</code></pre>
          <p><strong>JavaScript 中使用:</strong></p>
          <pre><code>this.$t('navbar.dashboard')</code></pre>
        </div>
      </div>

      <!-- 通用文本示例 -->
      <div class="example-section">
        <h4>{{ $t('common.action') }} - {{ $t('example.nestedExample') }}:</h4>
        <el-table :data="actionTableData" border style="width: 100%">
          <el-table-column prop="key" :label="$t('common.status')" width="180"></el-table-column>
          <el-table-column prop="value" :label="$t('common.action')"></el-table-column>
        </el-table>
      </div>

      <!-- 插值示例 -->
      <div class="example-section">
        <h4>{{ $t('example.interpolationExample', { name: userName }) }}</h4>
        <el-input 
          v-model="userName" 
          :placeholder="'请输入用户名'"
          style="width: 300px;"
          prefix-icon="el-icon-user"
        ></el-input>
      </div>

      <!-- 消息提示示例 -->
      <div class="example-section">
        <h4>Message Examples:</h4>
        <el-button type="success" @click="showSuccess">{{ $t('message.saveSuccess') }}</el-button>
        <el-button type="warning" @click="showWarning">{{ $t('message.operationFailed') }}</el-button>
        <el-button type="danger" @click="showDeleteConfirm">{{ $t('message.deleteConfirm') }}</el-button>
      </div>
    </el-card>
  </div>
</template>

<script>
import { setLanguage } from '@/lang'

export default {
  name: 'ExampleI18n',
  data() {
    return {
      currentLang: '',
      userName: 'User',
      actionTableData: []
    }
  },
  computed: {
    // 动态获取表格数据
    localizedTableData() {
      return [
        { key: this.$t('common.confirm'), value: this.$t('common.submit') },
        { key: this.$t('common.cancel'), value: this.$t('common.reset') },
        { key: this.$t('common.edit'), value: this.$t('common.save') },
        { key: this.$t('common.delete'), value: this.$t('common.add') }
      ]
    }
  },
  created() {
    this.currentLang = this.$i18n.locale
    this.actionTableData = this.localizedTableData
  },
  methods: {
    /**
     * 切换语言
     */
    switchLanguage(lang) {
      setLanguage(lang)
      this.currentLang = lang
      // 更新表格数据以反映新语言
      this.actionTableData = this.localizedTableData
    },
    
    /**
     * 显示成功消息
     */
    showSuccess() {
      this.$message.success(this.$t('message.saveSuccess'))
    },
    
    /**
     * 显示警告消息
     */
    showWarning() {
      this.$message.warning(this.$t('message.operationFailed'))
    },
    
    /**
     * 显示删除确认
     */
    showDeleteConfirm() {
      this.$confirm(
        this.$t('message.deleteConfirm'),
        this.$t('common.confirm'),
        {
          confirmButtonText: this.$t('common.confirm'),
          cancelButtonText: this.$t('common.cancel'),
          type: 'warning'
        }
      ).then(() => {
        this.$message.success(this.$t('message.deleteSuccess'))
      }).catch(() => {
        this.$message.info(this.$t('common.cancel'))
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.i18n-example-container {
  padding: 20px;
  
  .box-card {
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .example-section {
    margin-bottom: 30px;
    
    h3 {
      color: #303133;
      margin-bottom: 16px;
    }
    
    h4 {
      color: #606266;
      margin-bottom: 12px;
      font-size: 16px;
    }
    
    p {
      color: #909399;
      line-height: 1.6;
    }
    
    .language-buttons {
      display: flex;
      gap: 12px;
      margin-bottom: 16px;
    }
    
    .current-lang-info {
      margin-top: 12px;
      font-size: 14px;
      
      strong {
        color: #409EFF;
      }
    }
    
    .code-examples {
      margin-top: 16px;
      
      pre {
        background-color: #f5f7fa;
        padding: 12px;
        border-radius: 4px;
        margin: 8px 0;
        
        code {
          color: #e74c3c;
          font-family: 'Consolas', 'Monaco', monospace;
        }
      }
    }
  }
}
</style>
