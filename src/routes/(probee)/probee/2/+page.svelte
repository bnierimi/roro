<script lang="ts">
	import { fly, fade, scale, slide } from 'svelte/transition';
	import { flip } from "svelte/animate";
    // import Animate from '../../../components/Animate.svelte';
	import { onMount } from 'svelte';

	let isReady = false;
	onMount(() => isReady = true);
</script>

<section class="w-full h-full bg-base text-gray-50 transition-all">

	<div class="w-full h-full lg:h-screen flex flex-col items-center">

		<!-- SmallScreen::Nav Bar -->
		<nav class="lg:hidden p-2 bg-rose-">
			<ul class="flex items-center justify-center space-x-4">
				<li class="">
					<a href="/">
						<p class="p-1 border-b-2 border-transparent hover:border-secondary transition-all opacity-50 hover:opacity-100">/probee</p>
					</a>
				</li>
				<li class="">
					<a href="/">
						<p class="p-1 border-b-2 border-transparent hover:border-secondary transition-all opacity-50 hover:opacity-100">/contact</p>
					</a>
				</li>
			</ul>
		</nav>

		<!-- Body -->
		<div class="w-10/12 md:w-5/12 lg:h-4/6 mx-auto my-auto bg- p-2 pb-10 lg:p-0">
			<div class="w-full h-full">
				<section class="w-full h-full grid lg:flex relative bg-slate- justify-end items-center">

					{#if isReady}
						<div transition:slide="{{ duration: 600 }}" class="block lg:hidden -space-y-16 lg:-space-y-1.5">
							<h1 class="text-[4.9rem] lg:text-7xl font-bold uppercase text-secondary">joychan</h1>
							<!-- data-sal="slide-up" data-sal-delay="300" data-sal-easing="ease-in" -->
							<h1 class="text-[4.9rem] lg:text-7xl font-bold uppercase text-transparent text-stroke">joychan</h1>
							<!-- data-sal="slide-up" data-sal-delay="300" data-sal-easing="ease-in" -->
							<h1 class="text-[4.9rem] lg:text-7xl font-bold uppercase text-third">joychan</h1>
							<!-- data-sal="slide-up" data-sal-delay="300" data-sal-easing="ease-in" -->
						</div>
					{/if}

					<!-- First Half :: \w the text -->
					<div class="order-2 lg:order-1 w-full lg:w-6/12 h-full z-10 lg:absolute left-0 flex flex-col justify-center space-y-4">
						
						{#if isReady}
							<div transition:slide="{{ duration: 600 }}" class="hidden lg:block -space-y-10 lg:-space-y-1.5">
								<h1 class="text-7xl font-bold uppercase text-secondary">joychan</h1>
								<!-- data-sal="slide-up" data-sal-delay="300" data-sal-easing="ease-in" -->
								<h1 class="text-7xl font-bold uppercase text-transparent text-stroke">joychan</h1>
								<!-- data-sal="slide-up" data-sal-delay="300" data-sal-easing="ease-in" -->
								<h1 class="text-7xl font-bold uppercase text-third">joychan</h1>
								<!-- data-sal="slide-up" data-sal-delay="300" data-sal-easing="ease-in" -->
							</div>
						{/if}
						
						{#if isReady}
							<p  transition:fly="{{ duration: 600 }}" class="leading-5">
								Joychan Ojiro is the 28th commander(Dancho?) of the Survey Corps, named so by Erwin Smith before his death.
							</p>
						{/if}
	
						<div class="">
							<div class="w-8/12 h-1 ml-3 flex items-center justify-center space-x-3">
								<div class="w-full h-full stripe-primary"></div>
							</div>
						</div>
	
						{#if isReady}
							<div transition:slide="{{ duration: 700, axis: 'x' }}" class="-space-y-1">
								<h2 class="text-5xl font-bold uppercase text-secondary">28th</h2>
								<h3 class="text-lg font-medium uppercase -space-y-2">
									<p class="">commander</p>
									<p class="">survey corps</p>
								</h3>
							</div>
						{/if}
						<div class="w-20 h-1 stripe-primary absolute -bottom-2 left-0"></div>
						<div class="w-56 h-24 border-l-4 border-b- border-third absolute -bottom-2 -left-3"></div>
						<!-- <div class="w-28 h-28 stripe-1">bla</div> -->
					</div>
	
					<!-- Second Half :: \w the image -->
					<div class="order-1 lg:order-2 w-full lg:w-7/12 h-full relative">
						{#if isReady}
							<div transition:slide="{{ duration: 500, axis: 'y' }}" class="w-14 h-4 stripe-primary absolute -top-5 right-0"></div>
							<div transition:slide="{{ duration: 500, axis: 'x' }}" class="w-56 h-20 border-r-4 border-t-4 border-third absolute top-0 right-0"></div>
						{/if}
						<div class="w-full h-full p-2">
							{#if isReady}
								<div transition:slide="{{ duration: 600, axis: 'y' }}" class="w-full h-full flex flex-col items-end justify-between bg-">
									<img src="/imgs/avatars/002.jpg" alt="avatar" class="w-96 h-full object-cover hover:object-left transition-all duration-1000">
								</div>
							{/if}
						</div>
						
						{#if isReady}
							<div transition:slide="{{ duration: 500, axis: 'y' }}" class="w-20 h-20 border-r-4 border-b-4 border-secondary absolute bottom-0 right-0"></div>
							<div transition:slide="{{ duration: 500, axis: 'x' }}" class="w-5 h-10 stripe-third absolute bottom-0 -right-6"></div>
	
							<div transition:slide="{{ duration: 500, axis: 'y' }}" class="w-20 h-20 border-l-4 border-b-4 border-third absolute bottom-0 left-0"></div>
							<div transition:slide="{{ duration: 500, axis: 'x' }}" class="w-14 h-2 stripe-secondary absolute bottom-3 left-3"></div>
						{/if}
					</div>
	
				</section>
			</div>
		</div>
		
		<!-- LargeScreen::Nav Bar -->
		<nav class="hidden lg:block p-2 bg-rose-">
			<ul class="flex items-center justify-center space-x-4">
				<li class="">
					<a href="/">
						<p class="p-1 border-b-2 border-transparent hover:border-secondary transition-all opacity-50 hover:opacity-100">/probee</p>
					</a>
				</li>
				<li class="">
					<a href="/">
						<p class="p-1 border-b-2 border-transparent hover:border-secondary transition-all opacity-50 hover:opacity-100">/contact</p>
					</a>
				</li>
			</ul>
		</nav>

	</div>

</section>

<style>
	.text-stroke {
		/* -webkit-text-stroke: s; */
		-webkit-text-stroke-color: #f9fafb;
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