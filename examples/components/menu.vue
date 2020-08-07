<template lang="html">
  <div class="menu-model">
    <el-menu
      :unique-opened="true"
      :default-active="defaultActive"
      :default-openeds="['1', '2', '3']"
      :router="true"
    >
      <el-submenu index="1">
        <template slot="title">
          <span>开发指南</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/guide/install">安装</el-menu-item>
          <el-menu-item index="/guide/quikeStart">快速上手</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <span>通用模块</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/bappDowload">B端公共下载头部</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group>
          <el-menu-item index="/noNetwork">无网络缺省图</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group>
          <el-menu-item index="/bottomSelect">底部选择器</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group>
          <el-menu-item index="/bonusPageList">骨架屏列表</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group>
          <el-menu-item index="/giftWheel">转盘抽奖</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group>
          <el-menu-item index="/carselector">车型选择器</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group>
          <el-menu-item index="/test">test</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group>
          <el-menu-item index="/commonLoadingMask">loading</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <span>其他模块</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/share">分享</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group>
          <el-menu-item index="/shareInstall">shareInstall</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      defaultActive: '/guide/install'
    }
  },
  created() {
    const path = this.$route.fullPath
    this.defaultActive = path === '/' ? '/guide/install' : path
  },
  methods: {}
}
</script>
