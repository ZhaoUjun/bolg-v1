FROM node:latest

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)


RUN npm config set registry http://registry.npm.taobao.org &&npm install forever -g

COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm install

# Bundle app source
COPY . .

EXPOSE 3030

CMD ["forever","start","./build/app.js","-u", "root", "-p", "275431605"]




