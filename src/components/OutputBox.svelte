<script lang="ts">
	export let output = {
		id: 999,
		status: "info",
		request: "ip dashboard",
		response: 'dashboard: : /merry: check <a href="https://nshisho.vercel.app">https://nshisho.vercel.app</a>'
	}
</script>

{#if output.status == "success"}
	<li>
		<div class="flex items-start space-x-3 bg-gray-400/10 rounded-lg px-3 py-3">
			<div
				class="p-[0.25rem] rounded-full bg-green-500 mt-2 ring ring-green-500/20"
			/>
			<!-- <i class="icon icon-ic_fluent_chevron_right_20_regular flex text- text-gray-50 p- rounded-full bg-green-500 mt-1"></i> -->
			<div class="">
				<p class="text-gray-400">{@html output.request}</p>
				<!-- <h4 class="font-medium">(+) </h4> -->
				<article class="text-green-500">{output.response}</article>
			</div>
		</div>
	</li>
{:else if output.status == "error"}
	<li>
		<div class="flex items-start space-x-3 bg-gray-400/10 rounded-lg px-3 py-3">
			<div
				class="p-[0.25rem] rounded-full bg-rose-500 mt-2 ring ring-rose-500/20"
			/>
			<!-- <i class="icon icon-ic_fluent_chevron_right_20_regular flex text- text-gray-50 p- rounded-full bg-green-500 mt-1"></i> -->
			<div class="">
				<p class="text-gray-400">{@html output.request}</p>
				<h4 class="font-medium text-rose-500">(x) Error</h4>
				<article class="text-rose-500">{output.response}</article>
			</div>
		</div>
	</li>
{:else if output.status == "warning"}
	<li>
		<div class="flex items-start space-x-3 bg-gray-400/10 rounded-lg px-3 py-3">
			<div
				class="p-[0.25rem] rounded-full bg-yellow-500 mt-2 ring ring-yellow-500/20"
			/>
			<!-- <i class="icon icon-ic_fluent_chevron_right_20_regular flex text- text-gray-50 p- rounded-full bg-green-500 mt-1"></i> -->
			<div class="">
				<p class="text-gray-400">{@html output.request}</p>
				<h4 class="font-medium text-yellow-500">/!\ Warning</h4>
				<article class="text-yellow-500">{output.response}</article>
			</div>
		</div>
	</li>
{:else if output.status == "info"}
	<li>
		<div class="flex items-start space-x-3 bg-gray-400/10 rounded-lg px-3 py-3">
			<div
				class="p-[0.25rem] rounded-full bg-blue-500 mt-2 ring ring-blue-500/20"
			/>
			<!-- <i class="icon icon-ic_fluent_chevron_right_20_regular flex text- text-gray-50 p- rounded-full bg-green-500 mt-1"></i> -->
			<div class="">
				<p class="text-gray-400">{@html output.request}</p>
				<h4 class="font-medium text-blue-500">(!) Info</h4>
				<article class="text-blue-500">{output.response}</article>
			</div>
		</div>
	</li>
{:else}
	<li>
		<div class="flex items-start space-x-3 bg-gray-400/10 rounded-lg px-3 py-3">
			<div
				class="p-[0.25rem] rounded-full bg-gray-500 mt-2 ring ring-gray-500/20"
			/>
			<!-- <i class="icon icon-ic_fluent_chevron_right_20_regular flex text- text-gray-50 p- rounded-full bg-green-500 mt-1"></i> -->
			<div class="">
				<p class="text-gray-400">{@html output.request}</p>
				<article class="text-gray-200">{output.response}</article>
			</div>
		</div>
	</li>
{/if}
