import {createI18n} from 'vue-i18n'

function loadLang() {
    const lang = import.meta.glob('./lang/*.json', {eager: true})
    const messages: Record<string, any> = {};
    for (const key in lang) {
        const matched = key.match(/([A-Za-z0-9-_]+)\./i);
        if (matched && matched.length > 1) {
            const locale = matched[1];
            messages[locale] = lang[key];
        }
    }
    return messages;
}

export default createI18n({
    // locale: navigator.language,
    locale: localStorage.getItem('lang') || navigator.language,
    legacy: false, // 设置为 false，启用 composition API 模式
    messages: loadLang(),
    // 自定义翻译函数
    modifiers: {
        snakeCase: (str: string) => str.split(' ').join('_')
    }
})
