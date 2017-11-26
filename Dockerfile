FROM node:boron

ENV DEBIAN_FRONTEND noninteractive

RUN apt update
RUN apt install -y \
	supervisor \
	nginx-full \
	vim

ADD provision/scripts/start.sh /start.sh
ADD provision/scripts/setup.sh /setup.sh
ADD provision/conf/supervisord.conf /etc/supervisord.conf
ADD provision/conf/site.conf /etc/nginx/sites-available/default
COPY provision/conf /conf/
COPY app /app/

RUN chmod 755 /setup.sh
RUN chmod 755 /start.sh

RUN /setup.sh

# Mount here your application files
VOLUME /app

# Mount here your custom config folder
VOLUME /conf

EXPOSE 443 80 9005 5000

CMD ["/start.sh"]

RUN npm install firebase-functions@latest --save
RUN npm install -g firebase-tools
