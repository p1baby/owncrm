export const convertCurrency = (amount: string | number) => {
	return new Intl.NumberFormat('ru-RU', {
		style: 'currency',
		currency: 'RUB',
	}).format(+amount)
}
