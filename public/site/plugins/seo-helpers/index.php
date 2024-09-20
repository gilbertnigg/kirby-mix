<?php
use Kirby\Toolkit\Str;

function seo_title() {
	return Str::unhtml(
		site()->title().
		(!page()->isHomePage() ? ' - '.page()->seo_title()->or(page()->title()) : '')
	);
}

function seo_description() {
	return Str::unhtml(
		page()->seo_description()->or(site()->seo_description())
	);
}

function seo_icon() {
	return site()->images()->template('seo-icon')->first();
}

function seo_image() {
	return page()->images()->template('seo-image')->first();
	return page()->images()->template('cover')->first();
	return site()->images()->template('seo-image')->first();
	return seo_icon();
}
