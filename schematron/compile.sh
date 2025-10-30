#!/bin/bash
set -e

IMAGE_NAME=schematron-compiler
CONTAINER_NAME=schematron-run
OUTPUT_FILE=HR_CIUS_EXT_EN16931_UBL.xsl

docker build -f Dockerfile -t $IMAGE_NAME ../

docker create --name $CONTAINER_NAME $IMAGE_NAME

docker cp $CONTAINER_NAME:/opt/$OUTPUT_FILE ./

docker rm $CONTAINER_NAME
