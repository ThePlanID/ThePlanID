#!/bin/bash
IMAGE="theplanid/firebase"
echo "Starting container build ..."
docker build --tag $IMAGE .
