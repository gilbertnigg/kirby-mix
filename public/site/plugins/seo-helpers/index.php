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
	if ($seo_image = page()->images()->template('seo-image')->first()) {
	} else if ($seo_image = page()->images()->template('cover')->first()) {
	} else if ($seo_image = site()->images()->template('seo-image')->first()) {
	} else if ($seo_image = seo_icon()) {
	} else {
		$seo_image = null;
	}
	return $seo_image;
}

function language_code() {
	if ($language_code = kirby()->language()->code()) {
	} else {
		$language_code = 'de';
	}
	return $language_code;
}
