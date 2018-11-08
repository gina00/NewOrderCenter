<template>
<section class="title-infor">
    <div class="titleBox">
        <span class="title-text">{{titleText}}</span>
    </div>
    <div class="rowBox">
        <el-form ref="form" :model="form" label-width="80px" :label-position="labelPosition">
            <el-row>
                <el-col :span="8">
                    <el-form-item label="补卡类型">
                        <el-select v-model="form.region" placeholder="普通补卡">
                            <el-option label="区域一" value="shanghai"></el-option>
                            <el-option label="区域二" value="beijing"></el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="补卡原因">
                        <el-select v-model="form.region" placeholder="普通补卡">
                            <el-option label="区域一" value="shanghai"></el-option>
                            <el-option label="区域二" value="beijing"></el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="旧卡回收">
                        <el-select v-model="form.region" placeholder="普通补卡">
                            <el-option label="区域一" value="shanghai"></el-option>
                            <el-option label="区域二" value="beijing"></el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="8">
                    <el-form-item label="写卡方式">
                        <el-button>空白卡录入</el-button>
                        <el-button>手动录入</el-button>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="8">
                    <el-form-item label="ICCID号">
                        <div class="input-box">
                            <el-input v-model="form.name"></el-input>
                        </div>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="卡类型">
                        <el-select v-model="form.region" placeholder="普通补卡">
                            <el-option label="区域一" value="shanghai"></el-option>
                            <el-option label="区域二" value="beijing"></el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
            </el-row>
             <el-row>
                <el-col :span="8">
                    <el-form-item label="优惠类型">
                        <el-select v-model="form.region" placeholder="普通补卡">
                            <el-option label="区域一" value="shanghai"></el-option>
                            <el-option label="区域二" value="beijing"></el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="优惠项目">
                        <el-select v-model="form.region" placeholder="普通补卡">
                            <el-option label="区域一" value="shanghai"></el-option>
                            <el-option label="区域二" value="beijing"></el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
            </el-row>
        </el-form>
    </div>
</section>
</template>

<script>
// import titleVue from '@/components/title/index'
export default {
    data() {
        return {
            titleText: "补卡信息",
            labelPosition: "left",
            form: {
                name: "",
                region: "",
                date1: "",
                date2: "",
                delivery: false,
                type: [],
                resource: "",
                desc: ""
            }
        };
    }
};
</script>

<style lang="scss">
.rowBox {
    .el-select {
        width: 50%;
    }
.input-box{

    .el-input {
        .el-input__inner {
            width: 71%;
        }
    }
}
}
</style>
