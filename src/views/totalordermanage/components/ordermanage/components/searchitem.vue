<template>
<section class="serchdetail" v-if="showValue">
    <el-button class="closebtn" type="danger" size="mini" icon="el-icon-close" circle  @click="hasClick(showValue)"></el-button>
    <el-card class="box-card" shadow="never">
        <div class="">
            <el-row :gutter="0" class="buttonBox">
                <el-col :xs="12" :sm="12" :lg="7">
                    <ul>
                        <li class="title">下单时间：</li>
                        <li class="totaltext"><a>所有</a></li>
                        <li><a>近一周</a></li>
                        <li><a>近一月</a></li>
                        <li><a>近三月</a></li>
                    </ul>
                </el-col>
                <el-col :xs="12" :sm="12" :lg="12">
                    <ul>
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
                </el-col>
                <el-col :xs="12" :sm="12" :lg="5">
                    <ul>
                        <li><a>地市</a></li>
                        <li>
                            <el-select v-model="nomalcityvalue" placeholder="请选择">
                                <el-option v-for="item in city" :key="item.value" :label="item.label" :value="item.label">
                                </el-option>
                            </el-select>
                        </li>
                    </ul>
                </el-col>
            </el-row>
        </div>
        <div class="">
            <el-row :gutter="0" class="buttonBox">
                <el-col :xs="12" :sm="12" :lg="6">
                    <ul>
                        <li class="title">订单状态：</li>
                        <li>
                            <el-select v-model="orderstatusvalue" placeholder="所有">
                                <el-option v-for="item in orderstatus" :key="item.value" :label="item.label" :value="item.label">
                                </el-option>
                            </el-select>
                        </li>
                    </ul>
                </el-col>
                <el-col :xs="12" :sm="12" :lg="6">
                    <ul>
                        <li class="title">订单类型：</li>
                        <li>
                            <el-select v-model="ordertypevalue" placeholder="所有">
                                <el-option v-for="item in ordertype" :key="item.value" :label="item.label" :value="item.label">
                                </el-option>
                            </el-select>
                        </li>
                    </ul>
                </el-col>
                <el-col :xs="12" :sm="12" :lg="6">
                    <ul>
                        <li class="title">受理渠道：</li>
                        <li>
                            <el-select v-model="channelvalue" placeholder="所有">
                                <el-option v-for="item in channel" :key="item.value" :label="item.label" :value="item.label">
                                </el-option>
                            </el-select>
                        </li>
                    </ul>
                </el-col>
                <el-col :xs="12" :sm="12" :lg="6">
                    <ul>
                        <li class="title">受理对象类型：</li>
                        <li>
                            <el-select v-model="objecttypevalue" placeholder="所有">
                                <el-option v-for="item in objecttype" :key="item.value" :label="item.label" :value="item.label">
                                </el-option>
                            </el-select>
                        </li>
                    </ul>
                </el-col>
            </el-row>
        </div>
    </el-card>
</section>
</template>

<script>
export default {
    props:[
        'showValue'
    ],
    data() {
        return {
            isshow: true,
            nomalcityvalue:'福州',
            orderstatusvalue:'',
            ordertypevalue:'',
            channelvalue:'',
            objecttypevalue:'',
            city: [{
                label: '福州'
            }, {
                label: '厦门'
            }, {
                
                label: '深圳'
            }, {
                
                label: '北京'
            }, {
                label: '上海'
            }],
            orderstatus: [{
                label: '成功'
            }, {
                label: '失败'
            }, {
                
                label: '未完成'
            }, {
                
                label: '初始化'
            }, {
               
                label: '执行中'
            }],
            ordertype: [{
                label: '个人业务'
            }, {
                label: '集团业务'
            }],
            channel: [{
                label: '网上销售'
            }, {
                label: '现场销售'
            }],
            objecttype: [{
                label: '企业'
            }, {
                label: '个人'
            }, {
                
                label: '商品'
            }],
            
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
    },
     methods: {
        hasClick(isshow){
            this.$emit('isshowtools',isshow);
        }
    }
};
</script>

<style lang="scss" scoped>
.box-card {
    position: relative;
}
.buttonBox{
    .el-select{
        width: 150px;
    }
}
</style>
