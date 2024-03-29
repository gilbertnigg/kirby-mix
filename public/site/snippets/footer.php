</main>

<footer class="py-8 mt-16 bg-primary">
	<div class="__center text-white [&_a]:text-white md:flex md:justify-items-start">
		<div class="md:flex-1 md:flex md:space-x-4">
			<?php if ($site->footer_address()->isNotEmpty()) : ?>
			<address class="not-italic">
				<?= $site->footer_address() ?>
			</address>
			<?php endif ?>
			<?php if ($nav_footer = $site->children()->template('footer-index')->first()) : ?>
			<nav id="nav-footer">
				<ul>
				<?php foreach ($nav_footer->children()->listed() as $link) : ?>
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
