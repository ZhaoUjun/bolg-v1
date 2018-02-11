FROM node:latest
RUN mkdir -p /home/Service
WORKDIR /home/Service
COPY ./build /home/Service
EXPOSE 3030
RUN node app.js -u root -p 275431605
