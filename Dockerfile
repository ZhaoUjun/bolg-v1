FROM node:latest
RUN cd front \
    && npm install \
    && npm run build

