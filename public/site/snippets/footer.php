</main>

<footer class="py-8 mt-16 bg-primary">
	<div class="__center text-white [&_a]:text-white md:flex md:justify-items-start">
		<div class="md:flex-1 md:flex md:space-x-4">
			<?php if ($site->footer_address()->isNotEmpty()) : ?>
			<address class="not-italic">
				<?= $site->footer_address() ?>
			</address>
			<?php endif ?>
			<?php if ($site->children()->template('footer-index')->first()->children()->template('footer')->listed()->count()) : ?>
			<nav id="nav-footer">
				<ul>
				<?php foreach ($site->children()->template('footer-index')->first()->children()->template('footer')->listed() as $link) : ?>
					<li class="<?= e($link === $page, 'is-selected') ?>">
						<?= $link->title()->link() ?>
					</li>
				<?php endforeach ?>
				</ul>
			</nav>
			<?php endif ?>
		</div>
		<div>
			<p>
				...<br>
				..<br>
				.
			</p>
		</div>
	</div>
</footer>

</body>
</html>
