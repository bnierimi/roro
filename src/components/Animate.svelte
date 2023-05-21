<script lang="ts">
	import { fly, fade, scale, slide } from 'svelte/transition';
	import { onMount } from 'svelte';

	export let name = "fly"

	let isReady = false;
	onMount(() => isReady = true);
</script>

{#if isReady && name === "scale"}
	<div transition:scale>
		<slot/>
	</div>
{:else if isReady && name === "slide"}
	<div transition:slide>
		<slot/>
	</div>
{:else if isReady && name === "fade"}
	<div transition:fade>
		<slot/>
	</div>
{:else}
		<div transition:fly>
			<slot/>
		</div>
{/if}