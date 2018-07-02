const props = `
<template>
    <u-brand-selector ref="brand" :position="position" :initBrandCode="initBrandCode" @change="onBrandCodeChange" :btnStyleObj="style"></u-brand-selector>
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
    private style = {
        color:"red"
    }
    private initBrandCode = "0006";
    private position = "bottom-start";
}
</script>`;
export default props;
