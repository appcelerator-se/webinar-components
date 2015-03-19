# App Components Examples

This sample application showcases how you can leverage the Appcelerator Titanium SDK along with the Alloy MVC Framework
to create a reusable components library, that you can easily theme to create unique looks without dramatically changing your underlying code.
Additionally these components can be shared between multiple applications either by embedding them within an app template or sample in studio
or by a distribution method such as [gitt.io](http://gitt.io).

To watch an overview of this sample project, you can check out our webinar recording here:

http://www.crowdcast.io/e/appceleratorcrowdcast3

## Getting Started

1. **File->Import...**
2. In the _Import App Dialog_, expand **Git** and select **Git Repository as New Project**
3. In the URI field, input either the HTTPS or SSH link

~~~
//https
https://github.com/appcelerator-se/webinar-components.git
~~~

or

~~~
//ssh
git@github.com:appcelerator-se/webinar-components.git
~~~

4. Click **Finish**


## Components Overview

This repository comes with a base components widget (`com.appcelerator.components`) and a login component widget `com.appcelerator.components.login`) that extends from the base widget library. All major UI
components used in any extended widgets derive from the base widget. From a code management perspective, this will allow you to easily restyle your derived components from a single library and witness the effects
trickle down through all of your widgets.

### Dependency Tree

~~~

com.appcelerator.components
		|
		|- com.appcelerator.components.login
		|
		|- com.appcelerator.components.XXX   <-- Any new widget

~~~

In order to enforce the dependency, any new widget you create that will leverage the `com.appcelerator.components` widget needs to add this base widget as a dependency 
within the `widget.json`. For example:

~~~
// widget.json for com.appcelerator.components.login

{
	"id": "com.appcelerator.components.login",
	"name": "com.appcelerator.components.login",
	"description" : "",
	"author": "",
	"version": "1.0",
	"copyright":"Copyright (c) 2012",
	"license":"Public Domain",
	"min-alloy-version": "1.0",
	"min-titanium-version":"2.1",
	"tags":"",
	"platforms":"android,blackberry,ios,mobileweb",
	"dependencies":{
		"com.appcelerator.components":"1.0"
	}
}

~~~

Notice how we have listed out the dependency above. This allows the Alloy compiler to check for this dependency at compile time and 
will also throw an error if the `com.appcelerator.components` library does not exist. Package installers such as [gitt.io](http://gitt.io)
also leverage this information to make it easy to download all dependencies directly to your project.

## Using the Widgets

To see an example of how the `com.appcelerator.components` library is leveraged by the dependant widgets, lets take a look at the
`login.xml` file under `com.appcelerator.components.login` widget.

~~~

<Alloy>
	<Window id="login" class="container">
		<Label top="30%" class="padding-left">Login Form</Label>
		<View class="form">
			<Widget src="com.appcelerator.components" name="textfield" id="username" icon="icon-user"/>
			<Widget src="com.appcelerator.components" name="textfield" classes="password" icon="icon-lock" id="password"/>
			<View layout="horizontal" class="button-bar">
				<Widget src="com.appcelerator.components" name="button" title="Cancel" classes="cancel"/>
				<Widget src="com.appcelerator.components" name="button" title="Sign In" classes="padding-left" />  
			</View>
		</View>
	</Window>
</Alloy>

~~~

You can see that its easy to reference Widgets from with a widget to achieve the resulting UI that you want to leverage. Simply referencing
the particular view in the base component widget allows me to select the desired component, and pass it properties, additional classes, etc.

~~~
	<Widget src="com.appcelerator.components" name="textfield" id="username" icon="icon-user"/>
					^									^			^----------^-------------------  widget properties
					|									|
					src is referencing				calling specific
					our base components				view in the widget
~~~



----------------------------------
Stuff our legal folk make us say:

Appcelerator, Appcelerator Titanium and associated marks and logos are 
trademarks of Appcelerator, Inc. 

Titanium is Copyright (c) 2008-2013 by Appcelerator, Inc. All Rights Reserved.

Titanium is licensed under the Apache Public License (Version 2). Please
see the LICENSE file for the full license.

