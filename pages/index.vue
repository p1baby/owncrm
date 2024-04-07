<script lang='ts'>
import { ref } from 'vue'
import type { ICard, IColumn } from '~/components/kanban/kanban.types'
import { useKanbanQuery } from '~/components/kanban/useKanbanQuery'
import dayjs from 'dayjs'
import { convertCurrency } from '../utils/convertCurrency'
import { useDealSlideStore } from '~/store/deal-slide.store'

export default {
	computed: {
		dayjs() {
			return dayjs
		}
	},
	methods: {
		dayjs,
		convertCurrency() {
			return convertCurrency
		}
	},
	setup() {
		const dragCardRef = ref<ICard | null>(null)
		const sourceColRef = ref<IColumn | null>(null)
		const { data, isLoading, refetch } = useKanbanQuery()
		const store = useDealSlideStore()
		
		return {
			dragCardRef,
			sourceColRef,
			data,
			isLoading,
			refetch,
			store,
		}
	}
}
</script>



<template>
	<div class='p-10'>
		<h1 class='font-bold text-2xl mb-10'>CRM System by Pavel Ogaryshev</h1>
		<div v-if="isLoading">Пожалуйста подождите...</div>
		<div v-else>
			<div class='grid grid-cols-5 gap-16'>
				<div v-for='(column, index) in data' :key='column.id'>
					<div class='rounded bg-slate-700 py-1 px-5 mb-2 text-center'>
						{{column.name}}
					</div>
					<div>
						<KanbanCreateDeal :refetch="refetch" :status="column.id"/>
						<Card class="mb-5" v-for='card in column.items' :key='card.id'>
							<CardHeader role='button' @click='store.set(card)'>{{card.name}}</CardHeader>
							<CardContent>
								{{card.companyName}}
								<CardDescription class="mt-2 block">{{ convertCurrency()(card.price) }}</CardDescription>
							</CardContent>
							<CardFooter>{{ dayjs(card.$createdAt).format('DD MMMM YYYY HH:mm:ss') }}</CardFooter>
						</Card>
					</div>
				</div>
		</div>
			<KanbanSlideover/>
	</div>
	</div>
</template>