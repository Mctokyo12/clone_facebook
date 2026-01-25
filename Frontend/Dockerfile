FROM node:25-alpine3.22

RUN apk update && apk upgrade
WORKDIR /app
COPY ./ /app/

RUN npm install

EXPOSE 3000
ENTRYPOINT ["npm"]
CMD ["run" , "dev"]
