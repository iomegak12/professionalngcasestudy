@echo off
echo Creating Component Folder ... %1
set APP_FOLDER="./src/client/app"
mkdir %APP_FOLDER%\components\%1
type NUL > %APP_FOLDER%\components\%1\%1.component.html
type NUL > %APP_FOLDER%\components\%1\%1.component.css
type NUL > %APP_FOLDER%\components\%1\%1.component.ts