<template>
<div class="countBox mb20">
    <el-row :gutter="10" class="panel-group">
        <el-col :xs="12" :sm="12" :lg="5" class="card-panel-col">
            <div class="card-panel total-panel">
                <div class="icon-up">
                    <i class="fa fa-chevron-down" aria-hidden="true"></i>
                </div>
                <div class="card-panel-description">
                    <count-to class="card-panel-num" :startVal="0" :endVal="1024" :duration="2600"></count-to>
                    <div class="card-panel-title">订单总量</div>
                </div>
            </div>
        </el-col>
        <el-col :xs="12" :sm="12" :lg="5" class="card-panel-col">
            <div class="card-panel person-panel">
                <div class="icon-up">
                    <i class="fa fa-chevron-down" aria-hidden="true"></i>
                </div>
                <div class="card-panel-description">
                    <count-to class="card-panel-num" :startVal="0" :endVal="430" :duration="2600"></count-to>
                    <div class="card-panel-title">正在执行</div>
                </div>
            </div>
        </el-col>
        <el-col :xs="12" :sm="12" :lg="5" class="card-panel-col">
            <div class="card-panel group-panel">
                <div class="icon-up">
                    <i class="fa fa-chevron-down" aria-hidden="true"></i>
                </div>
                <div class="card-panel-description">
                    <count-to class="card-panel-num" :startVal="0" :endVal="9987" :duration="2600"></count-to>
                    <div class="card-panel-title">未执行</div>
                </div>
            </div>
        </el-col>
        <el-col :xs="12" :sm="12" :lg="5" class="card-panel-col">
            <div class="card-panel execute-panel">
                 <div class="icon-up">
                    <i class="fa fa-chevron-down" aria-hidden="true"></i>
                </div>
                <div class="card-panel-description">
                    <count-to class="card-panel-num" :startVal="0" :endVal="4887" :duration="2600"></count-to>
                    <div class="card-panel-title">成功</div>
                </div>
            </div>
        </el-col>
        <el-col :xs="8" :sm="12" :lg="4" class="card-panel-col">
            <div class="card-panel success-panel">
                 <div class="icon-up">
                    <i class="fa fa-chevron-down" aria-hidden="true"></i>
                </div>
                <div class="card-panel-description">
                    <count-to class="card-panel-num" :startVal="0" :endVal="99" :duration="2600"></count-to>
                    <div class="card-panel-title">失败</div>
                </div>
            </div>
        </el-col>
    </el-row>
</div>
</template>

<script>
import CountTo from 'vue-count-to'
export default {
    components: {
        CountTo
    },

}
</script>

<style lang="scss" scoped>
.panel-group {
    .card-panel-col {
        color: #fff;
        .card-panel{
            padding: 20px;
            border-radius: 2px;
            line-height: 25px;
            font-size: 14px;
            position: relative;
            min-height: 120px;
            box-shadow: 0px 0px 5px #929292;
            .icon-up{
                position: absolute;
                right: 15px;
                bottom:15px;
            }
            .card-panel-num{
                font-weight: bold;
                font-size: 30px;
            }
            .card-panel-contrast{
                font-size: 12px;
            }
        }
        .total-panel {
            background: #0486fe;
        }
        .person-panel{
            background: #04aee6;
        }
        .group-panel{
            background: #485465;
        }
        .execute-panel{
            background: #67c23a;
        }
        .success-panel{
            background: #f56c6c;
        }
    }

}
</style>
