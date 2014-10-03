FROM ubuntu:latest
# default exposed webserver port
EXPOSE 8080
# live refresh port for node
EXPOSE 35729

VOLUME /src

RUN sudo apt-get update

RUN sudo echo y | apt-get install git

RUN sudo echo y | apt-get install default-jre

# install ruby and SASS gem required to build SASS from grunt
RUN echo y | sudo apt-get install ruby
RUN echo y | sudo apt-get install ruby-dev
RUN echo y | sudo apt-get install build-essential
RUN gem install compass

RUN echo y | sudo apt-get install nodejs
RUN echo y | sudo apt-get install npm
RUN sudo ln -s /usr/bin/nodejs /usr/bin/node
RUN npm install -g bower
RUN npm install -g grunt-cli

# create user to run bower under, bower does not like to be run as root
# user is mapped as id 1000 as this is the id that docker uses to mount volumes
RUN mkdir /home/swuser && \
groupadd -r swuser -g 433 && \
useradd -u 1000 -r -g swuser -d /home/swuser -s /sbin/nologin -c "Docker image user" swuser && \
chown -R swuser:swuser /home/swuser && \
usermod -G staff swuser

CMD ["bash"]
