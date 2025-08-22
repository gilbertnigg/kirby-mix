<?php /** @var \Kirby\Cms\Block $block */ ?>

<?php
snippet('components/dialog', [
	'id'             => $block->id(),
	'dialog_button'  => $block->button(),
	'dialog_content' => $block->text(),
])
?>
