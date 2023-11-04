
rm -rf /home/SamLProgrammer/church_billboard/back/church_billboard_back
TARGET_DIRECTORY="/home/SamLProgrammer/church_billboard/back"

cd "$TARGET_DIRECTORY"

git clone https://github.com/SamLProgrammer/church_billboard_back.git

cd "church_billboard_back"
mvn clean package -Dspring.profiles.active=production
java -jar target/church-billboard2-0.0.1-SNAPSHOT.jar --spring.profiles.active=production
