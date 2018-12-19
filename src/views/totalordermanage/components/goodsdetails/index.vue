<template>
<section>
    <el-card class="baseinfor-card">
        <section class="title-infor">
            <div class="titleBox">
                <span class="title-text">{{titleText}}</span>
            </div>
            <div class="rowBox">
                <el-row>
                    <el-col :span="8">
                        <div class="grid-content bg-purple">关联订单：201809018800</div>
                    </el-col>
                    <el-col :span="8">
                        <div class="grid-content bg-purple-light">关联子订单：10033922039322</div>
                    </el-col>
                    <el-col :span="8">
                        <div class="grid-content bg-purple">总金额：0</div>
                    </el-col>
                </el-row>
            </div>
        </section>
        <section class="title-infor">
            <div class="titleBox">
                <span class="title-text">{{goodsText}}</span>
            </div>
            <div class="rowBox">
                 <el-row>
                    <el-col :span="8">
                        <div class="grid-content bg-purple">商品名称：集团专线开通变更</div>
                    </el-col>
                    <el-col :span="8">
                        <div class="grid-content bg-purple-light">商品流水：104339220322</div>
                    </el-col>
                </el-row>
            </div>
        </section>
       <section class="title-infor">
            <div class="titleBox">
                <span class="title-text">{{publicText}}</span>
            </div>
            <div class="rowBox">
                <el-row>
                    <el-col :span="8">
                        <div class="grid-content bg-purple">BSS工单号：SALE18290394802</div>
                    </el-col>
                    <el-col :span="8">
                        <div class="grid-content bg-purple-light">关联BSS资源勘查工单号：SALE182903956</div>
                    </el-col>
                    <el-col :span="8">
                        <div class="grid-content bg-purple-light">集团客户名称：-</div>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="8">
                        <div class="grid-content bg-purple">集团客户编号：5900221344</div>
                    </el-col>
                    <el-col :span="8">
                        <div class="grid-content bg-purple-light">集团所属地市：福州</div>
                    </el-col>
                    <el-col :span="8">
                        <div class="grid-content bg-purple-light">集团所属区县：110</div>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="8">
                        <div class="grid-content bg-purple">申请产品名称:1</div>
                    </el-col>
                    <el-col :span="8">
                        <div class="grid-content bg-purple-light">派单时间：2018/11/16 10:49:00</div>
                    </el-col>
                    <el-col :span="8">
                        <div class="grid-content bg-purple-light">派单人：10003829</div>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="8">
                        <div class="grid-content bg-purple">合同编号：1000393029201</div>
                    </el-col>
                    <el-col :span="8">
                        <div class="grid-content bg-purple-light">合同名称：-</div>
                    </el-col>
                    <el-col :span="8">
                        <div class="grid-content bg-purple-light">签订时间：-</div>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="8">
                        <div class="grid-content bg-purple">客户经理编号：10092023</div>
                    </el-col>
                    <el-col :span="8">
                        <div class="grid-content bg-purple-light">项目名称：集团专线复机需求</div>
                    </el-col>
                    <el-col :span="8">
                        <div class="grid-content bg-purple-light">项目编号：FZ1000293934</div>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="8">
                        <div class="grid-content bg-purple">管控编号：-</div>
                    </el-col>
                    <el-col :span="8">
                        <div class="grid-content bg-purple-light">专线总数：1</div>
                    </el-col>
                    <el-col :span="8">
                        <div class="grid-content bg-purple-light">客户归属区域：-</div>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="8">
                        <div class="grid-content bg-purple">是否快速开通：0</div>
                    </el-col>
                    <el-col :span="8">
                        <div class="grid-content bg-purple-light">覆盖信息来源：1</div>
                    </el-col>
                    <el-col :span="8">
                        <div class="grid-content bg-purple-light">业务开通通道标识：1</div>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="8">
                        <div class="grid-content bg-purple">PON覆盖情况：-</div>
                    </el-col>
                    <el-col :span="8">
                        <div class="grid-content bg-purple-light">来源系统：CRM</div>
                    </el-col>
                    <el-col :span="8">
                        <div class="grid-content bg-purple-light">也无语资源标准地址ID：-</div>
                    </el-col>
                </el-row>
            </div>
        </section>
    </el-card>
</section>
</template>

<script>
export default {
    data() {
        return {
            titleText: "订单信息",
            goodsText: "商品信息",
            publicText: "公共信息"
        }
    }
}
</script>

<style lang="scss">

</style>
