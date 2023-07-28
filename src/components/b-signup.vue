<script setup>
import { ref, reactive } from 'vue'

</script>

<template>
    <div class="sign-up-form">
        <h2 class="main-title">立即報名</h2>
        <form action="">
            <ul>
                <li class="form-item">
                    <label class="input-title" for="first-name">
                        名字
                    </label>
                    <input type="text">
                </li>
                <li class="form-item">
                    <label class="input-title" for="last-name">
                        姓氏
                    </label>
                    <input type="text">
                </li>
                <li class="form-item">
                    <label class="input-title">
                        性別
                    </label>
                    <input name="gender" type="radio" value="male" id="male">
                    <label for="male">男性</label>
                    
                    <input name="gender" type="radio" value="female" id="female">
                    <label for="female">女性</label>
                    
                    <input name="gender" type="radio" value="other" id="gender-other">
                    <label for="gender-other">其他</label>
                </li>
                <li class="form-item">
                    <label class="input-title" for="e-mail">
                        信箱
                    </label>
                    <input type="text">
                </li>
                <li class="form-item">
                    <label class="input-title" for="e-mail">
                        聯絡電話
                    </label>
                    <input type="text">
                </li>
            </ul>
            <input type="submit" value="送出報名資料">
        </form>
    </div>
</template>

<style lang="scss" scoped>
* {
    // outline: 1px solid #747bff22;
}

.sign-up-form {
    height: 70vh;
    margin: 10vh auto;
    padding: 30px;
    background-color: #fff;

    .main-title {
        font-size: 2rem;
        font-weight: 900;
        margin-bottom: 20px;
    }

    form {
        padding: 20px;
    }

    .form-item {
        margin-bottom: 1.5rem;
        display: flex;
        align-items: center;
    }

    .input-title{
        color: #fff;
        background-color: #352147;
        display: inline-block;
        width: 6rem;
        padding: .5rem;
        margin-right: 10px;
        font-weight: 700;
        letter-spacing: 2px;
    }
}
</style>
