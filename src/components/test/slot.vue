<script setup>


</script> 

<template>
    <div>
        <!-- 子組件的內容 -->
        <slot name="certain-slot">
            <p>123</p>
        </slot>
        <slot name="certain-slot2">
            <p>456</p>
        </slot>
        <slot>unnamed slot</slot>
    </div>
</template>

<style>
    p {
        width: 100%;
        display: inline-block;
        text-align: center;
        font-size: 1.2rem;
        font-weight: 700;
        line-height: 1.6;
        margin: 20px auto;
    }
    button{
        text-align: center;
        margin: 0 auto;
    }
</style>