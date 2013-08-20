/*
* Here is a cool way to enable casual variable insertions as a "final step" after the page is
* construction.  Make sure variables are set at earlier priorities, then simply use {{var}}
* anywhere on the page to insert a variable.
*/
function var_replacer(match, varname) {
	return eval('variables.' + varname);
}
dombuf.value = dombuf.value.replace(/{{([a-z0-9_]+)}}/gi, var_replacer);
