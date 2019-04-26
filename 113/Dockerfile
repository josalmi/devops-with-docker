FROM openjdk:8-alpine
WORKDIR /app
COPY . .
RUN ./mvnw package
CMD ["java", "-jar", "./target/docker-example-1.1.3.jar"]

EXPOSE 8080
