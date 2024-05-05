import {createI18n} from 'vue-i18n'

function loadLang() {
    const lang = import.meta.glob('./lang/*.json', { eager: true })
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
    locale:'en',
    legacy: false, // 设置为 false，启用 composition API 模式
    messages: loadLang()
})
