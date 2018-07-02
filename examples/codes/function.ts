const method = `
<template>
    <u-brand-selector v-on:change="onBrandCodeChange" ref="brand" :initBrandCode="'0007'"></u-brand-selector>
    父组件中获取选择的品牌：<i-input v-model="brandCode" style="width:80%;margin:10px 0;"></i-input>
    <i-button type="primary" v-on:click="setData">父组件设置车牌组件的值</i-button>
    <i-button type="ghost" v-on:click="reset">重置</i-button>
    <i-button type="ghost" v-on:click="clear">清除</i-button>
</template>
<script lang="ts">
import { component, View } from "flagwind-web";
import { BrandPicker } from "src/index";
@component
({
    components:
    {
        "u-brand-selector": BrandPicker
    }
})
export default class Brand extends View{
    private brandCode = "";
    protected onBrandCodeChange(brandCode: any, childBrandCodes: any, brandYearCodes: any){
        this.brandCode = brandCode;
    }
    protected setData(){
        (<BrandPicker>this.$refs["brand"]).setData("0006");
    }
    protected reset(){
        (<BrandPicker>this.$refs["brand"]).resetToInit();
    }
    protected clear(){
        (<BrandPicker>this.$refs["brand"]).onClearBrand();
    }
}
</script>`;
export default method;
