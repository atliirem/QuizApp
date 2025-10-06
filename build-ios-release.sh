#!/bin/bash
set -e

APP_NAME="quizApp" # Xcode scheme ve workspace adın
BUNDLE_FILE="dist/index.js"

echo " [1/6] TypeScript derleniyor..."
npx tsc

echo "  Asset dosyaları kopyalanıyor..."
rm -rf dist/assets
cp -R assets dist/

echo "📦 [2/6] Native iOS klasörleri hazırlanıyor..."
npx expo prebuild

echo "🧩 [3/6] Metro'suz JS bundle oluşturuluyor..."
npx react-native bundle \
  --entry-file $BUNDLE_FILE \
  --platform ios \
  --dev false \
  --bundle-output ios/main.jsbundle \
  --assets-dest ios

echo "📚 [4/6] iOS bağımlılıkları yükleniyor..."
cd ios
pod install
cd ..

echo "🏗️ [5/6] Release build alınıyor (Xcode CLI ile)..."
xcodebuild -workspace ios/$APP_NAME.xcworkspace \
  -scheme $APP_NAME \
  -configuration Release \
  -sdk iphoneos \
  -derivedDataPath ios/build

echo "✅ [6/6] Build tamamlandı!"
echo "📁 .app dosyasını burada bulabilirsin:"
echo "➡️ ios/build/Build/Products/Release-iphoneos/$APP_NAME.app"

echo ""
echo "💡 Eğer .ipa istiyorsan aşağıdaki komutu çalıştırabilirsin:"
echo "   xcodebuild -exportArchive -archivePath ios/build/Build/Products/Release-iphoneos/$APP_NAME.xcarchive -exportOptionsPlist ExportOptions.plist -exportPath ./build_output"
