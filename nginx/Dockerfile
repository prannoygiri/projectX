FROM nginx:alpine

RUN mkdir -p /etc/nginx/templates

ADD default.conf.template /etc/nginx/templates

ADD conf /etc/nginx/conf.d

#RUN ls -sf /dev/stdout /var/log/nginx/access.log && ln -sf /dev/stderr /var/log/nginx/error.log

CMD ["nginx","-g","daemon off;"]
