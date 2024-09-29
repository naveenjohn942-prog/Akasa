# Dockerfile for cart
FROM openjdk:17-jdk-alpine
COPY target/cartservice-0.0.1-SNAPSHOT.jar /user/app/cartservice-0.0.1-SNAPSHOT.jar
WORKDIR /user/app
ENTRYPOINT ["java", "-jar", "/cartservice-0.0.1-SNAPSHOT.jar.jar"]
EXPOSE 8084
