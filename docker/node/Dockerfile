FROM node:19-alpine
#FROM node:16-alpine

#EXPOSE 3000

RUN apk update 
RUN apk --no-cache add curl busybox-suid
# COPY crontab /etc/crontabs/node
# RUN chmod 0600 /etc/crontabs/node
# RUN chown node:node /etc/crontabs/node

RUN mkdir /app/
WORKDIR /app/


ENV PATH=$PATH:/app/node_modules/.bin
ENV NODE_ENV=development

# For Run batch
# RUN touch cron.log
# RUN npm install run-func

# COPY start.sh /
# RUN chmod +x /start.sh

# USER node
