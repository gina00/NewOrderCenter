<template>
<div :class="className" :style="{height:height,width:width}"></div>
</template>

<script>
import echarts from 'echarts'
require('echarts/theme/infographic') // echarts theme
import {
    debounce
} from '@/utils'

const animationDuration = 1800

export default {
    props: {
        className: {
            type: String,
            default: 'chart'
        },
        width: {
            type: String,
            default: '100%'
        },
        height: {
            type: String,
            default: '350px'
        },
        autoResize: {
            type: Boolean,
            default: true
        },
        chartData: {
            type: Object
        }
    },
    data() {
        return {
            chart: null
        }
    },
    mounted() {
        this.initChart()

    },
    watch: {
        chartData: {
            deep: true,
            handler(val) {
                this.setOptions(val)
            }
        }
    },
    methods: {
        initChart() {
            this.chart = echarts.init(this.$el, 'infographic')
            this.setOptions(this.chartData)
        },
        setOptions({
            expectedData,
            actualData
        } = {}) {
            this.chart.setOption({
                title: {},
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    orient: 'horizontal',
                    right:'20px',
                    data: ['个人业务量', '集团业务量']
                },
                grid: {
                    left: 20,
                    right: 30,
                    bottom: 30,
                    top: 50,
                    containLabel: true
                },
                toolbox: {
                    feature: {
                        saveAsImage: {
                            show:false
                        }
                    }
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: ['2018/01', '2018/02', '2018/03', '2018/04', '2018/05', '2018/06', '2018/07',
                        '2018/08', '2018/09', '2018/10', '2018/11', '2018/12'
                    ],
                    axisLabel: {
                            show: true,
                            textStyle: {
                                color: '#333'
                            }
                        }
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                        name: '个人业务量',
                        type: 'line',
                        stack: '总量',
                        data: actualData,
                        itemStyle : {  
                                normal : {  
                                    color:'#12b3e7',  //圈圈的颜色
                                    lineStyle:{  
                                        color:'#12b3e7'  //线的颜色
                                    }  
                                }  
                            },  
                            animationDuration
                    },{
                        name: '集团业务量',
                        type: 'line',
                        stack: '总量',
                        data: expectedData,
                        itemStyle : {  
                                normal : {  
                                    color:'#f67070',  //圈圈的颜色
                                    lineStyle:{  
                                        color:'#f67070'  //线的颜色
                                    }  
                                }  
                            },
                            animationDuration
                    }
                ]
            })
        },

    }
}
</script>
