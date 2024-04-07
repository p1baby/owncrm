export interface ImenuItem {
	name: string
	url: string
	icon: string
}

export const MENU_DATA: ImenuItem[] = [
	{
		icon: 'radix-icons:dashboard',
		name: 'Главная',
		url: '/'
	},
	{
		icon: 'fluent:receipt-28-regular',
		name: 'Точки',
		url: '/customers'
	},
	{
		icon: 'radix-icons:gear',
		name: 'Настройки',
		url: '/setting'
	},
	{
		name: 'Feedback',
		icon: 'fluent:person-feedback-48-regular',
		url: '/feedback',
	},
	{
		name: 'Help center',
		icon: 'radix-icons:question-mark',
		url: '/help',
	},
]