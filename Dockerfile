FROM ubuntu:18.04

RUN apt -y upgrade
RUN apt update
RUN apt install -y apache2

COPY docker-scripts/startup.sh /opt/run/
COPY dist /var/www/html

RUN chmod +x /opt/run/startup.sh

ENTRYPOINT ["/bin/bash", "/opt/run/startup.sh"]