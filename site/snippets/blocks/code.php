<?php /** @var \Kirby\Cms\Block $block */ ?>

<pre>
	<code class="block m-0 p-4 language-<?= $block->language()->or('text') ?>"><?= $block->code()->html(false) ?></code>
</pre>

<script src="https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/components/prism-core.min.js"></script>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/themes/prism.min.css" />
