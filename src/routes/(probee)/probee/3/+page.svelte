<script lang="ts">
	import { fly, scale, fade, slide } from 'svelte/transition';
	// import { flip } from 'svelte/animate';

	$: loginText = ""

</script>

<section class="w-full h-screen text-gray-50 transition-all duration-300" style={`background-image: url("/imgs/ds/ds_img-5.jpeg"); background-repeat: no-repeat; background-size: cover; background-position: center;`}>
	<section class="w-full h-full backdrop-blur-md bg-transparent/50 flex flex-col">
		<!-- <header class="">
			[menu]
		</header> -->
		<section class="w-6-12 h-full flex flex-col items-center justify-center space-y-2">
			<div class="w-20 h-20 rounded-full bg-violet-600 flex items-center justify-center shadow">
				<!-- <i class="icon icon-ic_fluent_person_20_regular flex text-6xl"></i> -->
				<img src="/imgs/avatars/003.jpg" alt="avatar" class="w-96 h-full object-cover transition-all duration-1000 rounded-full">
			</div>
			<h1 class="font-medium text-2xl">shinyuu</h1>
			<form action="/">
				<div class="flex items-center justify-center space-x-1 bg-gray-50/20 border border-gray-50/10 rounded-full focus-within:outline-none focus-within:ring focus-within:border-transparent focus-within:border-violet-600 pr-0.5">
					<input bind:value={loginText} type="password" name="loginText" placeholder="Password" id="loginText" class="bg-transparent focus:ring-none focus:outline-none outline-none ring-0 p-1.5 text-sm transition-all">
					{#if loginText.length !== 0}
						<button transition:slide="{{ axis: 'x' }}" class="bg-gray-50 hover:bg-gray-200 text-gray-800 rounded-full p-1 focus:outline-none focus:ring focus:border-violet-600 transition-all">
							<i class="icon icon-ic_fluent_arrow_right_20_regular flex text-lg"></i>
						</button>
					{/if}
				</div>
			</form>
		</section>
		<footer class="flex items-center justify-end p-4">
			<button class="bg-gray-50/20 hover:bg-gray-50/30 text-gray-50 rounded-full p-1 focus:outline-none focus:ring focus:border-violet-600 transition-all">
				<i class="icon icon-ic_fluent_people_20_regular flex text-2xl"></i>
			</button>
		</footer>
	</section>
</section>