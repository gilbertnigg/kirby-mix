<?php snippet('header') ?>

<article class="__center">

<h1><?= $page->title() ?></h1>
<?php if ($page->headline()->isNotEmpty()) : ?>
	<h3><?= $page->headline()->kti() ?></h3>
<?php endif ?>

<?php if ($cover) : ?>
<p>
	<img
		srcset="<?= $cover->srcset([
			'800w'  => ['width' => 800, 'format' => 'webp'],
			'1600w'  => ['width' => 1600, 'format' => 'webp'],
		])?>"
		sizes="(min-width: 1000px) 100vw"
		src="<?= $cover->thumb(['width'=>1400])->url() ?>" class="w-full" alt="<?= $cover->alt()->or($site->title()) ?>"
	>
</p>
<?php endif ?>

<?= $page->text() ?>

<?php foreach ($imgs as $img) : ?>
<p>
	<img src="<?= $img->thumb(['width'=>1600])->url() ?>" alt="<?= $img->alt() ?>">
</p>
<?php endforeach ?>

<hr>

<?php foreach ($site->index()->template('projekt')->sortBy('date', 'desc') as $projekt) : ?>
<h3><?= $projekt->title() ?></h3>
<?php if ($img = $projekt->images()->template('cover')->first()) : ?>
<p>
	<img src="<?= $img->thumb(['width'=>400])->url() ?>" alt="<?= $img->alt()->or($projekt->title()) ?>">
</p>
<?php endif ?>
<?php endforeach ?>

</article>

<?php snippet('footer') ?>
