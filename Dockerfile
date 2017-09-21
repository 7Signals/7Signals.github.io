FROM node:alpine

COPY . /app
WORKDIR /app
EXPOSE 5000

RUN npm install -g serve
RUN npm install
RUN npm run build
RUN rm -rf /app/node_modules


CMD ["serve", "-s", "/app/build"]
