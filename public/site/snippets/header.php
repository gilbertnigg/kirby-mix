<!doctype html>
<html lang="de">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<title><?= $site->title() ?></title>
<meta name="description" content="<?= $site->description() ?>">
<meta property="og:title" content="<?= $site->title() ?>">
<meta property="og:description" content="<?= $site->description() ?>">
<meta property="og:url" content="<?= $page->url() ?>">
<meta property="og:type" content="website">
<meta property="twitter:title" content="<?= $site->title() ?>">
<meta property="twitter:description" content="<?= $site->description() ?>">
<?php if ($seoIcon = $site->seoIcon()->toFile()) : ?>
    <link rel="apple-touch-icon" href="<?= $seoIcon->crop(1500, 1500)->url() ?>">
    <link rel="image_src" href="<?= $seoIcon->crop(1500, 1500)->url() ?>">
    <meta property="og:image" content="<?= $seoIcon->crop(1500, 1500)->url() ?>">
    <meta property="twitter:image" content="<?= $seoIcon->crop(1500, 1500)->url() ?>">
<?php endif ?>
<?php if ($site->color()->isNotEmpty()) : ?>
    <meta name="theme-color" content="<?= $site->color() ?>">
<?php endif ?>
<?= css([$kirby->url('assets').'/css/app.css']) ?>
<?= js($kirby->url('assets').'/js/app.js', ['defer' => true]) ?>
</head>

<body>

<header>
</header>

<nav>
</nav>

<main>
