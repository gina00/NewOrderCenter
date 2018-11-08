<template>
<section class="serchdetail">
    <el-card class="box-card">
        <div class="rowBox">
            <ul>
                <li class="title">下单时间：</li>
                <li class="totaltext"><a>所有</a></li>
                <li><a>近一周</a></li>
                <li><a>近一月</a></li>
                <li><a>近三月</a></li>
                <li><a>自定义</a></li>
                <li>
                    <el-date-picker v-model="value1" type="date" placeholder="选择日期">
                    </el-date-picker>
                </li>
                <li>—</li>
                <li>
                    <el-date-picker v-model="value1" type="date" placeholder="选择日期">
                    </el-date-picker>
                </li>
            </ul>
        </div>
        <div class="rowBox">
            <ul>
                <li class="title">订单状态：</li>
                <li class="totaltext"><a>所有</a></li>
                <li><a>已确认</a></li>
                <li><a>待支付</a></li>
                <li><a>已支付</a></li>
                <li><a>待审核</a></li>
                <li><a>已审核</a></li>
                <li><a>已分解</a></li>
                <li><a>处理中</a></li>
                <li><a>撤销中</a></li>
                <li><a>已撤销</a></li>
                <li><a>已失败</a></li>
                <li><a>已完成</a></li>
            </ul>
        </div>
        <div class="rowBox">
            <ul>
                <li class="title">下单渠道：</li>
                <li class="totaltext"><a>所有</a></li>
                <li><a>网上营业厅</a></li>
                <li><a>集团客户系统</a></li>
                <li><a>营业厅前台</a></li>
                <li><a>网上商城</a></li>
                <li><a>外呼系统</a></li>
                <li><a>第三方电商</a></li>
                <li><a>掌厅</a></li>
            </ul>
        </div>
    </el-card>
</section>
</template>

<script>
export default {
    data() {
        return {
            pickerOptions1: {
                disabledDate(time) {
                    return time.getTime() > Date.now();
                },
                shortcuts: [{
                        text: "今天",
                        onClick(picker) {
                            picker.$emit("pick", new Date());
                        }
                    },
                    {
                        text: "昨天",
                        onClick(picker) {
                            const date = new Date();
                            date.setTime(date.getTime() - 3600 * 1000 * 24);
                            picker.$emit("pick", date);
                        }
                    },
                    {
                        text: "一周前",
                        onClick(picker) {
                            const date = new Date();
                            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
                            picker.$emit("pick", date);
                        }
                    }
                ]
            },
            value1: "",
            value2: ""
        };
    }
};
</script>

<style lang="scss" scoped>

</style>
