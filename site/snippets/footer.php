</main>

<footer class="py-8 mt-16 bg-primary">
    <div class="__center text-white [&_a]:text-white md:flex md:justify-items-start">
        <div class="md:flex-1 md:flex md:space-x-4">
            <?php if ($site->footer_address()->isNotEmpty()) : ?>
            <address class="not-italic">
                <?= $site->footer_address() ?>
            </address>
            <?php endif ?>
        </div>
        <div class="flex space-x-2">
            <?php if ($site->files()->template('logo-some')->count()) : ?>
            <nav id="nav-some" class="flex space-x-2">
                <?php foreach ($site->files()->template('logo-some')->sortBy('sort', 'asc', 'filename', 'asc') as $logo_some) : ?>
				<?php if ($logo_some->weblink()->isNotEmpty()) : ?>
                <a href="<?= $logo_some->weblink() ?>" target="_blank" rel="noopener noreferrer">
				<?php endif ?>
                    <img src="<?= $logo_some->thumb(['width'=>600, 'height'=>600])->url() ?>" class="w-8"
                        alt="<?= $logo_some->title() ?>" loading="lazy">
				<?php if ($logo_some->weblink()->isNotEmpty()) : ?>
                </a>
				<?php endif ?>
                <?php endforeach ?>
            </nav>
            <?php endif ?>
            <?php if ($links_footer = $site->children()->template('meta-index')->children()->listed()) : ?>
            <nav id="nav-meta">
                <ul class="flex space-x-2">
                    <?php foreach ($links_footer as $link) : ?>
                    <li class="<?= e($link === $page, 'is-selected') ?>">
                        <?= $link->title()->link() ?>
                    </li>
                    <?php endforeach ?>
                </ul>
            </nav>
            <?php endif ?>
        </div>
    </div>
</footer>

</body>

</html>
