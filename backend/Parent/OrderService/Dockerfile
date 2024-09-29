# Dockerfile for order
FROM openjdk:17-jdk-alpine
COPY target/orderservice-0.0.1-SNAPSHOT.jar /user/app/orderservice-0.0.1-SNAPSHOT.jar
WORKDIR /user/app
ENTRYPOINT ["java", "-jar", "/orderservice-0.0.1-SNAPSHOT.jar"]
EXPOSE 8086
