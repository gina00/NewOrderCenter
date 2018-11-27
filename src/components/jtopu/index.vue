<template>
<section>
    <canvas width="910" height="600px" id="canvas"></canvas>
</section>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {
    // this.initJtopu();
  },
  methods: {
    initJtopu: function() {
      var canvas = document.getElementById("canvas");
      var stage = new JTopo.Stage(canvas); // 创建一个舞台对象
      var scene = new JTopo.Scene(stage); // 创建一个场景对象

      function baseNode(x, y, w, h, text) {
        var node = new JTopo.Node(text);
        node.textPosition = "Middle_Center";
        node.textOffsetY = 2;
        node.font = "14px 微软雅黑"; // 字体
        node.fontColor = "51,51,51";
        node.borderRadius = 5; // 圆角
        node.borderWidth = 1; // 边框的宽度
        node.showSelected = false;
        node.fillColor = "230,241,252";
        node.borderColor = "163,208,253"; //边框颜色
        node.setLocation(x, y);
        node.setSize(w, h);
        scene.add(node);
        return node;
      }
      function newLink(nodeA, nodeZ, text, dashedPattern,borderColor) {
        var link = new JTopo.Link(nodeA, nodeZ, text);
        link.lineWidth = 1; // 线宽
        link.arrowsRadius = 10;
        link.dashedPattern = dashedPattern; // 虚线
        link.bundleOffset = 20; // 折线拐角处的长度
        link.bundleGap = 20; // 线条之间的间隔
        link.textOffsetY = 0; // 文本偏移量（向下3个像素）
        link.strokeColor = borderColor;
        scene.add(link);
        return link;
      }
      function newFoldLink(nodeA, nodeZ, text, direction, dashedPattern) {
        var link = new JTopo.FoldLink(nodeA, nodeZ, text);
        link.direction = direction || "horizontal";
        link.arrowsRadius = 15; //箭头大小
        link.lineWidth = 3; // 线宽
        link.bundleOffset = 20; // 折线拐角处的长度
        link.bundleGap = 20; // 线条之间的间隔
        link.textOffsetY = 3; // 文本偏移量（向下3个像素）
        link.strokeColor = JTopo.util.randomColor(); // 线条颜色随机
        link.dashedPattern = dashedPattern;
        scene.add(link);
        return link;
      }
      //第一个流程销售中心与订单中心的节点与连线
      var from = baseNode(2, 60, 150, 100, "销售中心");
      var to = baseNode(300, 60, 180, 160);
      var link = newLink(from, to, "Link","34,198,127");
      var link = newLink(to, from, "Link",3,"0,0,0");
      

      //
      var from = baseNode(100, 200, 150, 100);
      var to = baseNode(200, 300, 180, 160);
      var link = newFoldLink(from, to, "FoldLink");
      var link = newFoldLink(to, from, "FoldLink", "vertical", 3);
    }
  }
};
</script>

<style>
</style>
