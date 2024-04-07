<script setup lang="ts">
import { useMutation, useQuery } from '@tanstack/vue-query'
import { v4 as uuid } from 'uuid'
import type { ICustomer } from '~/types/deals.types'

interface InputFileEvent extends Event {
	target: HTMLInputElement
}

interface ICustomerFormState
	extends Pick<ICustomer, 'avatar_url' | 'email' | 'name' | 'from_source'> {}

useSeoMeta({
	title: `Редактирование отчета`,
})

const route = useRoute()
const customerId = route.params.id as string

const { handleSubmit, defineField, setFieldValue, setValues, values } =
	useForm<ICustomerFormState>()

const { data, isSuccess } = useQuery({
	queryKey: ['get customer', customerId],
	queryFn: () => DB.getDocument(DB_ID, COLLECTION_CUSTOMERS, customerId),
})

watch(isSuccess, () => {
	const initialData = data.value as unknown as ICustomerFormState
	setValues({
		email: initialData.email,
		avatar_url: initialData.avatar_url,
		from_source: initialData.from_source || '',
		name: initialData.name,
	})
})

const [name, nameAttrs] = defineField('name')
const [email, emailAttrs] = defineField('email')
const [fromSource, fromSourceAttrs] = defineField('from_source')

const { mutate, isPending } = useMutation({
	mutationKey: ['update customer', customerId],
	mutationFn: (data: ICustomerFormState) =>
		DB.updateDocument(DB_ID, COLLECTION_CUSTOMERS, customerId, data),
})

const onSubmit = handleSubmit(values => {
	mutate(values)
})
</script>

<template>
	<div class="p-10">
		<h1 class="font-bold text-2xl mb-10">
			Редактирование {{ (data as unknown as ICustomerFormState)?.name }}
		</h1>
		
		<form @submit="onSubmit" class="form">
			<Input
				placeholder="Адрес точки"
				v-model="name"
				v-bind="nameAttrs"
				type="text"
				class="input"
			/>
			
			<Input
				placeholder="Email сотрудника"
				v-model="email"
				v-bind="emailAttrs"
				type="text"
				class="input"
			/>
			
			
			<Button :disabled="isPending" variant="secondary" class="mt-3">
				{{ isPending ? 'Загрузка...' : 'Сохранить' }}
			</Button>
		</form>
	</div>
</template>

<style scoped>
.input {
	@apply border-[#161c26] mb-4 placeholder:text-[#748092] focus:border-border transition-colors;
}
</style>
