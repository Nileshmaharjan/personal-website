FROM node:14

EXPOSE 8000
WORKDIR /app


COPY . /app

RUN npm install -g gatsby-cli
RUN apt-get update
RUN apt-get install curl -y
RUN curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.32.1/install.sh | bash \
&& export NVM_DIR="$HOME/.nvm" && [ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh" \
&& nvm install
RUN yarn

ENTRYPOINT ["npm", "start"]
