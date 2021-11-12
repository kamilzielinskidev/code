<script lang="ts">
	import { goto } from '$app/navigation';
	import { pipe, propEq, when } from 'ramda';
	import { onMount } from 'svelte';

	import { login } from '../stores/login';
	import { user } from '../stores/user';

	let name: string;

	const goToMainPage = () => goto('/login');

	onMount(() => {
		user.subscribe(pipe(when(propEq('isLoggedIn', true), goToMainPage)));
	});
</script>

<div class="flex justify-center">
	<div class="max-w-screen-sm">
		{#if $login.state !== 'LOADING'}
			<div class="p-2 mt-6">
				<div class="border w-full rounded p-2">
					<div>
						<input
							class="border p-2 w-full"
							bind:value={name}
							type="text"
							placeholder="Your name..."
						/>
					</div>
					<div class="mt-2 flex justify-center">
						<button class="border-2 p-2" on:click={login.login(name)}>jump in</button>
					</div>
					{#if $login.state === 'ERROR'}
						<div>
							{$login.message}
						</div>
					{/if}
				</div>
			</div>
		{/if}

		{#if $login.state === 'LOADING'}
			<h1>Loading...</h1>
		{/if}
	</div>
</div>
