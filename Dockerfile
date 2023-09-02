FROM node:18

WORKDIR /usr/app

COPY . /usr/app

ADD https://raw.githubusercontent.com/vishnubob/wait-for-it/master/wait-for-it.sh /opt/bin/
RUN chmod +x /opt/bin/wait-for-it.sh

RUN yarn
EXPOSE 8000

CMD [ "/opt/bin/wait-for-it.sh", "--timeout=60", "db:5432", "--", "yarn", "dev" ]