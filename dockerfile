FROM nginx:alpine
EXPOSE 80
EXPOSE 443
COPY nginx/default.conf /etc/nginx/conf.d/default.conf
COPY images /usr/share/nginx/html/
COPY assets /usr/share/nginx/html/
COPY Resume.pdf /usr/share/nginx/html/Resume.pdf
COPY index.html /usr/share/nginx/html/index.html