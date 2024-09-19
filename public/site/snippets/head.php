<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<title><?= $site->seo_title()->or($site->title()).(!$page->isHomePage() ? ' - '.$page->title() : '') ?></title>
<script>
document.documentElement.classList.replace('no-js', 'is-js');
</script>
<meta name="description" content="<?= $page->seo_description()->or($site->seo_description()) ?>">
<meta property="og:title" content="<?= $site->seo_title()->or($site->title()).(!$page->isHomePage() ? ' - '.$page->title() : '') ?>">
<meta property="og:description" content="<?= $page->seo_description()->or($site->seo_description()) ?>">
<meta property="og:url" content="<?= $page->url() ?>">
<meta property="og:type" content="website">
<meta property="twitter:title" content="<?= $site->seo_title()->or($site->title()).(!$page->isHomePage() ? ' - '.$page->title() : '') ?>">
<meta property="twitter:description" content="<?= $page->seo_description()->or($site->seo_description()) ?>">
<?php if ($seo_icon = $site->files()->template('seo-icon')->first()) : ?>
	<link rel="icon" type="<?= $seo_icon->mime() ?>" href="<?= $seo_icon->crop(32, 32)->url() ?>" sizes="32x32">
	<link rel="icon" type="<?= $seo_icon->mime() ?>" href="<?= $seo_icon->crop(48, 48)->url() ?>" sizes="48x48">
	<link rel="icon" type="<?= $seo_icon->mime() ?>" href="<?= $seo_icon->crop(96, 96)->url() ?>" sizes="96x96">
	<link rel="apple-touch-icon" href="<?= $seo_icon->crop(180, 180)->url() ?>" sizes="180x180">
<?php endif ?>
<?php if (isset($seo_image)) : ?>
    <link rel="image_src" href="<?= $seo_image->thumb(['width'=>1200, 'height'=>630, 'crop'=>true])->url() ?>">
    <meta property="og:image" content="<?= $seo_image->thumb(['width'=>1200, 'height'=>630, 'crop'=>true])->url() ?>">
    <meta property="twitter:image" content="<?= $seo_image->thumb(['width'=>1200, 'height'=>630, 'crop'=>true])->url() ?>">
<?php elseif ($seo_icon = $site->files()->template('seo-image')->first() ?? $seo_icon) : ?>
    <link rel="image_src" href="<?= $seo_icon->thumb(['width'=>1200])->url() ?>">
    <meta property="og:image" content="<?= $seo_icon->thumb(['width'=>1200])->url() ?>">
    <meta property="twitter:image" content="<?= $seo_icon->thumb(['width'=>1200])->url() ?>">
<?php endif ?>

<?php if ($site->theme_color()->isNotEmpty()) : ?>
	<meta name="theme-color" content="<?= $site->theme_color() ?>">
<?php endif ?>

<?= css(['assets/css/app.css?v='.($kirby->option('debug') ? time() : $cache)]) ?>
<?= js('assets/js/app.js?v='.($kirby->option('debug') ? time() : $cache), ['defer' => true]) ?>
