<?php snippet('header') ?>

<article class="__center">

<h1><?= $page->title() ?></h1>
<?php if ($page->headline()->isNotEmpty()) : ?>
	<h3><?= $page->headline()->kti() ?></h3>
<?php endif ?>

<?php if ($cover) : ?>
<p>
	<figure>
		<img src="<?= $cover->thumb(['width'=>800, 'height'=>600, 'crop'=>true])->url() ?>" alt="<?= $cover->alt()->isNotEmpty() ? $cover->alt() : $page->title() ?>">
		<?php if ($cover->alt()->isNotEmpty()) : ?>
		<figcaption><?= $cover->alt() ?></figcaption>
		<?php endif ?>
	</figure>
</p>
<?php endif ?>

<?= $page->text() ?>

<?php foreach ($imgs as $img) : ?>
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
