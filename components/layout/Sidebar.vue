<script lang="ts" setup>
import { useAuthStore, useIsLoadingStore } from '~/store/auth.store'

const store = useAuthStore()
const isLoadingStore = useIsLoadingStore()
const router = useRouter()

const logout = async () => {
	isLoadingStore.set(true)
	await account.deleteSession('current')
	store.clear()
	await router.push('/login')
	isLoadingStore.set(false)
}
</script>

<template>
	<aside class='flex h-screen px-5 py-8 bg-sidebar relative flex-col'>
		<Button @click='logout' class='flex mx-auto transition-colors gap-1 '>
			Выйти<Icon name='line-md:logout'></Icon>
		</Button>
		<NuxtLink to='/' class='mx-auto pt-9'>
			<p class='text-center font-bold text-2xl'>CenterPlast</p>
		</NuxtLink>
		<LayoutMenu/>
	</aside>
</template>