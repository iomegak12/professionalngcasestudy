@echo off
echo Setting Aliases for Modules (cm), Components (cc), Directives (cdi), Pipes (cp), Services (cs) ...
doskey cc=create-component $1
doskey cm=create-module $1
doskey cdi=create-directive $1
doskey cp=create-pipe $1
doskey cs=create-service $1
doskey cr=create-route $1
echo Alias has been set!