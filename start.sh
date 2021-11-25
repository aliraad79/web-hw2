#!/bin/bash

docker build -t webserver .

docker stop web
docker run -it --rm -d -p 8888:80 --name web webserver

