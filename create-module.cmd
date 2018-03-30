@echo off
echo Creating Module Folder ... %1
set APP_FOLDER="./src/client/app"
mkdir %APP_FOLDER%\Modules\%1
type NUL > %APP_FOLDER%\Modules\%1\%1.module.ts