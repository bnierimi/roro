<script lang="ts">
	export let isActive: boolean = false;
</script>

{#if isActive}
	<div class="rounded-md bg-gray-300 p-2 flex items-center space-x-2 relative focus:outline-none focus:ring-transparent focus:outline-violet-500">
		<div class="absolute w-1 h-6 bg-violet-600 left-1 rounded-full"></div>
		<slot/>
	</div>
	{:else}
	<div class="rounded-md hover:bg-gray-300 p-2 flex items-center space-x-2 relative pl-4 focus:outline-none focus:ring-transparent focus:outline-violet-500">
		<slot/>
	</div>
{/if}