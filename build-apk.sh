#! /bin/sh -f

echo 'Removing platforms...'
rm -rf platforms || { echo 'Failed to remove platforms. Exiting... '; exit 1; }

echo 'Changing package name for release...'
sed -i 's/HabbajetAngular/Habbajet/' package.json
sed -i 's/HabbajetAngular/Habbajet/' app/App_Resources/Android/app.gradle
sed -i 's/<!-- <string name="app_name">/<string name="app_name">/' app/App_Resources/Android/values/strings.xml
sed -i 's/kimera">Habbajet<\/string> -->/kimera">Habbajet<\/string>/' app/App_Resources/Android/values/strings.xml

echo 'Copying release icons over...'
cp Piskel/Icons/ReleaseIcon.png app/App_Resources/Android/drawable-ldpi/icon.png
cp Piskel/Icons/ReleaseIcon.png app/App_Resources/Android/drawable-mdpi/icon.png
cp Piskel/Icons/ReleaseIcon.png app/App_Resources/Android/drawable-hdpi/icon.png
cp Piskel/Icons/ReleaseIcon.png app/App_Resources/Android/drawable-xhdpi/icon.png
cp Piskel/Icons/ReleaseIcon.png app/App_Resources/Android/drawable-xxhdpi/icon.png
cp Piskel/Icons/ReleaseIcon.png app/App_Resources/Android/drawable-xxxhdpi/icon.png

echo 'Building for Android...'
tns build android --release --key-store-path my-release-key.jks --key-store-password soupdragon --key-store-alias robbo --key-store-alias-password soupdragon || { echo 'Build failed! Exiting... '; exit 1; }

read -p "Install apk on device? " yn
case $yn in
    [Yy]* ) adb install -r platforms/android/build/outputs/apk/Habbajet-release.apk; break;;
    * ) echo 'Skipping install...';;
esac

echo 'Changing package name back...'
sed -i 's/Habbajet/HabbajetAngular/' package.json
sed -i 's/Habbajet/HabbajetAngular/' app/App_Resources/Android/app.gradle
sed -i 's/<string name="app_name">/<!-- <string name="app_name">/' app/App_Resources/Android/values/strings.xml
sed -i 's/kimera">Habbajet<\/string>/kimera">Habbajet<\/string> -->/' app/App_Resources/Android/values/strings.xml

echo 'Putting dev icons back...'
cp Piskel/Icons/DevIcon.png app/App_Resources/Android/drawable-ldpi/icon.png
cp Piskel/Icons/DevIcon.png app/App_Resources/Android/drawable-mdpi/icon.png
cp Piskel/Icons/DevIcon.png app/App_Resources/Android/drawable-hdpi/icon.png
cp Piskel/Icons/DevIcon.png app/App_Resources/Android/drawable-xhdpi/icon.png
cp Piskel/Icons/DevIcon.png app/App_Resources/Android/drawable-xxhdpi/icon.png
cp Piskel/Icons/DevIcon.png app/App_Resources/Android/drawable-xxxhdpi/icon.png

if [ $# -eq 1 ]
then
    git tag -a $1 -m "Tagged current changeset as $1"
fi
