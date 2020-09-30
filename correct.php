<?php

$path = dirname(__FILE__);

$file = "$path/01.js";

$ret = exec("node '$file'", $out, $err);

echo 'Fråga 1:' . PHP_EOL;
echo 'Resultat: ';

if ( '1,2,3,4,5,6,7,8,9,10' === implode( ',', $out ) ) {
	echo 'Korrekt';
} else {
	echo 'Ej korrekt';
}
echo PHP_EOL;

echo 'Använt for-loop: ';
if ( strpos( file_get_contents( $file ), 'for' ) !== false ) {
	echo 'Korrekt';
} else {
	echo 'Ej korrekt';
}
echo PHP_EOL;

