<script setup lang="ts"></script>

<template>
    <img alt="Vue logo" src="./assets/logo.png" />
    <van-button type="primary" round>Primary</van-button>

    <van-row gutter="20">
        <van-col span="12">
            <van-card title="C"> </van-card>
        </van-col>
        <van-col span="12">
            <van-card title="D"> </van-card>
        </van-col>
    </van-row>
</template>

<style scoped>
.van-card {
    --van-card-thumb-size: 50px;
    --van-card-font-size: var(--van-font-size-lg);
    --van-card-title-line-height: var(--van-line-height-lg);
}

.van-card__title {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
