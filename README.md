jquery.countdown.js
===================

A utility that ticks down to a spefified date/time, replacing the text of
the selected element set.

When constructing the `end` argument, follow the
[Javascript Date](http://www.w3schools.com/js/js_obj_date.asp) conventions.

[![endorse](https://api.coderwall.com/oomlaut/endorsecount.png)](https://coderwall.com/oomlaut)

## Usage:

<pre>
$('#countdown_days').countdown({
    end: new Date("January 11, 2014 16:20:00"),
    format: "%d days, %h:%m:%s",
    afterEventMessage: 0
    });
</pre>

Loosely based on

[jquery-utils](http://code.google.com/p/jquery-utils/wiki/CountDown)  
[javascript kit snippet](http://www.javascriptkit.com/script/script2/count2.shtml)
