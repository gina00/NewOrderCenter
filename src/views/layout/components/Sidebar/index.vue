<template>
<el-scrollbar style="height:100%" wrapClass="scrollbar-wrapper">

    <el-menu :default-active='activedMenu()' class="el-menu-vertical-demo" active-text-color='#00aaff' @open="handleOpen" @close="handleClose" @select='handleClick'>
        <div class="subMenuTitle">
            <span class="cn">订单中心</span>
            <span class="en">Order Center</span>
        </div>
        <sidebar-item></sidebar-item>
    </el-menu>
</el-scrollbar>
</template>

<script>
import SiderbarItem from "./SidebarItem";
export default {
  components: {
    "sidebar-item": SiderbarItem
  },
  data() {
    return {
      isCollapse: false
    };
  },
  computed: {
    computedName() {
      return this.$store.state.subMenuManage.select;
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClick(index) {
      this.$store.commit("changeSubMenu", index);
      return index;
      console.log("当前选中子菜单下标是：" + index);
    },
    activedMenu() {
      if (this.$route.path.indexOf("/dashboard") == 0) {
        return "dashboard";
      } else if (this.$route.path.indexOf("/totalordermanage/index") == 0) {
        return "totalordermanage/index";
      }
      else if(this.$route.path.indexOf("/shoppingmanage/index") == 0) {
        return "shoppingmanage/index";
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.el-scrollbar__wrap {
  overflow-y: scroll;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 230px;
  min-height: 400px;
}

.subMenuTitle {
  display: flex;
  flex-direction: column;
  align-content: center;
  padding: 20px;

  .cn {
    font-size: 20px;
  }

  .en {
    font-size: 14px;
    color: #999;
    margin: 10px 0;
  }
}
</style>
