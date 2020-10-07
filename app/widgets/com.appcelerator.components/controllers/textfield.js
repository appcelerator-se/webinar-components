var _args = arguments[0] || {};


/** Apply any predefined styles **/
$.addClass($.textField, _args.classes)

if(_args.icon){

	var icon = Alloy.createWidget("com.appcelerator.components", "icon", {icon: _args.icon}).getView();

	$.addClass($.textField, "iconic");
	$.view_container.add(icon);
}
