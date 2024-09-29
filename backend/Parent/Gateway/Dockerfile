# Dockerfile for gateway
FROM openjdk:17-jdk-alpine
COPY target/gateway-0.0.1-SNAPSHOT.jar /user/app/gateway-0.0.1-SNAPSHOT.jar
WORKDIR /user/app
ENTRYPOINT ["java", "-jar", "/gateway-0.0.1-SNAPSHOT.jar"]
EXPOSE 9000
