@echo off
echo Creating Route Folder ... %1
set APP_FOLDER="./src/client/app"
mkdir %APP_FOLDER%\routing\%1
type NUL > %APP_FOLDER%\routing\%1\%1.routes.ts