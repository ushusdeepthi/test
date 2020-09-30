<?php

$path = dirname(__FILE__);

$ret = exec("node '$path/01.js'", $out, $err);

echo 'kalle' == $ret;
