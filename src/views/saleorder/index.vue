<template>
<section class="orderManageBox">
    <el-tabs v-model="editableTabsValue" type="card" editable @edit="handleTabsEdit">
        <el-tab-pane :key="item.name" v-for="item in editableTabs" :label="item.title" :name="item.name">
           <order-manage v-if='item.content=="orderManage"'></order-manage>
           <order-detail v-if='item.content=="orderDetail"'></order-detail>
           <sub-orderdetail v-if='item.content=="suborderdetail"'></sub-orderdetail>
           <total-orderdetails v-if='item.content=="totalorderdetails"'></total-orderdetails>
        </el-tab-pane>
    </el-tabs>
</section>
</template>

<script>
import orderManage from '@/components/saleordercenter/ordermanage/index'
import orderDetail from '@/components/saleordercenter/orderdetail/index'
import suborderdetail from '@/components/saleordercenter/suborderdetail/index'
import totalorderdetails from '@/components/saleordercenter/totalorderdetails/index'
export default {
    components:{
        'order-manage':orderManage,
        'order-detail':orderDetail,
        'sub-orderdetail':suborderdetail,
        'total-orderdetails':totalorderdetails
    },
    data() {
        return {
            editableTabsValue: '1',
            editableTabs: [{
                title: '订单管理',
                name: '1',
                content: 'orderManage'
            }, {
                title: '订单详情',
                name: '2',
                content: 'orderDetail'
            },{
                title: '子订单详情',
                name: '3',
                content: 'suborderdetail'
            }, {
                title: '订单行详情',
                name: '4',
                content: 'totalorderdetails'
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
