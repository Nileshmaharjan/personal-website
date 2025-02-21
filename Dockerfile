FROM node:20.11.1

EXPOSE 9000
WORKDIR /app

COPY . /app

RUN npm install -g gatsby-cli \
    && apt-get update \
    && apt-get install curl -y \
    && curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.32.1/install.sh | bash \
    && export NVM_DIR="$HOME/.nvm" \
    && [ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh" \
    && nvm install 20.11.1 \
    && nvm use 20.11.1 \

RUN yarn

CMD ["npm", "run", "build"]
CMD ["npm", "run", "serve"]
