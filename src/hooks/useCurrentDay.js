export const useCurrentDay = () => {
    const day = new Date().getDay()
    const days = [
        'Söndag',
        'Måndag',
        'Tisdag',
        'Onsdag',
        'Torsdag',
        'Fredag',
        'Lördag',
    ]

    return { dayOfWeek: days[day], dayNo: day }
}
