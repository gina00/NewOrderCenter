<template>
<div :class="className" :style="{height:height,width:width}"></div>
</template>

<script>
import echarts from 'echarts'
require('echarts/theme/infographic') // echarts theme
import {
    debounce
} from '@/utils'

const animationDuration = 6000

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
            default: '300px'
        }
    },
    data() {
        return {
            chart: null
        }
    },
    mounted() {
        this.initChart()
        this.__resizeHanlder = debounce(() => {
            if (this.chart) {
                this.chart.resize()
            }
        }, 100)
        window.addEventListener('resize', this.__resizeHanlder)
    },
    beforeDestroy() {
        if (!this.chart) {
            return
        }
        window.removeEventListener('resize', this.__resizeHanlder)
        this.chart.dispose()
        this.chart = null
    },
    methods: {
        initChart() {
            this.chart = echarts.init(this.$el, 'infographic')

            this.chart.setOption({
                tooltip: {
                    trigger: 'axis',
                    axisPointer: { // 坐标轴指示器，坐标轴触发有效
                        type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                    }
                },
                legend: {
                    orient: 'horizontal',
                    left:'20px',
                    data: ['IBOP', '销售中心', '政企订单中心', '渠道运营平台']
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: [{
                    type: 'category',
                    data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
                    axisLabel: {
                            show: true,
                            textStyle: {
                                color: '#333'
                            }
                        }
                }],
                yAxis: [{
                    type: 'value'
                }],
                series: [{
                        name: 'IBOP',
                        type: 'bar',
                        data: [320, 332, 301, 334, 390, 330, 320],
                        itemStyle: {
                            normal: {
                                color: '#04aee6'
                            }
                        },
                        animationDuration
                    },
                    {
                        name: '销售中心',
                        type: 'bar',
                        stack: '广告',
                        data: [720, 432, 801, 934, 690, 1230, 1210],
                        itemStyle: {
                            normal: {
                                color: '#f56c6c'
                            }
                        },
                        animationDuration
                    },
                    {
                        name: '政企订单中心',
                        type: 'bar',
                        data: [862, 1018, 964, 1026, 1679, 1600, 1570],
                        itemStyle: {
                            normal: {
                                color: '#a3fb76'
                            }
                        },
                        animationDuration
                    },
                    {
                        name: '渠道运营平台',
                        type: 'bar',
                        data: [620, 732, 701, 734, 1090, 1130, 1120],
                        itemStyle: {
                            normal: {
                                color: '#22c67f'
                            }
                        },
                        animationDuration
                    }
                ]
            })
        }
    }
}
</script>
