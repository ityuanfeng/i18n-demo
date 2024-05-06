<script setup lang="ts">
import {useI18n} from 'vue-i18n'
import {ref} from "vue";

const {t} = useI18n()
console.log(t('hello'))


const langs = ['zh-CN', 'en']
const lang = localStorage.getItem('lang') || navigator.language
const curIndex = ref(langs.indexOf(lang))
const changeLang = (index: number) => {
    curIndex.value = index
    localStorage.setItem('lang', langs[index])
    window.location.reload()
}
</script>

<template>
    <div class="root">
        <div class="lang">
            <div class="title">切换语言</div>
            <ul>
                <li :class="index===curIndex ?'active':''" @click="changeLang(index)" v-for="(item,index) in langs">{{
                        item
                    }}
                </li>
            </ul>
        </div>
        <div class="code">
            <ul>
                <li>默认：{{ $t('hello') }}</li>
                <li>列表参数：{{ $t('list', ['hello', 'world']) }}</li>
                <li>对象参数：{{ $t('obj', {name: 'Jack', age: 18}) }}</li>
                <li>特殊字符: {{ $t('address', { account: 'foo', domain: 'domain.com' }) }}<br>
                特殊字符：{、}、@、$、|</li>
                <li>引用：{{ $t('message.linked') }}</li>
                <li>内置修改器：{{ $t('message.homeAddress') }}，修改后： {{ $t('message.missingHomeAddress') }} <br> upper【转大写】、lower【转小写】、capitalize【首字母大写】</li>
                <li>自定义修改器：{{ $t('message.custom_modifier')}}</li>
            </ul>
        </div>
        <div></div>
        <div></div>
    </div>
</template>

<style lang="scss" scoped>
.root {
    width: 100%;

    .lang {
        width: 300px;
        text-align: left;

        .title {
            margin-left: 30px;
        }

        .active {
            color: red;
        }
        li{
            cursor: pointer;
        }
    }

    .code {
        text-align: left;
    }
}
</style>
