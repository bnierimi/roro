<script lang="ts"></script>

<section class="h-screen w-full bg-mblack text-gray-50 flex flex-col justify-between p-4 relative space-y-3 font-mono">
	<div class="flex justify-between items-center">
		<h1 class="text-2xl font-semibold">neqakyu_{"<"}</h1>
		<a href="https://twitter.com/bnierimi" class="focus:outline-none focus:ring focus:border-violet-600">
			<h2 class="flex items-center space-x-2">
				<i class="icon icon-ic_fluent_person_20_filled flex text-lg rounded-full p-2 bg-gray-50/20"></i>
				<p class="px-3 py-1 bg-violet-500 rounded-full font-medium flex items-center">t/bnierimi</p>
			</h2>
		</a>
	</div>
	<div class="body w-full h-full overflow-y-auto">
		<!-- <p class="opacity-50">List of outputs</p> -->
		<ul class="listOfOutputs bg-gray-400/10 space-y-4 w-full md:w-11/12 md:mx-auto h-full px-3 py-3 pb-20 rounded-lg">
			<li>
				<div class="flex items-start space-x-3">
					<div class="w-2.5 h-2.5 rounded-full bg-green-500 mt-1.5 ring ring-green-500/20"></div>
					<!-- <i class="icon icon-ic_fluent_chevron_right_20_regular flex text- text-gray-50 p- rounded-full bg-green-500 mt-1"></i> -->
					<div class="">
						<p class="text-gray-400">cd /shinku-kyu</p>
						<article class="">
							<!-- Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima doloribus aspernatur ab itaque eos id facilis vel dolores laudantium magnam provident quo ea error dolorum laboriosam, quae saepe? Nisi, provident? -->
						</article>
					</div>
				</div>
			</li>
			<li>
				<div class="flex items-start space-x-3">
					<div class="w-2.5 h-2.5 rounded-full bg-rose-500 mt-1.5 ring ring-rose-500/20"></div>
					<!-- <i class="icon icon-ic_fluent_chevron_right_20_regular flex text- text-gray-50 p- rounded-full bg-rose-500 mt-1"></i> -->
					<div class="">
						<p class="text-gray-400">cd /merry</p>
						<article class="text-rose-500">
							<h2 class="font-semibold">(x) Error</h2>
							<p class="">neqakyu-navigator: cd: /merry: No such file or directory</p>
						</article>
					</div>
				</div>
			</li>
			<li>
				<div class="flex items-start space-x-3">
					<div class="w-2.5 h-2.5 rounded-full bg-yellow-500 mt-1.5 ring ring-yellow-500/20"></div>
					<!-- <i class="icon icon-ic_fluent_chevron_right_20_regular flex text- text-gray-50 p- rounded-full bg-rose-500 mt-1"></i> -->
					<div class="">
						<p class="text-gray-400">neqa --cook .</p>
						<article class="text-yellow-500">
							<h2 class="font-semibold">/!\ Warning</h2>
							<p class="">neqakyu-chef: module: haki: new update available</p>
						</article>
					</div>
				</div>
			</li>
			<li>
				<div class="flex items-start space-x-3">
					<div class="w-2.5 h-2.5 rounded-full bg-blue-500 mt-1.5 ring ring-blue-500/20"></div>
					<!-- <i class="icon icon-ic_fluent_chevron_right_20_regular flex text- text-gray-50 p- rounded-full bg-rose-500 mt-1"></i> -->
					<div class="">
						<p class="text-gray-400">neqa --info style</p>
						<article class="text-blue-500">
							<h2 class="font-semibold">(!) Info</h2>
							<p class="">neqakyu-shipwright: font: firecode-sans: using this font will make it super</p>
						</article>
					</div>
				</div>
			</li>
		</ul>
	</div>
	<div class="h-10 bg-rose-"></div>
	<div class="w-full bg-mblack flex justify-center fixed bottom-0 left-0 p-2">
		<div class="max-h-32 w-full md:w-10/12 md:mx-auto text-base md:text-2xl flex items-end space-x-2">
			<div class="flex sticky space-x-1 font-semibold">
				<p class="text-violet-500">%yonko</p>
				<p class="opacity-50">&</p>
			</div>
			<!-- <p contenteditable="true" data-placeholder="enter --command or type --help" autofocus={true} spellcheck="false" class="w-full h-full bg-gray-50/10 rounded-md overflow-y-auto p-1 focus:outline-none focus:ring focus:border-violet-600" style="caret-color: rebeccapurple; caret-shape: underscore;"></p> -->
			<p contenteditable="true" data-placeholder="enter --command or type --help" spellcheck="false" class="commandPrompt w-full h-full bg-gray-400/10 rounded-md overflow-y-auto px-1 focus:outline-none focus:ring focus:border-violet-600"></p>
			<!-- <textarea name="commandPrompt" id="commandPrompt" class="w-full h-full bg-gray-50/10 rounded-md overflow-y-auto resize-none" style="caret-color: rebeccapurple; caret-shape: underscore;"></textarea> -->
			<!-- <input type="text" placeholder="enter command" class="commandPrompt text-mblack text-7xl h-full p-2" style="caret-color: rebeccapurple; caret-shape: underscore;"> -->
		</div>
	</div>
</section>

<style>
	.commandPrompt{
		/* caret-color: rebeccapurple; */
		caret-shape: block;
	}
</style>