# Étape 1 : Construction de l'application avec Gradle
FROM gradle:8.5-jdk21 AS builder
WORKDIR /app
COPY . .
RUN gradle clean bootJar

# Étape 2 : Exécution dans une image OpenJDK légère
FROM openjdk:21-jdk-slim
WORKDIR /app

# Copier le JAR généré dans l'image Docker
COPY --from=builder /app/build/libs/user-service-0.0.1-SNAPSHOT.jar user-service.jar

# Exposer le port utilisé par l'application
EXPOSE 8082

# Définir les variables d'environnement pour PostgreSQL
ENV SPRING_DATASOURCE_URL=jdbc:postgresql://postgres-db:5432/carrental
ENV SPRING_DATASOURCE_USERNAME=admin
ENV SPRING_DATASOURCE_PASSWORD=admin

# Démarrer l'application
ENTRYPOINT ["java", "-jar", "user-service.jar"]


