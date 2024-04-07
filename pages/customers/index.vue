<script lang="ts" setup>
import { useQuery } from '@tanstack/vue-query'
import type { ICustomer } from '~/types/deals.types'
import type { IDeal } from '~/types/deals.types'
import { convertCurrency } from '../utils/convertCurrency' // Добавлено

const { data: customers, isLoading: isCustomersLoading } = useQuery({
	queryKey: ['customers'],
	queryFn: () => DB.listDocuments(DB_ID, COLLECTION_CUSTOMERS),
})

const { data: deals, isLoading: isDealsLoading } = useQuery({
	queryKey: ['deals'],
	queryFn: () => DB.listDocuments(DB_ID, COLLECTION_DEALS),
})

const isLoading = isCustomersLoading || isDealsLoading
</script>

<template>
	<div class="p-10">
		<h1 class="font-bold text-2xl mb-10">Все точки</h1>
		<div v-if="isLoading">Пожалуйста подождите</div>
		<Table v-else>
			<TableHeader>
				<TableRow>
					<TableHead class="w-[100px]">Адрес точки (кликните чтобы редактировать)</TableHead>
					<TableHead class="w-[200px]">Выручка</TableHead>
					<TableHead class="w-[200px]">Email менеджера</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				<TableRow
					v-for="customer in (customers?.documents as unknown as ICustomer[])"
					:key="customer.$id"
				>
					<TableCell>
						<NuxtLink :href="`/customers/edit/${customer.$id}`">
							{{ customer.name }}
						</NuxtLink>
					</TableCell>
					<TableCell>
						{{ convertCurrency(deals?.documents.find(deal => deal.customer.$id === customer.$id)?.price) }} <!-- Изменено -->
					</TableCell>
					<TableCell>{{ customer.email }}</TableCell>
				</TableRow>
			</TableBody>
		</Table>
	</div>
</template>
