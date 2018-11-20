<template>
<table cellspacing="0" cellpadding="0" class="el-date-table">
                    <tbody>
                        <tr>
                            <th v-for="week in weeks" :key="week">{{week}}</th>
                        </tr>
                        <tr class="el-date-table__row" v-for="dayobject in days" :key="dayobject">
                            <td v-if="dayobject.day.getMonth()+1 != currentMonth" class="other-month">
                                <span>
                                    <span>{{ dayobject.day.getDate()}}</span>
                                </span>
                            </td>
                            <td v-else>
                                <span v-if="dayobject.day.getFullYear() == new Date().getFullYear() && dayobject.day.getMonth() == new Date().getMonth() && dayobject.day.getDate() == new Date().getDate()">
                                    <span>{{dayobject.day.getDate() }}</span>
                                </span>
                                <span v-else>
                                    <span>{{dayobject.day.getDate() }}</span>
                                </span>
                            </td>
                        </tr>
                    </tbody>
                </table>
</template>

<script>

export default {
  data() {
    return {
      weeks: ["日", "一", "二", "三", "四", "五", "六"],
      days: ["1", "2", "3", "4", "5", "6", "7",
      "8", "9", "10", "11", "12", "13", "14",
      "15", "16", "17", "18", "19", "20", "21",
      "22", "23", "24", "25", "26", "27", "28",
      "28", "30" ],
      tableRows: [ [], [], [], [], [], [] ]
    };
  },
   methods: {
      
      
    }
};
</script>

<style lang="scss" scoped>
.el-date-table {
  width: 100%;

  th {
    padding: 5px;
    color: #606266;
    font-weight: 400;
    border-bottom: 1px solid #ebeef5;
  }
}
</style>
