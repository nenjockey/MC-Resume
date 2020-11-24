FROM node:14.15.1
LABEL version="final"
LABEL maintaner="Maher Chaabani"
LABEL release-date="2020-11-24"

WORKDIR /usr/src/app/


RUN npm update && npm upgrade && \
    npm install -g gatsby-cli
RUN git clone https://github.com/nenjockey/MC-Resume.git . && \
    npm install

EXPOSE 8000

ENTRYPOINT ["gatsby", "develop", "-H", "0.0.0.0"]

#docker build -t myfinalresume .
#docker history myfinalresume
#docker run -d -p 8000:8000 myfinalresume
