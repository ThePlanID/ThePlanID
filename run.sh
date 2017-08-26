#! /bin/bash

IMAGE="theplanid/firebase"

if [ "$1" != "" ] ; then
	NAME="$1"
else
	echo "Usage: $0 <container-name>"
	exit 1;
fi

docker run --name $NAME -ti -d -p 8080:80 -v app:/app $IMAGE
