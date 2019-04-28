FROM python:3-alpine
RUN apk add --no-cache --update build-base ffmpeg libxml2-dev libxslt-dev
RUN pip3 install --no-cache-dir --user --upgrade yle-dl
WORKDIR /downloads
ENTRYPOINT ["/root/.local/bin/yle-dl"]
