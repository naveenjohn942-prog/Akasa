# Dockerfile for user
FROM openjdk:17-jdk-alpine
COPY target/userservice-0.0.1-SNAPSHOT.jar /user/app/userservice-0.0.1-SNAPSHOT.jar
WORKDIR /user/app
ENTRYPOINT ["java", "-jar", "/userservice-0.0.1-SNAPSHOT.jar"]
EXPOSE 8080
