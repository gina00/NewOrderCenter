<template>
<section>
    <canvas width="1090" height="400px" id="canvas"></canvas>
</section>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {
    this.initJtopu();
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
      function solidNode(x, y, w, h, text) {
        var node = new JTopo.Node(text);
        node.textPosition = "Middle_Center";
        node.textOffsetY = 2;
        node.font = "14px 微软雅黑"; // 字体
        node.fontColor = "255,255,255";
        node.borderRadius = 5; // 圆角
        node.borderWidth = 1; // 边框的宽度
        node.showSelected = false;
        node.fillColor = "25,137,250";
        node.zIndex=20;
        node.borderColor = "163,208,253"; //边框颜色
        node.setLocation(x, y);
        node.setSize(w, h);
        scene.add(node);
        return node;
      }

      function textNode(x, y, text) {
        var textNode = new JTopo.TextNode(text);
        textNode.font = "14px 微软雅黑";
        textNode.fontColor = "51,51,51";
        textNode.showSelected = false;
        textNode.setLocation(x, y);
        scene.add(textNode);
        return textNode;
      }
      function ordergroupNode(x, y, w, h, text) {
        var ordergroupNode = new JTopo.Node(text);
        ordergroupNode.textPosition = "Middle_Center";
        ordergroupNode.textOffsetY = 2;
        ordergroupNode.font = "14px 微软雅黑"; // 字体
        ordergroupNode.fontColor = "51,51,51";
        ordergroupNode.borderRadius = 5; // 圆角
        ordergroupNode.borderWidth = 1; // 边框的宽度
        ordergroupNode.showSelected = false;
        ordergroupNode.fillColor = "230,241,252";
        ordergroupNode.borderColor = "230,241,252"; //边框颜色
        ordergroupNode.setLocation(x, y);
        ordergroupNode.setSize(w, h);
        scene.add(ordergroupNode);
        return ordergroupNode;
      }
      function newLink(nodeA, nodeZ, text, dashedPattern, borderColor) {
        var link = new JTopo.Link(nodeA, nodeZ, text);
        link.lineWidth = 1; // 线宽
        link.arrowsRadius = 10;
        link.dashedPattern = dashedPattern; // 虚线
        link.bundleOffset = 0; // 折线拐角处的长度
        link.bundleGap = 0; // 线条之间的间隔
        link.zIndex=16;
        link.shadow = "false"; 
        link.textOffsetY = 0; // 文本偏移量（向下3个像素）
        link.strokeColor = "34,198,127";
        scene.add(link);
        return link;
      }
      function newFoldLink(
        nodeA,
        nodeZ,
        text,
        direction,
        dashedPattern,
        borderColor
      ) {
        var link = new JTopo.FoldLink(nodeA, nodeZ, text);
        link.direction = direction || "horizontal";
        link.arrowsRadius = 10; //箭头大小
        link.lineWidth = 1; // 线宽
        link.bundleOffset = 0; // 折线拐角处的长度
        link.bundleGap = 0; // 线条之间的间隔
        link.textOffsetY = 3; // 文本偏移量（向下3个像素）
        link.strokeColor = "34,198,127"; // 线条颜色随机
        link.dashedPattern = dashedPattern;
        scene.add(link);
        return link;
      }
      function container(x, y, w, h, text) {
        var gridLayout = JTopo.layout.GridLayout(6, 1);
        var container = new JTopo.Container("");
        container.layout = gridLayout;
        container.textPosition = "Middle_Center";
        container.font = "18pt 微软雅黑";
        container.fontColor = "51,51,51";
        container.borderRadius = 5; // 圆角
        container.borderWidth = 1; // 边框的宽度
        container.showSelected = false;
        container.zIndex = 15;
        container.alpha = 1;
        container.padding=20;
        container.fillColor = "230,241,252";
        container.borderColor = "163,208,253"; //边框颜色
        container.setLocation(x, y);
        container.setSize(w, h);
        scene.add(container);

        var arr = [
          "订单中心",
          "订单：订单流水",
          "子订单：专线勘察",
          "订单行：专线勘察",
          "工单1：专线勘察派发",
          "工单2：专线勘察派发"
        ];
        var conX = 200;
        var conY = 30;
        for (var i = 0; i < arr.length; i++) {
          var node = ordergroupNode(conX,conY,200,20,arr[i]);
          node.textPosition = "Middle_Center";
          //conX = conX - 10; 
          conY = conY + 40;
          node.setLocation(conX, conY);
          node.zIndex=20;
          scene.add(node);
          container.add(node);
        }
        scene.add(newLink(container.childs[1], container.childs[2]));
        scene.add(newLink(container.childs[2], container.childs[3]));
        scene.add(newLink(container.childs[3], container.childs[4]));
        scene.add(newLink(container.childs[4], container.childs[5]));
        return container;
      }

      //第一个流程销售中心与订单中心的节点与连线
      var from = baseNode(2, 120, 150, 100, "销售中心");
      //var orderto2 = baseNode(200, 20, 240, 260); //订单中心节点
      var orderto = container(200, 60, 240, 260); //订单中心节点
      var link = newFoldLink(from, orderto, "Link", "1");
      var link = newFoldLink(orderto, from, "", "vertical", 5);
      
      //ios节点
      var iosTo = solidNode(490, 120, 100, 100, "IOS");
      var link = newFoldLink(orderto, iosTo, "Link", "1");
      var link = newFoldLink(iosTo, orderto, "", "vertical", 5);

      //服务开通中心节点
      var serverTo = solidNode(690, 120, 100, 100, "服务开通中心");
      var link = newLink(iosTo, serverTo);

      //业务资源系统节点
      var sourceTo = baseNode(880, 120, 120, 100, "服务开通中心");
      var link = newLink(serverTo, sourceTo);

      //UIG 节点
      var uigTo = solidNode(490, 280, 100, 100, "UIG");
      var link = newLink(uigTo, iosTo,"Link", 3);
      var link = newFoldLink(serverTo, uigTo, "", "vertical", 5);
    }
  }
};
</script>

<style>
#canvas{
  margin: 0 20px;
}
</style>
