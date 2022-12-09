FROM node:18

RUN mkdir /app

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . ./

RUN npm run build

EXPOSE 3000
ENV PORT 3000

CMD ["npm", "start"]