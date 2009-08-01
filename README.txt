The jQuery Link Shortening Plugin
~ by Bryce Roney (http://bryceroney.com) ~

This is a really simple plugin, simply pass it a set of <a> tags
and it will go through and shorten all of them!

== EXAMPLE ==
HTML:
Find out more at <a href="http://google.com/">Google</a> or <a href="http://yahoo.com">Yahoo</a>.

JS:

$("a").shorten({login: 'bitlyapidemo', apikey: 'R_0da49e0a9118ff35f52f629d2d71bf07'});



== PLEASE NOTE ==
This plugin currently only supports bit.ly, however I will work to add more if necessary!