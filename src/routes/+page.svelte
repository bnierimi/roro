<script lang="ts">
	import { fly, fade, scale, slide } from "svelte/transition";
    import OutputBox from "../components/OutputBox.svelte";
	// import { slide } from "svelte/animate";
	import { storeList } from '../store'

	let commandPrompt = "";
	let listOfOutputs: any;
	let allStatuses = [
		"success", "error", "warning", "info", ""
	]

	storeList.subscribe((currentValue: any)=>{
		listOfOutputs = currentValue
	})
	// console.log(listOfOutputs)
	const handleSubmit = () => {
		storeList.update(n => [...n, {
			id: n.length,
			status: allStatuses[Math.floor(Math.random() * allStatuses.length)],
			request: commandPrompt,
			response: "",
		}])
		commandPrompt = "";
		// storeList.update((currentValue: any)=>{
		// 	[...currentValue, {
		// 		id: currentValue.length,
		// 		status: "",
		// 		request: commandPrompt,
		// 		response: "",
		// 	}]
		// })
	}

</script>

<section class="h-screen w-full overflow-hidden bg-mblack text-gray-50 text-sm text-[0.9rem] flex flex-col justify-between p-4 relative space-y-3 font-firaCode">
	<div class="flex justify-between items-center">
		<h1 class="text-2xl font-semibold">neqakyu_{"<"}</h1>
		<a href="https://twitter.com/bnierimi" class="focus:outline-none focus:ring focus:border-violet-600">
			<h2 class="flex items-center space-x-2">
				<i class="icon icon-ic_fluent_person_20_filled flex text-lg rounded-full p-2 bg-gray-50/20"></i>
				<p class="px-3 py-1 bg-violet-500 rounded-full font-medium flex items-center">t/bnierimi</p>
			</h2>
		</a>
	</div>
	<div class="body w-full h-full">
		<!-- <p class="opacity-50">List of outputs</p> -->
		<ul id="listOfOutputs" class="listOfOutputs space-y-4 w-full md:w-11/12 md:mx-auto h-full overflow-y-auto overscroll-y-contain scroll-smooth pb-44">
			{#each listOfOutputs as each_output}
			<!-- {#each listOfOutputs as each_output (each_output.id)} -->
				<OutputBox output={each_output}/>
			{/each}
			<li id="lastItem"></li>
		</ul>
	</div>
	<div class="h-10 bg-rose-"></div>
	<div class="w-full bg-mblack flex justify-center fixed bottom-0 left-0 p-4">
		<div class="max-h-32 w-full md:w-10/12 md:mx-auto text-base md:text-xl flex items-end space-x-2">
			<div class="flex sticky space-x-1 font-semibold">
				<p class="text-violet-500">%yonko</p>
				<p class="opacity-50">&</p>
			</div>
			<!-- <p contenteditable="true" data-placeholder="enter --command or type --help" autofocus={true} spellcheck="false" class="w-full h-full bg-gray-50/10 rounded-md overflow-y-auto p-1 focus:outline-none focus:ring focus:border-violet-600" style="caret-color: rebeccapurple; caret-shape: underscore;"></p> -->
			<p contenteditable="true" bind:innerHTML={commandPrompt} data-placeholder="enter --command or type --help" spellcheck="false" class="commandPrompt w-full h-full bg-gray-400/10 rounded-md overflow-y-auto px-1 focus:outline-none focus:ring focus:border-violet-600"></p>
			<!-- <textarea name="commandPrompt" id="commandPrompt" class="w-full h-full bg-gray-50/10 rounded-md overflow-y-auto resize-none" style="caret-color: rebeccapurple; caret-shape: underscore;"></textarea> -->
			<!-- <input type="text" placeholder="enter command" class="commandPrompt text-mblack text-7xl h-full p-2" style="caret-color: rebeccapurple; caret-shape: underscore;"> -->
			{#if commandPrompt.length != 0}
				<button transition:slide="{{ axis: 'x' }}" on:click={handleSubmit} class="rounded-full p-2 bg-green-500/10">
					<i class="icon icon-ic_fluent_send_20_filled flex text-lg"></i>
				</button>
			{/if}
		</div>
	</div>
</section>

<style>
	.commandPrompt{
		/* caret-color: rebeccapurple; */
		caret-shape: block;
	}
</style>