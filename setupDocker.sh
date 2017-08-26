#!/bash/bin
# @author Luis Simon
# @usage ./setupDocker

echo "Getting docker ..."

curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" \
	&& apt update

apt-cache policy docker-ce


echo "Intalling docker ..."

sudo apt install -y docker-ce \
	&& systemctl status docker

