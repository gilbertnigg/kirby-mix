<!doctype html>
<html lang="<?= language_code() ?>" class="no-js">

<head>
    <?php snippet('head', ['cache'=>1]) ?>
</head>

<body class="__tpl-<?= $page->template()->name() ?>">

    <header class="fixed z-20 inset-x-0 top-0 pointer-events-none [&>div>*]:pointer-events-auto">
        <div class="__center flex justify-between items-center">
            <a href="<?= $site->url() ?>">
                <img src="<?= asset('assets/img/logo.svg')->thumb(['width'=>600])->url() ?>" class="inline-block w-48"
                    alt="<?= $site->title() ?>">
            </a>
            <button id="navicon" aria-label="Menu open/close">
                <span class="is-open">
                    <svg class="size-6" xmlns="http://www.w3.org/2000/svg" stroke="currentcolor" fill="none"
                        stroke-width="5"
                        viewBox="0 0 100 100"><path d="M4,20L96,20"/><path d="M4,50L96,50"/><path d="M4,80L96,80"/></svg>
                </span>
                <span class="is-closed">
                    <svg class="size-6" xmlns="http://www.w3.org/2000/svg" stroke="currentcolor" fill="none"
                        stroke-width="5" viewBox="0 0 100 100"><path d="M4,4L96,96"/><path d="M4,96L96,4"/></svg>
                </span>
            </button>
            <nav id="nav-main" class="is-dropdown">
                <?php snippet('nav-main') ?>
            </nav>
        </div>
    </header>

    <main id="main" class="pt-16">
