<?php
/** @var \Kirby\Cms\Block $block */
?>

<?php if ($files->count()) : ?>
<ul>
	<?php foreach ($block->files()->toFiles() as $file): ?>
	<li>
		<a href="<?= $file->url() ?>" title="<?= $file->filename().' - '.$file->niceSize() ?>" target="_blank" rel="noopener noreferrer">
			<?= $file->description()->or($file->name()) ?>
		</a>
	</li>
	<?php endforeach ?>
</ul>
<?php endif ?>
