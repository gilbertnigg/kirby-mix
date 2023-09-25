<!doctype html>
<html lang="de" class="no-js no-module">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<title><?= $site->seo_title()->or($site->title()).(!$page->isHomePage() ? ' - '.$page->title() : '') ?></title>
<script type="module">
document.documentElement.classList.remove('no-module');
document.documentElement.classList.add('is-module');
</script>
<script>
document.documentElement.classList.remove('no-js');
document.documentElement.classList.add('is-js');
</script>
<meta name="description" content="<?= $page->seo_description()->or($site->seo_description()) ?>">
<meta property="og:title" content="<?= $site->seo_title()->or($site->title()).(!$page->isHomePage() ? ' - '.$page->title() : '') ?>">
<meta property="og:description" content="<?= $page->seo_description()->or($site->seo_description()) ?>">
<meta property="og:url" content="<?= $page->url() ?>">
<meta property="og:type" content="website">
<meta property="twitter:title" content="<?= $site->seo_title()->or($site->title()).(!$page->isHomePage() ? ' - '.$page->title() : '') ?>">
<meta property="twitter:description" content="<?= $page->seo_description()->or($site->seo_description()) ?>">
<?php if ($seoIcon = $site->files()->template('seo-icon')->first()) : ?>
	<link rel="icon" type="<?= $seoIcon->mime() ?>" href="<?= $seoIcon->crop(32, 32)->url() ?>" sizes="32x32">
	<link rel="icon" type="<?= $seoIcon->mime() ?>" href="<?= $seoIcon->crop(48, 48)->url() ?>" sizes="48x48">
	<link rel="icon" type="<?= $seoIcon->mime() ?>" href="<?= $seoIcon->crop(96, 96)->url() ?>" sizes="96x96">
	<link rel="apple-touch-icon" href="<?= $seoIcon->crop(1500, 1500)->url() ?>">
    <link rel="image_src" href="<?= $seoIcon->crop(1500, 1500)->url() ?>">
    <meta property="og:image" content="<?= $seoIcon->crop(1500, 1500)->url() ?>">
    <meta property="twitter:image" content="<?= $seoIcon->crop(1500, 1500)->url() ?>">
<?php endif ?>
<?= css(['assets/css/app.css?v='.($kirby->option('debug') ? time() : 1)]) ?>
<?= js('assets/js/app.js?v='.($kirby->option('debug') ? time() : 1), ['defer' => true]) ?>

</head>

<body>

<header>
	<button id="navicon" aria-label="Menu open/close">
		<span class="is-open">
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /></svg>
		</span>
		<span class="is-closed">
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
		</span>
	</button>
</header>

<nav class="is-responsive is-dropdown">
	<?php snippet('nav-menu') ?>
</nav>

<main id="main">
