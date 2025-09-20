<?php
/** @var \Kirby\Cms\Block $block */

$files = $block->files()->toFiles();
snippet('components/downloads', ['files' => $files]);

?>
