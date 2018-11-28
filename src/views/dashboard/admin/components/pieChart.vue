<template>
<div :class="className" :style="{height:height,width:width}"></div>
</template>

<script>
import echarts from 'echarts'
require('echarts/theme/macarons') // echarts theme
import {
    debounce
} from '@/utils'

const animationDuration = 2600
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
            this.chart = echarts.init(this.$el, 'macarons')

            this.chart.setOption({
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b}: {c} ({d}%)"
                },
                legend: {
                    orient: 'horizontal',
                    left :'20px',
                    data: ['失败', '成功', '运行', '未运行']
                },
                series: [{
                    name: '状态：',
                    type: 'pie',
                    radius: ['50%', '70%'],
                    avoidLabelOverlap: false,
                    label: {
                        normal: {
                            show: false,
                            position: 'center'
                        },
                        emphasis: {
                            show: true,
                            textStyle: {
                                fontSize: '30',
                                fontWeight: 'bold'
                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data: [{
                            value: 335,
                            name: '失败',
                            itemStyle: {
                            normal: {
                                color: '#f56c6c'
                            }
                        },
                            
                        },
                        {
                            value: 310,
                            name: '成功',
                            itemStyle: {
                            normal: {
                                color: '#04aee6'
                            }
                            }
                        },
                        {
                            value: 234,
                            name: '运行',
                            itemStyle: {
                            normal: {
                                color: '#50e3c2'
                            }
                            }
                        },
                        {
                            value: 135,
                            name: '未运行',
                            itemStyle: {
                            normal: {
                                color: '#76ddfb'
                            }
                            }
                        }
                    ],
                    animationDuration
                }]
            })
        }
    }
};
</script>

<style scoped>

</style>
