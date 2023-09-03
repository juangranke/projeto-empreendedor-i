
FROM node:14

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# COPY package*.json ./

RUN npm -g i nodemon

# # Bundle app source
# COPY . .

EXPOSE 3000
CMD [ "nodemon", "app.js" ]
