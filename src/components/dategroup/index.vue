<template>
<section class="warringBox">
    <div class="title">本月订单执行告警</div>
    <div class="picker-panel">
        <div class="pick-panel-body">
            <div class="pick-header">
                <button type="button"  @click="pickPre(currentYear,currentMonth)"
                class="el-picker-panel__icon-btn el-date-picker__prev-btn el-icon-arrow-left"></button>
                <span @click="pickYear(currentYear,currentMonth)">
                    <span role="button" class="el-date-picker__header-label">{{ currentYear }}</span>
                <span class="el-date-picker__header-label">{{currentMonth }}月</span>
                </span>
                <button type="button" @click="pickNext(currentYear,currentMonth)"
                class="el-picker-panel__icon-btn el-date-picker__next-btn el-icon-arrow-right">
                </button>
            </div>
            <table class="pick-content">
                <tr class="weekdays">
                    <th v-for="week in weeks" :key="week">{{week}}</th>
                </tr>
                <tr class="days">
                    <td v-for="dayobject in days" :key="dayobject">
                        <span v-if="dayobject.day.getMonth()+1 != currentMonth" class="other-month">{{ dayobject.day.getDate()}}</span>
                        <span v-else>
                                  <span v-if="dayobject.day.getFullYear() == new Date().getFullYear() && dayobject.day.getMonth() == new Date().getMonth() && dayobject.day.getDate() == new Date().getDate()" 
                                  class="active">
                                    {{dayobject.day.getDate() }}</span>
                        <span  v-else>{{dayobject.day.getDate() }}</span>
                        </span>
                    </td>
                </tr>
            </table>
        </div>
    </div>

</section>
</template>

<script>
import dateTab from "./basic/date-table";
export default {
  components: {
    dateTab
  },
  data() {
    return {
      date: new Date(),
      weeks: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
      currentDay: 1,
      currentMonth: 1,
      currentYear: 1970,
      currentWeek: 0,
      days: []
    };
  },
  mounted() {
    this.initData(null);
  },

  methods: {
    initData: function(cur) {
      var leftcount = 0; //存放剩余数量
      var date;

      if (cur) {
        date = new Date(cur);
      } else {
        var now = new Date();
        var d = new Date(this.formatDate(now.getFullYear(), now.getMonth(), 1));
        d.setDate(35);
        date = new Date(this.formatDate(d.getFullYear(), d.getMonth() + 1, 1));
      }
      this.currentDay = date.getDate();
      this.currentYear = date.getFullYear();
      this.currentMonth = date.getMonth() + 1;

      this.currentWeek = date.getDay(); // 1...6,0
      if (this.currentWeek == 0) {
        this.currentWeek = 7;
      }
      var str = this.formatDate(
        this.currentYear,
        this.currentMonth,
        this.currentDay
      );
      this.days.length = 0;
      // 今天是周日，放在第一行第7个位置，前面6个
      //初始化本周
      for (var i = this.currentWeek - 1; i >= 0; i--) {
        var d = new Date(str);
        d.setDate(d.getDate() - i);
        var dayobject = {}; //用一个对象包装Date对象  以便为以后预定功能添加属性
        dayobject.day = d;
        this.days.push(dayobject); //将日期放入data 中的days数组 供页面渲染使用
      }
      //其他周
      for (var i = 1; i <= 35 - this.currentWeek; i++) {
        var d = new Date(str);
        d.setDate(d.getDate() + i);
        var dayobject = {};
        dayobject.day = d;
        this.days.push(dayobject);
      }
    },
    pickPre: function(year, month) {
      // setDate(0); 上月最后一天
      // setDate(-1); 上月倒数第二天
      // setDate(dx) 参数dx为 上月最后一天的前后dx天
      var d = new Date(this.formatDate(year, month, 1));
      d.setDate(0);
      this.initData(this.formatDate(d.getFullYear(), d.getMonth() + 1, 1));
    },
    pickNext: function(year, month) {
      var d = new Date(this.formatDate(year, month, 1));
      d.setDate(35);
      this.initData(this.formatDate(d.getFullYear(), d.getMonth() + 1, 1));
    },
    pickYear: function(year, month) {
      alert(year + "," + month);
    },

    // 返回 类似 2016-01-02 格式的字符串
    formatDate: function(year, month, day) {
      var y = year;
      var m = month;
      if (m < 10) m = "0" + m;
      var d = day;
      if (d < 10) d = "0" + d;
      return y + "-" + m + "-" + d;
    }
  },
  computed: {
    year() {
      return this.date.getFullYear();
    },
    month() {
      return this.date.getMonth();
    }
  }
};
</script>

<style lang="scss" scoped>
.warringBox {
  .title {
    text-align: center;
    line-height: 30px;
    font-size: 14px;
    color: #999;
  }
}

.picker-panel {
  font-size: 12px;
  text-align: center;

  .pick-panel-body {
    .pick-header {
      text-align: center;
    }

    .pick-content {
      line-height: 40px;
      padding: 15px;
    }
  }
}

.weekdays {
  width: 100%;
  display: flex;
  //justify-content: space-between;
  border-bottom: 1px solid #eee;

  th {
    margin: 0 10px;
    width: 42px;
    height: 42px;
    text-align: center;
  }
}

.days {
  color: #333;

  .other-month {
    color: #dcdcdc;
  }

  .active {
    background: #0af;
    color: #fff;
  }
  .samll-circle{
    width: 20px;
    height: 20px;
    line-height: 22px;
    background: #b5d9fd;
    box-shadow: 0 0 1px #e2f0fe;
  }
  .medium-circle{
    width: 32px;
    height: 32px;
    line-height: 32px;
    background: #b5d9fd;
    box-shadow: 0 0 1px #e2f0fe;
  }
  .big-circle{
    width: 44px;
    height: 44px;
    line-height: 44px;
    background: #b5d9fd;
    box-shadow: 0 0 1px #e2f0fe;
  }

  td {
    float: left;
    padding: 0 15px;
    width: 62px;
    height: 49px;
    text-align: center;

    span {
      display: inline-block;
      width: 34px;
      height: 34px;
      border-radius: 50px;
    }
  }
}
</style>
