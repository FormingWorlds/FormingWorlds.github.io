// No-op stubs for removed Argon plugins.
// Argon's minified JS calls these on Windows; without stubs it throws
// and breaks navbar/dropdown initialization.
jQuery.fn.perfectScrollbar = function () { return this; };
