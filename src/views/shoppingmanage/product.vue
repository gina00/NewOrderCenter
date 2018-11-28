<template>
<section>
    <el-row :gutter="0" class="toolbar-pr">
        <el-col :xs="12" :xl="12" :lg="5">
            <div class="tab-btn" @click="showTab()">
                <a :class={active:active}>个人业务</a>
                <a :class={active:replyactive}>家庭业务</a>
            </div>
        </el-col>
        <el-col :xs="12" :xl="12" :lg="8">
            <el-input v-model="input" placeholder="请输入内容"></el-input>
            <el-button type="primary" icon="el-icon-search">搜索</el-button>
        </el-col>
    </el-row>
    <div v-if="active" class="ordertable">
        <el-row class="choose-tbar">
            <el-col :xs="12" :xl="12" :lg="9">
                <ul>
                    <li>套餐选择：</li>
                    <li><a class="color">所有</a></li>
                    <li><a>基本包</a></li>
                    <li><a>可选包</a></li>
                    <li><a>增值产品</a></li>
                </ul>
            </el-col>
        </el-row>
        <el-card shadow="never">
            <tree-table @operateClick='handleClick' :data="data" :columns="columns" border></tree-table>
            <div class="paginBox">
                <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage1" :page-sizes="[10, 50, 100, 200]" :page-size="10" layout="total, sizes, prev, pager, next, jumper" :total="23">
                </el-pagination>
            </div>
            <div class="bottomLayout">
                <div class="amountBox">
                    <span>合计金额：0元</span>
                </div>
                <div class="reverseBox">
                    <div class="chooseBox">
                        <el-button type="primary" plain class="payBox" @click="open">加入购物车</el-button>
                        <el-button type="primary" class="payBox">立即支付</el-button>
                    </div>
                </div>
            </div>
        </el-card>
    </div>
    <div v-if="replyactive" class="tabBox">
        <el-card shadow="never">家庭业务</el-card>
    </div>

</section>
</template>

