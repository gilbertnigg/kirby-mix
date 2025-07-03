<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<script>
document.documentElement.classList.replace('no-js', 'is-js');
</script>
<title><?= seo_title() ?></title>
<link rel="canonical" href="<?= url($page, ['params'=>params()]) ?>">
<meta name="description" content="<?= seo_description() ?>">
<meta property="og:title" content="<?= seo_title() ?>">
<meta property="og:description" content="<?= seo_description() ?>">
<meta property="og:url" content="<?= url($page, ['params'=>params()]) ?>">
<meta property="og:type" content="website">

<?php if (seo_icon()) : ?>
<link rel="icon" type="<?= seo_icon()->mime() ?>" href="<?= seo_icon()->crop(32, 32)->url() ?>" sizes="32x32">
<link rel="icon" type="<?= seo_icon()->mime() ?>" href="<?= seo_icon()->crop(48, 48)->url() ?>" sizes="48x48">
<link rel="icon" type="<?= seo_icon()->mime() ?>" href="<?= seo_icon()->crop(96, 96)->url() ?>" sizes="96x96">
<link rel="apple-touch-icon" href="<?= seo_icon()->crop(180, 180)->url() ?>" sizes="180x180">
<?php endif ?>

<?php if (seo_image()) : ?>
<link rel="image_src" href="<?= seo_image()->thumb(['width'=>1200, 'height'=>630, 'crop'=>true])->url() ?>">
<meta property="og:image" content="<?= seo_image()->thumb(['width'=>1200, 'height'=>630, 'crop'=>true])->url() ?>">
<?php elseif (seo_icon()) : ?>
<link rel="image_src" href="<?= seo_icon()->thumb(['width'=>1200])->url() ?>">
<meta property="og:image" content="<?= seo_icon()->thumb(['width'=>1200])->url() ?>">
<?php endif ?>

<?= css(['assets/css/app.css?v='.($kirby->option('debug') ? time() : $cache)]) ?>
<?= js('assets/js/app.js?v='.($kirby->option('debug') ? time() : $cache), ['defer' => true]) ?>
