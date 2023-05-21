<script lang="ts">
	import { fly, fade, scale, slide } from 'svelte/transition';
	import { flip } from "svelte/animate";
    // import Animate from '../../../components/Animate.svelte';
	import { onMount } from 'svelte';

	let isReady = false;
	onMount(() => isReady = true);
</script>

<section class="w-full h-full bg-base text-gray-400 transition-all">

	<div class="w-full h-screen flex flex-col items-center justify-center relative p-10 md:p-0">
		
		{#if isReady}
			<div transition:slide="{{ duration: 600 }}" class="block lg:hidden -space-y-10 lg:-space-y-1.5">
				<h1 class="text-6xl font-bold uppercase text-secondary">bnierimi</h1>
				<!-- data-sal="slide-up" data-sal-delay="300" data-sal-easing="ease-in" -->
				<h1 class="text-6xl font-bold uppercase text-transparent text-stroke ml-2">bnierimi</h1>
				<!-- data-sal="slide-up" data-sal-delay="300" data-sal-easing="ease-in" -->
				<h1 class="text-6xl font-bold uppercase text-third ml-4">bnierimi</h1>
				<!-- data-sal="slide-up" data-sal-delay="300" data-sal-easing="ease-in" -->
			</div>
		{/if}

		<div class="w-11/12 mx-auto md:w-full h-full relative flex flex-col md:flex-row items-center justify-center p-4 md:p-0 bg-violet-">
			{#if isReady}
				<h1 transition:slide="{{ duration: 600 }}" class="hidden md:flex absolute left-[20%] z-10 md:-rotate-90 text-stroke font-bold text-transparent text-6xl bg-slate-">Nierimi B Radiance</h1>
			{/if}
			<div class="w-full md:w-3/12 h-full md:h-4/5 mx-auto relative bg-violet-">
				<div class="w-full h-full flex justify-center md:justify-end bg-violet- relative">
					
					<!-- <h1 class="absolute z-10 w-full top-0 left-0 -rotate-90 text-stroke font-bold text-transparent text-6xl bg-slate-700">Nierimi B Radiance</h1> -->
					{#if isReady}
						<div transition:scale="{{ duration: 600 }}" class="w-10/12 h-full flex flex-col items-end justify-between bg- pl-2 relative ">
							<div transition:slide="{{ duration: 500, axis: 'y' }}" class="w-full h-52 md:h-72 border-r-2 border-t-2 border-gray-400 absolute -top-3 -right-3"></div>
							<!-- <div transition:slide="{{ duration: 500, axis: 'x' }}" class="w-5 h-10 stripe-third absolute top-0 -right-9 skew-y-12"></div> -->
							
							<img src="/imgs/avatars/001.jpg" alt="avatar" class="w-96 h-full object-cover transition-all duration-1000 mb-3">
							
							<div class="h-10 w-full flex items-center space-x-1">
								<div transition:scale="{{ duration: 600 }}" class="h-full w-3/12 stripe-secondary"></div>
								<div transition:slide="{{ duration: 500, axis: 'y' }}" class="h-full w-full border-2 border-third flex items-center justify-center">
									<a href="https://twitter.com/bnierimi" class="focus:outline-none focus:ring focus:border-violet-600">
										<p class="text-sm">@bnierimi</p>
									</a>
								</div>
							</div>
						</div>
					{/if}

					{#if isReady}
						<div transition:slide="{{ duration: 500, axis: 'y' }}" class="w-4 absolute bottom-12 right-2 md:-right-5 uppercase bg-rose- font-medium text-center">
							<p>r</p>
							<p>a</p>
							<p>d</p>
							<p>i</p>
							<p>a</p>
							<p>n</p>
							<p>c</p>
							<p>e</p>
						</div>
					{/if}
				</div>
			</div>
		</div>

	</div>

</section>

<style>
	.text-stroke {
		/* -webkit-text-stroke: s; */
		-webkit-text-stroke-color: rgb(156 163 175);
		-webkit-text-stroke-width: 2px;
	}

	.stripe-primary {
		background: repeating-linear-gradient(-45deg, transparent, transparent 4px, #9d00ff 4px, #9d00ff 7px);
	}
	.stripe-secondary {
		background: repeating-linear-gradient(-45deg, transparent, transparent 4px, #e008ff 4px, #e008ff 7px);
	}
	.stripe-third {
		background: repeating-linear-gradient(-45deg, transparent, transparent 4px, #2ed1f2 4px, #2ed1f2 7px);
	}
</style>