FROM node:6

WORKDIR /usr/src/app
ADD . /usr/src/app

RUN npm install webpack -g

EXPOSE 8080
# CMD ['npm', 'run', 'dev']
RUN npm run dev
