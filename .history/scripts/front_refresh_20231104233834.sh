#!/bin/bash

rm -rf /home/SamLProgrammer/church_billboard/front/church_billboard_front_app

TARGET_DIRECTORY="/home/SamLProgrammer/church_billboard/front"
cd "$TARGET_DIRECTORY"

git clone https://github.com/SamLProgrammer/church_billboard_front_app.git

cd "church_billboard_front_app"
npm install
npm run build