<template>
    <l-generic>
        <div class="v-plate">
            <h1>车辆品牌选择组件</h1>
            <p>属性配置</p>
            <u-example title="设置最常用车牌前缀">
                <template slot="case">
                    <u-brand-selector  :position="position" :initBrandCode="initBrandCode"  :btnStyleObj="style"></u-brand-selector>
                </template>
                <template slot="desc">
                    <p>通过设置<code>btnStyleObj</code>属性改变按钮样式</p>
                    <p>通过设置<code>initBrandCode</code>属性实现哪一个品牌被默认选中</p>
                    <p>通过设置<code>position</code>属性控制控制弹出窗口的方位.可选值为<code>top</code><code>top-start</code><code>top-end</code><code>bottom</code><code>bottom-start</code><code>bottom-end</code><code>left</code><code>left-start</code><code>left-end</code><code>right</code><code>right-start</code><code>right-end</code></p>
                </template>
                <u-code slot="code" lang="html">{{codes.props}}</u-code>
            </u-example>
            <p>组件方法</p>
            <u-example title="组件方法">
                <template slot="case">
                    <u-brand-selector v-on:change="onBrandCodeChange" ref="brand" :initBrandCode="'0007'"></u-brand-selector>
                    父组件中获取选择的品牌：<i-input v-model="brandCode" style="width:80%;margin:10px 0;"></i-input>
                    <i-button type="primary" v-on:click="setData">父组件设置车牌组件的值</i-button>
                    <i-button type="ghost" v-on:click="reset">重置</i-button>
                    <i-button type="ghost" v-on:click="clear">清除</i-button>
                </template>
                <template slot="desc">
                    <p>通过<code>change</code>事件来监测组件选择值的变化进行一些业务处理</p>
                    <p>通过<code>setData</code>实例方法对组件进行赋值，有时候编辑信息时需要设置初始值可以使用</p>
                    <p>通过<code>reset</code>实例方法对组件进行重置，如果有initBrandCode会重置成initBrandCode</p>
                    <p>通过<code>clear</code>实例方法对组件进行清除</p>
                </template>
                <u-code slot="code" lang="html">{{codes.method}}</u-code>
            </u-example> 
            <div class="api">
                <h2>API</h2>
                <h3>配置属性</h3>
                <table>
                    <thead>
                        <tr>
                            <th>属性名</th>
                            <th>说明</th>
                            <th>类型</th>
                            <th>必填</th>
                            <th>默认值</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>btnStyleObj</td>
                            <td>按钮样式,除了给每个组件单独进行绑定值外，可以设置window对象下的componentsOption.BRAND_PICKER_OPTION.btnStyleObj的值来给项目中的组件统一设置默认样式</td>
                            <td>Object</td>
                            <td>-</td>
                            <td>{}</td>
                        </tr>
                        <tr>
                            <td>initBrandCode</td>
                            <td>默认选中品牌,除了给每个组件单独进行绑定值外，可以设置window对象下的componentsOption.BRAND_PICKER_OPTION.initBrandCode的值来给项目中的组件统一设置默认值</td>
                            <td>String</td>
                            <td>-</td>
                            <td>""</td>
                        </tr>
                        <tr>
                            <td>position</td>
                            <td>弹出窗口方位,除了给每个组件单独进行绑定值外，可以设置window对象下的componentsOption.BRAND_PICKER_OPTION.position来给项目中的组件统一设置默认弹出方位</td>
                            <td>String</td>
                            <td>-</td>
                            <td>left-start</td>
                        </tr>
                    </tbody>
                </table>
                <h3>实例方法</h3>
                <table>
                    <thead>
                        <tr>
                            <th>方法名</th>
                            <th>说明</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>setData</td>
                            <td>设置 选中品牌，参数为setData(brandCode, childBrandCodes?, brandYearCodes?),目前传入brandCode即可</td>
                        </tr>
                        <tr>
                            <td>onClearBrand</td>
                            <td>清除组件数据</td>
                        </tr>
                        <tr>
                            <td>resetToInit</td>
                            <td>重置组件数据，回到初始状态 如果有initBrandCode 会重置成initBrandCode</td>
                        </tr>
                    </tbody>
                </table>
                <h3>事件</h3>
                <table>
                    <thead>
                        <tr>
                            <th>事件名</th>
                            <th>说明</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>change</td>
                            <td>输入改变时触发，参数为(brandCode, childBrandCodes, brandYearCodes)，brandCode为品牌代码，childBrandCodes为子品牌代码，brandYearCodes为年款代码，目前仅有arr[0]</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </l-generic>
</template>
<style lang="less" scoped>
.v-plate
{
    padding: 20px 25px;
}
</style>
<script lang="ts">
import { component, View } from "flagwind-web";
import { BrandPicker } from "src/index";
import * as codes from "examples/codes";
@component
({
    components:
    {
        "u-brand-selector": BrandPicker
    }
})
export default class Brand extends View{
    protected codes: any = codes;
    private style = {
        color:"red"
    }
    private initBrandCode = "0006";
    private position = "bottom-start";
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
</script>
