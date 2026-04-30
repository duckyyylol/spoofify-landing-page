<script lang="ts">
	import "duckylib/styles/globals.css";
	import { browser } from "$app/environment";
	import { goto } from "$app/navigation";
	import favicon from "$lib/assets/favicon.png";
	import { Website, Header, setUserData, getTheme } from "duckylib";
	import { onMount } from "svelte";
	import { page } from "$app/state";

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Spoofify Home</title>
</svelte:head>

<Website options={{ theme: getTheme() }}>
	<Header emoji="🎶" label="Spoofify" defaultNav={true} nav={[
		{label: "Documentation", symbol: "book", pathname: "https://docs.ducky.wiki/projects/spoofify"},
		{label: "Source Code", symbol: "code", pathname: "https://github.com/duckyyylol/Spoofify"},
		]} />

	{@render children()}
	<!-- <div></div> -->
</Website>

<style>
	div {
		height: 100%;
	}

	:global(::-webkit-scrollbar) {
		display: none !important;
		width: 0px !important;
		height: 0px !important;
		background: transparent !important;
	}

	:global(html, body, .chat) {
		scrollbar-width: none !important; /* Firefox fallback */
		-ms-overflow-style: none !important; /* Edge fallback */
	}
</style>
