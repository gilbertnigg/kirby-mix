<?php
use Kirby\Http\Header;

Header::notfound(true);
echo page('error')->render();
exit();
?>
