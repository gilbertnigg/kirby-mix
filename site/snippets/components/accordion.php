<?php
/**
 * @var string $id
 * @var Kirby\Cms\Structure $items
*/
?>

<div class="__accordion">
    <?php foreach ($items as $item): ?>
    <details name="<?= $id ?>">
        <summary>
            <h3>
                <?= $item->headline() ?>
            </h3>
        </summary>
        <?= $item->text() ?>
    </details>
    <?php endforeach ?>
</div>
