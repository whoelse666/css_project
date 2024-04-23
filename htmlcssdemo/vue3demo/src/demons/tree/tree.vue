<template>
    <div class="tree">
        <div class="item" v-for="item in data">
            <div>{{ item.label }}</div>

            <div class="child">
                <tree :data="item.children"/>
            </div>
        </div>
    </div>
</template>
<script setup>
defineProps({
    data: {
        default: () => [],
        type: Array
    }
})
</script>
<style lang='scss'>
.tree {
    font-size: 40px;
}
.child{
    padding-left: 30px;
}
</style>