<script>
import treeTable from "@/components/treeTable";
export default {
    components: {
        treeTable
    },
    data() {
        return {
            currentPage1: 1,
            active: true,
            replyactive: false,
            input: '',
            multipleSelection: [],
            columns: [{
                    text: "已订购套餐名称",
                    value: "ID",
                    width: 280
                },
                {
                    text: "产品类型",
                    value: "ordertype"
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
                    ID: "4G上网流量30元可选包（2018版）",
                    ordertype: "可选包产品",
                    starttime: "2018/08/01",
                    endtime: "2099/08/01",
                    orderstatus: "新增",
                    operates: ["取消受理"],
                    children: [{
                            id: 2,
                            ID: "子订单号：2018211331",
                            ordertype: "",
                            starttime: "",
                            endtime: "",
                            orderstatus: "执行中",
                            operates: ["子订单详情"]
                        },
                        {
                            id: 3,
                            ID: "集团业务",
                            ordertype: "",
                            starttime: "2018/08/01",
                            endtime: "2099/08/01",
                            ishasicon:true,
                            orderstatus: "已完成",
                            operates: ["商品详情"]
                        }
                    ]
                },
                {
                    id: 1,
                    ID: "4G飞享188元套餐（2018版）",
                    ordertype: "基本包产品",
                    starttime: "2018/08/01",
                    endtime: "2099/08/01",
                    orderstatus: "正常",
                    operates: ["修改"],
                    children: [{
                            id: 2,
                            ID: "子订单号：2018211331",
                            ordertype: "",
                            starttime: "",
                            endtime: "",
                            orderstatus: "执行中",
                            operates: ["子订单详情"]
                        },
                        {
                            id: 3,
                            ID: "集团业务",
                            ordertype: "",
                            starttime: "2018/08/01",
                            endtime: "2099/08/01",
                            ishasicon:true,
                            orderstatus: "已完成",
                            operates: ["商品详情"]
                        }
                    ]
                },
                {
                    id: 1,
                    ID: "短信20元可选包（2018版）",
                    ordertype: "可选包产品",
                    starttime: "2013/08/01",
                    endtime: "2099/08/01",
                    orderstatus: "正常",
                    operates: ["次月失效", "修改"],
                    children: [{
                            id: 2,
                            ID: "子订单号：2018211331",
                            ordertype: "",
                            starttime: "",
                            endtime: "",
                            orderstatus: "执行中",
                            operates: ["子订单详情"]
                        },
                        {
                            id: 3,
                            ID: "集团业务",
                            ordertype: "",
                            starttime: "2018/08/01",
                            endtime: "2099/08/01",
                            ishasicon:true,
                            orderstatus: "已完成",
                            operates: ["商品详情"]
                        }
                    ]
                },
                {
                    id: 1,
                    ID: "短信20元可选包（2018版）",
                    ordertype: "可选包产品",
                    starttime: "2013/08/01",
                    endtime: "2099/08/01",
                    orderstatus: "正常",
                    operates: ["次月失效", "修改"],
                    children: [{
                            id: 2,
                            ID: "子订单号：2018211331",
                            ordertype: "",
                            starttime: "",
                            endtime: "",
                            orderstatus: "执行中",
                            operates: ["子订单详情"]
                        },
                        {
                            id: 3,
                            ID: "集团业务",
                            ordertype: "",
                            starttime: "2018/08/01",
                            endtime: "2099/08/01",
                            ishasicon:true,
                            orderstatus: "已完成",
                            operates: ["商品详情"]
                        }
                    ]
                },
                {
                    id: 1,
                    ID: "产商品99019",
                    ordertype: "融合产品",
                    starttime: "2018/08/01",
                    endtime: "2099/08/01",
                    orderstatus: "正常",
                    operates: ["修改"],
                    children: [{
                            id: 2,
                            ID: "子订单号：2018211331",
                            ordertype: "",
                            starttime: "",
                            endtime: "",
                            orderstatus: "执行中",
                            operates: ["子订单详情"]
                        },
                        {
                            id: 3,
                            ID: "集团业务",
                            ordertype: "",
                            starttime: "2018/08/01",
                            endtime: "2099/008/01",
                            ishasicon:true,
                            orderstatus: "已完成",
                            operates: ["商品详情"]
                        }
                    ]
                },
                {
                    id: 1,
                    ID: "10元1G夜间流量包（2018版）",
                    ordertype: "可选包产品",
                    starttime: "2017/11/01",
                    endtime: "2099/08/01",
                    orderstatus: "正常",
                    operates: ["次月失效"],
                    children: [{
                            id: 2,
                            ID: "子订单号：2018211331",
                            ordertype: "",
                            starttime: "",
                            endtime: "",
                            orderstatus: "执行中",
                            operates: ["子订单详情"]
                        },
                        {
                            id: 3,
                            ID: "集团业务",
                            ordertype: "",
                            starttime: "2018/08/01",
                            endtime: "2099/008/01",
                            ishasicon:true,
                            orderstatus: "已完成",
                            operates: ["商品详情"]
                        }
                    ]
                }

            ]
        };
    },
    methods: {
        showTab() {
            this.active = !this.active;
            this.replyactive = !this.replyactive;
        },
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
        open() {
            this.$alert('已成功加入购物车', '', {
                confirmButtonText: '确定'
            });
        },
         handleClick: function (row, operate) {
            //debugger;
           
            if (operate == '子订单详情') {
                this.$store.commit("setTabName", "3");
                this.$router.push({ path: "/totalordermanage" });
                // alert("激活流程Tab，订单ID:"+row.ID);
            }
            if (operate == '商品详情') {
                this.$store.commit("setTabName", "5");
                this.$router.push({ path: "/totalordermanage" });
                // alert("激活流程Tab，订单ID:"+row.ID);
            }
            //console.log(scope)
        },
    }
};
</script>

<style lang="scss" scoped>
.tab-btn {
    margin: 5px 15px;

    a {
        display: inline-block;
        padding: 8px 15px;
        border-radius: 3px;
        background: #f0f2f5;
        color: #666;
        font-size: 12px;

        &.active {
            background: #1989fa;
            color: #fff;
        }

        &:hover {
            background: #1989fa;
            color: #fff;
        }
    }
}

.toolbar-pr .el-input {
    width: 200px;
}

.choose-tbar {
    padding: 0 10px;

    ul {
        display: flex;
        margin: 15px 10px;

        li {
            margin: 0 10px;

            a {
                &:hover {
                    color: #1989fa;
                }
            }
        }
    }
}

.tabBox {
    margin: 15px 0px;
}


</style>
