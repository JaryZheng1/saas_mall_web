/**
 * 中文语言包 (zh-CN)
 */
export default {
  // 通用
  common: {
    title: 'YSHOP 商城',
    confirm: '确定',
    cancel: '取消',
    submit: '提交',
    save: '保存',
    delete: '删除',
    edit: '编辑',
    add: '添加',
    search: '搜索',
    reset: '重置',
    refresh: '刷新',
    back: '返回',
    action: '操作',
    status: '状态',
    createTime: '创建时间',
    updateTime: '更新时间',
    remark: '备注',
    noData: '暂无数据',
    loading: '加载中...',
    success: '操作成功',
    failed: '操作失败'
  },
  // 导航栏
  navbar: {
    dashboard: '首页',
    profile: '个人中心',
    logout: '退出登录',
    settings: '系统设置',
    language: '语言切换'
  },
  // 登录
  login: {
    title: '系统登录',
    username: '用户名',
    password: '密码',
    rememberMe: '记住我',
    forgotPassword: '忘记密码？',
    loginBtn: '登录',
    pleaseEnterUsername: '请输入用户名',
    pleaseEnterPassword: '请输入密码',
    loggingIn: '登录中...'
  },
  // 按钮权限
  permission: {
    hasPermission: '有权限',
    noPermission: '无权限',
    adminOnly: '仅管理员可见'
  },
  // 表格
  table: {
    total: '共 {total} 条',
    page: '页',
    pageSize: '每页',
    currentPage: '当前页',
    goto: '前往',
    prevPage: '上一页',
    nextPage: '下一页',
    firstPage: '首页',
    lastPage: '末页'
  },
  // 表单验证
  validation: {
    required: '{field}不能为空',
    minLength: '{field}长度不能少于{min}个字符',
    maxLength: '{field}长度不能超过{max}个字符',
    email: '请输入正确的邮箱地址',
    phone: '请输入正确的手机号码',
    url: '请输入正确的网址',
    number: '请输入数字',
    pattern: '{field}格式不正确'
  },
  // 消息提示
  message: {
    deleteConfirm: '确定要删除这条记录吗？',
    deleteSuccess: '删除成功',
    saveSuccess: '保存成功',
    updateSuccess: '更新成功',
    addSuccess: '添加成功',
    operationFailed: '操作失败，请稍后重试',
    networkError: '网络错误，请检查网络连接'
  },
  // 示例页面
  example: {
    title: '国际化示例页面',
    description: '这是一个展示如何使用 vue-i18n 的示例页面',
    welcomeMessage: '欢迎使用 YSHOP 商城管理系统',
    switchLanguage: '切换语言',
    currentLanguage: '当前语言',
    usageTitle: '使用方法',
    usageCode: '在模板中使用 {{ $t("key") }} 或在 JS 中使用 this.$t("key")',
    dynamicContent: '动态内容示例',
    nestedExample: '嵌套键值示例',
    interpolationExample: '插值示例：您好，{name}！'
  }
}
