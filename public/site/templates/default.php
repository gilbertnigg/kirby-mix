<?php snippet('header') ?>

<article class="__center">

<h1><?= $page->title() ?></h1>
<?php if ($page->headline()->isNotEmpty()) : ?>
	<h2><?= $page->headline()->kti() ?></h2>
<?php endif ?>

<?php if ($cover = $page->images()->template('cover')->first()) : ?>
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


<h2>Text</h2>
<?= $page->text() ?>


<?php if ($page->images()->template('image')->count()) : ?>
<hr>
<h2>Images</h2>
<div class="__grid items-center">
<?php foreach ($page->images()->template('image')->sortBy('sort', 'asc', 'filename', 'asc') as $img) : ?>
	<div>
		<img src="<?= $img->thumb(['width'=>1600])->url() ?>" alt="<?= $img->alt() ?>">
	</div>
<?php endforeach ?>
</div>
<?php endif ?>


<?php if ($page->files()->template('file')->count()) : ?>
<hr>
<h2>Files</h2>
<ul>
	<?php foreach ($page->files()->template('file')->sortBy('sort', 'asc', 'filename', 'asc') as $file) : ?>
	<li>
		<a href="<?= $file->url() ?>" target="_blank" rel="noopener noreferrer">
			<?= $file->description()->or($file->name()) ?>
		</a>
	</li>
	<?php endforeach ?>
</ul>
<?php endif ?>


<?php if ($pages->template('news')->children()->count()) : ?>
<hr>
<h2>News</h2>
<div class="__grid">
	<?php foreach ($pages->template('news')->children()->not($page)->sortBy('date', 'desc')->listed() as $project) : ?>
	<a href="<?= $project->url() ?>" class="group block no-underline bg-gray-200">
		<?php if ($img = $project->images()->template('cover')->first()) : ?>
		<img src="<?= $img->thumb(['width'=>800, 'height'=>600, 'crop'=>true])->url() ?>" class="transition-opacity group-hover:opacity-80" alt="<?= $img->alt()->or($project->title()) ?>">
		<?php endif ?>
		<span class="block p-4">
			<h3><?= $project->title() ?></h3>
			<?= $project->date()->toDate('Y.m.d') ?><br>
			<?php if ($project->headline()->isNotEmpty()) : ?>
			<?= $project->headline()->kti() ?>
			<?php endif ?>
		</span>
	</a>
	<?php endforeach ?>
</div>
<?php endif ?>

<?php if ($page->blocks()->isNotEmpty()) : ?>
<hr>
<h2>Blocks</h2>
<?php foreach ($page->blocks()->toBlocks() as $block) : ?>
<div id="<?= $block->id() ?>" class="is-block-type-<?= $block->type() ?>">
  <?= $block ?>
</div>
<hr>
<?php endforeach ?>
<?php endif ?>

</article>

<?php snippet('footer') ?>
