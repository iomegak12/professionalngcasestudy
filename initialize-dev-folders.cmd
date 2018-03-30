@echo off
set APP_FOLDER="./src/client/app"

echo Initializing Dev. Folders for 
echo           Components
echo           Directives ...

mkdir %APP_FOLDER%\components\
mkdir %APP_FOLDER%\directives\
mkdir %APP_FOLDER%\pipes\
mkdir %APP_FOLDER%\models\
mkdir %APP_FOLDER%\modules\
mkdir %APP_FOLDER%\routing\
mkdir %APP_FOLDER%\services\

