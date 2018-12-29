FROM ubuntu
RUN apt-get update && apt-get install -y curl
WORKDIR /app
COPY curler.sh ./
CMD ["/app/curler.sh"]
