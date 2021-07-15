FROM node:14

WORKDIR /BackendDevelopmentExercise

COPY package*.json ./

RUN npm install
COPY .. .

EXPOSE 5000
CMD [ "node", "server.js" ]
