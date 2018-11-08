<template>
<section>
    <div class="stepBox">
        <div class="steporder">
            <i class="el-icon-circle-check-outline"></i>
            <span>下单：</span>
            <span class="timeBox">2018/08/28 12:01:43</span>
        </div>
        <div class="steporder">
            <i class="el-icon-arrow-right"></i>
        </div>
        <div class="steporder">
            <i class="el-icon-circle-check-outline"></i>
            <span>竣工：</span>
            <span class="timeBox">2018/09/28 12:01:43</span>
        </div>
    </div>
    <el-card>
        <base-infor></base-infor>
        <customer-infor></customer-infor>
        <trading-infor></trading-infor>
        <invoice-infor></invoice-infor>
        <orderdetail-infor></orderdetail-infor>
    </el-card>
</section>
</template>

<script>
import baseInfor from './inforitem/baseinfor'
import customerInfor from './inforitem/customerinfor'
import tradingInfor from './inforitem/tradinginfor'
import invoiceInfor from './inforitem/invoiceinfor'
import orderdetailInfor from './inforitem/orderdetailinfor'
export default {
    components:{
        'base-infor':baseInfor,
        'customer-infor':customerInfor,
        'trading-infor':tradingInfor,
        'invoice-infor':invoiceInfor,
        'orderdetail-infor':orderdetailInfor
    }
}
</script>

<style lang="scss" scoped>
$textcolor:#5cb87a;

.stepBox {
    font-size: 18px;
    display: flex;
    background: #fff;
    padding: 20px;
    justify-content: center;
    margin-bottom: 20px;
    .steporder {
        color: $textcolor;
        padding: 0 20px;
        .timeBox {
            font-size: 14px;
            color: #666;
        }
    }
}
</style>
