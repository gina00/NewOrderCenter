<template>
<section>
    <div class="ordertable">
        <el-card>
            <el-row class="buttonBox">
                <el-col :span="4">
                    <ul class="button-ul">
                        <li><a>全选</a></li>
                        <li><a>取消全选</a></li>
                    </ul>
                </el-col>
                <el-col :span="9">
                    <ul class="button-ul">
                        <li><a>打印</a></li>
                        <li><a>审核</a></li>
                        <li><a>撤单</a></li>
                        <li><a class="disable">回收旧货</a></li>
                        <li><a class="disable">审核通过</a></li>
                        <li><a class="disable">确认付款</a></li>
                    </ul>
                </el-col>
                <el-col :span="8">
                    <div class="refreshBox">
                        <a>
                            <i class="fa fa-refresh textsty" aria-hidden="true"></i>
                            <span class="textsty">刷新</span>
                        </a>
                    </div>
                </el-col>
            </el-row>
            <el-table ref="multipleTable" :data="tableData3" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
                <el-table-column type="selection" width="55">
                </el-table-column>
                <el-table-column prop="ID" label="订单编号" width="180">
                </el-table-column>
                <el-table-column prop="numbertype" label="号码类型" width="120">
                </el-table-column>
                <el-table-column prop="service" label="服务号码" show-overflow-tooltip>
                </el-table-column>
                <el-table-column prop="date" label="受理时间" show-overflow-tooltip>
                </el-table-column>
                <el-table-column prop="name" label="业务名称" show-overflow-tooltip>
                </el-table-column>
                <el-table-column prop="pay" label="实付款(元)" show-overflow-tooltip>
                </el-table-column>
                <el-table-column prop="paymethod " label="支付方式" show-overflow-tooltip>
                </el-table-column>
                <el-table-column prop="status" label="状态" show-overflow-tooltip>
                </el-table-column>
            </el-table>
            <div class="paginBox">
                <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage4" :page-sizes="[100, 200, 300, 400]" :page-size="100" layout="total, sizes, prev, pager, next, jumper" :total="400">
                </el-pagination>
            </div>
        </el-card>
    </div>
</section>
</template>

<script>
export default {
    data() {
        return {
            currentPage4: 4,
            tableData3: [{
                ID: '20180900093301',
                numbertype: '个人',
                service: '588793220',
                date: '2018-10-09',
                name: '改号',
                pay: '10.00',
                paymethod: '现金支付',
                status: '待审核',
            }],
            multipleSelection: []
        }
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
        }
    }
};
</script>

<style lang="scss" scoped>
.buttonBox {
    display: flex;
    margin-bottom: 20px;

    .button-ul {
        float: left;
        display: flex;
        background: #e6f1fc;
        border: 1px solid #b5d9fc;
        border-radius: 5px;
        margin-right: 20px;

        li {
            margin: 10px 0;
            border-right: 2px solid #a3d0fd;

            a {
                padding: 10px;

                &.disable {
                    color: #999;
                    cursor: not-allowed;
                }
            }

            &:last-child {
                border-right: none;
            }
        }
    }

    .refreshBox {
        display: flex;
        margin: 10px 0;

        .textsty {
            color: #67c23a;
        }
    }
}
</style>
