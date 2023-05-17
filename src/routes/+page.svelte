<script lang="ts">
    import TabBtn from "../components/TabBtn.svelte";

	const listOfProbees = [
		"one", "two", "three", "four", "five", "six"
	]
</script>

<section class="w-full h- bg-gray-100">

	<section class="w-full h-screen bg-gray- text-sm">
		
		<div class="w-full h-full flex flex-col p-2 space-y-2">

			<!-- <div class="w-full flex items-center justify-center space-x-2">
				
				<div class="w-3/12 h-full bg-green-">
					...
				</div>
				
				<div class="w-9/12 h-full bg-green-">
					<div class="w-5/12 rounded-full bg-gray-300 flex items-center justify-center space-x-1 pl-1">
						<button class="p-1 rounded-full bg-rose-500">
							<i class="icon icon-ic_fluent_link_20_regular flex text-lg"></i>
						</button>
						<input type="text" name="" id="" value="nierimi/repo/makeit" class="p-1.5 w-full rounded-full bg-transparent text-center">
					</div>
				</div>
				
			</div> -->
	
			<section class="w-full h-full bg-rose- flex space-x-2">
				
				<!-- Aside -->
				<aside class="w-3/12 h-full bg-gray-200 rounded-lg space-y-2 flex flex-col">
					<nav class="flex items-start justify-between p-3 pb-2 bg-rose-">
						<!-- <button class="focus:outline-none focus:ring-transparent focus:outline-violet-500"> -->
						<button class="focus:outline-violet-500 focus:ring-none">
							<div class="flex space-x-2 bg-gray- p-1 rounded-md">
								<div class="rounded-full w-12 h-12 bg-rose-500"></div>
								<div class="">
									<h1 class="font-medium text-lg">Yonko::Eri</h1>
									<a href="http://twitter.com/bnierimi" class="focus:ring-transparent focus:outline-violet-500"><p class="text-blue-500 hover:text-blue-600">@bnierimi</p></a>
								</div>
								<!-- <a href="http://github.com/bnierimi"><p class="text-blue-500 hover:text-blue-600 focus:outline-none focus:ring-transparent focus:outline-violet-500">@nierimi</p></a> -->
							</div>
						</button>
						<!-- <h2 class="font-medium text-xl">n/Home</h2> -->
					</nav>

					<div class="w-full h-full bg-rose- overflow-y-auto space-y-1 p-4 pt-2">

						<TabBtn isActive={true}>
							<i class="icon icon-ic_fluent_tent_20_regular flex text-lg"></i>
							<p class="font-medium">Home</p>
						</TabBtn>
						
						<TabBtn>
							<i class="icon icon-ic_fluent_library_20_regular flex text-lg"></i>
							<p class="font-medium">Projects</p>
						</TabBtn>

						<TabBtn>
							<i class="icon icon-ic_fluent_news_20_regular flex text-lg"></i>
							<p class="font-medium">Blog</p>
						</TabBtn>

						<TabBtn>
							<i class="icon icon-ic_fluent_contact_card_20_regular flex text-lg"></i>
							<p class="font-medium">Contact</p>
						</TabBtn>

						<TabBtn>
							<i class="icon icon-ic_fluent_toggle_right_20_regular flex text-lg"></i>
							<p class="font-medium">Light mode</p>
						</TabBtn>

					</div>
				</aside>

				<!-- Main Body -->
				<main class="w-9/12 h-full bg-gray-200 rounded-lg overflow-y-auto" tabindex="-1">
					
					<!-- <section class="w-full h-screen bg-slate-400 flex flex-col items-center justify-center">
						<h1 class="font-medium text-5xl">Yo!</h1>
						<p>check out my probees</p>
					</section> -->
					
					<section class="w-full h-full p-4 space-y-3">

						<h4 class="font-medium text-sm opacity-50">List of probees</h4>
						<div class="w-full h- columns-2 md:columns-3 lg:columns-4 gap-4">
							{#each listOfProbees as eachProbee, index}
								<a href={`/${eachProbee}`} class="rounded-lg focus:outline-violet-500 focus:ring-none">
									<div class="relative rounded-lg ring-2 ring-transparent hover:ring-rose-300 mb-4 ">
										<div class="p-2 absolute bottom-0">
											<!-- <h2 class="font-medium text-2xl">n/{eachProbee}</h2> -->
											<article class="p-2 rounded-lg bg-gray-50/20 backdrop-blur-md text-gray-50 text-xs font-medium">/{eachProbee}</article>
											<!-- <h4 class="font-semibold text-lg capitalize">{eachItem}:</h4>
											<p class="text-sm">img-{index} {eachItem} quo corrupti magnam quae, dolor dicta consectetur?</p> -->
										</div>
										<img src={`/imgs/img-${index+1}.jpg`} alt={eachProbee} class="max-w-full h-auto rounded-lg">
									</div>
								</a>
								<!-- <img src={`/imgs/img-${index+1}.jpg`} alt={eachItem} class="max-w-full h-auto rounded-lg"> -->
							{/each}
							{#each listOfProbees as eachProbee, index}
								<a href={`/${eachProbee}`} class="rounded-lg focus:outline-violet-500 focus:ring-none">
									<div class="relative rounded-lg ring-2 ring-transparent hover:ring-rose-300 mb-4 ">
										<div class="p-2 absolute bottom-0">
											<!-- <h2 class="font-medium text-2xl">n/{eachProbee}</h2> -->
											<article class="p-2 rounded-lg bg-gray-50/20 backdrop-blur-md text-gray-50 text-xs font-medium">/{eachProbee}</article>
											<!-- <h4 class="font-semibold text-lg capitalize">{eachItem}:</h4>
											<p class="text-sm">img-{index} {eachItem} quo corrupti magnam quae, dolor dicta consectetur?</p> -->
										</div>
										<img src={`/imgs/img-${index+1}.jpg`} alt={eachProbee} class="max-w-full h-auto rounded-lg">
									</div>
								</a>
								<!-- <img src={`/imgs/img-${index+1}.jpg`} alt={eachItem} class="max-w-full h-auto rounded-lg"> -->
							{/each}
							{#each listOfProbees as eachProbee, index}
								<a href={`/${eachProbee}`} class="rounded-lg focus:outline-violet-500 focus:ring-none">
									<div class="relative rounded-lg ring-2 ring-transparent hover:ring-rose-300 mb-4 ">
										<div class="p-2 absolute bottom-0">
											<!-- <h2 class="font-medium text-2xl">n/{eachProbee}</h2> -->
											<article class="p-2 rounded-lg bg-gray-50/20 backdrop-blur-md text-gray-50 text-xs font-medium">/{eachProbee}</article>
											<!-- <h4 class="font-semibold text-lg capitalize">{eachItem}:</h4>
											<p class="text-sm">img-{index} {eachItem} quo corrupti magnam quae, dolor dicta consectetur?</p> -->
										</div>
										<img src={`/imgs/img-${index+1}.jpg`} alt={eachProbee} class="max-w-full h-auto rounded-lg">
									</div>
								</a>
								<!-- <img src={`/imgs/img-${index+1}.jpg`} alt={eachItem} class="max-w-full h-auto rounded-lg"> -->
							{/each}
						</div>
	
					</section>
			
				</main>
			</section>

		</div>

	</section>
<!-- 
	<section class="w-full h-full flex items-center justify-center">

		
	</section> -->

</section>