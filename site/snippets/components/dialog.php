<?php /** @var \Kirby\Cms\Block $block */ ?>

<dialog class="__center">
    <div class="p-4 bg-white">
        <p class="text-right">
            <button class="dialog-close" aria-label="Dialog schliessen">
                <svg class="size-6" xmlns="http://www.w3.org/2000/svg" stroke="currentcolor" fill="none"
                    stroke-width="5" viewBox="0 0 100 100">
					<path d="M4,4L96,96"/><path d="M4,96L96,4"/>
				</svg>
            </button>
        </p>
        <?= $dialog_content ?>
    </div>
</dialog>

<p>
	<button class="btn">
	    <?= $dialog_button ?>
	</button>
</p>
