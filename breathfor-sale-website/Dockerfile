FROM node:16.14.0-alpine3.15
WORKDIR /b4s-gallery
COPY ["package.json", "./"]

RUN ["apk", "update"]
RUN ["apk", "add", "git"]

# wyvern-js@git+ssh://git@github.com/ProjectOpenSea/wyvern-js.git#f7704ad2571f05136f9a42735966dcd3f1485474
RUN ["npm", "install", "wyvern-js@git+https://github.com/ProjectOpenSea/wyvern-js", "--verbose"]

RUN ["npm", "install", "--production", "--verbose"]

RUN ["npm", "install", "--dev", "--verbose"]

COPY ["*.json", "./"]

COPY ["./src", "./src/"]

RUN ["ls", "-l"]

RUN ["npm", "run", "build"]

# TODO: Use build stages and trim the dependencies

EXPOSE 4200

CMD ["npm", "start", "--", "--host", "0.0.0.0"]
