FROM nginx

COPY ./config/default.conf /etc/nginx/conf.d

COPY ./dist/ /usr/share/nginx/html

EXPOSE 80