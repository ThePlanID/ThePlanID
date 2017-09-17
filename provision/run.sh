#! /bin/bash

IMAGE="theplanid/firebase"

if [ "$1" != ""  && "$2" != ''] ; then
	NAME="$1"
	DIR="$2"
else
	echo "Usage: $0 <container-name>"
	exit 1;
fi

docker run --name $NAME -it -d -v $DIR:/app -w /app -p 8080:80 -p 9005:9005 $IMAGE

