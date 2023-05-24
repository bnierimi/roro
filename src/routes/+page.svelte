<script lang="ts"></script>

<section class="h-screen w-full bg-mblack text-gray-50 flex flex-col items-end justify-between p-4 relative">
	<div class="">
		<h2 class="flex items-center space-x-2">
			<i class="icon icon-ic_fluent_person_20_filled flex text-lg rounded-full p-2 bg-gray-50/20"></i>
			<p class="px-3 py-2 bg-violet-500 rounded-full font-medium">t/kagayaki.b</p>
		</h2>
	</div>
	<div class="body w-full h-full">
		<p class="opacity-50">List of results</p>
	</div>
	<div class="max-h-48 w-full font-semibold text-base md:text-2xl flex items-end space-x-4 fixed bottom-2 left-2 mx-auto">
		<div class="flex sticky space-x-1">
			<p class="text-violet-500">~/neqakyu</p>
			<p class="opacity-50">&</p>
		</div>
		<!-- <p contenteditable="true" data-placeholder="enter --command or type --help" autofocus={true} spellcheck="false" class="w-full h-full bg-gray-50/10 rounded-md overflow-y-auto p-1 focus:outline-none focus:ring focus:border-violet-600" style="caret-color: rebeccapurple; caret-shape: underscore;"></p> -->
		<p contenteditable="true" data-placeholder="enter --command or type --help" spellcheck="false" class="w-10/12 h-full bg-gray-50/10 rounded-md overflow-y-auto p-1 focus:outline-none focus:ring focus:border-violet-600" style="caret-color: rebeccapurple; caret-shape: underscore;"></p>
		<!-- <textarea name="commandPrompt" id="commandPrompt" class="w-full h-full bg-gray-50/10 rounded-md overflow-y-auto resize-none" style="caret-color: rebeccapurple; caret-shape: underscore;"></textarea> -->
		<!-- <input type="text" placeholder="enter command" class="commandPrompt text-mblack text-7xl h-full p-2" style="caret-color: rebeccapurple; caret-shape: underscore;"> -->
	</div>
</section>