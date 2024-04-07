import {EnumStatus} from '~/types/deals.types'
import type {IColumn} from './kanban.types'

export const KANBAN_DATA:IColumn[] = [
	{
		id: EnumStatus.todo,
		name: 'Санкт-Петербург',
		items: []
	},
	{
		id: EnumStatus['to-be-agreed'],
		name: 'Москва',
		items: []
	},
]