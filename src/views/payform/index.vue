<template>
<section class="orderManageBox">
    <el-tabs v-model="editableTabsValue" type="card" editable @edit="handleTabsEdit">
        <el-tab-pane :key="item.name" v-for="item in editableTabs" :label="item.title" :name="item.name">
            <pay-manage v-if='item.content=="payManage"'></pay-manage>
            <pay-detail v-if='item.content=="payDetail"'></pay-detail>
        </el-tab-pane>
    </el-tabs>
</section>
</template>

<script>
import payManage from '@/components/payform/paymanage/index'
import payDetail from '@/components/payform/paydetail/index'
export default {
    components: {
        'pay-manage': payManage,
        'pay-detail': payDetail
    },
    data() {
        return {
            editableTabsValue: '1',
            editableTabs: [{
                title: '支付单管理',
                name: '1',
                content: 'payManage'
            }, {
                title: '支付单行情',
                name: '2',
                content: 'payDetail'
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

<style lang="scss" scoped>

</style>
