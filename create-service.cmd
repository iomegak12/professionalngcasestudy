@echo off
echo Creating Service Folder ... %1
set APP_FOLDER="./src/client/app"
mkdir %APP_FOLDER%\Services\%1
type NUL > %APP_FOLDER%\Services\%1\%1.service.ts