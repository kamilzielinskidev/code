<script lang="ts">
	import { goto } from '$app/navigation';
	import { formatDistanceToNow } from 'date-fns';
	import { ifElse, pipe, propEq } from 'ramda';
	import { onMount } from 'svelte';

	import { messages } from '../stores/messages';
	import { user } from '../stores/user';

	let message = '';

	onMount(() => {
		ifElse(propEq('isLoggedIn', false), () => goto('/login'), messages.listenToMessages)($user);
	});
</script>

<div class="flex justify-center">
	<div class="max-w-screen-sm">
		<div class="p-2">
			<div class="flex justify-between">
				<span>Logged in as:</span>
				<span class="font-bold">{$user.name}</span>
			</div>
			<div class="mt-2">
				<ul class="list-none flex flex-col gap-2">
					{#each $messages as { createdAt, message, by: { name } }}
						<li class="text-sm">
							<div class="border rounded p-1">
								<div class="flex justify-between">
									<span class="font-bold">{name}</span>
									<span>{formatDistanceToNow(createdAt, { addSuffix: true })}</span>
								</div>
								<div>
									{message}
								</div>
							</div>
						</li>
					{/each}
				</ul>
			</div>
			<div class="mt-2 flex gap-2">
				<input
					bind:value={message}
					on:keydown={({ key }) => key === 'Enter' && messages.sendMessage(message)}
					type="text"
					class="border p-2 w-full"
					placeholder="Your message..."
				/>
				<button class="border-2 p-2" on:click={() => messages.sendMessage(message)}>send</button>
			</div>
		</div>
	</div>
</div>
