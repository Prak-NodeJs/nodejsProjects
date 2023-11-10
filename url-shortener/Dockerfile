FROM node

COPY package.json package.json
COPY package-lock.json package-lock.json
COPY index.js index.js
COPY connect.js connect.js
COPY controller controller
COPY model model
COPY routes routes


RUN npm install

ENTRYPOINT [ "node", "index.js" ]