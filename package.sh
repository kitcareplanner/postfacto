#!/bin/bash

set -e

if [[ -d "package" ]]; then
  rm -r package
fi

mkdir package

# BUILD FRONT-END

pushd web
  npm run build
  cp ../humans.txt build
popd

# PWS

cp -r deployment/pws package
cp -r deployment/deploy-cf.sh package/pws/deploy.sh
chmod u+x package/pws/deploy.sh

mkdir package/pws/assets

rm -rf api/tmp/*
cp -r api package/pws/assets/api
cp -r web/build package/pws/assets/web

# PCF

cp -r deployment/pcf package
cp -r deployment/deploy-cf.sh package/pcf/deploy.sh
chmod u+x package/pcf/deploy.sh

mkdir package/pcf/assets

rm -rf api/tmp/*
cp -r api package/pcf/assets/api
cp -r web/build package/pcf/assets/web

# Heroku

cp -r deployment/heroku package
cp -r deployment/deploy-heroku.sh package/heroku/deploy.sh
chmod u+x package/heroku/deploy.sh

rm -rf api/tmp/*
cp -r api/* package/heroku/assets/api
cp -r web/build package/heroku/assets/web/public_html

# Docs

cp deployment/INSTRUCTIONS.md package

# Zip

zip -r package.zip package
rm -r package
