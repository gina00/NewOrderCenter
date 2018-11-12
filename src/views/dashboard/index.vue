 <template>
     <section class="commonTabBgBox">
    <el-tabs v-model="editableTabsValue" type="card" closable  @edit="handleTabsEdit">
        <el-tab-pane :key="item.name" v-for="item in editableTabs" :label="item.title" :name="item.name">
            <base-layout v-if='item.content=="baseLayout"'></base-layout>
        </el-tab-pane>
    </el-tabs>
</section>
 </template>
 <script>
 import baseLayout from './admin/baselayout.vue'
 export default {
     components:{
         'base-layout':baseLayout
     },
     data() {
        return {
            editableTabsValue: '1',
            editableTabs: [{
                title: '订单概览',
                name: '1',
                content: 'baseLayout'
            }],
            tabIndex: 2
        }
    },
    methods: {
        handleTabsEdit(targetName, action) {
            if (action === 'add') {
                let newTabName = ++this.tabIndex + '';
                this.editableTabs.push({
                    title: 'New Tab',
                    name: newTabName,
                    content: 'New Tab content'
                });
                this.editableTabsValue = newTabName;
            }
            if (action === 'remove') {
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
 }
 </script>
 
 