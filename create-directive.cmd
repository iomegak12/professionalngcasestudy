@echo off
echo Creating Directive Folder ... %1
set APP_FOLDER="./src/client/app"
mkdir %APP_FOLDER%\directives\%1
type NUL > %APP_FOLDER%\directives\%1\%1.directive.html
type NUL > %APP_FOLDER%\directives\%1\%1.directive.ts