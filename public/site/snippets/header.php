<!doctype html>
<html lang="de" class="no-js">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<title><?= $site->title() ?> - <?= $page->title() ?></title>
<script>
document.documentElement.classList.remove('no-js');
document.documentElement.classList.add('js');
</script>
<script type="nomodule">
document.documentElement.classList.add('is-ie');
</script>
<meta name="description" content="<?= $site->description() ?>">
<meta property="og:title" content="<?= $site->title() ?> - <?= $page->title() ?>">
<meta property="og:description" content="<?= $site->description() ?>">
<meta property="og:url" content="<?= $page->url() ?>">
<meta property="og:type" content="website">
<meta property="twitter:title" content="<?= $site->title() ?> - <?= $page->title() ?>">
<meta property="twitter:description" content="<?= $site->description() ?>">
<?php if ($seoIcon = $site->files()->template('seo-icon')->first()) : ?>
	<link rel="icon" type="image/png" href="<?= $seoIcon->crop(32, 32)->url() ?>" sizes="32x32">
	<link rel="icon" type="image/png" href="<?= $seoIcon->crop(48, 48)->url() ?>" sizes="48x48">
	<link rel="icon" type="image/png" href="<?= $seoIcon->crop(96, 96)->url() ?>" sizes="96x96">
	<link rel="apple-touch-icon" href="<?= $seoIcon->crop(1500, 1500)->url() ?>">
    <link rel="image_src" href="<?= $seoIcon->crop(1500, 1500)->url() ?>">
    <meta property="og:image" content="<?= $seoIcon->crop(1500, 1500)->url() ?>">
    <meta property="twitter:image" content="<?= $seoIcon->crop(1500, 1500)->url() ?>">
<?php endif ?>
<?= css(['assets/css/app.css?v='.($kirby->option('debug') ? time() : 1)]) ?>
<?= js('assets/js/app.js?v='.($kirby->option('debug') ? time() : 1), ['defer' => true]) ?>

</head>

<body class="text-base text-primary subpixel-antialiased">

<header>
</header>

<nav>
</nav>

<main>
