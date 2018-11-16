<template>
<section class="orderManageBox">
    <el-tabs v-model="editableTabsValue" type="card" closable @edit="handleTabsEdit" @click="handleClick()">
        <el-tab-pane :key="item.name" v-for="item in editableTabs" :label="item.title" :name="item.name">
           <v-product v-if='item.content=="vProduct"'></v-product>
           <v-shopping v-if='item.content=="vShopping"'></v-shopping>
        </el-tab-pane>
    </el-tabs>
</section>
</template>

<script>
//import goodsDetails from "@/components/totalordermanage/goodsdetails/index";
import vProduct from "./product";
import vShopping from "./shoppingcart";
export default {
  components: {
      vProduct,
      vShopping
  },
  data() {
    return {
      editableTabsValue: "1",
      editableTabs: [
        {
          title: "产品受理",
          name: "1",
          content: "vProduct"
        },
        {
          title: "购物车",
          name: "2",
          content: "vShopping"
        }
      ],
      tabIndex: 2
    };
  },
  
  methods: {
    handleTabsEdit(targetName, action) {
      if (action === "add") {
        let newTabName = ++this.tabIndex + "";
        this.editableTabs.push({
          title: "New Tab",
          name: newTabName,
          content: "New Tab content"
        });
        this.editableTabsValue = newTabName;
      }
      if (action === "remove") {
        let tabs = this.editableTabs;
        let activeName = this.editableTabsValue;
        if (activeName === targetName) {
          tabs.forEach((tab, index) => {
            if (tab.name === targetName) {
              let nextTab = tabs[index + 1] || tabs[index - 1];
              if (nextTab) {
                activeName = nextTab.name;
              }
            }
          });
        }

        this.editableTabsValue = activeName;
        this.editableTabs = tabs.filter(tab => tab.name !== targetName);
      }
    }
  }
};
</script>
<style lang="scss" scoped>

</style>
