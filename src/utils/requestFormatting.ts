const isCyrillic = function (text: string) {
    return /[а-я]/i.test(text);
}

export const languageRequest = (request: string): string => {
    const language = isCyrillic(request)? 'ru' : 'en'
    return language
}