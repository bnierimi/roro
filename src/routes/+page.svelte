<script lang="ts">
    import TabBtn from "../components/TabBtn.svelte";

	const newProjectsLength: number = 6;
	let listOfProbees: any[] = [
		{
			id: 1,
			img: "1.jpeg"
		},
		{
			id: 2,
			img: "2.jpeg"
		},
		{
			id: 3,
			img: "3.png"
		},
		{
			id: 4,
			img: "4.jpeg"
		},
		// {
		// 	id: 5,
		// 	img: "5.png"
		// },
	];

</script>

<section class="w-full h-full md:h-screen bg-gray- text-sm flex flex-col md:p-2 space-y-2">

	<section class="w-full h-full bg-violet- flex md:space-x-2">
		
		<!-- Aside -->
		<!-- <aside class="md:w-4/12 lg:w-3/12 h-full bg-gray-200 rounded-lg hidden space-y-2 md:flex flex-col focus:outline-violet-400 focus:ring-none" tabindex="0"> -->
		<aside class="md:w-4/12 lg:w-3/12 h-full bg-gray-50/10 rounded-lg hidden space-y-2 md:flex flex-col focus:outline-violet-400 focus:ring-none">
			<nav class="flex items-start justify-between p-3 pb-2 bg-violet-">
				<!-- <button class="focus:outline-none focus:ring-transparent focus:outline-violet-400"> -->
				<a href="http://twitter.com/bnierimi" class="focus:outline-none focus:ring-transparent focus:outline-violet-400">
					<div class="flex space-x-2 bg-gray- p-1 rounded-md">
						<div class="rounded-full w-12 h-12 bg-violet- border-2 border-violet-600 p-1">
							<img src="/imgs/avatars/001.jpg" alt="avatar" class="w-96 h-full object-cover transition-all duration-1000 rounded-full">
						</div>
						<div class="text-start">
							<h1 class="font-medium text-lg">Yonko::Eri</h1>
							<!-- <a href="http://twitter.com/bnierimi" class="focus:ring-transparent focus:outline-violet-400"> -->
								<!-- <p class="text-violet-600 hover:text-violet-500">@bnierimi</p> -->
								<p class="text-violet-600">@bnierimi</p>
							<!-- </a> -->
						</div>
					</div>
				</a>
				<!-- <h2 class="font-medium text-xl">n/Home</h2> -->
			</nav>

			<div class="w-full h-full bg-violet- overflow-y-auto space-y-1 p-4 pt-2">
				
				<TabBtn isActive={true} isLink={true} href={"#contact"}>
					<i class="icon icon-ic_fluent_contact_card_20_regular flex text-lg"></i>
					<p class="font-medium">Contact</p>
				</TabBtn>
				
				<TabBtn isLink={true} href={"#probee"}>
					<i class="icon icon-ic_fluent_library_20_regular flex text-lg"></i>
					<p class="font-medium">Projects</p>
				</TabBtn>
				
				<TabBtn>
					<i class="icon icon-ic_fluent_toggle_right_20_regular flex text-lg"></i>
					<p class="font-medium">Light mode</p>
				</TabBtn>

				<!-- <TabBtn isActive={true} isLink={true} href={"/"}>
					<i class="icon icon-ic_fluent_tent_20_regular flex text-lg"></i>
					<p class="font-medium">Home</p>
				</TabBtn> -->
				
				<!-- <TabBtn isLink={true} href={"/blog"}>
					<i class="icon icon-ic_fluent_news_20_regular flex text-lg"></i>
					<p class="font-medium">Blog</p>
				</TabBtn> -->

			</div>
		</aside>

		<!-- Main Body -->
		<!-- <main class="w-full md:w-8/12 lg:w-9/12 h-full bg-gray-200 md:rounded-lg overflow-y-auto space-y-4 focus:outline-violet-400 focus:ring-none" tabindex="0"> -->
		<main class="w-full md:w-8/12 lg:w-9/12 h-full bg-gray-50/10 md:rounded-lg overflow-y-auto space-y-1 focus:outline-violet-400 focus:ring-none">
			
			<!-- Nav bar on small screen -->
			<nav class="flex md:hidden items-start justify-between p-3 bg-violet-">
				<!-- <button class="focus:outline-none focus:ring-transparent focus:outline-violet-400"> -->
					<a href="http://twitter.com/bnierimi" class="focus:outline-violet-400 focus:ring-none">
						<div class="flex items-center space-x-2 bg-gray- p-1 rounded-md">
							<div class="rounded-full w-32 h-32 bg-violet- border-2 border-violet-600 p-1">
								<img src="/imgs/avatars/001.jpg" alt="avatar" class="w-96 h-full object-cover transition-all duration-1000 rounded-full">
							</div>
							<div class="text-start">
								<h1 class="font-medium text-lg">Yonko::Eri</h1>
								<!-- <a href="https://twitter.com/bnierimi" class="focus:ring-transparent focus:outline-violet-400"> -->
									<p class="text-violet-600">@bnierimi</p>
								<!-- </a> -->
							</div>
						</div>
					</a>
					
					<!-- <button class="focus:outline-violet-400 focus:ring-none rounded-full p-1.5 hover:bg-base/50">
						<i class="icon icon-ic_fluent_more_horizontal_20_regular flex text-lg"></i>
					</button> -->
					<!-- <h2 class="font-medium text-xl">n/Home</h2> -->
			</nav>

			<!-- Contact -->
			<section id="contact" class="w-full p-4 space-y-2">
				<h3 class="font-medium text-xl opacity-70">$contact</h3>
				<div class="flex items-center space-x-2">
					<a href="https://twitter.com/bnierimi" class="rounded-full">
						<div class="w-7 h-7 bg-violet-600 hover:bg-violet-700 flex items-center justify-center rounded-full transition-all duration-300">
							<i class="mdi mdi-twitter text-xl rounded-full "></i>
						</div>
					</a>
					<a href="mailto:bnierimi@gmail.com" class="rounded-full">
						<div class="w-7 h-7 bg-violet-600 hover:bg-violet-700 flex items-center justify-center rounded-full transition-all duration-300">
							<i class="mdi mdi-gmail text-xl rounded-full "></i>
						</div>
					</a>
					<a href="https://github.com/bnierimi" class="rounded-full">
						<div class="w-7 h-7 bg-violet-600 hover:bg-violet-700 flex items-center justify-center rounded-full transition-all duration-300">
							<i class="mdi mdi-github text-xl rounded-full "></i>
						</div>
					</a>
					<!-- <a href="https://bluesky.com/bnierimi" class="rounded-full">
						<div class="w-7 h-7 bg-violet-600 hover:bg-violet-700 flex items-center justify-center rounded-full transition-all duration-300">
							<i class="icon icon-ic_fluent_cloud_20_regular flex text-xl rounded-full "></i>
						</div>
					</a> -->
					<!-- <a href="/" class="rounded-full">
						<div class="w-7 h-7 bg-violet-600 hover:bg-violet-700 flex items-center justify-center rounded-full transition-all duration-300">
							<i class="mdi mdi-discord text-xl rounded-full "></i>
						</div>
					</a> -->
				</div>
			</section>
			
			<!-- List of projects Section -->
			<section id="probee" class="w-full h-full p-4 space-y-3">
				<h3 class="font-medium text-xl opacity-70">$projects</h3>
				<div class="w-full h- grid grid-cols-2 md:grid-cols-3 gap-4">
					{#each listOfProbees as eachProbee, index}
						<a href={`probee/${eachProbee.id}`} class="rounded-lg focus:outline-violet-400 focus:ring-none">
							<div class="relative rounded-lg ring-2 ring-transparent hover:ring-violet-500 ">
								<img src={`/imgs/thumbnail-${eachProbee.img}`} alt={`thumbnail-${eachProbee.img}`} class="max-w-full h-auto rounded-lg">
								<p class="p-2 rounded-lg font-medium">probee/{eachProbee.id}</p>
							</div>
						</a>
						<!-- <img src={`/imgs/img-${index+1}.jpg`} alt={eachItem} class="max-w-full h-auto rounded-lg"> -->
					{/each}
					<!-- <h1 class="font-semibold text-4xl">Oluwanierimi</h1>
					<h1 class="font-semibold text-4xl">nerimi</h1>
					<h1 class="font-semibold text-4xl">bnerimi</h1>
					<h1 class="font-semibold text-4xl">bnierimi</h1> -->
				</div>

				<div class="flex">
					<a href="https://github.com/bnierimi" class="focus:outline-violet-400 focus:ring-none rounded-lg">
						<div class="rounded-lg px-4 py-2 bg-violet-600 hover:bg-violet-700 text-sm font-medium transition-all duration-300">
							<p class="">See more</p>
						</div>
					</a>
				</div>
			</section>

			<!-- Footer -->
			<footer id="footer" class="w-full p-2 bg-base/50 text-gray-500 hover:text-gray-400 transition-all">
				<div class="w-11/12 mx-auto text-center">
					<a href="/" class="focus:outline-violet-400 focus:ring-none">
						<p class="">bnierimi &copy; 2023</p>
					</a>
				</div>
			</footer>
	
		</main>

	</section>

	<!-- </div> -->

</section>