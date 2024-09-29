# Dockerfile for eureka
FROM openjdk:17-jdk-alpine
COPY target/serviceregistry-0.0.1-SNAPSHOT.jar /user/app/serviceregistry-0.0.1-SNAPSHOT.jar
WORKDIR /user/app
ENTRYPOINT ["java", "-jar", "/serviceregistry-0.0.1-SNAPSHOT.jar"]
EXPOSE 8761
