<template>
  <section class="app-main">
    <transition name="fade-transform" mode="out-in">
      <keep-alive :include="cachedViews">
        <component :is="currentComponent" :key="key" />
        <!-- <router-view v-else /> -->
      </keep-alive>
    </transition>
    <div v-if="$store.state.settings.showFooter" id="el-main-footer">
      <span v-html="$store.state.settings.footerTxt" />
      <span> ⋅ </span>
      <a href="http://beian.miit.gov.cn" target="_blank">{{ $store.state.settings.caseNumber }}</a>
    </div>
  </section>
</template>

<script>
import User from '@/views/system/user/index'
import Role from '@/views/system/role/index'
import Menu from '@/views/system/menu/index'

export default {
  name: 'AppMain',
  components: {
    User,
    Role,
    Menu
  },
  computed: {
    cachedViews() {
      return this.$store.state.tagsView.cachedViews
    },
    key() {
      return this.$route.path
    },
    currentComponent() {
      const path = this.$route.path
      console.log(path)
      // 当路由路径包含 '/sys' 时，显示示例页面
      if (path.indexOf('system/user') > -1) {
        return 'User'
      } else if (path.indexOf('system/role') > -1) {
        return 'Role'
      } else if (path.indexOf('system/menu') > -1) {
        return 'Menu'
      }
      // 否则使用 router-view
      return 'router-view'
    }
  },
  mounted() {
      console.log('AppMain mounted')
    }
  }
</script>

<style lang="scss" scoped>
.app-main {
  /* 50= navbar  50  */
  min-height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  overflow: hidden;
}

.fixed-header+.app-main {
  padding-top: 50px;
}

.hasTagsView {
  .app-main {
    /* 84 = navbar + tags-view = 50 + 34 */
    min-height: calc(100vh - 84px);
  }

  .fixed-header+.app-main {
    padding-top: 84px;
  }
}
</style>

<style lang="scss">
// fix css style bug in open el-dialog
.el-popup-parent--hidden {
  .fixed-header {
    padding-right: 15px;
  }
}
</style>
