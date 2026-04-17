<?php /** @var \Kirby\Cms\Block $block */ ?>

<pre>
	<code class="block m-0 p-4 language-<?= $block->language()->or('text') ?>"><?= $block->code()->html(false) ?></code>
</pre>
