FROM node:18-alpine

WORKDIR /home/node

COPY ./package*.json ./

RUN npm install

COPY --chown=node:node . .

EXPOSE 3000 

CMD ["npm", "run", "dev"]
