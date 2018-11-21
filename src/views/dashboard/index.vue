<template>
<section class="commonTabBgBox">
    <el-tabs v-model="editableTabsValue" type="card" closable @edit="handleTabsEdit">
        <el-tab-pane :key="item.name" v-for="item in editableTabs" :label="item.title" :name="item.name">
            <base-layout v-if='item.content=="baseLayout"'></base-layout>
        </el-tab-pane>
    </el-tabs>
    <div class="dateBox">
        <span>时间：</span>
        <el-date-picker v-model="value6" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
        </el-date-picker>
        <span class="weeksText">周期：</span>
        <el-select v-model="value" placeholder="请选择">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
        </el-select>
    </div>
</section>
</template>

 

<script>
import baseLayout from "./admin/baselayout.vue";
export default {
  components: {
    "base-layout": baseLayout
  },
  data() {
    return {
      value6: "",
      value: "",
      editableTabsValue: "1",
      editableTabs: [
        {
          title: "订单概览",
          name: "1",
          content: "baseLayout"
        }
      ],
      tabIndex: 2,
      options: [
        {
          value: "选项1",
          label: "年"
        },
        {
          value: "选项2",
          label: "月"
        },
        {
          value: "选项3",
          label: "日"
        }
      ]
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
.commonTabBgBox {
  position: relative;

  .dateBox {
      font-size: 14px;
    position: absolute;
    top: 0;
    right: 0px;
    .weeksText{
        margin-left: 20px;

    }
    
    .el-range-editor.el-input__inner{
        height: 36px;
    }
    
    
  }
}
</style>
