# Intro
Bootstraps default input-types "boolean-radios", "select-radio" and "radio-inline" do not allow you to highlight the selected ``input[type=radio]`` via css. This package allows you to do it.

It is a very simply folk of autoform's original input-fields, but adds more css-classes.

It contains formattable bootstrap-3 autoform-input-variants for the default input-types "boolean-radios" (="formattable-boolean-radios"), "select-radio"(="formattable-select-radio") and "radio-inline" (="formattable-radio-inline"). See http://stackoverflow.com/questions/1431726/css-selector-for-a-checked-radio-buttons-label for main strategy.

# Usage
Simply install this package via ``meteor add thebarty:autoform-formattable-radios`` and activate the types within your SimpleSchema like:

```
// ... within your SimpleSchema definition
autoform: {
  type: 'formattable-boolean-radios'
}
```

or

```
// ... within your SimpleSchema definition
autoform: {
  type: 'formattable-radio-inline'
}
```

or

```
// ... within your SimpleSchema definition
autoform: {
  type: 'formattable-select-radio'
}
```

# Css-Styles
This package does NOT contain any css styles, because thats what its about: being able to style it on your own.

Use this .less-layout as a reference:

```
// "thebarty:autoform-formattable-radios"-layouts
// .. common stuff
.aff-radio-inline, .aff-boolean-radio {
	display: inline-block;
	margin-right: 10px;
	&:hover {
		cursor: pointer;
	}
	.aff-radio-label {
		font-weight: normal;
	}
	// highlight checked radio
	input[type="radio"]:checked+.aff-radio-label {
		font-weight: bold;
	}
}

// make "formattable-boolean-radio" inline
.aff-boolean-radio-wrapper {
	display: inline-block;
}

// unify error-colors
.has-error {
	.aff-radio-label {
		color: @state-danger-text;
	}
}
```
