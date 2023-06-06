#!/bin/bash

cp -pa /cache/* /app
rm -rf /cache
npm start
