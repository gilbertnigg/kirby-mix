<ul class="[&_li.is-selected>a]:text-secondary [&_li>a:hover]:text-secondary">

	<?php /* Level 1 */ foreach ($site->children()->notTemplate('home')->listed() as $main_page) : ?>
	<li class="<?= e($page === $main_page || $page->parents()->has($main_page), 'is-selected') ?>">
		<?= $main_page->title()->link() ?>
		<?php if ($main_page->children()->listed()->count()) : ?>
		<ul>
		<?php /* Level 2 */ foreach ($main_page->children()->listed() as $sub_page) :  ?>
			<li class="<?= e($page === $sub_page, 'is-selected') ?>">
				<?= $sub_page->title()->link() ?>
			</li>
		<?php endforeach ?>
		</ul>
		<?php endif ?>
	</li>
	<?php endforeach ?>

</ul>
