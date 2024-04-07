import { useMutation } from '@tanstack/vue-query'
import { v4 as uuid } from 'uuid'

export function useCreateComment({ refetch }: { refetch: () => void }) {
	const store = useDealSlideStore()
	const commentRef = ref<string>()
	
	const { mutate } = useMutation({
		mutationKey: ['add comments', commentRef.value],
		mutationFn: () =>
			DB.createDocument(DB_ID, COLLECTION_COMMENTS, uuid(), {
				text: commentRef.value,
				deal: store.card?.id,
			}),
		onSuccess: () => {
			refetch()
			commentRef.value = ''
		},
	})
	
	const writeComment = () => {
		if (!commentRef.value) return
		mutate()
	}
	
	return {
		writeComment,
		commentRef,
	}
}
