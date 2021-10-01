<?php snippet('header') ?>

<article class="__center">

	<h1><?= $page->title() ?></h1>
	<?php if ($page->headline()->isNotEmpty()) : ?>
		<h3><?= $page->headline()->kti() ?></h3>
	<?php endif ?>
	<?= $page->text() ?>

	<?php foreach ($page->images()->template('image')->sortBy('sort', 'asc', 'filename', 'asc') as $img) : ?>
	<figure>
	    <img src="<?= $img->resize(1200)->url() ?>" alt="<?= $img->caption()->isNotEmpty() ? $img->caption() : $page->title() ?>">
	    <?php if ($img->caption()->isNotEmpty()) : ?>
	    <figcaption><?= $img->caption() ?></figcaption>
	    <?php endif ?>
	</figure>
	<?php endforeach ?>

</article>

<?php snippet('footer') ?>
