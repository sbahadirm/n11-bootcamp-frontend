
class StringUtil{

    currencyFormat(num) {
        let dollarUSLocale = Intl.NumberFormat('tr-TR');

        return dollarUSLocale.format(num)
    }

    formattedDate(dateField) {
        return new Intl.DateTimeFormat('tr-TR', {
            month: 'long',
            day: '2-digit',
            year: 'numeric',
        }).format(new Date(dateField))
    }
}

export default new StringUtil();