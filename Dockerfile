FROM node:latest

WORKDIR /usr/src/app/



RUN npm install -g gatsby-cli 
RUN git clone https://github.com/nenjockey/MC-Resume.git .
RUN npm install

EXPOSE 8000

CMD ["gatsby", "develop", "-H", "0.0.0.0"]

#docker build -t maher-resume .
#docker history maher-resume
#docker run -d -p 8000:8000 maher-resume
