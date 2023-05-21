<script lang="ts">
	export let isActive: boolean = false;
	export let isLink: boolean = false;
	export let href: string = "";
</script>

{#if isLink}
	{#if isActive}
		<a href={href} class="w-full rounded-md bg-base p-2 flex items-center space-x-2 relative focus:outline-none focus:ring-transparent focus:outline-violet-500">
			<div class="absolute w-1 h-6 bg-violet-600 left-1 rounded-full"></div>
			<slot/>
		</a>
	{:else}
		<a href={href} class="w-full rounded-md hover:bg-base p-2 flex items-center space-x-2 relative pl-4 focus:outline-none focus:ring-transparent focus:outline-violet-500 transition-all duration-300">
			<slot/>
		</a>
	{/if}
{:else}
	{#if isActive}
		<button class="w-full rounded-md bg-base p-2 flex items-center space-x-2 relative focus:outline-none focus:ring-transparent focus:outline-violet-500">
			<div class="absolute w-1 h-6 bg-violet-600 left-1 rounded-full"></div>
			<slot/>
		</button>
	{:else}
		<button class="w-full rounded-md hover:bg-base p-2 flex items-center space-x-2 relative pl-4 focus:outline-none focus:ring-transparent focus:outline-violet-500 transition-all duration-300">
			<slot/>
		</button>
	{/if}
{/if}