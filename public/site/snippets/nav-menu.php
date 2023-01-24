<ul>

	<?php /* Level 1 */ foreach ($site->children()->listed() as $_page_l1) : ?>
	<li class="<?= ($page === $_page_l1 || $page->parents()->has($_page_l1) ? 'is-selected' : '') ?>">
		<?= $_page_l1->title()->link() ?>
		<?php if ($_page_l1->children()->listed()->count()) : ?>
		<ul>
		<?php /* Level 2 */ foreach ($_page_l1->children()->listed() as $_page_l2) :  ?>
			<li class="<?= ($page === $_page_l2 ? 'is-selected' : '') ?>">
				<?= $_page_l2->title()->link() ?>
			</li>
		<?php endforeach ?>
		</ul>
		<?php endif ?>
	</li>
	<?php endforeach ?>

</ul>
