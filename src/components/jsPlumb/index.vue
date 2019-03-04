<template>
  <div class="flowchartBox" id="canvas">
    <div id="order-sale" class="item" style="left:-20px;">
      <span>销售中心</span>
    </div>
    <div id="order-center" class="item" style="left:200px;">
      <div class="ordercenter-title">订单中心</div>
      <ul class="orderlist">
        <li id="order-center1">订单：订单流水</li>
        <li id="order-center2">子订单：专线勘察</li>
        <li id="order-center3">订单行：专线勘察</li>
        <li id="order-center4">工单1：专线勘察派发</li>
        <li id="order-center5">工单2：专线勘察派发</li>
      </ul>
    </div>
    <div id="order-ios" class="item fillbg" style="left:500px;">
      <span>IOS</span>
    </div>
    <div id="order-server" class="item fillbg" style="left:680px;">
      <span>服务开通中心</span>
    </div>
    <div id="order-uig" class="item fillbg" style="left:500px;top:200px;">
      <span>UIG</span>
    </div>
    <div id="order-source" class="item" style="left:920px;">
      <span>业务资源系统</span>
    </div>
    <div id="order-adrop" class="item fillbg" style="left:500px;top:350px;">
      <span>ADROP</span>
    </div>
    <div id="order-adrap" class="item fillbg" style="left:500px;top:500px;">
      <span>ADRAP</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {
    this.jsPlumb();
  },
  methods: {
    jsPlumb() {
      jsPlumb.ready(function() {
        var instance = jsPlumb.getInstance({
          // 拖动配置
          DragOptions: {
            cursor: "pointer",
            zIndex: 2000
          },
          // the overlays to decorate each connection with.  note that the label overlay uses a function to generate the label text; in this
          // case it returns the 'labelText' member that we set on each connection in the 'init' method below.
          ConnectionOverlays: [
            [
              "Arrow",
              {
                location: 1,
                width: 10,
                length: 10
              }
            ],
            [
              "Label",
              {
                location: 0.1,
                id: "label",
                cssClass: "aLabel"
              }
            ]
          ],
          Container: "canvas"
        });
        var basicType = {
          connector: "StateMachine",
          paintStyle: {
            stroke: "#28c3ba",
            strokeWidth: 3
          },
          hoverPaintStyle: {
            stroke: "#24ba7a"
          }
        };
        instance.registerConnectionType("basic", basicType);
        // 连线的样式
        var connectorPaintStyle = {
            //以下注释为1.7.10版本属性名
            // lineWidth: 2,
            // strokeStyle: "#61B7CF",
            // joinstyle: "round",
            // outlineColor: "white",
            // outlineWidth: 2
            // 此为最新版本定义的属性名
            stroke: "#61B7CF",
            strokeWidth: 3,
            outlineStroke: "transparent"
          },
          // 连线hover样式
          connectorHoverStyle = {
            // lineWidth: 3,
            // strokeStyle: "#216477",
            // outlineWidth: 2,
            // outlineColor: "#216477"
            stroke: "#216477",
            strokeWidth: 3
          },
          endpointHoverStyle = {
            // fillStyle: "#216477",
            // strokeStyle: "#216477"
            fill: "#216477",
            stroke: "#216477"
          },
          // 源端点的定义,原本是蓝色的小端点，现设置为透明，符合项目UI设计，如有修改，可自行设置填充颜色，如注释
          sourceEndpoint = {
            endpoint: "Dot",
            paintStyle: {
              fill: "transparent",
              // strokeStyle: "#216477",
              //fillStyle: "transparent",
              radius: 3,
              lineWidth: 3
            },
            isSource: true,
            maxConnections: -1,
            //连线类型
            connector: [
              "Flowchart",
              {
                stub: [0, 20],
                gap: 0,
                cornerRadius: 5,
                alwaysRespectStubs: true
              }
            ],
            connectorStyle: connectorPaintStyle,
            hoverPaintStyle: endpointHoverStyle,
            connectorHoverStyle: connectorHoverStyle,
            dragOptions: {},
            overlays: [
              [
                "Label",
                {
                  location: [0.5, 1.5],
                  label: "",
                  cssClass: "endpointSourceLabel"
                }
              ]
            ]
          },
          // 目标端点的定义(将在用户拖动连接时出现)
          targetEndpoint = {
            endpoint: "Dot",
            paintStyle: {
              fillStyle: "#7AB02C",
              //fillStyle: "#7AB02C",
              radius: 3
            },
            hoverPaintStyle: endpointHoverStyle,
            maxConnections: -1,
            dropOptions: {
              hoverClass: "hover",
              activeClass: "active"
            },
            isTarget: true,
            overlays: [
              [
                "Label",
                {
                  location: [0.5, -0.5],
                  label: "",
                  cssClass: "endpointTargetLabel"
                }
              ]
            ]
          },
          init = function(connection) {
            connection
              .getOverlay("label")
              .setLabel(
                connection.sourceId.substring(15) +
                  "" +
                  connection.targetId.substring(15)
              );
          };
        var _addEndpoints = function(toId, sourceAnchors, targetAnchors) {
          for (var i = 0; i < sourceAnchors.length; i++) {
            var sourceUUID = toId + sourceAnchors[i];
            instance.addEndpoint("order-" + toId, sourceEndpoint, {
              anchor: sourceAnchors[i],
              uuid: sourceUUID
            });
          }
          for (var j = 0; j < targetAnchors.length; j++) {
            var targetUUID = toId + targetAnchors[j];
            instance.addEndpoint("order-" + toId, targetEndpoint, {
              anchor: targetAnchors[j],
              uuid: targetUUID
            });
          }
        };
        // 绘图并初始化
        instance.batch(function() {
          _addEndpoints("sale", ["RightMiddle"], []);
          _addEndpoints("center", ["RightMiddle"], ["LeftMiddle"]);
          _addEndpoints("center1", ["BottomCenter"], []);
          _addEndpoints("center2", ["BottomCenter"], ["TopCenter"]);
          _addEndpoints("center3", ["BottomCenter"], ["TopCenter"]);
          _addEndpoints("center4", ["BottomCenter"], ["TopCenter"]);
          _addEndpoints("center5", [], ["TopCenter"]);
          _addEndpoints("ios", ["RightMiddle"], ["LeftMiddle", "BottomCenter"]);
          _addEndpoints(
            "server",
            ["RightMiddle", "BottomCenter"],
            ["LeftMiddle"]
          );
          _addEndpoints("source", [], ["LeftMiddle"]);
          _addEndpoints("uig", ["TopCenter"], ["LeftMiddle","RightMiddle"]);
          _addEndpoints("adrop", ["TopCenter"], ["LeftMiddle", "RightMiddle"]);
          _addEndpoints("adrap", ["TopCenter"], ["LeftMiddle", "RightMiddle"]);
          //以上修改后，此句做对照对比
          //_addEndpoints("Window1", ["LeftMiddle", "RightMiddle"], ["TopCenter", "BottomCenter"]);

          // listen for new connections; initialise them the same way we initialise the connections at startup.
          instance.bind("connection", function(connInfo, originalEvent) {
            init(connInfo.connection);
          });

          // 使所有 item 项目可拖动
          instance.draggable(jsPlumb.getSelector(".flowchartBox .item"), {
            grid: [20, 20]
          });
          // THIS DEMO ONLY USES getSelector FOR CONVENIENCE. Use your library's appropriate selector
          // method, or document.querySelectorAll:
          //jsPlumb.draggable(document.querySelectorAll(".window"), { grid: [20, 20] });

          // connect a few up
          //instance.connect({ source: "order-sale", target: "order-center" });
          instance.connect({
            uuids: ["saleRightMiddle", "centerLeftMiddle"],
            editable: true
          });
          instance.connect({
            uuids: ["center1BottomCenter", "center2TopCenter"],
            editable: true
          });
          instance.connect({
            uuids: ["center2BottomCenter", "center3TopCenter"],
            editable: true
          });
          instance.connect({
            uuids: ["center3BottomCenter", "center4TopCenter"],
            editable: true
          });
          instance.connect({
            uuids: ["center4BottomCenter", "center5TopCenter"],
            editable: true
          });
          instance.connect({
            uuids: ["centerRightMiddle", "iosLeftMiddle"],
            editable: true
          });
          instance.connect({
            uuids: ["iosRightMiddle", "serverLeftMiddle"],
            editable: true
          });
          instance.connect({
            uuids: ["serverRightMiddle", "sourceLeftMiddle"],
            editable: true
          });
          instance.connect({
            uuids: ["serverBottomCenter", "uigRightMiddle"],
            editable: true
          });
          instance.connect({
            uuids: ["uigTopCenter", "iosBottomCenter"],
            editable: true
          });
          instance.connect({
            uuids: ["centerRightMiddle", "uigLeftMiddle"],
            editable: true
          });
          instance.connect({
            uuids: ["centerRightMiddle", "adropLeftMiddle"],
            editable: true
          });
          instance.connect({
            uuids: ["centerRightMiddle", "adrapLeftMiddle"],
            editable: true
          });

          //
          // listen for clicks on connections, and offer to delete connections on click.
          //
          instance.bind("click", function(conn, originalEvent) {
            // if (confirm("Delete connection from " + conn.sourceId + " to " + conn.targetId + "?"))
            //   instance.detach(conn);
            conn.toggleType("basic");
          });

          instance.bind("connectionDrag", function(connection) {
            console.log(
              "connection " +
                connection.id +
                " is being dragged. suspendedElement is ",
              connection.suspendedElement,
              " of type ",
              connection.suspendedElementType
            );
          });

          instance.bind("connectionDragStop", function(connection) {
            console.log("connection " + connection.id + " was dragged");
          });

          instance.bind("connectionMoved", function(params) {
            console.log("connection " + params.connection.id + " was moved");
          });
        });
        jsPlumb.fire("jsPlumbDemoLoaded", instance);
      });
    }
  }
};
</script>

