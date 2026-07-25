#!/bin/bash

cd /var/www/sivasgurun
node weatherapi-insert.js
npm run build >> logs/build.log 2>&1
pm2 restart sivasgurun
