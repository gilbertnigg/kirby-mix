</main>

<footer class="py-8 mt-16 bg-primary">
	<div class="__center text-white [&_a]:text-white md:flex md:justify-items-start">
		<div class="md:flex-1 md:flex md:space-x-4">
			<?php if ($site->footer_address()) : ?>
			<address class="not-italic">
				<?= $site->footer_address() ?>
			</address>
			<?php endif ?>
			<?php if ($site->footer_links()->isNotEmpty()) : ?>
			<nav id="nav-footer">
				<ul>
				<?php foreach ($site->footer_links()->toPages() as $link) : ?>
					<li class="<?= ($link === $page ? 'is-selected' : '') ?>">
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
