@echo off
echo Creating Pipe Folder ... %1
set APP_FOLDER="./src/client/app"
mkdir %APP_FOLDER%\Pipes\%1

type NUL > %APP_FOLDER%\Pipes\%1\%1.pipe.ts