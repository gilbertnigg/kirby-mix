<?php snippet('header') ?>

<article class="__center">

<h1><?= $page->title() ?></h1>
<?php if ($page->headline()->isNotEmpty()) : ?>
	<h3><?= $page->headline()->kti() ?></h3>
<?php endif ?>

<?php if ($img = $page->images()->template('cover')->first()) : ?>
<p>
	<figure>
		<img src="<?= $img->resize(1216)->url() ?>" alt="<?= $img->alt()->isNotEmpty() ? $img->alt() : $page->title() ?>">
		<?php if ($img->alt()->isNotEmpty()) : ?>
		<figcaption><?= $img->alt() ?></figcaption>
		<?php endif ?>
	</figure>
</p>
<?php endif ?>

<?= $page->text() ?>

<?php foreach ($page->images()->template('image')->sortBy('sort', 'asc', 'filename', 'asc') as $img) : ?>
<p>
	<?php snippet('picture', ['img'=>$img, 'size'=>1216]) ?>
</p>
<?php endforeach ?>

<hr>

<?php foreach ($site->index()->template('projekt')->sortBy('datum', 'desc') as $projekt) : ?>
<h3><?= $projekt->title() ?></h3>
<?php if ($img = $projekt->images()->template('cover')->first()) : ?>
<p>
	<?php snippet('picture', ['img'=>$img, 'size'=>1216]) ?>
</p>
<?php endif ?>
<?php endforeach ?>

</article>

<?php snippet('footer') ?>
