# devops-with-docker


## Part 1

### Exercise 1.1

```
$ docker ps -a
CONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS                     PORTS               NAMES
bb27ea2a4484        nginx:alpine        "nginx -g 'daemon of…"   15 seconds ago      Exited (0) 5 seconds ago                       awesome_greider
a31a11ad3e12        nginx:alpine        "nginx -g 'daemon of…"   16 seconds ago      Exited (0) 9 seconds ago                       lucid_proskuriakova
1b10852465f7        nginx:alpine        "nginx -g 'daemon of…"   19 seconds ago      Up 18 seconds              80/tcp              compassionate_knuth
```

### Exercise 1.2

```
$ docker ps -a
CONTAINER ID        IMAGE               COMMAND             CREATED          STATUS              PORTS               NAMES
$ docker images
REPOSITORY          TAG                 IMAGE ID            CREATED          SIZE
```

### Exercise 1.3

```
$ docker run --rm -it ubuntu

# apt-get update && apt-get install -y curl
# sh -c 'read website; sleep 3; curl http://$website;'
```

### Exercise 1.4

curler.sh:
```sh
#!/bin/sh
read website; sleep 3; curl http://$website;
```

Dockerfile:
```
FROM ubuntu
RUN apt-get update && apt-get install -y curl
WORKDIR /app
COPY curler.sh ./
CMD ["/app/curler.sh"]
```

How to run:
```
docker build -t curler 104
docker run --rm -it curler
```
