<script lang="ts">
	const listOfItems = [
		"Red-haired",
		"Strawhat",
		"Rogers",
		"White Beard",
		"Hearts",
		"Oni giri"
	]
</script>

<section class="w-full md:h-screen bg-gradient-to-br from-rose-600 to-rose-900 flex items-center justify-center">

	<div class="container h-full flex flex-col md:flex-row ">

		<!-- Left Side -->
		<section class="w-full lg:w-5/12 h-full divide-y-2divide-dotted space-y-4 text-gray-50 bg-rose- relative flex flex-col justify-center mb-4 md:mb-0">
			<div class="">
				<div class="bg-rose-600 w-52 py-1 px-3 h-14 flex items-end absolute -left-[4.7rem] top-[27rem] lg:-left-[7rem] lg:top-[30rem] rotate-90">
					<p class="text-lg font-mono">Intelligence</p>
				</div>
		
				<div class="relative flex flex-col items-center pl-[4.5rem]">
					<h3 class="text-5xl w-44 relative right-[6rem] top-10 font-mono bg-rose-">Some suggestions in</h3>
					<h1 class="text-9xl relative left-[23rem font-mono">AGI</h1>
					<div class="w-[24rem] bg-rose-800 px-2 py-1.5 absolute bottom-12 -left-20 text-end text-sm">
						<p class=" font-mono">Nierimi B Radiance</p>
					</div>
				</div>
			</div>

			<!-- <hr class=""> -->

			<div class="flex items-center justify-center space-x-4 gridgrid-cols-2gap-4 p-2 relative">

				<div class="text-end text-2xl w-10/12 lg:w-8/12 relative lg:right-[2.5rem] pl-[4.5rem] md:pl-[1rem]">
					<p class="font-mono">They are indispensable to women. They come in all shapes, colours and sizes, but which one is right or even your career?</p>
				</div>
				<!-- <div class="text-start text-sm space-y-2">
					<p class="">The first question veniam enim perferendis dolor nisi facilis sapiente cum debitis, fugiat, voluptates recusandae doloremque ducimus. Labore vel sed sit mollitia. Praesentium, eveniet.</p>
					<p class="">At UBA in enim perferendis dolor nisi facilis sapiente cum debitis, fugiat, voluptates recusandae doloremque ducimus. Labore vel sed sit mollitia.</p>
				</div> -->

			</div>
		</section>
		
		<!-- Right Side -->
		<section class="w-full lg:w-7/12 flex items-center justify-center">

			<div class="w-full columns-2 lg:columns-3 gap-4 p-4 overflow-y-aut">
				{#each listOfItems as eachItem, index}
					<a href={`/imgs/img-${index+1}.jpg`} class="">
						<div class="relative rounded-lg ring-2 ring-transparent hover:ring-rose-300 mb-4 ">
							<div class="p-2 absolute bottom-0">
								<article class="p-2 rounded-lg bg-gray-50/20 backdrop-blur-md text-gray-50 text-xs font-medium">#{eachItem}</article>
								<!-- <h4 class="font-semibold text-lg capitalize">{eachItem}:</h4>
								<p class="text-sm">img-{index} {eachItem} quo corrupti magnam quae, dolor dicta consectetur?</p> -->
							</div>
							<img src={`/imgs/img-${index+1}.jpg`} alt={eachItem} class="max-w-full h-auto rounded-lg">
						</div>
					</a>
					<!-- <img src={`/imgs/img-${index+1}.jpg`} alt={eachItem} class="max-w-full h-auto rounded-lg"> -->
				{/each}
			</div>

		</section>

	</div>

</section>