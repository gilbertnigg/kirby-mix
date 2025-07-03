<?php
use Kirby\Toolkit\Str;

function seo_title() {
	$site_title = site()->seo_title()->or(site()->title());
	if (page()->seo_title()->isNotEmpty() ) {
		$seo_title = page()->seo_title();
	} else {
		if (page()->isHomePage()) {
			$seo_title = page()->seo_title();
		} else {
			$seo_title = $site_title.' - '.page()->seo_title()->or(page()->title());
		}
	}
	return Str::unhtml($seo_title);
}

function seo_description() {
	$seo_description = page()->seo_description()->or(site()->seo_description());
	return Str::unhtml($seo_description);
}

function seo_icon() {
	return site()->images()->template('seo-icon')->first();
}

function seo_image() {
	if ($seo_image = page()->seo_image()->toFile()) {
	} else if ($seo_image = page()->cover()->toFile()) {
	} else if ($seo_image = page()->images()->template('cover')->first()) {
	} else if ($seo_image = site()->images()->template('seo-image')->first()) {
	} else {
		$seo_image = null;
	}
	return $seo_image;
}

function language_code($lang = 'de') {
	if (kirby()->language() && kirby()->language()->code()) {
		$language_code = kirby()->language()->code();
	} else {
		$language_code = $lang;
	}
	return $language_code;
}
