<script lang="ts">
	import { onMount } from 'svelte';

	import { messages } from '../stores/messages';

	onMount(() => {
		messages.fetch(null);
	});
</script>

{#if $messages.state === 'LOADING'}
	<h1>Loading...</h1>
{/if}

{#if $messages.state === 'ERROR'}
	<h1>{$messages.message}</h1>
{/if}

{#if $messages.state === 'OK'}
	{#each $messages.value as { createdAt, message, by: { name } }}
		<li class="text-base">
			<div>
				<span>{createdAt}</span><span>{name}</span>
			</div>
			<div>
				{message}
			</div>
		</li>
	{/each}
{/if}
