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
        <div class="flex">
            <?php if ($site->files()->template('logo-some')->count()) : ?>
            <nav id="nav-some">
                <ul>
                    <?php foreach ($site->files()->template('logo-some')->sortBy('sort', 'asc', 'filename', 'asc') as $logo_some) : ?>
                    <li>
                        <a href="<?= $logo_some->weblink() ?>" target="_blank" rel="noopener noreferrer">
                            <img src="<?= $logo_some->thumb(['width'=>600, 'height'=>600])->url() ?>" class="w-8"
                                alt="<?= $logo_some->title() ?>" loading="lazy">
                        </a>
                    </li>
                    <?php endforeach ?>
                </ul>
            </nav>
            <?php endif ?>
            <?php if ($nav_footer = $site->children()->template('footer-index')) : ?>
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
    </div>
</footer>

</body>

</html>
