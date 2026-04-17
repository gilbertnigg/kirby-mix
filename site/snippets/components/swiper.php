<?php
/**
 * $ npm install swiper
 *
 * @var \Kirby\Files $images
 * @var int $width
 * @var int $height
*/
?>

<div class="relative">
    <div class="swiper">
        <div class="swiper-wrapper">
            <?php foreach ($images as $image): ?>
            <div class="swiper-slide">
                <img src="<?= $image->thumb(['width'=>$width, 'height'=>$height, 'crop'=>true])->url() ?>"
                    alt="<?= $image->alt()->esc() ?>" width="<?= $width ?>" height="<?= $height ?>">
            </div>
            <?php endforeach ?>
        </div>
        <!-- If we need pagination -->
        <div class="swiper-pagination"></div>
    </div>

    <!-- If we need navigation buttons -->
    <div class="swiper-button-prev">
        <svg xmlns="http://www.w3.org/2000/svg" class="rotate-180" stroke="currentcolor" fill="none" stroke-width="5"
            viewBox="0 0 100 100"><path d="M30,96L70,50L30,4"/></svg>
    </div>
    <div class="swiper-button-next">
        <svg xmlns="http://www.w3.org/2000/svg" stroke="currentcolor" fill="none" stroke-width="5"
            viewBox="0 0 100 100"><path d="M30,96L70,50L30,4"/></svg>
    </div>
</div>
