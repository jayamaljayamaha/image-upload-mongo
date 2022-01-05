FROM node:16.13.1-alpine
WORKDIR /usr/src/app
COPY package.json .
RUN npm install
COPY . .
RUN npm run build
RUN cp -R src/swagger build
WORKDIR /usr/src/app/build
CMD ["node", "index.js"]