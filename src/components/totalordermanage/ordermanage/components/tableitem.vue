<template>
<section>
    <div class="ordertable">
        <el-card v-if="isShow">
            <el-row :gutter="0" class="buttonBox">
                <el-col :xs="12" :sm="12" :lg="12">
                    <ul class="button-ul">
                        <li><a>全选</a></li>
                        <li><a>取消全选</a></li>
                    </ul>
                    <ul class="button-ul">
                        <li><a>暂停</a></li>
                        <li><a>恢复</a></li>
                        <li><a>重派</a></li>
                    </ul>

                    <el-button type="text" icon="el-icon-refresh" class="textsty">刷新</el-button>

                </el-col>

            </el-row>

            <tree-table @operateClick="handleClick" :data="data" :columns="columns" border></tree-table>

            <div class="paginBox">
                <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage4" :page-sizes="[100, 200, 300, 400]" :page-size="100" layout="total, sizes, prev, pager, next, jumper" :total="400">
                </el-pagination>
            </div>
        </el-card>
        <el-card v-if="listshow">
            <el-row :gutter="0" class="buttonBox">
                <el-col :xs="12" :sm="12" :lg="2">
                    <el-button type="primary" plain @click="showTab()">返回列表</el-button>
                </el-col>
            </el-row>
            <el-row class="topuBox">
                <j-topu></j-topu>
            </el-row>
        </el-card>
    </div>
</section>
</template>

<script>
import treeTable from "@/components/treeTable";
import jTopu from "@/components/jtopu/index";
export default {
    components: {
        treeTable,
        jTopu
    },
    data() {
        return {
            isShow: true,
            listshow: false,
            currentPage4: 4,
            tableData3: [{
                ID: "20180900093301",
                numbertype: "个人",
                service: "588793220",
                date: "2018-10-09",
                name: "改号",
                pay: "10.00",
                paymethod: "现金支付",
                status: "待审核"
            }],
            multipleSelection: [],
            columns: [{
                    text: "订单编号",
                    value: "ID",
                    width: 250
                },
                {
                    text: "订单类型",
                    value: "ordertype"
                },
                {
                    text: "业务名称",
                    value: "name"
                },
                {
                    text: "开始时间",
                    value: "starttime",
                    width: 180
                },
                {
                    text: "结束时间",
                    value: "endtime"
                },
                {
                    text: "订单状态",
                    value: "orderstatus"
                }
            ],
            data: [{
                    id: 1,
                    ID: "订单号：20302113313",
                    ordertype: "集团业务",
                    name: "互联网专线查勘",
                    starttime: "2018-01-01 12:00:00",
                    endtime: "",
                    orderstatus: "执行中",
                    operates: ["流程", "订单详情"],
                    children: [{
                            id: 2,
                            ID: "子订单号：2018211331",
                            ordertype: "",
                            name: "",
                            starttime: "",
                            endtime: "",
                            orderstatus: "执行中",
                            operates: ["子订单详情"]
                        },
                        {
                            id: 3,
                            ID: "集团业务",
                            ordertype: "",
                            name: "语音专线开通",
                            starttime: "",
                            endtime: "",
                            ishasicon:true,
                            orderstatus: "已完成",
                            operates: ["商品详情"]
                        }
                    ]
                },
                {
                    id: 4,
                    ID: "订单号：20302113313",
                    ordertype: "个人业务",
                    name: "",
                    starttime: "",
                    endtime: "",
                    orderstatus: "已完成",
                    operates: ["流程", "订单详情"],
                }
            ]
        };
    },
    methods: {
        toggleSelection(rows) {
            if (rows) {
                rows.forEach(row => {
                    this.$refs.multipleTable.toggleRowSelection(row);
                });
            } else {
                this.$refs.multipleTable.clearSelection();
            }
        },
        handleSelectionChange(val) {
            this.multipleSelection = val;
        },
        handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
        },
        handleClick: function (row, operate) {
            //debugger;
            var ss = this.$store
            if (operate == '流程') {
                this.listshow = !this.listshow
                this.isShow = !this.isShow
            }
            if (operate == '订单详情') {
                this.$store.commit("setTabName", "2");
            }
            if (operate == '子订单详情') {
                this.$store.commit("setTabName", "3");
            }
            if (operate == '订单行详情') {
                this.$store.commit("setTabName", "4");
            }
            if (operate == '商品详情') {
                this.$store.commit("setTabName", "5");
            }
        },
        showTab() {
            this.listshow = !this.listshow
            this.isShow = !this.isShow
        }
    }
};
</script>

<style lang="scss" scoped>
.topuBox {
    padding: 50px;
}
</style>
