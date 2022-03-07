[![npm](https://img.shields.io/npm/v/@kronos-integration/interceptor-object-data-processor-row.svg)](https://www.npmjs.com/package/@kronos-integration/interceptor-object-data-processor-row)
[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)
[![minified size](https://badgen.net/bundlephobia/min/@kronos-integration/interceptor-object-data-processor-row)](https://bundlephobia.com/result?p=@kronos-integration/interceptor-object-data-processor-row)
[![downloads](http://img.shields.io/npm/dm/@kronos-integration/interceptor-object-data-processor-row.svg?style=flat-square)](https://npmjs.org/package/@kronos-integration/interceptor-object-data-processor-row)
[![GitHub Issues](https://img.shields.io/github/issues/Kronos-Integration/interceptor-object-data-processor-row.svg?style=flat-square)](https://github.com/Kronos-Integration/interceptor-object-data-processor-row/issues)
[![Build Status](https://img.shields.io/endpoint.svg?url=https%3A%2F%2Factions-badge.atrox.dev%2FKronos-Integration%2Finterceptor-object-data-processor-row%2Fbadge\&style=flat)](https://actions-badge.atrox.dev/Kronos-Integration/interceptor-object-data-processor-row/goto)
[![Styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![Known Vulnerabilities](https://snyk.io/test/github/Kronos-Integration/interceptor-object-data-processor-row/badge.svg)](https://snyk.io/test/github/Kronos-Integration/interceptor-object-data-processor-row)
[![Coverage Status](https://coveralls.io/repos/Kronos-Integration/interceptor-object-data-processor-row/badge.svg)](https://coveralls.io/github/Kronos-Integration/interceptor-object-data-processor-row)

# API

<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

### Table of Contents

*   [stream](#stream)
*   [constructor](#constructor)
    *   [Parameters](#parameters)
*   [addChecks](#addchecks)
    *   [Parameters](#parameters-1)
*   [\_transform](#\_transform)
    *   [Parameters](#parameters-2)
*   [getCheckInfo](#getcheckinfo)
    *   [Parameters](#parameters-3)
*   [createChecks](#createchecks)
    *   [Parameters](#parameters-4)
*   [createSplitterForField](#createsplitterforfield)
    *   [Parameters](#parameters-5)
*   [createChecks](#createchecks-1)
    *   [Parameters](#parameters-6)
*   [createChecks](#createchecks-2)
    *   [Parameters](#parameters-7)
*   [createChecks](#createchecks-3)
    *   [Parameters](#parameters-8)
*   [createChecks](#createchecks-4)
    *   [Parameters](#parameters-9)
*   [content](#content)
    *   [Parameters](#parameters-10)
*   [getProperty](#getproperty)
    *   [Parameters](#parameters-11)
*   [getSeverity](#getseverity)
    *   [Parameters](#parameters-12)
*   [getFieldType](#getfieldtype)
    *   [Parameters](#parameters-13)
*   [createChecks](#createchecks-5)
    *   [Parameters](#parameters-14)
*   [createDateChecks](#createdatechecks)
    *   [Parameters](#parameters-15)
*   [errorInfo](#errorinfo)
    *   [Parameters](#parameters-16)
*   [push](#push)
    *   [Parameters](#parameters-17)
*   [push](#push-1)
    *   [Parameters](#parameters-18)
*   [push](#push-2)
    *   [Parameters](#parameters-19)
*   [push](#push-3)
    *   [Parameters](#parameters-20)
*   [push](#push-4)
    *   [Parameters](#parameters-21)
*   [push](#push-5)
*   [push](#push-6)
    *   [Parameters](#parameters-22)
*   [push](#push-7)
    *   [Parameters](#parameters-23)
*   [push](#push-8)
    *   [Parameters](#parameters-24)
*   [createChecks](#createchecks-6)
    *   [Parameters](#parameters-25)
*   [parseNumberString](#parsenumberstring)
    *   [Parameters](#parameters-26)
*   [createChecks](#createchecks-7)
    *   [Parameters](#parameters-27)
*   [createCheckEmail](#createcheckemail)
    *   [Parameters](#parameters-28)
*   [createCheckDefaultValue](#createcheckdefaultvalue)
    *   [Parameters](#parameters-29)
*   [createChecksString](#createchecksstring)
    *   [Parameters](#parameters-30)
*   [RowProcessorInterceptor](#rowprocessorinterceptor)
    *   [Parameters](#parameters-31)

## stream

This module will turn an array of tokens into an object.

## constructor

### Parameters

*   `opts`  
*   `validate`  

## addChecks

Add checks to the array of checks to be executed

### Parameters

*   `checks`  

## \_transform

Reads the stream data and split it into lines.

### Parameters

*   `data`  
*   `enc`  
*   `cb`  

## getCheckInfo

Extracts the type value and the severity of a given check name from the checkProperty

### Parameters

*   `checkProperty`  The checkProperty as defined in the schema
*   `fieldName`  The name of the field in the checkProperty

Returns **any** infoObject An object containing the boolean value and the severity

## createChecks

Creates the field splitter for a field, if this field is a multi field

### Parameters

*   `fieldDefinition`  The field_definition schema
*   `fieldName`  The name of the current field

## createSplitterForField

Create the field spliter for a given field definition
The field must be a multiField.

### Parameters

*   `multiFieldDefinitionPart`  The multiField part of aa field definition for one field.
*   `fieldName`  The name of the current multiField

## createChecks

Creates the checks for checking boolean values

### Parameters

*   `fieldDefinition`  The field_definition for this field.
*   `fieldName`  The name of the current field

## createChecks

Create a function which
checks that the value in a field is a valid boolean value.
If the value is boolean value, the boolean equivalent will be
stored in the content hash. Otherwise, the default value for
this field will be stored in the content hash instead.

### Parameters

*   `fieldDefinition`  The field_definition for this field.
*   `fieldName`  The name of the current field

## createChecks

Checks a given string value.
Checks the length and if it matches a given regular expression

### Parameters

*   `fieldDefinition`  The field_definition for this field.
*   `fieldName`  The name of the current field
*   `numberType`  The type of the field (number, integer, float)

Returns **any** checks A list of checks to be perfomred

## createChecks

Creates the checks which are common to each file type

### Parameters

*   `fieldDefinition`  The field_definition for this field.
*   `fieldName`  The name of the current field

## content

Just check if for mandatory fields the value is given

### Parameters

*   `content`  the content hash to be validated.

## getProperty

Some of the values may be directly the value or could be an object with different
addidtional properties. So to get the expected value it must be checked if the
property is an object or not. If it is an object the real value is stored in the
object under the property 'val'. See the json fieldDefinition.

### Parameters

*   `fieldDefinition`  The field_definition
*   `fieldTypePropertyName`  The name of the property. This property is under the fieldType
*   `propertyName`  The name of the property. This property is a sibling of fieldTypeOnly one of the property names should be given

## getSeverity

Returns the severity for a check property. The severity may be defined globaly
for the complete field, but also may be defined on a per check basis

### Parameters

*   `fieldDefinition`  The field_definition
*   `fieldTypePropertyName`  The name of the property. This property is under the fieldType
*   `propertyName`  The name of the property. This property is a sibling of fieldTypeOnly one of the property names should be given

## getFieldType

Returns the severity for a check property. The severity may be defined globaly
for the complete field, but also may be defined on a per check basis

### Parameters

*   `fieldDefinition`  The field_definition

## createChecks

Creates the date checks for a date field

### Parameters

*   `fieldDefinition`  The field_definition schema
*   `fieldName`  The name of the current field

## createDateChecks

Create a function which
checks that the value in a field is a valid boolean value.
If the value is boolean value, the boolean equivalent will be
stored in the content hash. Otherwise, the default value for
this field will be stored in the content hash instead.

### Parameters

*   `fieldDefinition`  
*   `fieldName`  
*   `meta`  The meta data hash
*   `checkProperty`  The properties defines which checks to be created. See the schema for more info
*   `fieldname`  The name of the field which needs to be checked

Returns **any** function A function which will check a given content hash.

## errorInfo

***

Checks that the given value is a valid date

### Parameters

*   `content`  the content hash to be validated.

Returns **any** error an error object if the given value is not a valid date***

## push

Checks that the given value is not before the given min date

### Parameters

*   `content`  the content hash to be validated.

Returns **any** error an error object if the given value is not a valid date

## push

Checks that the given value is not before the given min date

### Parameters

*   `content`  the content hash to be validated.

Returns **any** error an error object if the given value is not a valid date

## push

***

Checks that the given value is a valid number in the right type (number, integer, float)

### Parameters

*   `content`  the content hash to be validated.

Returns **any** error an error object if the given value is not a valid number***

## push

Checks that the given value is not before the given min value

### Parameters

*   `content`  the content hash to be validated.

Returns **any** error an error object if the given value is not a valid date

## push

Checks that the given value is not before the given min date

### Parameters

*   `content`  the content hash to be validated.

Returns **any** error an error object if the given value is not a valid date

## push

Changes the case of a string to the given value (upper, lower)

## push

Checks that the given string has a minimum length

### Parameters

*   `content`  the content hash to be validated.

Returns **any** error an error object if the given value is too short

## push

Checks that the given string does not exeed the maximum length

### Parameters

*   `content`  the content hash to be validated.

Returns **any** error an error object if the given value is too long

## push

Checks that the given string has a minimum length

### Parameters

*   `content`  the content hash to be validated.

Returns **any** error an error object if the given value is not a valid date

## createChecks

Creates the field splitter for a field, if this field is a multi field

### Parameters

*   `fieldDefinition`  The field_definition for this field.
*   `fieldName`  The name of the current field

## parseNumberString

Parses a string and try to convert it in a valid number.
If the string does not match a valid number it will return the error message, else the parsed number.

### Parameters

*   `numberString`  The string to be checked
*   `type`  The expected type \["float", "integer", "number"]
*   `decimalSeparator`  The used decimal separator.

## createChecks

Creates the field splitter for a field, if this field is a multi field

### Parameters

*   `fieldDefinition`  The field_definition for this field.
*   `fieldName`  The name of the current field

## createCheckEmail

Checks if a given string looks like a valid email.

### Parameters

*   `fieldDefinition`  The field_definition for this field.
*   `fieldName`  The name of the current field

Returns **any** The check

## createCheckDefaultValue

Set the default value if no value is there

### Parameters

*   `fieldDefinition`  The field_definition for this field.
*   `fieldName`  The name of the current field

Returns **any** checks A list of checks to be perfomred

## createChecksString

Checks a given string value.
Checks the length and if it matches a given regular expression

### Parameters

*   `fieldDefinition`  The field_definition for this field.
*   `fieldName`  The name of the current field

Returns **any** checks A list of checks to be perfomred

## RowProcessorInterceptor

**Extends Interceptor**

This interceptor cares about the handling of the messages.
It will add the hops and copies the messages

### Parameters

*   `config`  
*   `endpoint`  
