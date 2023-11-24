<?php
/** @var \Kirby\Cms\Block $block */
?>
<div class="__grid is-<?= $block->columns() ?>">
<?php foreach ($block->repeater()->toBlocks() as $repeater): ?>
	<div class="<?= $block->border()->toBool() ? 'p-2 border border-primary' : '' ?>">
		<h2><?= $repeater->title() ?></h2>
		<?= $repeater->text() ?>
	</div>
<?php endforeach ?>
</div>
