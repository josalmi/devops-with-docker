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


### Exercise 1.5

```
docker build -t devops-105 105
docker run --rm -p 5000:5000 devops-105
```

### Exercise 1.6

```
docker build -t devops-106 106
docker run --rm -p 8000:8000 -v (pwd)/logs.txt:/app/logs.txt devops-106
```

### Exercise 1.7

See exercises 1.5 and 1.6.


### Exercise 1.8

```
docker run --rm -v (pwd)/108/logs.txt:/usr/app/logs.txt devopsdockeruh/first_volume_exercise
```

### Exercise 1.9

```
docker run --rm -p 8080:80 devopsdockeruh/ports_exercise
```

### Exercise 1.10

[Dockerfile](110/Dockerfile)

### Exercise 1.11

[Dockerfile](111/Dockerfile)

```
docker build -t 111 .
docker run --rm -p 8000:8000 -v (pwd)/logs.txt:/app/logs.txt 111
```

### Exercise 1.12

[Frontend Dockerfile](110/Dockerfile)
[Backend Dockerfile](111/Dockerfile)

### Exercise 1.13

[Dockerfile](113/Dockerfile)

### Exercise 1.14

Had to add `SECRET_KEY_BASE` environment variable to get the server running. Precompiled assets are not loaded but I think this is due to configuration / having to setup nginx to serve the assets. 

[Dockerfile](114/Dockerfile)

### Exercise 1.15

[Dockerfile](https://github.com/josalmi/hello-world-nodejs-docker-kubernetes/blob/master/Dockerfile)
[Docker Hub](https://hub.docker.com/r/jsal/hello-world-nodejs)

### Exercise 1.16

[Heroku](https://dockerdevops.herokuapp.com/)

## Part 2

### Exercise 2.01

[docker-compose.yml](201/docker-compose.yml)

### Exercise 2.02

[docker-compose.yml](202/docker-compose.yml)

### Exercise 2.03

[docker-compose.yml](203/docker-compose.yml)

### Exercise 2.04

```
docker-compose up
docker-compose scale compute=3
```

### Exercise 2.05

[docker-compose.yml](205/docker-compose.yml)

### Exercise 2.06

[docker-compose.yml](206/docker-compose.yml)

### Exercise 2.07

[docker-compose.yml](207/docker-compose.yml)

### Exercise 2.08

[docker-compose.yml](208/docker-compose.yml)
[nginx.conf](208/nginx.conf)
[Dockerfile frontend](110/Dockerfile)
[Dockerfile backend](111/Dockerfile)
