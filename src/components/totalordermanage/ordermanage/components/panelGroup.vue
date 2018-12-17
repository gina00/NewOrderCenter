<template>
<div class="countBox mb20">
    <el-row :gutter="10" class="panel-group">
        <el-col v-for="(item,index) in 6" :key="item" :xs="12" :sm="12" :lg="4" class="card-panel-col">
            <div class="card-panel" :class="[classList[index]+'-panel', {panelhover:titleList[index].hasicon}]" @mouseover="overPanel(index)" @mouseout="hidetipBox()">
                <div class="icon-up" v-if="titleList[index].hasicon" :class="{'panelhover':titleList[index].hasicon}">
                    <i class="fa fa-chevron-down" aria-hidden="true"></i>
                </div>
                <div class="card-panel-description">
                    <count-to class="card-panel-num" :startVal="0" :endVal="430" :duration="2600"></count-to>
                    <div class="card-panel-title">{{titleList[index].name}}</div>
                </div>
            </div>
        </el-col>
    </el-row>
    <template>
    <div v-if="showtip" class="showTipBox">
        <div class="cart" :style="{left:cartleft+'px'}"></div>
        <div class="showtip-ul">
            <li>
                待确认：
                <span>52</span>
            </li>
            <li>
                已确认：
                <span>52</span>
            </li>
            <li>
                待支付：
                <span>52</span>
            </li>
            <li>
                已支付
                <span>52</span>
            </li>
            <li>
                待审核
                <span>52</span>
            </li>
            <li>
                已审核
                <span>52</span>
            </li>
            <li>
                已分解
                <span>52</span>
            </li>
            <li>
                处理中
                <span>52</span>
            </li>
            <li>
                撤销中
                <span>52</span>
            </li>
        </div>
    </div>
    </template>
</div>
</template>

<script>
import CountTo from "vue-count-to";
export default {
    components: {
        CountTo
    },
    data() {
        return {
            showtip: false,
            cartleft: 80,
            panelWidth: [],
            overLeft: 0,
            classList: ['blue', 'bluesky', 'mediumgrey', 'green', 'orange', 'lightgrey',
             'darkgrey', 'subgreen', 'light'],
            titleList:[
                {
                    'name':'订单总量',
                    'hasicon':true
                },
                {
                    'name':'正在执行',
                    'hasicon':false
                },
                {
                    'name':'未执行',
                    'hasicon':true
                },
                {
                    'name':'成功',
                    'hasicon':false
                },
                {
                    'name':'失败',
                    'hasicon':true
                },
                {
                    'name':'已撤销',
                    'hasicon':false
                }
            ]
        };
    },
    methods: {
        overPanel(index) {
            //针对小三角形随鼠标移动而偏移的方法
            //获取每个面板的实际宽度值，
            if(this.titleList[index].hasicon==true){
                this.showtip = !this.showtip;
            }
            var panelArrCol = document.getElementsByClassName("card-panel-col"); //获取面板对象
            for (var i = 0; i < panelArrCol.length; i++) {
                //遍历面板对象
                this.panelWidth.push(panelArrCol[i].offsetWidth); //把面板对象push到面板宽度的数组里存放数据
            }
            this.overLeft = this.panelWidth[index] * index; //不断累积增加left值
            this.cartleft = this.cartleft + this.overLeft; //小三角形移动的left值是缺省+每个面板的宽度
            
        },
        hidetipBox() {
            this.showtip = false;
            this.cartleft = 80; //面板消失后，初始化小三角形的left值
        }
    }
};
</script>

<style lang="scss" scoped>
.panel-group {
    .card-panel-col {
        color: #fff;

        .card-panel {
            padding: 20px;
            border-radius: 2px;
            line-height: 25px;
            font-size: 14px;
            position: relative;
            min-height: 120px;
            box-shadow: 0px 0px 5px #929292;

            .icon-up {
                position: absolute;
                right: 15px;
                bottom: 15px;
            }

            .card-panel-num {
                font-weight: bold;
                font-size: 30px;
            }

            .card-panel-contrast {
                font-size: 12px;
            }
        }
        /*panel背景色*/
        .panelhover:hover {
            cursor: pointer;
            opacity: 0.8;
        }

        .blue-panel {
            background: #0486fe;
        }

        .bluesky-panel {
            background: #04aee6;
        }

        .orange-panel {
            background: #f56c6c;
        }

        .green-panel {
            background: #67c23a;
        }

        .subgreen-panel {
            background: #22c67f;
        }

        .dark-panel {
            background: #000;
        }

        .darkgrey-panel {
            background: #333333;
        }

        .mediumgrey-panel {
            background: #666666;
        }

        .lightgrey-panel {
            background: #999999;
        }

        .light-panel {
            background: #dddddd;
        }
    }
}

.showTipBox {
    padding: 15px;
    background: #e6f1fc;
    border: 1px solid #b5d9fc;
    margin-top: 13px;
    position: relative;
    border-radius: 3px;
    box-shadow: 0 0 5px #ddd;
    font-size: 14px;
    position: absolute;
    width: 100%;
    z-index: 1;

    .cart {
        width: 10px;
        height: 10px;
        position: relative;
        top: -16px;
        &::before {
            content: "";
            width: 10px;
            height: 10px;
            position: absolute;
            border-width: 5px;
            border-style: solid;
            border-bottom: 7px solid #e6f1fc;
            border-top: 7px solid transparent;
            border-left: 7px solid transparent;
            border-right: 7px solid transparent;
            top: -13px;
            z-index: 10;
        }

        &::after {
            content: "";
            width: 10px;
            height: 10px;
            position: absolute;
            border-width: 8px;
            border-style: solid;
            border-bottom: 7px solid #b5d9fc;
            border-top: 7px solid transparent;
            border-left: 7px solid transparent;
            border-right: 7px solid transparent;
            top: -14px;
        }
    }
}

.showtip-ul {
    display: flex;
    justify-content: space-between;

    li {
        margin: 0 15px;
    }
}

.countBox {
    position: relative;
}
</style>
