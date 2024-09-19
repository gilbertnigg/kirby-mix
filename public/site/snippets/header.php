<!doctype html>
<html lang="de" class="no-js">
<head>
<?php snippet('head') ?>
</head>

<body>

<header>
	<button id="navicon" aria-label="Menu open/close">
		<span class="is-open">
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /></svg>
		</span>
		<span class="is-closed">
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
		</span>
	</button>
</header>

<nav id="nav-main" class="is-responsive is-dropdown">
	<?php snippet('nav-main') ?>
</nav>

<main id="main">
