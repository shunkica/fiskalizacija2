#!/bin/bash
set -e

IMAGE_NAME=schematron-compiler
CONTAINER_NAME=schematron-run
OUTPUT_FILE=HR-BR.xsl

docker build -t $IMAGE_NAME .

docker create --name $CONTAINER_NAME $IMAGE_NAME

docker cp $CONTAINER_NAME:/opt/$OUTPUT_FILE ./

docker rm $CONTAINER_NAME
