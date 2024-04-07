<script setup lang='ts'>
import dayjs from 'dayjs'
import {useDealSlideStore} from '~/store/deal-slide.store'

const store = useDealSlideStore()
</script>

<template>
	<div class='border-border bg-black/20 rounded p-3'>
		<div class='uppercase bold text-xl mb-4'>Об Отчете</div>
		<KanbanSlideoverLabel label-text='Менеджер:'>
			<h2>
				{{store.card?.name}}
			</h2>
		</KanbanSlideoverLabel>
		<KanbanSlideoverLabel label-text='Выручка за месяц:'>
				{{convertCurrency(store.card?.price || 0)}}
		</KanbanSlideoverLabel>
		<KanbanSlideoverLabel label-text='Адрес точки:'>
				{{store.card?.companyName}}
		</KanbanSlideoverLabel>
		<KanbanSlideoverLabel label-text="Дата создания отчета:">
			{{ dayjs(store.card?.$createdAt).format('DD MMMM YYYY HH:mm:ss') }}
		</KanbanSlideoverLabel>
	</div>
</template>

<style scoped>

</style>