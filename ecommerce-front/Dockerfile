FROM node:alpine

# Add the following line 
ENV CI=true

WORKDIR /app
COPY package.json ./
RUN yarn install
COPY ./ ./

CMD ["yarn", "start"]