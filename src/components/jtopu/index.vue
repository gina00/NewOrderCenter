<template>
<section>
    <canvas width="910" height="600px" id="canvas"></canvas>
</section>
</template>

<script>
// import JTopo from '../../../static/js/jtopo-0.4.8-min.js'
export default {
    data() {
        return {
          
        };
    },
    mounted(){
        this.initJtopu();
    },
    methods:{
        initJtopu:function(){
           var canvas = document.getElementById('canvas'); 
            var stage = new JTopo.Stage(canvas); // 创建一个舞台对象
            var scene = new JTopo.Scene(stage); // 创建一个场景对象
            
            var node = new JTopo.Node("Hello");    // 创建一个节点
            node.setLocation(300,200);    // 设置节点坐标                    
            scene.add(node); // 放入到场景中
        }
    }

};
</script>

<style>
</style>
