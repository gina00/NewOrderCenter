<template>
    <section>
        <tool-bar></tool-bar>
        <table-item></table-item>
    </section>
</template>

<script>
import toolBar from "./ordermanage/toolbar"
import tableItem from "./ordermanage/tableitem"
export default {
components: {
        "tool-bar": toolBar,
        "table-item": tableItem
    },
}
</script>

<style>

</style>
