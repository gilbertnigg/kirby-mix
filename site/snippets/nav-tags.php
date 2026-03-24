<form class="__form" method="post" action="<?= $page->url() ?>#top">
    <nav class="nav-tags flex flex-wrap gap-4">
        <input type="hidden" name="tag" value="<?= $tagSelected ?>">
        <input type="hidden" name="searchQuery" value="<?= $searchQuery ?>">
        <button type="submit" name="tag" value="" class="<?= e(!$tagSelected, 'is-selected') ?>">Alle</button>
        <?php foreach ($tags as $tag) : ?>
        <button type="submit" name="tag" value="<?= $tag->uid() ?>"
            class="<?= e($tagSelected === $tag->uid(), 'is-selected') ?>">
            <?= $tag->title() ?>
        </button>
        <?php endforeach ?>
        <input type="search" name="searchQuery" class="px-2 py-1 border border-black" value="<?= $searchQuery ?>"
            placeholder="Projektsuche...">
    </nav>
</form>
