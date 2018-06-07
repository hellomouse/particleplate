from node:carbon

WORKDIR /usr/src/app

COPY api ./api/
COPY frontend ./frontend/
COPY *.js ./
COPY *.json ./
COPY LICENSE.txt .

RUN npm install

RUN npm run build

WORKDIR /usr/src/app/build

CMD ["npm", "run", "start"]

EXPOSE 8080