<style scoped>
#canvas {
  position: relative;
  min-height: 800px;
}

.item {
  position: absolute;
  padding: 20px 40px;
  text-align: center;
  border-radius: 5px;
  border: 1px solid #b5d9fd;
  font-size: 14px;
  min-height: 60px;
  background-color: #e6f1fc;
  vertical-align: middle;
  cursor: pointer;
}

.item span {
  display: inline-block;
  line-height: 60px;
}

.ordercenter-title {
  margin-bottom: 10px;
}

.orderlist li {
  padding: 10px 0;
  margin: 20px 0;
}

.flowchart-demo .active {
  border: 1px dotted green;
}

.flowchart-demo .hover {
  border: 1px dotted red;
}

.item.fillbg {
  color: #fff;
  background: #1989fa;
}

/**/

.container {
  width: 100%;
  height: 2px;
  box-sizing: border-box;
}

.line {
  float: left;
  padding: 0;
  margin: 0;
  width: 2px;
  height: 2px;
  background: red;
  -webkit-animation: test 3s linear 0s 1 alternate;
  -moz-animation: test 3s linear 0s 1 alternate;
  -o-animation: test 3s linear 0s 1 alternate;
  animation: test 3s linear 0s 1 alternate;
  -webkit-animation-fill-mode: forwards;
  -moz-animation-fill-mode: forwards;
  -o-animation-fill-mode: forwards;
  animation-fill-mode: forwards;
}

.line:last-child {
  border-right: 1px solid blueviolet;
}
</style>
