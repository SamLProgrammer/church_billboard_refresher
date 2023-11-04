#!/bin/bash

TARGET_DIRECTORY="/home/SamLProgrammer/church_billboard/front"
cd "$TARGET_DIRECTORY"

git clone https://github.com/SamLProgrammer/Church-Billboard-Front-Server.git

cd "Church-Billboard-Front-Server"
npm run build