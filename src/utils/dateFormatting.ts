export const dataFormatting = (data: string): string => {
    const dataOfNews = data.split(' ')[0].split('-')
    const timeOfNews = data.split(' ')[1].split(':')
    const newsData = {
        year: Number(dataOfNews[0]),
        month: Number(dataOfNews[1]),
        day: Number(dataOfNews[2]),
        hours: Number(timeOfNews[0]),
        minutes: Number(timeOfNews[1]),
    }

    const today = new Date();

    let infoAboutData = `${dataOfNews[2]}.${dataOfNews[1]}.${dataOfNews[0]}`
    if(today.getFullYear() === newsData.year && today.getMonth()+1 === newsData.month
        && today.getDate() === newsData.day) {
            infoAboutData = 'today'
    }
    return infoAboutData
}