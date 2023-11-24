<?php
/** @var \Kirby\Cms\Block $block */
?>
<ul>
	<?php foreach ($block->files()->toFiles() as $file): ?>
	<li>
		<a href="<?= $file->url() ?>" target="_blank" rel="noopener noreferrer">
			<?= $file->description()->or($file->name()) ?>
		</a>
	</li>
	<?php endforeach ?>
</ul>
